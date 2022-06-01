const startTime = performance.now();

$( document ).ready( function () {
    $.ajax( {
        url: "https://restcountries.com/v3.1/all",
        type: "GET",
        success: function ( response ) {
            // Console log message
            console.log( "%cAjax jquery:", "color: red" );
            console.log( response );
            console.log( `%cAjax jquery took ${ Math.round( ( endTime - startTime ) * 100 ) / 100 } milliseconds`, "color: red" );
        },
        error: function ( error ) {
            console.error( error );
        }
    } );
} );

const endTime = performance.now();