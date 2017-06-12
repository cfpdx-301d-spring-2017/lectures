var app = app || {};

(function(module) {

    const contactView = {};
    // TODO write a function that will update the h1 and background color

    contactView.init = () => {
        $( 'main' ).removeAttr( 'class' ).addClass( 'contact' );
        $( 'main h1' ).text( 'Contact us!' );
    }

    module.contactView = contactView;
}(app));