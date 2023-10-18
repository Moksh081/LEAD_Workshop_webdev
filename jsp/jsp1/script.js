const btn = document.getElementById("btn");
const body = document.querySelector("body");
const col = ['red','violet','green','yellow','pink','blue']

let ci = 0;
btn.addEventListener('click',changebg);
function changebg(){
    document.body.style.backgroundColor = col[ci];
          ci = (ci + 1)%col.length;
}