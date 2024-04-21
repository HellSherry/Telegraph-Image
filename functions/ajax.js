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

     return new Response(JSON.stringify(request), {
            status: 200, // 空内容响应，表示已成功处理请求但无内容返回
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*', // 或者明确指定允许的请求头
            },
        });;
}
