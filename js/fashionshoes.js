let products = {
    data: [
        {
            name: "Giày Sneaker Unisex Puma X-Playstation - Trắng",
            brand: "PUMA",
            price: " 3.099.000đ",
            image: "fashionshoes/WhitePUMA.jpg",
        },

        {
            name: "Giày Sneaker Unisex Nike Eschape Ms - Xám",
            brand: "NIKE",
            price: " 2.470.000đ",
            image: "fashionshoes/greynike.jpg"
        },

        {
            name: "Giày Thời Trang Nam Nike Full Force Low - Trắng",
            brand: "NIKE",
            price: " 1.640.000đ",
            image: "fashionshoes/uninike1.jpg"
        },

        {
            name: "Giày Thời Trang Nam Nike Air Pegasus '89 - Xám",
            brand: "NIKE    ",
            price: " 2.680.000đ",
            image: "fashionshoes/uninike2.jpg"
        },

        {
            name: "Giày Thời Trang Nữ Fila Disruptor 2 Exp - Trắng",
            brand: "Fila",
            price: " 1.320.000đ",
            image: "fashionshoes/uninike3.jpg"
        },

        {
            name: "Giày Thời Trang Unisex Puma Slipstream Lo Retro - Trắng",
            brand: "PUMA",
            price: " 2.034.000đ",
            image: "fashionshoes/uninike4.jpg"
        },

        {
            name: "Giày Thời Trang Nữ Puma Mayze Stack Suede - Tím",
            brand: "PUMA",
            price: " 1.870.000đ",
            image: "fashionshoes/uninike5.jpg"
        },

        {
            name: "Giày Thời Trang Nam Nike E-Series 1.0 - Trắng",
            brand: "NIKE",
            price: " 1.670.000đ",
            image: "fashionshoes/uninike6.jpg"
        },

        {
            name: "Giày Thời Trang Nữ Nike Air Max Systm - Trắng",
            brand: "NIKE",
            price: " 1.730.000đ",
            image: "fashionshoes/uninike7.jpg"
        },

        {
            name: "Giày Thời Trang Nam Nike Waffle One Se - Trắng",
            brand: "NIKE",
            price: " 1.880.000đ",
            image: "fashionshoes/uninike8.jpg"
        },

        {
            name: "Giày Thể Thao Nữ Nike Air Max Excee - Hồng",
            brand: "NIKE",
            price: " 2.170.000đ",
            image: "fashionshoes/uninike9.jpg"
        },

        
    ]
}
var productContainer = document.getElementById("products")
for (let i in products.data) {
    document.getElementById("products").insertAdjacentHTML("beforeend",
        ` 
    <div class="card">
                <div class="animate__animated animate__fadeInDown">
                    <div class="image-container">
                        <img src="${products.data[i].image}" alt="">
                       
                    </div>
                    <div class="container">
                        <h5 class="product-name">${products.data[i].name}</h5>
                        <h7 class="product-brand"><b></b>${products.data[i].brand}</h7>
                        <h5 class="product-price"><b></b>${products.data[i].price}</h5>
                        <button onclick="addToCart(${i})">Thêm vào giỏ hàng</button>            
                    </div>
                </div>
              
    `)
}

var searchInput = document.getElementById("search-input")
var searchBtn = document.getElementById("search")

searchInput.addEventListener("change", function(e)  {
    let inputValue = searchInput.value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productBrand = document.querySelectorAll(".product-brand")
    let productName = document.querySelectorAll(".product-name")

    productName.forEach((item, index) => {
        if (item.innerHTML.includes(inputValue)) {
            console.log(inputValue)

            cards[index].classList.remove("hide")
        }
        else {
            cards[index].classList.add("hide")
        }
    })
})

function addToCart(index) {
    const listCart = JSON.parse(localStorage.getItem("cart")) || []
    listCart.push(products.data[index])
    localStorage.setItem("cart", JSON.stringify(listCart))
    alert("Add to cart successfully")
}