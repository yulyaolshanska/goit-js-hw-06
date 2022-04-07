// Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

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

const galleryEl = document.querySelector(".gallery");

function makeImgGallery(images, gallery) {
  const newImages = images.map(image => `<li><img src="${image.url}" alt="${image.alt}"  ></li><style type="text/css">
   ul { 
  display: flex;
  list-style: none;
   }
   li {margin: 10px;
  max-width: 500px;}
   img {
    max-width: 100%
   }
  </style>`
).join("");
  
  console.log(newImages)
  gallery.insertAdjacentHTML("afterbegin", newImages);
}
makeImgGallery(images, galleryEl)