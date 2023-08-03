const navContaiter = document.querySelector('.js-list');
console.log(navContaiter);

navContaiter.addEventListener('click', onLinkClick);

function onLinkClick(e) {
  e.preventDefault();
  console.log();
  if (e.target.nodeName !== 'A') {
    console.log('No link click');
    return;
  }
  console.log('Link click');
}
