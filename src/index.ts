import { Http2ServerResponse } from 'http2';


export function http2jsonSend( res: Http2ServerResponse, data: any, statusCode = 200 ): Promise<void> {
  return new Promise( ( resolve, reject ) => {

    const str = JSON.stringify( data );
    const payload = Buffer.from( str );

    res.on( 'error', reject );
    res.statusCode = statusCode;

    res.setHeader( 'Content-Type', 'application/json' );
    res.setHeader( 'Content-Length', payload.length );

    res.end( payload, resolve );

  } );
}
