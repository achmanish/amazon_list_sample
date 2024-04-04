document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            alert(`Added product ${productId} to cart`);
            // Here you can add logic to add the product to the shopping cart
        });
    });
});
