function addEvent(object, type, callback) {
  if (object == null || typeof (object) === 'undefined') {
    return;
  }
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  }
  else if (object.attachEvent) {
    object.attachEvent(`on${type}`, callback);
  }
  else {
    object[`on${type}`] = callback;
  }
}

function toggleMobileMenuState(menuId, footerId, classMenuToAdd, classFooterToAdd) {
  const menuElement = document.getElementById(menuId);
  const footerElement = document.getElementById(footerId);
  document.addEventListener('click', (event) => {
    const isClickInside = menuElement.contains(event.target);
    if (isClickInside && window.innerWidth < 768) {
      menuElement.classList.add(classMenuToAdd);
      footerElement.classList.add(classFooterToAdd);
    }
    else {
      menuElement.classList.remove(classMenuToAdd);
      footerElement.classList.remove(classFooterToAdd);
    }
  });
  addEvent(window, 'resize', () => {
    if (window.innerWidth >= 768) {
      menuElement.classList.remove(classMenuToAdd);
      footerElement.classList.remove(classFooterToAdd);
    }
  });
  addEvent(window, 'scroll', () => {
    menuElement.classList.remove(classMenuToAdd);
    footerElement.classList.remove(classFooterToAdd);
  });
}

toggleMobileMenuState('navigationId', 'footerId', 'mobile-menu', 'mobile-menu-footer');
