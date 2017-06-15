'use strict';

page('/', init);
page('/about', init);
page('/contact', init, contactSomeone);
page('/contact/:name', init, contactSomeone);
page('/questions/', init, askSomething);

page('question/:name', contactSomeone, askSomething);

page();


function init ( ctx, next ) {
    $( 'form' ).hide();
    $( 'main h1' ).text('');

    next( ctx );
}

function askSomething ( ctx ) {
    console.log( ctx );
    // const q = ctx.querystring.split('=')[1];
    // $( 'main h1' ).text( ctx.querystring ? `${q}???` : 'What was your question??' );
}

function contactSomeone ( ctx ) {
    const name = ctx.person = ctx.params.name ? ctx.params.name : 'Anonymouse';
    $( 'main h1' ).text( `Got a question for ${name}?` );
    $( 'form' ).show();

    console.log( 'ctx person', ctx.person, name );

    // use the back button to see previous question
    if ( ctx.state.question ) {
        $( 'main h1' ).text( `your last question for ${name} was ${ctx.state.question}` );
    }

    $( 'form' ).on( 'submit', event => {
        event.preventDefault();

        const q = $( '#question' ).val();
        ctx.state.question = q;
        ctx.save();
        // $( '#question' ).val(''); // runs submit twice

        next( ctx );
    });
}