import {
  MAIN_DIV,
  MAIN_COLOR,
} from '../constants';

function handlerDiv(node) {
  if (!node.tagName) return;

  node.classList.add(MAIN_DIV);

  let { backgroundColor: bgColor, width, height } = getComputedStyle(node);

  bgColor = bgColor === '#ebebeb' ? MAIN_COLOR : bgColor;

  node.style.backgroundColor = 'rgb(97, 64, 64)';
}

export default handlerDiv;
