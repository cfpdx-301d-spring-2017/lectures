'use strict';
var app = app || {};

page('/', app.homeController.init); // attaching route handlers
page('/about', app.aboutController.init);
page('/contact', app.contactController.init);

// TODO add a route to /contact and pass through the appropriate callback function

page(); // executes on page load and determines what route we're on
