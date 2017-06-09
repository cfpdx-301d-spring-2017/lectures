const app = {};
app.password = 'junglee';

//  The IIFE module pattern creates local scope within the file, and
// hands data back out to a higher level of scope
(function ( module ) {
    let passwordManager = {};

    passwordManager.spill = function () {
        let password = module.password ? module.password : 'monkeys';
        console.log( `don't tell anyone but the secret password is ${password}!` );
    }

    passwordManager.secure = function ( newPW ) {
        module.password = newPW;
    }

    // by assigning our passwordManager as a property to our module (which is really our app object)
    // we give app access to these functions in a secure way
    module.pm = passwordManager;
}( app ));

app.pm.spill(); // is the spill function nested inside our IIFE
app.pm.secure( 'woooo' );
app.pm.spill();