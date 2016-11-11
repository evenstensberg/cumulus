"use strict";

const EventEmitter = require('events');
const Crawler = require('simplecrawler');
const log = require('gitc-common/log');

module.exports = class HttpTileCrawler extends EventEmitter {
  constructor(product, url, pattern) {
    super();
    this.product = product;
    this.url = url;
    this.pattern = pattern;
  }

  crawl() {
    const crawler = this._initCrawler();
    this._discoveredFiles = [];
    crawler.discoverResources = (buffer, queueItem) => this._discoverResources(buffer, queueItem);
    crawler.start();
  }

  _forward(event, logLevel = 'debug') {
    this._crawler.on(event, (queueItem, opts) => {
      log[logLevel](event, queueItem.path);
      this.emit(event, queueItem, opts);
    });
  }

  _initCrawler() {
    const crawler = this._crawler = new Crawler(this.url);
    crawler.interval = 0;
    crawler.maxConcurrency = 5;
    crawler.respectRobotsTxt = false;
    crawler.userAgent = 'Cumulus-GIBS';
    this._forward('fetchstart');
    this._forward('fetchcomplete');
    this._forward('fetcherror', 'error');

    crawler.on('complete', () => {
      this.emit('complete', this._discoveredFiles);
      this._crawler = null;
      this._discoveredFiles = null;
    });
    this._addFetchConditions(crawler);
    return crawler;
  }

  _parseUrls(/* buffer, queueItem */) {
    throw new Error('HttpTileCrawler#_parseUrls is abstract');
  }

  _addFetchConditions(/* crawler */) {
  }

  _bail(reason, queueItem) {
    log.error(`[ERROR] Could not process ${queueItem.url}: ${reason}`);
    return [];
  }

  _processDiscoveries(discoveredFiles) {
    const groupings = {};
    const result = [];
    for (const file of discoveredFiles) {
      groupings[file.parent] = groupings[file.parent] || [];
      groupings[file.parent].push({
        product: this.product,
        url: this.url + file.path,
        parent: file.parent,
        version: file.version,
        filename: file.path.split('/').pop()
      });
    }

    for (const parent of Object.keys(groupings)) {
      result.push({
        product: this.product,
        parent: parent,
        files: groupings[parent]
      });
    }
    return result;
  }

  _discoverResources(buffer, queueItem) {
    const result = [];
    for (const item of this._parseUrls(buffer, queueItem)) {
      const url = this._crawler.cleanExpandResources([item.path], queueItem)[0];
      const fields = this.pattern.match(url);
      if (item.isDirectory || fields) {
        result.push(url);
      }
      if (fields) {
        this._discoveredFiles.push({ url: url, version: item.version, fields: fields });
      }
    }
    return result;
  }
};
