var pets = [];

function Pet ( petData ) {
    this.name = petData.name;
    this.type = petData.type;
    this.description = petData.description;
}

Pet.prototype.toHtml = function () {
    var $petInfo = $( 'article.template' ).clone().removeClass( 'template' );

    $petInfo.find( 'h2' ).text( 'My name is ' + this.name );
    $petInfo.find( 'h3' ).text( 'Don\'t you want to adopt a ' + this.type + '!!?!' );
    $petInfo.find( 'p' ).text( this.description );

    return $petInfo;
}

petObjects.forEach( pet => {
    pets.push( new Pet( pet ) );
});

pets.forEach( pet => {
    $( '#pets' ).append( pet.toHtml() );
});