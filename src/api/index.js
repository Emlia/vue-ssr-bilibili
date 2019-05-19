import axios from "axios";

// import cheerio from "cheerio";

// const superagent = require("superagent");
// import request from "request";
const api = {
  get(url, config) {
    return axios.get(url, config);
  },
  post(url, config) {
    return axios.post(url, config);
  },
  getBilibiliIndex() {
    let html = "";
    const url = "http://www.imooc.com/learn/857";
    const bili_url = "http://www.bilibili.com";
    const github = 'https://api.github.com/users/emlia'
    this.get(github)
  }
};

export default api;
