const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);

const listChild = document.querySelectorAll('.item');

listChild.forEach(el => {
  const heading = el.querySelector('h2').textContent;
  const elCount = el.querySelectorAll('ul li').length;

  console.log(`Category: ${heading} Elements: ${elCount}`);
});

