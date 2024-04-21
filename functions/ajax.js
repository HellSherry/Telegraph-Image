export async function onRequest(req, res) {
 
 

     return new Response(    req.query
, {
            status: 200, // 空内容响应，表示已成功处理请求但无内容返回
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': '*', // 或者明确指定允许的请求头
            },
        });;
}
