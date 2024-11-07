 let cart = [];
    let cartCount = document.getElementById('cart-count');
    let cartPopup = document.getElementById('cart-popup');
    let cartItemsContainer = document.getElementById('cart-items');
    let totalPriceContainer = document.getElementById('total-price');

    function addToCart(name, price, image) {
      const item = { name, price, image };
      cart.push(item);
      updateCartUI();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCartUI();
    }

    function updateCartUI() {
      cartCount.textContent = cart.length;
      cartItemsContainer.innerHTML = '';

      let total = 0;
      cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}" width="50">
          <div>
            <span><strong>${item.name}</strong></span>
            <span>₹${item.price}</span>
          </div>
          <span class="remove-btn" onclick="removeFromCart(${index})">Remove</span>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price;
      });

      totalPriceContainer.textContent = total;
    }

    function clearCart() {
      cart = [];
      updateCartUI();
      cartPopup.classList.remove('open');
      alert("Your Order is Confirmed");
    }

    document.getElementById('cart-icon').onclick = function () {
      cartPopup.classList.toggle('open');
    };
