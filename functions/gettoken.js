export async function onRequest(context) {
     const {
        request,
        env,
        params,
        waitUntil,
        next,
        data,
    } = context;



const response = await fetch('https://iot.diandeng.tech/api/v1/user/login?username=19174143998&password=efefe890e21c0c4dcde96e4addcf20cbe577759b078154e6ecf204fd45e54afc');
const data = await response.json();
  
  const response1 = await fetch(`https://iot.diandeng.tech/api/v1/user/overview?uuid=${data.detail.uuid}&token=${data.detail.token}`);
const data1 = await response1.json();
    // 非预检请求，则进行转发

  
  // 设置允许跨域的域名
     return new Response( data1.detail.brokers[0].iotToken, {
            status: 200, // 空内容响应，表示已成功处理请求但无内容返回
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*', // 或者明确指定允许的请求头
            },
        });;
}
