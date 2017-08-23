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

Config.top_level = 1;
Config.red_level = 2;
Config.bold_level = 3;
Config.top_day = ['1天', '3天', '10天', '20天', '30天'];
Config.top_time = ['1', '3', '10', '20', '30'];
Config.top_money = ['18','48','148','268','348'];
Config.red_money = 6;
Config.bold_money = 3;
export {Config};