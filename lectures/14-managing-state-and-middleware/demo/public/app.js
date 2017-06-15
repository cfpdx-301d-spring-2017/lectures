'use strict';

page('/', init);
page('/about', init);
page('/contact', init, contactSomeone);
page('/contact/:name', init, contactSomeone);
page('/questions/', init, askSomething);

page();





function init ( ctx, next ) {
    $( 'form' ).hide();
    next( ctx );
}

function askSomething ( ctx ) {
    const q = ctx.querystring.split('=')[1];
    $( 'main h1' ).text( ctx.querystring ? `${q}???` : 'What was your question??' );
}

function contactSomeone ( ctx ) {
    const name = ctx.params.name ? ctx.params.name : 'Anonymouse'
    $( 'main h1' ).text( `Got a question for ${name}?` );
    $( 'form' ).show();

    // use the back button to see previous question
    console.log( 'on load', ctx.state );
    if ( ctx.state.question ) {
        $( 'main h1' ).text( `your last question for ${name} was ${ctx.state.question}` );
    }

    $( 'form' ).on( 'submit', ( event ) => {
        event.preventDefault();

        const q = $( '#question' ).val();
        ctx.state.question = q;
        ctx.save();
        // $( '#question' ).val(''); // seems to run submit twice

        page(`/questions?question=${q}`);
    });
}