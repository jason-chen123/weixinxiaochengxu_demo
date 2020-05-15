// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')
cloud.init()

// 云函数入口函数
exports.main = (event, context) => {
  let url ='https://www.tianqiapi.com/free/day?appid=53584964&appsecret=7ZAczxgL&city=';
  let cityName=encodeURI(event.name);
  url=url+cityName;
  return rp(url).then((res)=>{
    return res
  }).catch((err)=>{
    console.log(err)
  })
}

