 function initHeroWrapper() {
     const hero = document.querySelector('.hero');
     if (!hero || hero.querySelector('.hero-text-group')) return;
     const textElements = hero.querySelectorAll('h1, p, .btn');
     const textGroup = document.createElement('div');
     textGroup.classList.add('hero-text-group');
     textElements.forEach(el => textGroup.appendChild(el));
     hero.insertBefore(textGroup, hero.querySelector('.hero-img'));
 }
 
 function fixAboutTypo() {
     const aboutPara = document.querySelector('.about p');
     if (!aboutPara) return;
     aboutPara.innerHTML = aboutPara.innerHTML
         .replace(/<strong><\/strong>/g, '')
         .replace(/<\/strong>$/, '');
     if (aboutPara.textContent.trim().startsWith('am')) {
         aboutPara.textContent = I ${aboutPara.textContent.trim()};
     }
 }
 
 function setImageFallbacks() {
     const imgs = document.querySelectorAll('.hero-img');
     imgs.forEach(img => {
         img.addEventListener('error', () => {
             const size = img.width || 150;
             img.src = https://via.placeholder.com/${size}/${'e1bee7'.replace('#', '')}/${'9c27b0'.replace('#', '')}?text=JC;
             img.alt = Jesseca Castor - ${img.alt.split(' ')[1] || 'Profile'};
         });
     });
 }

 function updateActiveNavLink() {
     const sections = document.querySelectorAll('section, #home');
     const navLinks = document.querySelectorAll('nav a');
     let currentSection = '';
     sections.forEach(section => {
         const sectionTop = section.offsetTop - 100;
         if (window.scrollY >= sectionTop) {
             currentSection = #${section.id};
         }
     });
     navLinks.forEach(link => {
         link.classList.toggle('active', link.getAttribute('href') === currentSection);
     });
 }
 
 function resetCardAnimations() {
     const cards = document.querySelectorAll('.project-card');
     cards.forEach(card => {
         card.style.opacity = '0';
         card.style.transform = 'translateY(20px)';
     });
     
     setTimeout(() => {
         cards[0].style.animation = 'fadeUp 0.8s ease-out 0.2s forwards';
         cards[1].style.animation = 'fadeUp 0.8s ease-out 0.4s forwards';
         cards[2].style.animation = 'fadeUp 0.8s ease-out 0.6s forwards';
     }, 100);
 }
 
 function initPortfolio() {
     initHeroWrapper();
     fixAboutTypo();
     setImageFallbacks();
     updateActiveNavLink();
 }
 
 window.addEventListener('load', initPortfolio);
 window.addEventListener('scroll', updateActiveNavLink);
 window.addEventListener('resize', () => {
     if (window.innerWidth <= 768 || window.innerWidth > 768) {
         resetCardAnimations();
     }
 });
 
 const style = document.createElement('style');
 style.textContent = `
     nav a.active {
         color: #9c27b0;
         font-weight: 600;
     }
     nav a.active::after {
         width: 100%;
         left: 0;
     }
 `;
 document.head.appendChild(style);
