class Book {
    constructor(){
        this.author = "",
        this.title = ""
    }

    async searchByTitle(bookName){
        const bookResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${bookName}`,{
            method: "GET"
        });
        const book = await bookResponse.json();
        
        

        return book;
    }
    async searchByAuthor(bookName){
        const bookResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${bookName}`,{
            method: "GET"
        });
        const book = await bookResponse.json();
        
        

        return book;
    }

    
}

