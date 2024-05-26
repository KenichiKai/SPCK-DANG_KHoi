import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebase.js";

const collectionRef = collection(db, "products");

const newProducts = document.getElementById("new-products");

let cartList = JSON.parse(localStorage.getItem("cart"));

if (!cartList || cartList.length === 0) {
  localStorage.setItem("cart", JSON.stringify([]));
  cartList = [];
}

// Lấy dữ liệu từ firestore trong firebase về
onSnapshot(collectionRef, function (data) {
  const productList = [];
  let productHTML = "";

  data.docs.forEach(function (item) {
    productList.push({ ...item.data(), id: item.id });

    productHTML =
      productHTML +
      `<div style="padding: 16px" class="products col-3">
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
                ${
                  item.data().discountPrice == 0
                    ? `<div class="discount-price">
                    ${item.data().price} &#8363;
                </div>`
                    : `<div class="discount-price">
                    ${item.data().discountPrice} &#8363;
                </div>`
                }
                ${
                  item.data().discountPrice == 0
                    ? ""
                    : `<div class="sell-price line-through">
                ${item.data().price} &#8363;
                </div>`
                }
            </div>
            <button class="cartdesign">Thêm vào giỏ hàng</button>            
        </div>
    </div>`;
  });

  newProducts.innerHTML = productHTML;

  const cartElements = document.querySelectorAll(".cartdesign");

  cartElements.forEach((item, idx) => {
    item.onclick = () => {
      const findExistInCart = cartList.some(
        (item) => item.id === productList[idx].id
      );

      if (findExistInCart) {
        alert("Sản phẩm này đã được thêm từ trước!");
      } else {
        cartList.push(productList[idx]);
        localStorage.setItem("cart", JSON.stringify(cartList));
        alert("Thêm vào giỏ hàng thành công");
      }
    };
  });
});
