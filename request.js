const Bluebird = require('bluebird');
const urlModule = require('url');
const fetch = require('node-fetch');
fetch.Promise = Bluebird;


const URL = urlModule.URL;
const URLSearchParams = urlModule.URLSearchParams;

module.exports = (url, method, params) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      return reject(`url is ${url}`);
    }

    if (!method) {
      method == "GET";
    } else {
      method = method.toUpperCase();
    }

    if (method == "GET") {
      let m_url = new URL(url);

      if (params) {
        m_url.search = new URLSearchParams(params);
      }

      fetch(m_url.toString()).then((response) => resolve(response));
    } else {
      fetch(url, { method, body: params }).then((response) => resolve(response));
    }
  })
}