let len = document.getElementsByClassName("item").length
console.log (len);

function addListElement () {
    let itemList = document.getElementById('items');
    let newItem = document.createElement('li');
    itemList.appendChild(newItem)
    let textLi = `Item ${len+1}` 
    newItem.innerHTML = textLi
    newItem.setAttribute('class', 'item');
    len += 1;
}
document.getElementsByTagName('button')[0].onclick = addListElement;