export async function onRequest(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
   //// const res = await fetch(`https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=5`);
   // const bing_data = await res.json();
  const res =   fetch("http://www.sqlpub.com:8081/sql/execute?sql=select%20*%20from%20cslg%20where%20questions%20like%20%27%25"+request.body+"%25%27&dbId=mysql_mysql_sqlpub_com_3306_sherrycslg_sherrycslg&token=be21d52c97854653b882fcc3bdaadd64", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "_tokensu=be21d52c97854653b882fcc3bdaadd64; loginCacheMysql={\"db\":{\"f621bb7317bf7bc2e306f8c3fce6abfd\":{\"host\":\"d0c1bXlzcWwyuc3FscHViQLmNvbQ==\",\"port\":\"fe21MzMwnhNi1XHUm3uIYjaNg==\",\"name\":\"00d1c2hlcnJyMFD5Y3NsZwQMa4==\",\"userName\":\"4331c2hlzjm7QcT2ncnJ5Y3NsZw=mOXVZV=\",\"password\":\"f641S01maBPDZqSWYyS3BXRmNROvQ==\",\"id\":\"f621bb7317bf7bc2e306f8c3fce6abfd\"}}}",
    "Referer": "http://www.sqlpub.com:8081/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
  const bing_data = await res.json();
  return new Response( bing_data  , {
           status: 200, // 空内容响应，表示已成功处理请求但无内容返回
           headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
               'Access-Control-Allow-Headers': '*', // 或者明确指定允许的请求头
           },
       });
  }
