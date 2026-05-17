const particlesContainer = document.getElementById('particles');

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      particle.style.top = Math.random() * 100 + '%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = 2 + Math.random() * 4 + 's';

      particlesContainer.appendChild(particle);
    }