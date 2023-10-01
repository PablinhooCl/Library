
// FORM CREATOR
const buttonclicked= document.getElementById('addButton');
const formAppearing= document.getElementById("bookInputer");
const overlayActivator= document.getElementById('overlay')
    buttonclicked.addEventListener('click', function(){
        formAppearing.classList.add('actived');
        overlayActivator.classList.add('actived');
    });
// FORM STORED ON OFF-CLICK
const closeAddBookModal = () => {
    formAppearing.classList.remove('actived')
    overlayActivator.classList.remove('actived')
};
const handleKeyboardInput = (e) => {
    if (e.key === 'Escape') closeAddBookModal()
  };
  overlayActivator.onclick = closeAddBookModal;
  window.onkeydown = handleKeyboardInput
//all funtions

const theLibrary= [];

function Book(tittle, author, cover, pages, read){
    this.tittle= tittle;
    this.author= author;
    this.cover= cover;
    this.pages= pages;
    this.read= read;
}





const formElement= document.getElementById("newBook");
formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    const tittle= document.getElementById('tittle').value;
    const author= document.getElementById('author').value;
    const cover= document.getElementById('cover').value;
    const pages= document.getElementById('pages').value;
    const read= document.getElementById('read').value;
    const newBook= new Book(tittle, author, cover, pages, read);
        theLibrary.push(newBook);
    formAppearing.classList.remove('actived');
    addingNewBook(tittle, author, cover, pages, read);
    closeAddBookModal();
    formElement.reset();
});
function addingNewBook(tittle, author, cover, pages, read){
    
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.id= (theLibrary.length - 1);
        

        const titleElement = document.createElement("h3");
        titleElement.classList.add("bookTittle");
        titleElement.textContent = tittle;// Reemplaza con la ruta correcta de la imagen


        const imgElement = document.createElement("img");
        imgElement.classList.add("coverBook");
        imgElement.src = cover; // Reemplaza con la ruta correcta de la imagen
        imgElement.alt = "Portada del libro";


        const authorElement = document.createElement("h4");
        authorElement.classList.add("by");
        authorElement.textContent = author;// Reemplaza con la ruta correcta de la imagen


        const pagesElement = document.createElement("h4");
        pagesElement.classList.add("pages");
        pagesElement.textContent = pages + ' pages';// Reemplaza con la ruta correcta de la imagen


        const buttonToggleDiv = document.createElement("div");
        buttonToggleDiv.classList.add("buttonToggle");
        buttonToggleDiv.textContent = "Read?";

        const labelElement = document.createElement("label");
        labelElement.classList.add("switch");


        const inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        
        inputElement.classList.add('checkbox')
        labelElement.appendChild(inputElement);
        inputElement.id="checkbox"+ cardDiv.id;
        inputElement.onclick = function (){
            actualizarRead(cardDiv.id);
            actualizadorDeLibrosCompletados();
            
        };
        if (read === 'on') {
            inputElement.checked = true;
        }else{};

        const spanElement = document.createElement("span");
        spanElement.classList.add("slider");
        spanElement.classList.add("round");
        labelElement.appendChild(spanElement);
        

        const removeButton= document.createElement('button');
        removeButton.onclick = function () {
            removeBook(cardDiv.id);
            actualizadorDeLibros();
          };
        removeButton.classList.add("removeBook");
        removeButton.textContent = "Remove";


        cardDiv.appendChild(titleElement);
        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(authorElement);
        cardDiv.appendChild(pagesElement);
        cardDiv.appendChild(buttonToggleDiv);
        cardDiv.appendChild(removeButton);
        buttonToggleDiv.appendChild(labelElement);


        const mainContent = document.querySelector(".mainContent");

        
        mainContent.appendChild(cardDiv);
        actualizadorDeLibros();
        actualizadorDeLibrosCompletados();
    };


    function removeBook(x){
        const bookToDelete= document.getElementById(x);
        delete theLibrary[x];
        console.log(bookToDelete)
        bookToDelete.remove();

    }

    function actualizarRead(x){
        const idGetter= document.getElementById('checkbox'+x)
        const readGetter= theLibrary[x];
        console.log(readGetter== true)
        if(idGetter.checked== true){
            theLibrary[x].read= 'on';
            console.log(theLibrary[x].read);
        }else{
            theLibrary[x].read= '';
            console.log(theLibrary[x].read)
        }
    };
    
    function actualizadorDeLibros(){
        const bookCounter= theLibrary.length ;
    const contadorDeLibros= document.getElementById('bookCounter');
    contadorDeLibros.innerHTML= 'Books: '+bookCounter;
    };

    function actualizadorDeLibrosCompletados(){
        let contadorLibrosCompletos= 0;
       for(i= 0; i< theLibrary.length; i++){
        if(theLibrary[i].read==='on'){
            contadorLibrosCompletos+= 1;
            console.log(contadorLibrosCompletos);
        }else{};
       };
       document.getElementById('completedBookCounter').innerHTML= "Completed books: "+ contadorLibrosCompletos;
    };