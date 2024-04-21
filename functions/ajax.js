export async function onRequest(context) {
    const {
        request,
        env,
        params,
        waitUntil,
        next,
        data,
    } = context;

    // 设置允许跨域的域名
    request.headers.set('Access-Control-Allow-Origin', '*');
    // 允许的 HTTP 方法
    request.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // 允许的请求头
    request.headers.set('Access-Control-Allow-Headers', '*'); // 或者明确指定允许的请求头

    const url = new URL(request.url);

    // 检查是否为预检请求（OPTIONS 方法）
    if (request.method === 'OPTIONS') {
        // 对于预检请求，直接返回允许的 CORS 响应
        return new Response(null, {
            status: 204, // 空内容响应，表示已成功处理请求但无内容返回
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Max-Age': '86400', // 缓存预检结果，单位秒
                'Access-Control-Allow-Headers': '*', // 或者明确指定允许的请求头
            },
        });
    }

    // 非预检请求，则进行转发
    const response = await fetch(params.url, {
        method: request.method,
        headers: request.headers,
        body: request.body,
      params: this.params
    });
  // 设置允许跨域的域名
     return new Response(response.body, {
            status: 200, // 空内容响应，表示已成功处理请求但无内容返回
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*', // 或者明确指定允许的请求头
            },
        });;
}
