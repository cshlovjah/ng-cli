import * as angular from 'angular';

export default function routes($routeProvider) {
    $routeProvider.when('/<%= component.name %>', { template: "<<%= component.name %>></<%= component.name %>>" });
}
routes.$inject = ['$routeProvider'];