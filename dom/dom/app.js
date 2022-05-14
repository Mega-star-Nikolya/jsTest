// const btn = document.querySelector('#jsBtn');
// const num = document.querySelector('#jsNum');
// const list = document.querySelector('#jsList');
// 
// btn.addEventListener('click', function() {
//     const newItem = document.createElement('div');
//     newItem.classList.add('item');
//     newItem.textContent = num.value;
// 
//     list.appendChild(newItem);
// 
//     num.value = '';
// });

const inputNum = document.querySelector('.input__namber');
const inputColor = document.querySelector('.input__color');
const container = document.querySelector('.container');

function getElemWithClass(tag, ...className) {
  const node = document.createElement(tag);
  className.forEach((_className) => {
    node.classList.add(_className);
  });
  return node;
}

function createContent() {
    let content = document.querySelector('.blocks');
  // находим элемент с классом .blocks - удаляет его после создания, что бы не было новых блоков
  if (content !== null) { // если мы его нашли, то удаляем
    content.remove();
    }

  content = getElemWithClass('div', 'blocks'); // создаём div с классом .blocks
  container.append(content); // вставляем .content в наш контейнер
  return content;
}

function createBlocks(quantity) {
  const content = createContent();
  for (let i = 1; i <= quantity; i++) { // в цикле от 1 до value, которое ввели
    const item = getElemWithClass('div', 'item'); // создаём новый div с классом .item
    item.innerHTML = i; // содержимое этого .block равно i
    content.append(item); // вставляем этот .block в .content
  }

}

inputNum.addEventListener('input', (e) => {
  const value = e.target.value; // введённое значение в input
  if (value > 100) return false; // если введенное значение > 100, то завершить функцию обработчика
  createBlocks(value);
});

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
}

let changed = false;

inputColor.addEventListener("change", e => {
  const color = e.target.value; // введённое значение в input color
  const items = document.querySelectorAll(".item"); // ищем все item(блочки)

  changed = !changed;

  for (let i = 0; i < items.length; i++) { // проходимся по свем блочкам
    const currentBlock = items[i]; // сохраняем текущий блок в переменную items[i]
    const blockNumber = i + 1;
    let colorToApply = "";

    if (changed) {
      colorToApply = blockNumber % 2 !== 0 ? color : "#fff"
    } else {
      colorToApply = blockNumber % 2 == 0 ? color :"#fff"
    }
    colorTheBlock(currentBlock, colorToApply);
  }
});

//  console.log(items);