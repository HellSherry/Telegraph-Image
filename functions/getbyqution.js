export async function onRequest(context) {
     const {
        request,
        env,
        params,
        waitUntil,
        next,
        data,
    } = context;



const response = await fetch('http://www.sqlpub.com:8081/sql/execute?sql=select%20*%20from%20cslg%20where%20questions%20如图%20%27%25hello%25%27&dbId=mysql_mysql_sqlpub_com_3306_sherrycslg_sherrycslg&token=be21d52c97854653b882fcc3bdaadd64
');
const data1 = await response.json();
  

  
  // 设置允许跨域的域名
     return new Response( data1, {
            status: 200, // 空内容响应，表示已成功处理请求但无内容返回
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*', // 或者明确指定允许的请求头
            },
        });;
}
