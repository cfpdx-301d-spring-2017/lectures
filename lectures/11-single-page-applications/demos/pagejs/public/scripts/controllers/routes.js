'use strict';
var app = app || {};

page('/', app.homeController.init);
page('/about', app.aboutController.init);
// TODO add a route to /contact and pass through the appropriate callback function


page();
