if(sessionStorage.getItem('token') != null){
    document.getElementById('newProduct').innerHTML = `
    <a class="btn btn-success m-2 p-2" id="AddProduct" data-bs-toggle="modal"
    data-bs-target="#Product">
        <i class="fa fa-plus"></i> New Product
    </a>
    `;
    document.getElementById('LoginAndLogOut').innerHTML = `
    <i class="fa-solid fa-user" ></i> LogOut
    `;
}
function AddProduct(){
    
}