//cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
//open car
cartIcon.onclick = () =>{
    cart.classList.add("active");
};

closeCart.onclick = () =>{
    cart.classList.remove("active");
};


//cart working js
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

//making function
function ready(){
    //remove items from cart
    var reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtons)
    for(var i=0; i< reomveCartButtons.length;i++){
        var button = reomveCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
}

//remove itrems from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}