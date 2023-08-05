const navContainer = document.querySelector('.js-list');
console.log(navContainer);

navContainer.addEventListener('click', onLinkClick);

function onLinkClick(e) {
  if (e.target.nodeName !== 'A') {
    console.log('No link click');
    return;
  }

  console.log('Link click');

  const linkEls = document.querySelectorAll('.nav-link-item');
  linkEls.forEach(linkEl => {
    linkEl.classList.remove('nav-link-item-active');
  });

  e.target.classList.add('nav-link-item-active');
}
