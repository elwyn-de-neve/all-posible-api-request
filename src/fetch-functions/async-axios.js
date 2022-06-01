import axios from "axios";

const startTime = performance.now()

async function fetchData() {
    try {
        const response = await axios.get( "https://restcountries.com/v3.1/all" );
        // Console log message
        console.log( "%cAsync axios" , "color: purple");
        console.log( response.data );
        console.log(`%cAsync axios took ${ Math.round((endTime - startTime) * 100 ) / 100 } milliseconds`, "color: purple");
    } catch ( e ) {
        console.error( e );
    }

}

fetchData().then();

const endTime = performance.now()