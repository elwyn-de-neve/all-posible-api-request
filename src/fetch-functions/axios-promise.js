import axios from "axios";

const startTime = performance.now();

function fetchData() {
    axios.get( "https://restcountries.com/v3.1/all" )
        .then( response => {
            // Console log message
            console.log( "%cAxios promise:", "color: green" );
            console.log( response.data );
            console.log( `%cAxios promise took ${ Math.round( ( endTime - startTime ) * 100 ) / 100 } milliseconds`, "color: green" );
        } );
}

fetchData();

const endTime = performance.now();