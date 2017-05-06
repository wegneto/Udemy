angular.module('myApp').factory('FilmFactory', FilmFactory);

function FilmFactory($http) {
    return {
        getAllFilms: getAllFilms,
        getFilmById: getFilmById
    };

    function getAllFilms() {
        return $http.get('http://swapi-tpiros.rhcloud.com/films').then(complete).catch(failed);
    }

    function getFilmById(id) {
        return $http.get('http://swapi-tpiros.rhcloud.com/films/' + id).then(complete).catch(failed);
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.statusText;
    }

}