const ad = document.querySelectorAll('li');
ad.forEach((item,index) => {
    // console.log(item,index);
    item.addEventListener('click', function(e){
        // console.log(e.target);
    })
})
const a1 =  document.getElementById("a1");
const a2 =  document.querySelector(".a2");
const a3 =  document.querySelector(".a3");
// console.log(a1);
a1.style = "background: blue";
a1.classList.add('test');
a1.classList.remove('abc');
console.log(a1.getAttribute('class'));
console.log(a1.innerText);

var tx =0;
a2.addEventListener('click',(e)=> {
    tx += 100;
    console.log('da ck');
    a2.style.transform = `translateX(${tx}%)`;
})
a3.addEventListener('click',(e)=> {
    e.stopPropagation();
  
    console.log('clock a3');
})
const newDiv = document.createElement('div');
newDiv.classList.add('test');
newDiv.innerHTML = "<h1>aâ</h1>";
// console.log(newDiv);
document.body.appendChild(newDiv);
// document.body.appendChild(newDiv);

document.body.removeChild(newDiv)
// const htmlco = document.getElementsByTagName('li');
// console.log(htmlco);



// li.forEach(item => { console.log(item); })

const ul = document.querySelector('ul');
console.log(ul.childNodes);


document.body.addEventListener('click',()=> {
    console.log('clock boduh');
})