function secretPassword () {
    // scope
    let hidden = 'standing desk';
    hidden === 'standing desk'; // true

    // closure
    function spillIt () {
        console.log( `don't tell anyone but the secret password is ${hidden}!` );
    }

    return spillIt();
}

secretPassword(); // 'don't tell anyone but the secret password is standing desk!';
hidden === 'standing desk'; // error: hidden is not defined!