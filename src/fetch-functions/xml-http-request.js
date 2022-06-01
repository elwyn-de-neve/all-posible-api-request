const startTime = performance.now()

let request = new XMLHttpRequest();
request.open( "GET", "https://restcountries.com/v3.1/all" );
request.send();
request.onload = () => {
    // Console log message
    console.log('%cXMLHttpRequest:', "color: blue");
    if ( request.status === 200 ) {
        console.log( JSON.parse( request.response ) );
    }
    else {
        console.log( `error: ${ request.status } ${ request.responseText }` );
    }
    console.log(`%cXMLHttpRequest took ${ Math.round((endTime - startTime) * 100 ) / 100 } milliseconds` , "color: blue");
};

const endTime = performance.now()