(function(){
	const burgerItem = document.querySelector('.header__burger');
	const menu = document.querySelector('.nav');
	const closeNav = document.querySelector('.nav');

	burgerItem.addEventListener("click", () =>{
		menu.classList.add("nav-active");
	});
	
	closeNav.addEventListener("click",() => {
		closeNav.classList.remove("nav-active");
	});
}());