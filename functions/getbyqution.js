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
  const res =   fetch("http://www.sqlpub.com:8081/sql/execute?sql=select%20*%20from%20cslg%20where%20questions%20like%20%27%25"+request.body+"%25%27&dbId=mysql_mysql_sqlpub_com_3306_sherrycslg_sherrycslg&token=be21d52c97854653b882fcc3bdaadd64");
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
