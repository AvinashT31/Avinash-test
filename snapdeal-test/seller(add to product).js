function AddTheProduct(event){
    alert("working");

    event.preventDefault();

    var ProductImage = document.getElementById("Image").value;
    var ProductName = document.getElementById("Name").value;
    var ProductPrice = document.getElementById("Price").value;

    var Product = {Image:ProductImage, Name:ProductName, Price:ProductPrice}
    console.log(Product, "Product");

    var DataFromLS = JSON.parse(localStorage.getItem("productInfo")) || [];
    DataFromLS.push(Product);
    console.log(DataFromLS, "DataFromLS");

    localStorage.setItem("productInfo", JSON.stringify(DataFromLS));
    document.getElementById("Image").value = '';
    document.getElementById("Name").value = '';
    document.getElementById("Price").value = '';
    alert("Product added successfully in website");

}