// BEFORE

function changeAllTheClasses() {
    var getAllTheThings = document.getElementsByTagName('*');
    for (var i = 0; i < getAllTheThings.length; i++) {
        getAllTheThings[i].setAttribute('class', 'final-final');
    }
    var audioTag = document.getElementsByTagName('audio')[0];
    audioTag.setAttribute('class', 'melodious');
}



userData.posts.forEach(function (whatever) {
    var postData = new Post(whatever.content, whatever.socMedia, whatever.time);
    activeUser.posts.push(postData);
});



for ( var i = 0; i < summerWeatherConditions.length; i ++ ) {
    if ( uniqueWeatherConditions.indexOf( summerWeatherConditions[i] ) < 0 ) {
        uniqueWeatherConditions.push( summerWeatherConditions );
    }
}



// AFTER ~ USING ES2015