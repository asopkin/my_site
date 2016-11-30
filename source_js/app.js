var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/firstview', {
    templateUrl: 'partials/firstview.html',
    controller: 'FirstController'
  }).
  when('/secondview', {
    templateUrl: 'partials/secondview.html',
    controller: 'SecondController'
  }).
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  }).
  when('/llamalist', {
    templateUrl: 'partials/llamalist.html',
    controller: 'LlamaListController'
  }).
  when('/passwordcontent:password', {
    templateUrl: 'partials/protected.html',
    controller: 'passwordContentController'
  }).
  when('/projects', {
    templateUrl: 'partials/projects.html',
    controller: 'ProjectsController'
  }).
  when('/gallery', {
    templateUrl: 'partials/gallery.html',
    controller: 'AboutController'
  }).
  when('/mymusic', {
    templateUrl: 'partials/mymusic.html',
    controller: 'MyMusicController'
  }).
  when('/work', {
    templateUrl: 'partials/work.html',
    controller: 'MyMusicController'
  }).
  when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'AboutController'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutController'
  }).
  otherwise({
    redirectTo: '/about'
  });
}]);
