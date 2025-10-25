function toggleFavorite(element) {
  const icon = element.querySelector('i');

  if (element.classList.contains('active')) {
    element.classList.remove('active');
    icon.textContent = 'favorite_border';
    M.toast({
      html: '<i class="material-icons">heart_broken</i> Eliminado de favoritos',
      classes: 'rounded',
      style: 'background-color: #F59E0B;',
      displayLength: 2000
    });
  } else {
    element.classList.add('active');
    icon.textContent = 'favorite';
    M.toast({
      html: '<i class="material-icons">favorite</i> Agregado a favoritos',
      classes: 'rounded',
      style: 'background-color: #10B981;',
      displayLength: 2000
    });
  }
}


function showContactModal() {
  M.toast({
    html: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong style="font-size: 1.1rem;">📞 Contacta con Armix</strong>
        <span>Email: contacto@armix.com</span>
        <span>Tel: +52 999 123 4567</span>
      </div>
    `,
    classes: 'rounded',
    style: 'background: linear-gradient(135deg, #3862F6 0%, #00B4D8 100%); padding: 20px;',
    displayLength: 5000
  });

 
  const button = event.target.closest('.btn-primary');
  if (button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  }
}


function showMoreInfo() {
  M.toast({
    html: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong style="font-size: 1.1rem;">ℹ️ Información de Armix Solutions</strong>
        <span>✓ Infraestructura Cloud Escalable</span>
        <span>✓ Campañas Publicitarias Personalizadas</span>
        <span>✓ Soporte Técnico 24/7</span>
        <span>✓ Analíticas Avanzadas en Tiempo Real</span>
      </div>
    `,
    classes: 'rounded',
    style: 'background-color: #8B5CF6; padding: 20px;',
    displayLength: 6000
  });

  const button = event.target.closest('.btn-secondary');
  if (button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  }
}


function showDemo(event) {
  event.preventDefault();

  M.toast({
    html: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong style="font-size: 1.1rem;"> Demo Gratuita</strong>
        <span>¡Excelente elección! Un representante de Armix se pondrá en contacto contigo en las próximas 24 horas.</span>
        <span style="font-size: 0.9rem; margin-top: 4px;">Revisa tu correo para más información.</span>
      </div>
    `,
    classes: 'rounded',
    style: 'background-color: #10B981; padding: 20px;',
    displayLength: 5000
  });

  const link = event.target.closest('.link-text');
  if (link) {
    link.style.transform = 'scale(0.98)';
    setTimeout(() => {
      link.style.transform = 'scale(1)';
    }, 150);
  }
}


function animateOnScroll() {
  const cards = document.querySelectorAll('.info-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });
}


function addParallaxEffect() {
  const cardImage = document.querySelector('.armix-card .card-image img');

  if (cardImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;

      if (cardImage.getBoundingClientRect().top < window.innerHeight) {
        cardImage.style.transform = `translateY(${rate}px) scale(1)`;
      }
    });
  }
}


function highlightFeatures() {
  const features = document.querySelectorAll('.feature-item');

  features.forEach(feature => {
    feature.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });
}


document.addEventListener('DOMContentLoaded', function() {
  animateOnScroll();
  addParallaxEffect();
  highlightFeatures();

  setTimeout(() => {
    M.toast({
      html: `
        <div style="display: flex; align-items: center; gap: 12px;">
          <i class="material-icons" style="font-size: 28px;">analytics</i>
          <div>
            <strong style="font-size: 1.1rem;">¡Bienvenido a Armix!</strong>
            <div style="font-size: 0.9rem; margin-top: 4px;">Soluciones integrales de tecnología y publicidad</div>
          </div>
        </div>
      `,
      classes: 'rounded',
      style: 'background: linear-gradient(135deg, #3862F6 0%, #00B4D8 100%); padding: 20px;',
      displayLength: 4000
    });
  }, 800);

  const mainCard = document.querySelector('.armix-card');
  if (mainCard) {
    mainCard.style.opacity = '0';
    mainCard.style.transform = 'translateY(30px)';

    setTimeout(() => {
      mainCard.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      mainCard.style.opacity = '1';
      mainCard.style.transform = 'translateY(0)';
    }, 200);
  }
});