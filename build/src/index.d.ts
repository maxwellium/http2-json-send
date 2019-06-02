/// <reference types="node" />
import { Http2ServerResponse } from 'http2';
export declare function http2jsonSend(res: Http2ServerResponse, data: any, statusCode?: number): Promise<void>;
