// =================================
// PRODUCT SEARCH FUNCTIONALITY
// =================================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

if (searchBtn && searchInput) {

    searchBtn.addEventListener("click", searchProducts);

    searchInput.addEventListener("keyup", function (e) {

        if (e.key === "Enter") {
            searchProducts();
        }

    });

}

function searchProducts() {

    const value = searchInput.value.toLowerCase().trim();

    const products = document.querySelectorAll(".product-card");

    let found = false;

    products.forEach(function (product) {

        const productNameElement =
            product.querySelector(".product-name");

        if (!productNameElement) return;

        const name =
            productNameElement.textContent.toLowerCase();

        if (name.includes(value)) {

            product.style.display = "block";
            found = true;

        } else {

            product.style.display = "none";

        }

    });

    if (!found) {

        showNotification(
            "No products found!",
            "error"
        );

    }

}


// =================================
// ADD TO CART
// =================================

let cartCount = 0;

function attachCartEvents() {

    const cartButtons =
        document.querySelectorAll(".cart-btn");

    cartButtons.forEach(function (button) {

        if (!button.dataset.bound) {

            button.dataset.bound = "true";

            button.addEventListener("click", function () {

                cartCount++;

                showNotification(
                    "Item added to cart! Total Items: " +
                    cartCount,
                    "success"
                );

            });

        }

    });

}

attachCartEvents();


// =================================
// SUPPLIER FORM VALIDATION
// =================================

const inquiryForm =
    document.querySelector(".supplier-section form");

if (inquiryForm) {

    inquiryForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const itemInput =
                inquiryForm.querySelector("input");

            const detailsInput =
                inquiryForm.querySelector("textarea");

            if (
                itemInput.value.trim() === ""
            ) {

                showNotification(
                    "Please enter the item name!",
                    "error"
                );

                return;

            }

            if (
                detailsInput.value.trim() === ""
            ) {

                showNotification(
                    "Please enter more details!",
                    "error"
                );

                return;

            }

            showNotification(
                "Inquiry sent successfully!",
                "success"
            );

            itemInput.value = "";
            detailsInput.value = "";

        }
    );

}


// =================================
// NEWSLETTER SUBSCRIPTION
// =================================

const newsletterSection =
    document.querySelector(".newsletter-section");

if (newsletterSection) {

    const emailInput =
        newsletterSection.querySelector("input");

    const subscribeBtn =
        newsletterSection.querySelector("button");

    subscribeBtn.addEventListener(
        "click",
        function () {

            const email =
                emailInput.value.trim();

            if (email === "") {

                showNotification(
                    "Please enter your email!",
                    "error"
                );

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                showNotification(
                    "Please enter a valid email!",
                    "error"
                );

                return;

            }

            showNotification(
                "Subscribed Successfully!",
                "success"
            );

            emailInput.value = "";

        }
    );

}


// =================================
// CARD HOVER EFFECTS
// =================================

function attachHoverEffects() {

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener(
            "mouseover",
            function () {

                card.style.transform =
                    "scale(1.05)";

                card.style.transition =
                    "0.3s";

                card.style.boxShadow =
                    "0 5px 20px rgba(0,0,0,0.15)";

            }
        );

        card.addEventListener(
            "mouseout",
            function () {

                card.style.transform =
                    "scale(1)";

                card.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.05)";

            }
        );

    });

}

attachHoverEffects();


// =================================
// LOAD MORE PRODUCTS
// =================================

const loadMoreBtn =
    document.getElementById("loadMoreBtn");

const extraProducts = [

    {
        name: "Shoes",
        price: "$45",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=120&fit=crop"
    },

    {
        name: "Polaroid Camera",
        price: "$299",
        image:
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=120&h=120&fit=crop"
    },

    {
        name: "Sneakers",
        price: "$80",
        image:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=120&h=120&fit=crop"
    },

    {
        name: "Watch",
        price: "$199",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&h=120&fit=crop"
    }

];

if (loadMoreBtn) {

    loadMoreBtn.addEventListener(
        "click",
        function () {

            const container =
                document.getElementById(
                    "recommended-cards"
                );

            extraProducts.forEach(
                function (product) {

                    const card =
                        document.createElement(
                            "article"
                        );

                    card.className =
                        "card product-card";

                    card.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        
                        <h4 class="product-name">
                            ${product.name}
                        </h4>

                        <p>${product.price}</p>

                        <a href="product.html" class="details-btn">
                            View Details
                        </a>

                        <button class="cart-btn">
                            Add to Cart
                        </button>
                    `;

                    container.appendChild(card);

                }
            );

            attachHoverEffects();
            attachCartEvents();

            loadMoreBtn.style.display =
                "none";

            showNotification(
                "More Products Loaded!",
                "success"
            );

        }
    );

}


// =================================
// PRODUCT PAGE SIZE SELECTION
// =================================

const sizeDropdown =
    document.getElementById("size");

if (sizeDropdown) {

    sizeDropdown.addEventListener(
        "change",
        function () {

            showNotification(
                "Selected: " +
                sizeDropdown.value,
                "success"
            );

        }
    );

}


// =================================
// CUSTOM NOTIFICATION
// =================================

function showNotification(
    message,
    type
) {

    const notification =
        document.createElement("div");

    notification.innerText =
        message;

    notification.style.position =
        "fixed";

    notification.style.top =
        "20px";

    notification.style.right =
        "20px";

    notification.style.padding =
        "15px 25px";

    notification.style.borderRadius =
        "10px";

    notification.style.fontSize =
        "14px";

    notification.style.fontWeight =
        "bold";

    notification.style.color =
        "white";

    notification.style.zIndex =
        "9999";

    notification.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.2)";

    notification.style.transition =
        "0.3s";

    if (type === "success") {

        notification.style.background =
            "#0d6efd";

    } else {

        notification.style.background =
            "#dc3545";

    }

    document.body.appendChild(
        notification
    );

    setTimeout(function () {

        notification.remove();

    }, 3000);

}


const slides = [
{
    tag:"New Collection 2025",
    title:"Latest Trending <br> Electronic Items",
    text:"Discover premium gadgets, smart devices and accessories."
},
{
    tag:"Mega Fashion Sale",
    title:"New Season <br> Fashion Arrivals",
    text:"Shop stylish clothing and accessories at exclusive prices."
},
{
    tag:"Home Essentials",
    title:"Modern <br> Home Interiors",
    text:"Upgrade your home with elegant furniture and décor."
}
];

const heroTag = document.getElementById("heroTag");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");

let currentSlide = 0;

function changeSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    heroTag.style.opacity = "0";
    heroTitle.style.opacity = "0";
    heroText.style.opacity = "0";

    setTimeout(() => {

        heroTag.innerHTML = slides[currentSlide].tag;
        heroTitle.innerHTML = slides[currentSlide].title;
        heroText.innerHTML = slides[currentSlide].text;

        heroTag.style.opacity = "1";
        heroTitle.style.opacity = "1";
        heroText.style.opacity = "1";

    },300);
}

setInterval(changeSlide,5000);

document.getElementById("learnMoreBtn")
.addEventListener("click",function(){

    alert("Welcome to our latest collection!");
});

window.addEventListener("load",function(){

    document.querySelector(".hero")
    .style.opacity = "1";

    document.querySelector(".hero")
    .style.transform = "translateY(0)";
});