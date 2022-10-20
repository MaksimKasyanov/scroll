const accordionParagraphs = document.querySelectorAll('.scroll__paragraph');
const accordionImages = document.querySelectorAll('.scroll__img');
const accordionWrapper = document.querySelector('.scroll__wrapper');

window.addEventListener('scroll', checkParagraphs);

function checkParagraphs() {
	const scrollTrigger = window.innerHeight;
	accordionParagraphs.forEach(el => {
		const blockTop = accordionWrapper.getBoundingClientRect().top;
		if(blockTop < scrollTrigger / 10 * 8){
			accordionParagraphs.forEach(el => el.classList.remove('scroll__paragraph-active'));
			accordionParagraphs[0].classList.add('scroll__paragraph-active');
		}
		if(blockTop < scrollTrigger / 10 * 5){
			accordionParagraphs.forEach(el => el.classList.remove('scroll__paragraph-active'));
			accordionParagraphs[1].classList.add('scroll__paragraph-active');
		}
		if(blockTop < scrollTrigger / 10 * 2){
			accordionParagraphs.forEach(el => el.classList.remove('scroll__paragraph-active'));
			accordionParagraphs[2].classList.add('scroll__paragraph-active');
		}
	})


	accordionImages.forEach(el => {
		const blockTop = accordionWrapper.getBoundingClientRect().top;
		if(blockTop < scrollTrigger / 10 * 8){
			accordionImages.forEach(el => el.classList.remove('scroll__img-active'));
			accordionImages[0].classList.add('scroll__img-active');
		}
		if(blockTop < scrollTrigger / 10 * 5){
			accordionImages.forEach(el => el.classList.remove('scroll__img-active'));
			accordionImages[1].classList.add('scroll__img-active');
		}
		if(blockTop < scrollTrigger / 10 * 2){
			accordionImages.forEach(el => el.classList.remove('scroll__img-active'));
			accordionImages[2].classList.add('scroll__img-active');
		}
	})

}


// accordionParagraphs.forEach(paragraph => {
// 	const blockTop = accordionWrapper.getBoundingClientRect().top;
// 	if(blockTop < scrollTrigger / 10 * 8){
// 		accordionParagraphs[0].classList.add('scroll__paragraph-active');
// 		accordionParagraphs[1].classList.remove('scroll__paragraph-active');
// 		accordionParagraphs[2].classList.remove('scroll__paragraph-active');
// 	}
// 	if(blockTop < scrollTrigger / 10 * 5){
// 		accordionParagraphs[0].classList.remove('scroll__paragraph-active');
// 		accordionParagraphs[1].classList.add('scroll__paragraph-active');
// 		accordionParagraphs[2].classList.remove('scroll__paragraph-active');
// 	}
// 	if(blockTop < scrollTrigger / 10 * 2){
// 		accordionParagraphs[0].classList.remove('scroll__paragraph-active');
// 		accordionParagraphs[1].classList.remove('scroll__paragraph-active');
// 		accordionParagraphs[2].classList.add('scroll__paragraph-active');
// 	}
// })