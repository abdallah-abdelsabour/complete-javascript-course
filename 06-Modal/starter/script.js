'use strict';

// catch all element

let show_modal_btns = document.querySelectorAll('.show-modal');

let btnCloseModal = document.querySelector('.close-modal');

let overlay = document.querySelector('.overlay');

let modal = document.querySelector('.modal');

// console.log(show_modal_btn, btnCloseModal, overlay);

// modal function

const showModal = function () {
  overlay.classList.remove('hidden');

  modal.classList.remove('hidden');
};

// hide modal function

const hideModal = function () {
  overlay.classList.add('hidden');

  modal.classList.add('hidden');
};

// add eventlester to all btns

for (let l = 0; l < show_modal_btns.length; l++) {
  show_modal_btns[l].addEventListener('click', showModal);
}

//  add eventlistner to cancel an overlay

overlay.addEventListener('click', hideModal);

btnCloseModal.addEventListener('click', hideModal);

// handle esc button

// global events directly to document

document.addEventListener('keydown', ev => {
  console.log(ev);

  if (ev.key === 'Escape') {
    hideModal();
  }
});

// document.addEventListener('keypress');
