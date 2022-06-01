const startTime = performance.now();

fetch( "https://restcountries.com/v3.1/all" )
    .then( response => {
        return response.json();
    } )
    .then( response => {
            // Console log message
            console.log( "%cFetch promise:", "color: orange" );
            console.log( response );
            console.log( `%cFetch promise took ${ Math.round( ( endTime - startTime ) * 100 ) / 100 } milliseconds`, "color: orange" );
        }
    );

const endTime = performance.now();


