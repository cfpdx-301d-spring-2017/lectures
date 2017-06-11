'use strict';
var app = app || {};

page('/', app.homeController.init);
page('/about', app.aboutController.init);

page();
