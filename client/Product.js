let xhr = new XMLHttpRequest();
xhr.open("GET", "https://cuddly-palm-tree-vx56vw5qpj92x46q-8088.app.github.dev/GetAllProducts", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Parse the response JSON
      let Products = JSON.parse(xhr.responseText);
      console.log(Products)
      let productBody = document.getElementById("productBody");
      
      // Initialize a variable to accumulate the HTML content
      let htmlContent = '';

      // Loop through each key in Products
      for (const key in Products) {
        // Loop through each item in the current key's array
        for (const item of Products[key]) {
          // Generate HTML for each item and accumulate it
          htmlContent += `
            <div class="card m-2" style="width: 18rem">
              <img src="data:image/jpeg;base64,${item.images[0]}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.ProductName}</h5>
                <p class="card-text">
                  ${item.ProductDiscription}
                </p>
                <a href="#" class="btn btn-primary bg-danger">Details</a>
              </div>
            </div>
          `;
        }
      }

      // Set the accumulated HTML content to productBody.innerHTML
      productBody.innerHTML = htmlContent;
    } else {
      console.log(xhr.status);
    }
  }
};

xhr.send(
  JSON.stringify({
    UserEmail: "rahul2119sharma@gmail.com",
    UserPassword: "Admin123#",
  })
);
