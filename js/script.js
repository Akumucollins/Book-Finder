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
      var googleAPI =
        "https://www.googleapis.com/books/v1/volumes?q=" + mySearch;
      $.get(googleAPI, function (response) {
        console.log(response);

        // Loop through all the items one-by-one
        for (var i = 0; i < response.items.length; i++) {
          // set the items from the response object
          var items = response.items[i];
          image = items.volumeInfo.imageLinks.thumbnail;
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
            <div class="container text-center" id="book">
              <div id="image">
                <img src=${image} width="100px" alt="book cover " />
              </div>
              <div id="title">
                <h3 className="inline">Book Title: </h3> ${title}
              </div>
              <div id="author">
                <h3 className="inline">Author:</h3>${author}
              </div>
              <div id="publisher">
                <h3 className="inline">Publisher:</h3>${publisher}
              </div>
              <div id="published">
                <h3 className="inline">Originally Published On:</h3>${publishedDate}
              </div>
              <div id="description">
                <h3 className="inline">Description:</h3>${description}
              </div>
              <div id="pages">
                <h3 className="inline">Number of Pages:</h3>${pageCount}
              </div>
              <div id="categories">
                <h3>Category: </h3>${categories}
              </div><br>
              <div id="preview">
              <button class="btn"><a href="${preview}">Preview</a></button>
              </div><br>
              <div id="info">
              <button class="btn"><a href="${url}">Read More</a></button>
              </div>
            </div>
          </div>  
          `;
        }
      });
    }
    return false;
  });
});
