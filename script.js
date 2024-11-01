function submitBook() {
    let title = document.getElementById('title').value; 
    let author = document.getElementById('author').value;
    let pageNo = document.getElementById('pages').value;
    let isRead = document.getElementById('read').checked;

    // Regular expressions for validation
    let titlePattern = /^[a-zA-Z\s]+$/;
    let authorPattern = /^[a-zA-Z\s]+$/;
    let pageNoPattern = /^[0-9]+$/;

    // Initialize the result message
    let resultMessage = "";

    // Validation for title (alphabets only)
    if (!titlePattern.test(title)) {
        resultMessage = "Please enter alphabets only in Title.";
    } 
    // Validation for author (alphabets only)
    else if (!authorPattern.test(author)) {
        resultMessage = "Please enter alphabets only in Author name.";
    } 
    // Validation for page number (numeric only)
    else if (!pageNoPattern.test(pageNo)) {
        resultMessage = "Please enter a valid page number (numeric only).";
    } 
    // If all inputs are valid, add the book to the list
    else {
        let status = isRead ? "Read" : "Unread";
        let bookEntry = `<p>Title: ${title} <br> Author: ${author} <br> Pages: ${pageNo} <br> Status: ${status}</p>`;
        
        // Append the new book entry to the existing book list
        document.getElementById("bookList").innerHTML += bookEntry;

        // Clear input fields after adding the book
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('pages').value = "";
        document.getElementById('read').checked = false;

        resultMessage = "Book added successfully!";
    }

    // Display validation or success message
    document.getElementById("bookList").insertAdjacentHTML("beforebegin", `<p>${resultMessage}</p>`);
}