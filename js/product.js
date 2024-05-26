import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebase.js";

const collectionRef = collection(db, "products")

const newProducts = document.getElementById("new-products")

// Lấy dữ liệu từ firestore trong firebase về
onSnapshot(collectionRef, function (data) {
    let productHTML = ""
    data.docs.forEach(function (item) {
        productHTML = productHTML + `<div style="padding: 16px" class="products col-3">
        <div class="products-img"><img src="${item.data().image}" alt=""></div>
        <div class="products-brand">${item.data().brand}</div>
        <div class="products-name">${item.data().name}</div>
        <div style="margin-top: auto">
            <div class="products-rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>5 đánh giá</span>
            </div>
            <div class="products-price">
                ${item.data().discountPrice == 0 ? //toán tử ba nhôi//
                `<div class="discount-price">
                    ${item.data().price} &#8363;
                </div>`
                :
                `<div class="discount-price">
                    ${item.data().discountPrice} &#8363;
                </div>`
            }
                ${item.data().discountPrice == 0 ? "" : `<div class="sell-price line-through">
                ${item.data().price} &#8363;
                </div>`}
            </div>
            <button class="cartdesign">Thêm vào giỏ hàng</button>            
        </div>
    </div>`
    
    })

    newProducts.innerHTML = productHTML
})

// var searchInput = document.getElementById("search-input")
// var searchBtn = document.getElementById("search")

// searchInput.addEventListener("change", function(e)  {
//     let inputValue = searchInput.value.toUpperCase()
//     let cards = document.querySelectorAll(".card")
//     let productBrand = document.querySelectorAll(".product-brand")
//     let productName = document.querySelectorAll(".product-name")

//     productName.forEach((item, index) => {
//         if (item.innerHTML.includes(inputValue)) {
//             console.log(inputValue)

//             cards[index].classList.remove("hide")
//         }
//         else {
//             cards[index].classList.add("hide")
//         }
//     })
// })

// function addToCart(index) {
//     const listCart = JSON.parse(localStorage.getItem("cart")) || []
//     listCart.push(products.data[index])
//     localStorage.setItem("cart", JSON.stringify(listCart))
//     alert("Add to cart successfully")
// }