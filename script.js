
function hamburger(id) {
	
	var hBurger = document.getElementById(id);
	
	// @todo Check we have an element.
	
	// Build the icon.
	var toggleIcon = document.createElement('div');
	toggleIcon.setAttribute('class', 'icon');
	toggleIcon.innerHTML = '<span class="icon-show"><span class="label">show menu</span></span><span class="icon-hide"><span class="label">hide menu</span></span>';
	hBurger.insertBefore(toggleIcon, hBurger.childNodes[0]);
	
	// Capture and process clicks.
	toggleIcon.addEventListener('click', function(){
		if ( hBurger.classList.contains( 'show-menu' ) ) {
			hBurger.classList.remove( 'show-menu' );
		}
		else {
			hBurger.classList.add( 'show-menu' );
		}
	});
	
}
