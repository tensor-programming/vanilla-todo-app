var ul = document.getElementById('list'),
  removeAll = document.getElementById('removeAll'),
  add = document.getElementById('add')

add.onclick = () => {
  addLi(ul);
};

function addLi(targetUl) {
  var inputText = document.getElementById('text').value,
    li = document.createElement('li'),
    textNode = document.createTextNode(inputText + ' '),
    removeButton = document.createElement('button');
  document.getElementById('text').value = '';

  if (inputText.split(' ').join('').length === 0) {
    alert('no input');
    return false;
  }

  removeButton.className = 'removeMe';
  removeButton.innerHTML = ' DONE!';
  removeButton.setAttribute('onclick', 'removeMe(this);');

  li.appendChild(textNode);
  li.appendChild(removeButton);

  targetUl.appendChild(li);
}


function removeMe(item) {
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}


removeAll.onclick = function() {
  ul.innerHTML = '';
};