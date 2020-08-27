'use strict';

document.addEventListener("DOMContentLoaded", function () {

  var dataProduct = [{
    title: 'Нямшука',
    supTitle: 'Сказачное заморское яство',
    volume: '0,5',
    status: null,
    list: ['10 порций', 'мышь в подарок'],
    text: 'Печень утки разварная с артишоками.',
    flavor: 'с фуа-гра'
  }, {
    title: 'Нямшука',
    supTitle: 'Сказачное заморское яство',
    volume: '2',
    status: 'disabled',
    list: ['40 порций', '2 мыши в подарок'],
    text: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    flavor: 'с рыбой'
  }, {
    title: 'Нямшука',
    supTitle: 'Сказачное заморское яство',
    volume: '5',
    status: null,
    list: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    text: 'Филе из циплят в трюфеле в бульоне.',
    flavor: 'с курой'
  }],
      wrapProduct = document.getElementById('wrapProduct');

  function render() {
    wrapProduct.textContent = '';

    dataProduct.forEach(function (product, index) {
      wrapProduct.insertAdjacentHTML('beforeend', '\n        <div class="product__item ' + (product.status === 'selected' ? product.status : product.status === 'disabled' ? product.status : '') + '">\n          <div class="product__card">\n            <div class="overlay"></div>\n            <span class="product__suptitle">' + product.supTitle + '</span>\n            <span class="product__suptitle hovered__text">Котэ не одобряет?</span>\n            <span class="product__title">' + product.title + '</span>\n            <span class="product__subtitle">' + product.flavor + '</span>\n            <ul class="product__list">\n            </ul>\n            <div class="product__volume">\n              <span class="product__volume-num">' + product.volume + '</span>\n              <span class="product__volume-text">кг</span>\n            </div>\n          </div>\n          <p class="product__buy">\n            ' + (product.status === 'selected' ? product.text : product.status === 'disabled' ? '<span style="color: #d1d152;">Печалька, ' + product.flavor + ' закончился.</span>' : 'Чего сидишь? Порадуй котэ, <span class="product__buy-link">купи.</span>') + '\n          </p>\n        </div>\n      ');
      var ul = document.querySelectorAll('.product__list')[index],
          productItem = document.querySelectorAll('.product__item')[index],
          productCard = productItem.querySelector('.product__card');
      var time = void 0;

      productCard.addEventListener('mouseleave', function () {
        clearTimeout(time);
        time = setTimeout(function () {
          productItem.classList.add('hovered');
        }, 2000);
      });
      productCard.addEventListener('mouseenter', function () {
        clearTimeout(time);
        productItem.classList.remove('hovered');
      });
      productItem.addEventListener('click', function (e) {
        if (e.target.closest('.product__buy-link') || e.target.closest('.product__card')) {
          if (product.status === 'disabled') {
            return;
          } else if (product.status === 'selected') {
            product.status = null;
          } else {
            product.status = 'selected';
          }
          render();
        }
      });
      appendTagLi(product.list, ul);
    });
  };
  render();

  function appendTagLi(array, tagToAppend) {
    for(var i = 0; i < array.length; i++) {
      tagToAppend.insertAdjacentHTML('beforeend', '<li>' + array[i] + '</li>');
    }
  }
});