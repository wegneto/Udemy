angular.module('meanhotel', ['ngRoute']).config(config).run(run);

function config($httpProvider, $routeProvider, $locationProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');

    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/main/main.html',
            access: {
                restricted: false
            }
        })
        .when('/hotels', {
            templateUrl: 'angular-app/hotel-list/hotels.html',
            controller: HotelsController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/hotel/:id', {
            templateUrl: 'angular-app/hotel-display/hotel.html',
            controller: HotelController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/register', {
            templateUrl: 'angular-app/register/register.html',
            controller: RegisterController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/profile', {
            templateUrl: 'angular-app/profile/profile.html',
            controllerAs: 'vm',
            access: {
                restricted: true
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}

