class UI{
    constructor(){
        this.bookContainer=document.querySelector("#bookContainer");
        this.searchButton=document.querySelector("#searchButton");
    } 

    showBook(book){
        this.bookContainer.insertAdjacentHTML('afterend',`
        <div class="card card-body">
                <div class="row">
                    <div class="col-3">
                        <img src="${book.volumeInfo?.imageLinks?.thumbnail}" />
                    </div>

                    <div class="col-md-9">
                        <h4>Contact</h4>
                            <ul class="list-group">
                            <li class="list-group-item">
                            <p>Yazar:</p> ${book.volumeInfo.authors}</li>
                            <li class="list-group-item"><p>Kitap Adı:</p> ${book.volumeInfo.title}</li>
                            <li class="list-group-item"><p>Açıklama:</p>${book.volumeInfo.description}</li>
                            <li class="list-group-item"><p>Kategori:</p> ${book.volumeInfo.categories}</li>
                            <li class="list-group-item"><p>Yayıncı:</p>${book.volumeInfo.publisher} </li>
                            <li class="list-group-item"><p>Yayımlanma Tarihi:</p> ${book.volumeInfo.publishedDate}</li>
                        </ul>
                    </div>
                </div>
        </div> 
        `);
     };

    showBooks(books){
        for(let book of books){
            this.showBook(book);
        }
    }
    
    clear(){
        this.bookContainer.innerHTML="";
    }
}



