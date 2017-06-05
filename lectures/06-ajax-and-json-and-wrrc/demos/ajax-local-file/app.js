'use strict';

// use AJAX to load part of another HTML page
$('#result').load( './toppings.html #batter' );


// use AJAX to load data from a JSON file
// $.getJSON('./data.json')
//   .then(
//     function(data) {
      
//       data.forEach(function(ele) {
//         ele.topping.forEach(function(topping) {
//           $('#result').append('<h3>' + topping.type +'</h3>')
//         })
//       });

//     },
//     function(err){
//       console.error(err);
//     }
//   );


// store our data in localStorage

// check if our data needs to be fetched
