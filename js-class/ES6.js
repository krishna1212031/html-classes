//use getters and setters to control access to an object
class Book{
    //constructor 
    constructor (author){
        this._author = author;
    }
    //getter
    get writer() {
        return this._author=author;
    }
    //setter
    set writer(updateAuthor){
        this._author=updateAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer="My life";
console.log(novel.writer);