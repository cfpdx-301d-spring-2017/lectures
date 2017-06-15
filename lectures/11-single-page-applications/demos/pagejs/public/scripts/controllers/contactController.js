'use strict';
var app = app || {};

(function(module) {
  const contactController = {};
  // write a function that will update the view and show/hide the appropriate sections

  contactController.init = () => {
    app.contactView.init();
    $( 'main > section' ).hide();
    $( '#contact' ).show();
  }
  
  module.contactController = contactController;
})(app);
