/**
 * Created by Samsung on 06.11.2016.
 */

class MainController{

    constructor(){
        this.notes = [];
    }

    addNote(text){
        this.notes.unshift(text);
        this.text = '';
    }

    deleteNote(index){
        this.notes.splice(index, 1);
    }
}

class NoteDirective{

    constructor(){
        this.scope = {
            value: '=',
            delete: '&'
        };
        this.restrict = 'E';
        this.templateUrl =  'note-directive.html';
        this.controller = NoteController;
        this.bindToController = true;
        this.controllerAs = 'vm';
    }
}

class NoteController{

    onClick() {
        this.delete();
    };
}

var app = angular.module('App', [])
    .controller('MainController', MainController)
    .directive('note', NoteDirective);

angular.element(document).ready(function(){
    angular.bootstrap(angular.element(document), ['App']);
});