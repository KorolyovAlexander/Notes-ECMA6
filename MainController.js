/**
 * Created by Samsung on 06.11.2016.
 */
export default class MainController{
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