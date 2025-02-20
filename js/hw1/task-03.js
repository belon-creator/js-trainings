const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const containerElement = document.querySelector('.gallery');

const markup = images
  .map(img => `<img src="${img.url}" alt="${img.alt}" width='300px'>`)
  .join('');

containerElement.insertAdjacentHTML('beforeend', markup);

// ==========================================================================================================

const users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const container = document.querySelector('#userList');
console.log(container);

const markup1 = users.map(user => `<li>${user}</li>`).join('');

container.insertAdjacentHTML('beforeend', markup1);

// ==========================================================================================================

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 500 },
];
const containerEl = document.querySelector('.products');
console.log(containerEl);

const markup2 = products
  .map(
    product => `<div>
      <p>${product.name}</p>
      <p>${product.price}</p>
    </div>`,
  )
  .join('');

containerEl.insertAdjacentHTML('beforeend', markup2);

// ==========================================================================================================

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Contact', link: '/contact' },
];
const container1 = document.querySelector('.nav');

const markup3 = pages
  .map(
    page => `
      <li>
        <a href="${page.link}">${page.name}</a>
      </li>
    `,
  )
  .join('');

container1.insertAdjacentHTML('beforeend', markup3);

// ==========================================================================================================

const products1 = [
  { name: 'Laptop', price: 1200, available: true },
  { name: 'Phone', price: 800, available: false },
  { name: 'Tablet', price: 500, available: true },
];

const tableContainer = document.querySelector('.product-table');

const tableMarkup = products1
  .map(
    product => `
        <tr>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.available}</td>          
        </tr>`,
  )
  .join('');

tableContainer.insertAdjacentHTML('beforeend', tableMarkup);

// ==========================================================================================================

const imgs = [
  { url: 'image1.jpg', alt: 'Image 1' },
  { url: 'image2.jpg', alt: 'Image 2' },
  { url: 'image3.jpg', alt: 'Image 3' },
];
const containerImgs = document.querySelector('.gallery-img');

const imgMarkup = imgs
  .map(
    img => `<li>
    <img src="${img.url}" alt="${img.alt}">
  </li>`,
  )
  .join('');

containerImgs.insertAdjacentHTML('beforeend', imgMarkup);
