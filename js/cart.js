// LẤY DỮ LIỆU TỪ LOCALSTORAGE CART
const listShoes = JSON.parse(localStorage.getItem("cart")) || [];
// RENDER DỮ LIỆU RA HTML
function render() {
  const shoes = JSON.parse(localStorage.getItem("cart")) || [];

  document.getElementById("cartOuter").innerHTML = null;
  for (let i in shoes) {
    document.getElementById("cartOuter").insertAdjacentHTML(
      "beforeend",
      `        
          <div data-aos="fade-up" class="shopping-card" onclick="deleteProduct(${i})">
                    <div class="shoes-img-container">
                      <img id="shoesImg" src="${listShoes[i].image}" alt="">
                      <a href="#" class="overlay"></a>
                    </div>
                    <div class="card-info">
                      <h5 id="shoesName" class="shoes-name">${listShoes[
                        i
                      ].name}</h5>
                      <p id="shoesPrice">$${listShoes[i].price}</p>
                      <div class="star">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>
                    </div>
                  </div>
        `
    );
  }
}
// SỬ DỤNG SPLICE ĐỂ XÓA PHẦN TỬ TRONG MẢNG VÀ LƯU VÀO LOCALSTORAGE
function deleteProduct(index) {
  alert("Are you sure to delete " + listShoes[index].name + "?");
  listShoes.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(listShoes));
  render();
}
// SỬ DỤNG REMOVEITEM ĐỂ XÓA TẤT CẢ PHẦN TỬ TRONG LOCALSTORAGE
function deleteAll() {
  alert("Are you sure delete all Shoes?");
  localStorage.removeItem("cart");
  render();
}
// SỬ DỤNG REMOVEITEM ĐỂ XÓA TẤT CẢ PHẦN TỬ TRONG LOCALSTORAGE

function buyAll() {
  alert("Buy Successfully!");
  localStorage.removeItem("cart");
  render();
}
window.onload = render();