var listProducts = JSON.parse(localStorage.getItem("cart")) || [];
console.log(listProducts);

function render() {
  let productHTML = "";

  listProducts.forEach((item) => {
    productHTML =
      productHTML +
      `<div style="padding: 16px" class="products col-3">
      <div class="products-img"><img src="${item.image}" alt=""></div>
      <div class="products-brand">${item.brand}</div>
      <div class="products-name">${item.name}</div>
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
                item.discountPrice == 0
                  ? `<div class="discount-price">
                  ${item.price} &#8363;
              </div>`
                  : `<div class="discount-price">
                  ${item.discountPrice} &#8363;
              </div>`
              }
              ${
                item.discountPrice == 0
                  ? ""
                  : `<div class="sell-price line-through">
              ${item.price} &#8363;
              </div>`
              }
          </div>
          <button class="cartdesign">Xóa khỏi giỏ hàng</button>            
      </div>
  </div>`;
  });
  document.getElementById("carts").innerHTML = productHTML;

  const removeBtns = document.querySelectorAll(".cartdesign");

  removeBtns.forEach((item, idx) => {
    item.onclick = () => {
      listProducts.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(listProducts));
      render();
    };
  });
}

window.onload = render();
