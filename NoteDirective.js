/**
 * Created by Samsung on 06.11.2016.
 */
export default class NoteDirective{
    constructor(){
        this.scope = {
            value: '=',
            delete: '&',
            index: '='
        };
        this.restrict = 'E';
        this.templateUrl =  'note-directive.html';
    }

    controller(){
        this.onClick = function () {
            this.deleteNote();
        };
    }
}