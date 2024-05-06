// Actual product data
var products = [
    { 
        name: "Air Jordan 3 Retro 'Light Orewood Brown/Metallic Gold'",
        price: 19295.00,
        imagePathBack: "../images/sneakers/aj3light-oreeood2.png",
        imagePathFront: "../images/sneakers/aj3light-oreeood.png"
    },
    {
        name: "AIR JORDAN 3 RETRO 'NIGHT STADIUM/TOTAL ORANGE-BLACK'",
        price: 18295.00,
        imagePathBack: "../images/sneakers/aj3night-staduim2.png",
        imagePathFront: "../images/sneakers/aj3night-staduim.png"
    },
    {
        name: "Air Jordan 5 Retro SE 'Midnight Navy/Black-Football Grey'",
        price: 25295,
        imagePathBack: "../images/sneakers/aj5midnight-navy2 (2).png",
        imagePathFront: "../images/sneakers/aj5midnight-navy.png"
    },
    {
        name: "Air Jordan 5 Retro SE Craft 'Light Orewood Brown/Safety Orange-Flat Pewter'",
        price: 19295,
        imagePathBack: "../images/sneakers/aj5light-oreeood2.png",
        imagePathFront: "../images/sneakers/aj5light-oreeood.png"
    },
    {
        name: "Air Jordan 1 Mid SE 'White/Lobster-Dune Red-Sail'",
        price: 12295,
        imagePathBack: "../images/sneakers/aj16back.png",
        imagePathFront: "../images/sneakers/aj16front.png"
    },
    {
        name: "AIR JORDAN 3 RETRO 'WHITE/METALLIC COPPER-TRUE BLUE'",
        price: 12295,
        imagePathBack: "../images/sneakers/aj3white-metallic2(2).png",
        imagePathFront: "../images/sneakers/aj3white-metallic(2).png"
    },
    {
        name: "AIR JORDAN 3 RETRO 'WHITE/VARSITY RED-LUCKY GREEN'",
        price: 16595,
        imagePathBack: "../images/sneakers/aj14back.png",
        imagePathFront: "../images/sneakers/aj14front.png"
    },
    {
        name: "AIR JORDAN 3 RETRO (GS) 'WHITE/BLACK-IRON-LIGHT ASH GREY'",
        price: 10995,
        imagePathBack: "../images/sneakers/aj15.png",
        imagePathFront: "../images/sneakers/aj15.png"
    },
    {
        name: "AIR JORDAN 3 RETRO 'WHITE/MIDNIGHT NAVY-CEMENT GREY-BLACK'",
        price: 19095,
        imagePathBack: "../images/sneakers/aj3navy-cement2.png",
        imagePathFront: "../images/sneakers/aj3navy-cement.png"
    },
    {
        name: "AIR JORDAN 6 RETRO 'BLACK/BRIGHT CONCORD-AQUATONE'",
        price: 18095,
        imagePathBack: "../images/sneakers/aj6concord-aquatone.png",
        imagePathFront: "../images/sneakers/aj6concord-aquatone.png"
    },
    {
        name: "AIR JORDAN 3 RETRO 'WHITE/METALLIC COPPER-TRUE BLUE'",
        price: 19995,
        imagePathBack: "../images/sneakers/aj8black-true-redwhite2.png",
        imagePathFront: "../images/sneakers/aj8black-true-redwhite.png"
    },
    {
        name: "AIR JORDAN 4 RETRO SE CRAFT 'MEDIUM OLIVE/PALE VANILLA-CARGO KHAKI'",
        price: 20295,
        imagePathBack: "../images/sneakers/aj4khaki2.png",
        imagePathFront: "../images/sneakers/aj4khaki.png"
    },
    {
        name: "AIR JORDAN 6 RETRO 'WHITE/YELLOW OCHRE-BLACK'",
        price: 18095,
        imagePathBack: "../images/sneakers/aj6ochre-black2.png",
        imagePathFront: "../images/sneakers/aj6ochre-black.png"
    },
    {
        name: "AIR JORDAN 7 RETRO 'WHITE/CRIMSON-BLACK'",
        price: 22995,
        imagePathBack: "../images/sneakers/aj7whitecrimson-black2.png",
        imagePathFront: "../images/sneakers/aj7whitecrimson-black.png"
    },
    {
        name: "JORDAN 1 LOW FRAGMENT DESIGN X TRAVIS SCOTT",
        price: 185000,
        imagePathBack: "../images/sneakers/aj19front.png",
        imagePathFront: "../images/sneakers/aj19front.png"
    },
    {
        name: "JORDAN 1 RETRO HIGH TRAVIS SCOTT",
        price: 175000,
        imagePathBack: "../images/sneakers/aj20front-removebg-preview.png",
        imagePathFront: "../images/sneakers/aj20front-removebg-preview.png"
    },
    {
        name: "AIR JORDAN 1 LOW SE 'WHITE/DUNE RED-LOBSTER-SAIL'",
        price: 10295,
        imagePathBack: "../images/sneakers/aj17back.png",
        imagePathFront: "../images/sneakers/aj17front.png"
    },
    {
        name: "AIR JORDAN 1 RETRO LOW OG 'BLACK/MUSLIN-TECH GREY-WHITE'",
        price: 12795,
        imagePathBack: "../images/sneakers/aj18back.png",
        imagePathFront: "../images/sneakers/aj18front.png"
    },
    {
        name: "AIR JORDAN 1 HIGH OG (GS) 'BLACK/WHITE-WHITE'",
        price: 10295,
        imagePathBack: "../images/sneakers/aj12back.png",
        imagePathFront: "../images/sneakers/aj12front.png"
    },

];

// Function to display products
function displayProducts(products) {
    var container = document.getElementById("productContainer");
    container.innerHTML = ""; // Clear previous content

    products.forEach(function(product) {
        container.innerHTML += `
            <div class="product">
                <figure>
                    <div class="ajshoe">
                        <img src="${product.imagePathBack}" class="img-back">
                        <img src="${product.imagePathFront}" class="img-front">
                    </div>
                    <div class="figcap">
                        <p id="jordan">JORDAN</p>
                        <p>${product.name}</p>
                        <p id="jordan">&#8377;${product.price.toFixed(2)}</p>
                        <button class="atcbtn" onclick="addToCart()">Add to Cart</button>
                        
                    </div>
                </figure>
            </div>`;
    }); 
}

// Function to sort products by price
function sortProducts(order) {
    var sortedProducts = products.slice(); // Create a copy of the original array

    if (order === 'asc') {
        sortedProducts.sort(function(a, b) {
            return a.price - b.price;
        });
    } else if (order === 'desc') {
        sortedProducts.sort(function(a, b) {
            return b.price - a.price;
        });
    }

    // Display the sorted products
    displayProducts(sortedProducts);
}


// // Display products initially
// displayProducts(products);

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }


// // Function to handle adding an item to the cart
let cartCounter = 0;
let cartItems = [];

function addToCart(name, price, imagePathBack, imagePathFront) {
    // Increment cart counter
    cartCounter++;

    // Update cart counter display
    document.getElementById('cartCounter').innerText = cartCounter;

    // Add product information to the cart array
    cartItems.push({
        Cname: name,
        Cprice: price,
        CimagePathBack: imagePathBack,
        CimagePathFront: imagePathFront
    });

    // Display the added item in the cart
    displayCartItems();

    // Log the cart array to see the added products (for testing purposes)
    console.log(cartItems);
}

// Function to display cart items
function displayCartItems() {
    var cartContent = document.getElementById("cartContent");
    cartContent.innerHTML = ""; // Clear previous content

    cartItems.forEach(function(item) {
        cartContent.innerHTML += `
            <div class="cart-item">
                <img src="${item.CimagePathFront}" alt="${item.Cname}">
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.Cname}</p>
                    <p class="cart-item-price">&#8377;${item.Cprice.toFixed(2)}</p>
                </div>
            </div>`;
    });
}
// // Toggle responsive navigation
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// // Toggle cart display
// function toggleCart() {
//     var cartContent = document.getElementById("cartContent");
//     cartContent.classList.toggle("show");
// }




// function updateCartCounter() {
//     const cartItemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);
//     document.getElementById("cartCounter").innerText = cartItemsCount;
//   }

//   let cartItems = [];

// function addToCart(name, price, imagePathBack, imagePathFront) {
//   // Check if cart items are already stored in local storage
//   if (localStorage.getItem('cartItems')) {
//     cartItems = JSON.parse(localStorage.getItem('cartItems'));
//   }

//   // Add product information to the cart array
//   cartItems.push({
//     name: name,
//     price: price,
//     imagePathBack: imagePathBack,
//     imagePathFront: imagePathFront,
//     quantity: 1
//   });

//   // Update cart counter display
//   cartCounter++;
//   document.getElementById('cartCounter').innerText = cartCounter;

//   // Store cart items in local storage
//   localStorage.setItem('cartItems', JSON.stringify(cartItems));

//   // Log the cart array to see the added products (for testing purposes)
//   console.log(cartItems);
// }

//   function displayCart() {
//     // Clear the current content of the page
//     document.getElementById("productContainer").innerHTML = "";

//     // Display the cart page
//     const cartPage = `
//       <div class="checkout-page">
//         <h1>Cart</h1>
//         <div id="cartItems"></div>
//         <button onclick="goBack()">Go Back</button>
//       </div>
//     `;

//     document.getElementById("productContainer").innerHTML = cartPage;

//       // Display the cart items in the cart page
//       displayCartItems();
//     }

//   function displayCartItems() {
//     var cartContent = document.getElementById("cartContent");
//     cartContent.innerHTML = ""; // Clear previous content

//     cartItems.forEach(function(item) {
//       cartContent.innerHTML += `
//           <div class="cart-item">
//               <img src="${item.imagePathFront}" alt="${item.name}">
//               <div class="cart-item-details">
//                   <p class="cart-item-name">${item.name}</p>
//                   <p class="cart-item-price">&#8377;${item.price.toFixed(2)}</p>
//               </div>
//           </div>`;
//     });
//   }

//   function goBack() {
//     window.history.back();
//   }

//   // Display products initially
//   displayProducts(products);

//   function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

//   // Function to sort products by price
//   function sortProducts(order) {
//     var sortedProducts = products.slice(); // Create a copy of the original array

//     if (order === 'asc') {
//       sortedProducts.sort(function(a, b) {
//         return a.price - b.price;
//       });
//     } else if (order === 'desc') {
//       sortedProducts.sort(function(a, b) {
//         return b.price - a.price;
//       });
//     }

//     // Display the sorted products
//     displayProducts(sortedProducts);
//   }

//   // Function to display products
//   function displayProducts(products) {
//     var container = document.getElementById("productContainer");
//     container.innerHTML = ""; // Clear previous content

//     products.forEach(function(product) {
//       container.innerHTML += `
//           <div class="product">
//               <figure>
//                   <div class="ajshoe">
//                       <img src="${product.imagePathBack}" class="img-back">
//                       <img src="${product.imagePathFront}" class="img-front">
//                   </div>
//                   <div class="figcap">
//                       <p id="jordan">JORDAN</p>
//                       <p>${product.name}</p>
//                       <p id="jordan">&#8377;${product.price.toFixed(2)}</p>
//                       <button class="atcbtn" onclick="addToCart()">Add to Cart</button>
                      
//                   </div>
//               </figure>
//           </div>`;
//     }); 
//   }
  




// const productPage = document.querySelector('.product-page');
// const productName = productPage.querySelector('#product-name');
// const productDescription = productPage.querySelector('#product-description');
// const productPrice = productPage.querySelector('#product-price');
// const addToCartButton = productPage.querySelector('.add-to-cart');

// let currentProduct = products[0];
// productName.innerText = currentProduct.name;
// productDescription.innerText = currentProduct.description;
// productPrice.innerText = `$${currentProduct.price}`;

// const cartIcon = document.querySelector('.cart-icon');
// const cartCounter = cartIcon.querySelector('.cart-counter');
// const cartPage = document.createElement('div');
// cartPage.classList.add('cart-page');
// cartPage.innerHTML = `
// 	<h1>Cart</h1>
// 	<ul class="cart-items"></ul>
// 	<p class="cart-total">Total: $0</p>
// `;
// document.body.appendChild(cartPage);
// cartPage.style.display = 'none';

// let cartItems = [];

// addToCartButton.addEventListener('click', () => {
// 	cartItems.push(currentProduct);
// 	updateCart();
// });

// function updateCart() {
// 	cartCounter.innerText = cartItems.length;
// 	const cartItemsList = cartPage.querySelector('.cart-items');
// 	cartItemsList.innerHTML = '';
// 	let total = 0;
// 	cartItems.forEach((item, index) => {
// 		const li = document.createElement('li');
// 		li.innerText = `${item.name} - $${item.price}`;
// 		cartItemsList.appendChild(li);
// 		total += item.price;
// 	});
// 	cartPage.querySelector('.cart-total').innerText = `Total: $${total}`;
// 	cartPage.style.display = 'block';
// }

// cartIcon.addEventListener('click', () => {
// 	cartPage.style.display = cartPage.style.display === 'none'? 'block' : 'none';
// });