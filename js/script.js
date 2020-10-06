let myLibrary = [];
let n = 0;


function Book(form) {
	this.title = form.title.value;
	this.author = form.author.value;
	this.pages = form.pages.value;
	this.read = form.read.value;
}


function addBookToLibrary(form) {
	event.preventDefault();
	let book = new Book(form);
	myLibrary.push(book);
	dispaly()
	form.reset();

}

function dispaly(){
	const Lib = document.getElementById("lib-container");
	n++;
	for( let i = n-1; i < myLibrary.length; i++ ) {
		let newbook = document.createElement('div');
		let titlediv = document.createElement('div');
		let authordiv = document.createElement('div');
		let pagesdiv = document.createElement('div');
		let readdiv = document.createElement('div');

		titlediv.textContent = myLibrary[i].title;
		authordiv.textContent = myLibrary[i].author;
		pagesdiv.textContent = myLibrary[i].pages;
		readdiv.textContent = myLibrary[i].read;

		Lib.appendChild(newbook);
		newbook.appendChild(titlediv);
		newbook.appendChild(authordiv);
		newbook.appendChild(pagesdiv);
		newbook.appendChild(readdiv);

		
	}
}