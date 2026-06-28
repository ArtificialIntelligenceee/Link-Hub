// Magnetic Hover Effect
const magneticElements = document.querySelectorAll('.magnetic');

magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
        const position = el.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = `translate(0px, 0px)`;
        el.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });
    
    el.addEventListener('mouseenter', () => {
        el.style.transition = 'none';
    });
});

// 3D Tilt Effect
const tiltElements = document.querySelectorAll('.tilt');

tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
        const position = el.getBoundingClientRect();
        const x = e.clientX - position.left;
        const y = e.clientY - position.top;
        
        const centerX = position.width / 2;
        const centerY = position.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8; // Max rotation angle
        const rotateY = ((x - centerX) / centerX) * 8;
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        el.style.transition = 'none';
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        el.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });
});
