/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')

/* Valdating if above constats exists or not */
/* If navToggle is clicked, add a class to navMenu */
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* If navClose is clicked, remove a class from navMenu to make it disappear again*/
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

/* As soon as we click on any .nav__link, we will remove navMenu form view i.e. remove show-menu class */
const linkAction = function(){
  const navMenu = document.querySelector('#nav-menu');
  navMenu.classList.remove('show-menu');
}

/* Adding event listener to each .nav__link */
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween:24,

  navigation: {
    nextEl : ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector('#contact-form'),
      contactName = document.querySelector('#contact-form-name'),
      contactEmail = document.querySelector('#contact-form-email'),
      contactProject = document.querySelector('#contact-form-project'),
      contactMessage = document.querySelector('#contact-form-message');
  
const sendEmail = (e) => {
  e.preventDefault();
  
  // Form validation
  if(contactName.value==='' || contactEmail.value==='' || contactProject.value===''){
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // Show message
    contactMessage.textContent = 'Write all the input fields 📩';

  } 
  else {
    // serviceID - templateID - #form - publicKey
    // TODO fill up email-serviceID
    emailjs.sendForm('service_q4qrize', 'template_yrarzr9', '#contact-form', 'e0sYRkIFqWuD9hSgr')
      .then(() =>{
        contactMessage.textContent = 'Hello';
        // Show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message Sent ✅';

        // Remove message after five seconds
        setInterval(()=>{
          // Clearing the message
          contactMessage.textContent = '';
        },  5000);

      },(error) => {
        contactMessage.textContent = 'hhhhhfh';
        // Send Error
        alert('OOPS! SOMETHING HAS FAILED...', error)
      })
    
    // Resetting the form 
    contactForm.reset();
  }
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}

window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.querySelector('#scroll-up')
  const scrollY = window.pageYOffset
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scrollup')
						: scrollUp.classList.remove('show-scrollup')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.querySelector('#theme-button')

const themeChange = () => {
  if(themeButton.classList.contains('ri-moon-fill')){
    themeButton.classList.remove('ri-moon-fill')
    themeButton.classList.add('ri-sun-line')
    document.querySelector('body').classList.add('dark__theme')
  }
  else{
    themeButton.classList.remove('ri-sun-line')
    themeButton.classList.add('ri-moon-fill')
    document.querySelector('body').classList.remove('dark__theme')
  }
}

themeButton.addEventListener('click', themeChange)

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.querySelector('#header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400, 
  //reset: true,/* Animation repeation */
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin:'bottom', interval:100})

sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin:'left', interval:100})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin:'right', interval:100})
sr.reveal(`.qualification__content, .offerings__card`, {interval:100})
