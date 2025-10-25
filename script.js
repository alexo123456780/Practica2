function toggleFavorite(element) {
      const icon = element.querySelector('i');

      if (element.classList.contains('active')) {
        // Quitar de favoritos
        element.classList.remove('active');
        icon.textContent = 'favorite_border';
        M.toast({html: ' Eliminado de favoritos', classes: 'rounded red lighten-1'});
      } else {
        // Agregar a favoritos
        element.classList.add('active');
        icon.textContent = 'favorite';
        M.toast({html: ' Agregado a favoritos', classes: 'rounded pink lighten-1'});
      }
    }

    // ===== FUNCIÓN: Cambiar Cantidad =====
    // Incrementa o decrementa la cantidad del producto
    function changeQuantity(button, change) {
      const quantityDisplay = button.parentElement.querySelector('.quantity-display');
      let currentQuantity = parseInt(quantityDisplay.textContent);

      // Calcular nueva cantidad (mínimo 1)
      let newQuantity = Math.max(1, currentQuantity + change);

      // Actualizar display con animación
      quantityDisplay.style.transform = 'scale(1.3)';
      setTimeout(() => {
        quantityDisplay.textContent = newQuantity;
        quantityDisplay.style.transform = 'scale(1)';
      }, 150);
    }

    // ===== FUNCIÓN: Agregar al Carrito =====
    // Agrega productos al carrito con notificación
    function addToCart(button, productName, price) {
      // Obtener cantidad seleccionada
      const card = button.closest('.card');
      const quantity = parseInt(card.querySelector('.quantity-display').textContent);
      const total = price * quantity;

      // Animación del botón
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 100);

      // Mostrar notificación de éxito
      M.toast({
        html: `
          <div style="display: flex; align-items: center; gap: 10px;">
            <i class="material-icons">check_circle</i>
            <span><b>${quantity}x ${productName}</b><br>Total: $${total.toLocaleString()}</span>
          </div>
        `,
        classes: 'rounded green darken-1',
        displayLength: 3000
      });

      // Efecto visual adicional
      const cartIcon = card.querySelector('.card-image img');
      cartIcon.style.transform = 'scale(1.05)';
      setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
      }, 200);
    }

    // ===== INICIALIZACIÓN =====
    // Inicializar componentes de Materialize al cargar la página
    document.addEventListener('DOMContentLoaded', function() {
      // Mostrar mensaje de bienvenida
      setTimeout(() => {
        M.toast({
          html: ' ¡Bienvenido a Material Store! Diseñado con Material Design',
          classes: 'rounded purple darken-2',
          displayLength: 4000
        });
      }, 500);
    });