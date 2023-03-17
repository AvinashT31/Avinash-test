window.onload = function (event) {

    event.preventDefault();
    // alert("working");

    var DataFromHTML = document.getElementById("displayproduct");
    console.log(DataFromHTML, "DataFromHTML");

    var DataFromLS = JSON.parse(localStorage.getItem("productInfo"))
    console.log(DataFromLS, "DataFromLS");

    var showproduct = [];

    for (var i = 0; i < DataFromLS.length; i++) {

        showproduct = `<div><img src="${DataFromLS[i].Image}"></img><p>${DataFromLS[i].Name}</p><p>${DataFromLS[i].Price}</p><button onclick = 'AddToCart(${JSON.stringify(DataFromLS[i])})' >Add to Cart</button></div>`

    }

    DataFromHTML.innerHTML = showproduct;
    console.log(DataFromHTML, "DataFromHTML")

}

function AddToCart(pro) {
    alert("working");

    var Products = JSON.stringify(pro);
    console.log(Products, "Products");

    var DataFromLS = JSON.parse(localStorage.getItem("userDataList"));
    console.log(DataFromLS, "DataFromLS");

    var cuser = JSON.parse(localStorage.getItem("current-user"));
    console.log(cuser, "cuser");

    var UsersForAll = []

    if (cuser) {
        for (i = 0; i < DataFromLS.length; i++) {
            if (DataFromLS[i].Email === cuser["current-user-email"]) {
                newObj = DataFromLS[i];
                newObj["Cartproduct"] = newObj["Cartproduct"] || [];
                newObj["Cartproduct"].push(JSON.parse(Products));
                console.log(newObj, "newObj");
                UsersForAll.push(newObj);
                localStorage.setItem("userDataList", JSON.stringify(UsersForAll));
                alert("product added to the cart successfully")
            }
               else{
                UsersForAll.push(DataFromLS[i]);
               }  
        }
        // console.log(DataFromLS, "DataFromLS");
    }
    else {
        alert("no product added please login")
    }
}