const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})


sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

	const contactForm = document.getElementById('contactForm');
		const submitBtn = document.getElementById('submitBtn');

		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();
			submitBtn.disabled = true;
			submitBtn.textContent = 'Sending...';

			// Simulating form submission delay
			setTimeout(() => {
				contactForm.reset();
				submitBtn.textContent = 'Message Sent';
				submitBtn.disabled = false;
			}, 2000);
		});