let myLibrary = [];


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
	form.reset();

}