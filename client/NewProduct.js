if (sessionStorage.getItem("token") != null) {
  document.getElementById("newProduct").innerHTML = `
    <a class="btn btn-success m-2 p-2" id="AddProduct" data-bs-toggle="modal"
    data-bs-target="#Product">
        <i class="fa fa-plus"></i> New Product
    </a>
    `;
}
function AddProduct() {
    let token = sessionStorage.getItem("token");
    let xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://cuddly-palm-tree-vx56vw5qpj92x46q-8088.app.github.dev/CreateProduct",
      true
    );
    xhr.setRequestHeader("Authorization", token);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert("product Created");
          location.reload();
        } else {
          alert(xhr.responseText);
        }
      }
    };
    
    const inputElement = document.getElementById("image");
    const files = inputElement.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
  
    // Append other product data to FormData
    formData.append("ProductName", document.getElementById("ProductName").value);
    formData.append("ProductDiscription", document.getElementById("ProductDiscription").value);
    formData.append("ProductType", document.getElementById("ProductType").value);
  
    xhr.send(formData);
  }
  
