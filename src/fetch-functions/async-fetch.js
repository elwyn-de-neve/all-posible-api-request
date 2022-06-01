const startTime = performance.now()

async function fetchData() {
    let response = await fetch( "https://restcountries.com/v3.1/all" );
    return await response.json();
}

fetchData().then( data => {
    // Console log message
    console.log( "%cFetch async:", "color: pink" );
    console.log( data );
    console.log(`%cFetch async took ${ Math.round((endTime - startTime) * 100 ) / 100 } milliseconds`, "color: pink");
} );

const endTime = performance.now()