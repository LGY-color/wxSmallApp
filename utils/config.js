class Config{
  constructor(){

  }
}
// region
// 华东	ECN	https://up.qbox.me
// 华北	NCN	https://up-z1.qbox.me
// 华南	SCN	https://up-z2.qbox.me
// 北美	NA	https://up-na0.qbox.me
Config.restUrl = 'http://p.cn/api/v1/';
Config.region = 'ECN';
Config.uptokenURL = 'base/getQiniuToken'
Config.domain = 'http://oub222afv.bkt.clouddn.com';
export {Config};