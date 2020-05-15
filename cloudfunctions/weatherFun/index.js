// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise') //第一步：实例化request-promise对象
cloud.init()

exports.main=async(event,context)=>{
  let url ='https://www.tianqiapi.com/free/day?appid=53584964&appsecret=7ZAczxgL&%20cityid=101280701'
  // let url ='https://www.tianqiapi.com/free/day?appid=53584964&appsecret=7ZAczxgL';
  // let cityName=event.cityName;
  // url=url+'&city='+cityName;
  return rp(url).then((res)=>{
    return res
  }).catch((err)=>{
    console.log(err)
  })
}
