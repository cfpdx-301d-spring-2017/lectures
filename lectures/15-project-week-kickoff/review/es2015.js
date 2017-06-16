// Before
function changeAllTheClasses() {
    var getAllTheThings = document.getElementsByTagName('*');
    for (var i = 0; i < getAllTheThings.length; i++) {
        getAllTheThings[i].setAttribute('class', 'final-final');
    }
    var audioTag = document.getElementsByTagName('audio')[0];
    audioTag.setAttribute('class', 'melodious');
}

// ES2015
function changeAllClasses ()  {
    $( '*' ).addClass( 'final-final' );
    $( 'audio:first' ).addClass( 'melodious' );
}





// Before
userData.posts.forEach(function (whatever) {
    var postData = new Post(whatever.content, whatever.socMedia, whatever.time);
    activeUser.posts.push(postData);
});

// ES2015
activeUser.posts = userData.posts.map( post => new Post( post.content, post.socMedia, post.time ) );






// Before
for ( var i = 0; i < summerWeatherConditions.length; i ++ ) {
    var condition = summerWeatherConditions[i];
    if ( uniqueWeatherConditions.indexOf( condition ) < 0 ) {
        uniqueWeatherConditions.push( condition );
        weatherPhrases.push( 'I love when it\'s ' + condition + '!');
    }
}

// ES2015 
summerWeatherConditions.forEach( condition => {
    if ( !uniqueWeatherConditions.includes( condition ) ) {
        uniqueWeatherConditions.push( condition );
        weatherPhrases.push( `I love when it's ${condition}!` );
    }
});

uniqueWeatherConditions.forEach( condition => {
    weatherPhrases.push( `I love when it's ${condition}!` );
});

uniqueWeatherConditions.concat( summerWeatherConditions.filter( condition => uniqueWeatherConditions.includes( condition ) ) );
let weatherPhrases = uniqueWeatherConditions.map( conditon => `I love when it's ${condition}!`);


let weatherPhrases = uniqueWeatherConditions.concat( summerWeatherConditions.filter( condition => uniqueWeatherConditions.includes( condition ) ) ).map( condition => { return `I love when it's ${condition}!`});