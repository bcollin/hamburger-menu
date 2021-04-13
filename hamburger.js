
function menuHamburger( id, localStrings ) {
	
	var menuContainer = document.getElementById( id );
	
	if ( null === menuContainer ) {
		return false;
	}
	
	menuContainer.classList.add( 'menu-hamburger-hidden' );
	
	var defaultStrings = {'showmenu': 'Show menu', 'hidemenu': 'Hide menu'};
	
	if ( undefined === localStrings ) {
		localStrings = defaultStrings; 
	} else {
		for ( var s in defaultStrings ) {
			if ( undefined === localStrings[s] ) {
				localStrings[s] = defaultStrings[s];
			}
		}
	}
	
	// Move the contents to a div called 'content'.
	if (null === document.querySelector('#' + id + ' > .content')) {
		var contentContainer = document.createElement('div');
		contentContainer.setAttribute('class', 'content');
		/* There is a nicer way using the ... operator to do this, but 
			  not all browsers currently support the operator. */
		while (menuContainer.childNodes.length) { 
			contentContainer.appendChild(menuContainer.firstChild); 
		}
		menuContainer.prepend(contentContainer);
	}
	
	// Build the icon.
	var toggleIcon = document.createElement('div');
	toggleIcon.setAttribute( 'class', 'icon' );
	toggleIcon.innerHTML = '<span class="icon-show"><span class="label">' + localStrings['showmenu'] + '</span></span><span class="icon-hide"><span class="label">' + localStrings['hidemenu'] + '</span></span>';
	menuContainer.insertBefore( toggleIcon, menuContainer.childNodes[0] );
	
	// Capture and process clicks or taps.
	toggleIcon.addEventListener( 'click', function(){
		if ( menuContainer.classList.contains( 'menu-hamburger-hidden' ) ) {
			menuContainer.classList.remove( 'menu-hamburger-hidden' );
		}
		else {
			menuContainer.classList.add( 'menu-hamburger-hidden' );
		}
	} );
		
	return true;
}
