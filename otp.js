const otp1=function (otp){ 
    const Nexmo = require('nexmo')
  //var otp = Math.floor((Math.random() * (99999-10000)) + 10000); 
  const nexmo = new Nexmo({
      apiKey: '733d7905',
      apiSecret: 'U6MifJfGYrhfbUHw',
    });
    
    const from = 'Vonage APIs';
    const to = '917338592097';
    const text ='sudheer otp is:'+otp+'';
   nexmo.message.sendSms(from, to, text);    
   return otp;
  } 
  module.exports=otp1;