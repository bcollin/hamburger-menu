
function menuHamburger( id, localStrings ) {
	const menuContainer = document.getElementById( id );
	
	if ( null === menuContainer ) {
		return false;
	}

	return menuHamburgerObject( menuContainer, localStrings );
}

function menuHamburgerObject( menuContainer, localStrings ) {
	menuContainer.classList.add( 'menu-hamburger-hidden' );
	
	const defaultStrings = {'showmenu': 'Show menu', 'hidemenu': 'Hide menu'};
	
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
	const children = menuContainer.children;
	let hasContentWrapper = false;
	for ( var i = 0; i < children.length; i++ ) {
		if ( children.item( i ).classList.contains( 'content' ) ) {
			hasContentWrapper = true;
		}
	}
	if ( ! hasContentWrapper ) {
		const contentContainer = document.createElement('div');
		contentContainer.setAttribute('class', 'content');
		/* There is a nicer way using the ... operator to do this, but 
			  not all browsers currently support the operator. */
		while (menuContainer.childNodes.length) { 
			contentContainer.appendChild(menuContainer.firstChild); 
		}
		menuContainer.prepend(contentContainer);
	}
	
	// Build the icon.
	const toggleIcon = document.createElement('button');
	toggleIcon.setAttribute( 'class', 'icon' );
	toggleIcon.innerHTML = '<span class="icon-show"><img src="icon-open.svg" alt="' + localStrings['showmenu'] + '" width="16" height="16"></span><span class="icon-hide"><img src="icon-close.svg" alt="' + localStrings['hidemenu'] + '" width="16" height="16"></span>';
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
