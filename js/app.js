
let carts = document.getElementById('carts');
let openbar = document.getElementById('open-bar');

function openmenu() { openbar.style.right = "0"; }
function closemenu() { openbar.style.right = '-100%' }
let fun = [];
let cartarr = [];
function getData() {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
            fun = json;
            order(fun);
        })
}
getData();

function order(fun) {
    carts.innerHTML = '';
    fun.map(item => {
        carts.innerHTML += `
        <div class=" cart  w-[300px] p-4 shadow-xl rounded-lg " style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); 
            border-radius: 10px; padding: 20px;">
                <img src="${item.image}" class="w-full h-60  object-contain m-auto"
                    alt="" >
                <div >
                    <h5 class="text-xs text-slate-600 font-semibold mt-2">${item.category}</h5>
                    <h2 class="text-lg font-semibold mt-3">${item.title.substring(0, 50)}</h2>
                    <p class="text-sm text-slate-600 font-semibold mt-2">${item.description.substring(0, 70)}</p>
                    <div class="flex items-center justify-between" >
                        <h4 class="text-2xl font-bold mt-3">${item.price}</h4>

                        <button onclick="addcart(${item.id})" class="mt-4 bg-sky-700 w-36 py-3 rounded-lg text-white"><i
                                class="fa-solid fa-cart-shopping "></i> Elave et</button>
                    </div>
                </div>
            </div>
        `
    })
}

order();

let shopingcart = document.getElementById('shopingcart');

function addcart(id) {
    let cartall = fun.find(item => item.id == id);
    if (cartall && !cartarr.some(item => item.id === cartall.id)) {
        cartarr.push(cartall);
        sebetgoster()
        document.getElementById('open-bar').style.right = "0"
    } else {
        alert("Bu məhsul artıq səbətdə var!");
    }
}

function deleteCart(id) {
    cartarr = cartarr.filter(item => item.id !== id);
    sebetgoster();
}

function sebetgoster() {
    const cartBox = document.getElementById('shopingcart');
    cartBox.innerHTML = '';

    cartarr.map(item => {
        cartBox.innerHTML += `
        <div class="flex items-center justify-between w-full py-2 border-b border-dashed border-gray-300 bg-transparent">
            
            <div class="w-[60px] h-[60px] min-w-[60px] h-[60px] bg-white border border-gray-200 rounded p-1 mr-3 flex items-center justify-center">
                <img src="${item.image}" class="w-full h-full object-contain">
            </div>

            <div class="flex-1 flex flex-col justify-center">
                <h2 class="text-xs font-bold text-gray-800 mb-1 leading-tight">
                    ${item.title.substring(0, 20)}...
                </h2>
                <h4 class="text-xs font-bold text-blue-600">${item.price} ₼</h4>
            </div>

            <button onclick="deleteCart(${item.id})" class="ml-2 text-red-500 hover:text-red-700 p-2">
                <i class="fa-solid fa-trash-can"></i>
            </button>

        </div>
        `
    })
}
let userContainer = document.getElementById('u_carts');
let uss = [];
function getUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((json) => {
            uss = json;
            shadowUser(uss);
        })
}

function shadowUser(uss) {
    userContainer.innerHTML = '';
    uss.map(item => {
        userContainer.innerHTML += `
        <div class="u_cart">
        <h4>${item.name}</h4>
        <h4>${item.username}</h4>
        </div>
        `;
    });
}
getUser();
