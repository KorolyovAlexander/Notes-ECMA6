/**
 * Created by Samsung on 06.11.2016.
 */
import MainController from 'MainController';
import NoteDirective from 'NoteDirective';

var app = angular.module('App', [])
    .controller('MainController', MainController)
    .directive('note', NoteDirective);

angular.element(document).ready(function(){
    angular.bootstrap(angular.element(document), ['App']);
});