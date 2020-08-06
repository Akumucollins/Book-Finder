$(document).ready(function () {
    $("#myForm").submit(function () {
      var mySearch = $("#books").val();
      if (mySearch == "") {
        alert("Please enter the book your wish to search in the field first");
      } else {
        var image = "";
        var title = "";
        var author = "";
        var publisher = "";
        var publishedDate = "";
        var description = "";
        var pageCount = "";
        var categories = "";
        var preview = "";
        var url = "";
  
        // set the API Variable
        var googleAPI = "https://www.googleapis.com/books/v1/volumes?q="+mySearch;
        $.get(googleAPI, function (response) {
          console.log(response);
  
          // Loop through all the items one-by-one
          for (var i = 0; i < response.items.length; i++) {
  
            // set the items from the response object
            var items = response.items[i];
            image = items.volumeInfo.imageLinks;
            title = items.volumeInfo.title;
            author = items.volumeInfo.authors;
            publisher = items.volumeInfo.publisher;
            publishedDate = items.volumeInfo.publishedDate;
            description = items.volumeInfo.description;
            pageCount = items.volumeInfo.pageCount;
            categories = items.volumeInfo.categories;
            preview = items.volumeInfo.previewLink;
            url = items.volumeInfo.infoLink;
            
            // Set the book details in the div
            document.getElementById("result").innerHTML += `
            <div id="book-container">
              <div id="image">
                <img src=${image} alt="book cover ">
              </div>
              <div id="title">
                <h3>Book Title: ${title}</h3>
              </div>
              <div id="author">
                <h3>Author: ${author}</h3>
              </div>
              <div id="publisher">
                <h3>Publisher: ${publisher}</h3>
              </div>
              <div id="published">
                <h3>Originally Published On: ${publishedDate}</h3>
              </div>
              <div id="description">
                <h3>Description: ${description}</h3>
              </div>
              <div id="pages">
                <h3>Number of Pages: ${pageCount}</h3>
              </div>
              <div>
                <h3>Category: ${categories}</h3>:
              </div>
              <div id="preview">
              <button>
              <a href="${preview}">Preview</a></button>
              </div>
              <div id="info">
              <button><a href="${url}">Read More</a></button>
              </div>
            </div>
            `;
          }
        });
      }
      return false;
    });
    
  });