'use strict'

// functions with no params
function foo () {
  console.log('hello world');
}

let fooArrow = () => console.log( 'goodbye world' ); // curly braces aren't need for a one-liner - a return is assumed!

console.log( '---------------- calling foo and fooArrow ------------------------');
foo();
fooArrow();



// functions with 1 param
function bar ( text ) {
  console.log( text );
}

let barArrow = text => console.log( text ); // parens are optional when there's only one param

console.log( '---------------- calling bar and barArrow ------------------------');
bar( 'hi' );
barArrow( 'hello' );



// functions with 2 params
function zap ( text, moreText ) {
  console.log( `I have a lot to say. Things like ${text} and of course ${moreText}.` );
}

let zapArrow = ( text, moreText ) => console.log( `I have a lot to say. Things like ${text} and of course ${moreText}.` );
// the parens are back! because we have > 1 param

console.log( '---------------- calling zap and zapArrow ------------------------');
zap( 'hi', 'hahahah' );
zapArrow( 'hello', 'okay' );



// working with THIS
let monkey = {
    favFood: 'banana',
    hateFood: 'worms',
    eat: function () {
        console.log( `eating some ${this.favFood}` ); // this === monkey object
    },
    eatArrow: () => console.log( `eating some ${this.hateFood}` ) // this === monkey object's parent (aka global)
};

console.log( '---------------- calling monkey.eat and monkey.eatArrow ------------------------');
monkey.eat(); // this === monkey object
monkey.eatArrow(); // this === monkey object's parent (aka global)

console.log( '---------------- set this.hateFood = beans and calling monkey.eatArrow ------------------------');
monkey.eat(); // this === monkey object
this.hateFood = 'beans';
monkey.eatArrow(); // this === monkey object's parent (aka global)
