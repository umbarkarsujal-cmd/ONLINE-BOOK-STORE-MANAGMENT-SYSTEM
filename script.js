function searchBooks() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();

    let pythonBook = document.getElementById("pythonBook");
    let webBook = document.getElementById("webBook");

    pythonBook.style.display = "none";
    webBook.style.display = "none";

    if (searchText === "") {
        pythonBook.style.display = "block";
        webBook.style.display = "block";
    } 
    else if (searchText.includes("python")) {
        pythonBook.style.display = "block";
    } 
    else if (searchText.includes("web")) {
        webBook.style.display = "block";
    } 
    else {
        alert("Book not found!");
    }
}
function buyBook(bookName) {
    alert(bookName + " added to your cart!");
}