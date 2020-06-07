var app = angular.module('DP4',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state({
        name: 'home',
        url: '/',
        views: {
            'mainbody': {
                templateUrl: 'home.html'
            }
        }
    })
    .state({
        name: 'friends',
        url: '/friends',
        views: {
            'mainbody': {
                template: '<h3>friends list</h3>'
            }
        }
    })
    .state({
        name: 'meetings',
        url: '/meetings',
        views: {
            'mainbody': {
                template: '<h3>meetings</h3>'
            }
        }
    })
    .state({
        name: 'messages',
        url: '/messages',
        views: {
            'mainbody': {
                templateUrl: 'message.html'
            }
        }
    })
    .state({
        name: 'mypage',
        url: '/mypage',
        views: {
            'mainbody': {
                template: '<h3>my profile</h3>'
            }
        }
    })
    .state({
        name: 'notification',
        url: '/',
                views: {
            'mainbody': {
                template: '<h3>notifications placed in dropdown form</h3>'
            }
        }
    })
    .state({
        name: 'setting',
        url: '/setting',
        views: {
            'mainbody': {
                template: '<h3>settings</h3>'
            }
        }
    })
    .state({
        name: 'help',
        url: '/',
        views: {
            'mainbody': {
                template: '<h3>help popup on homepage</h3>'
            }
        }
    })

});