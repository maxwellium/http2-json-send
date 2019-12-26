// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function http2jsonSend(res, data, statusCode = 200) {
    return new Promise((resolve, reject) => {
        const str = JSON.stringify(data);
        const payload = Buffer.from(str);
        res.on('error', reject);
        res.statusCode = statusCode;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Length', payload.length);
        res.end(payload, resolve);
    });
}
//# sourceMappingURL=index.js.map