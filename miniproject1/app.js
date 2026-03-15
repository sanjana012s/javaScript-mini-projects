let btn = document.querySelector('button');

let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function () {
  let item=document.createElement('li');
  item.innerText=inp.value;
    let delBtn=document.createElement('button');
    delBtn.innerText='Delete';
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value=''
});
ul.addEventListener('click', function (e) {
  if (e.target.nodeName=='BUTTON') {
    e.target.parentElement.remove();
    console.log("deleted")
    
  }
})