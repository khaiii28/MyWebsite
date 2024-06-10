var cartItemCount = 0;

function addToCart(productName) {
    cartItemCount++;
    updateCart();
    alert("Sản phẩm " + productName + " đã được thêm vào giỏ hàng!");
}

function updateCart() {
    var cartItems = document.getElementById("cartItems");
    cartItems.textContent = "Số lượng sản phẩm trong giỏ hàng: " + cartItemCount;
}
