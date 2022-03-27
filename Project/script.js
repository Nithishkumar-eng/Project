var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let tEce=tCse=tEee=tMech=tCivil=0;
let Arrayece = document.querySelectorAll(".ece");
let Arraycse = document.querySelectorAll(".cse");
let Arrayeee = document.querySelectorAll(".eee");
let Arraymech = document.querySelectorAll(".mech");
let Arraycivil= document.querySelectorAll(".civil");
for(let i=0;i<Arrayece.length;i++){
    tEce+=Number(Arrayece[i].innerHTML);
}
document.querySelector(".totalece").innerHTML=tEce;

for(let i=0;i<Arraycse.length;i++){
    tCse+=Number(Arraycse[i].innerHTML);
}
document.querySelector(".totalcse").innerHTML=tCse;

for(let i=0;i<Arrayeee.length;i++){
    tEee+=Number(Arrayeee[i].innerHTML);
}
document.querySelector(".totaleee").innerHTML=tEee;

for(let i=0;i<Arraymech.length;i++){
    tMech+=Number(Arraymech[i].innerHTML);
}
document.querySelector(".totalmech").innerHTML=tMech;

for(let i=0;i<Arraycivil.length;i++){
    tCivil+=Number(Arraycivil[i].innerHTML);
}
document.querySelector(".totalcivil").innerHTML=tCivil;

// Adding upcoming drive dynamically

function addCompany(){

    let cname = document.getElementById('companyName').value;
    let due = document.getElementById('lastDate').value;
    let link = document.getElementById('applyLink').value;

    let upcomingDrive=document.querySelector('.upcoming-drives');
    let div = document.createElement('div');
    div.classList.add('card');

    let h4 = document.createElement('h4');
    let h4c=document.createTextNode(cname);
    h4.appendChild(h4c);
    div.appendChild(h4);

    let p =document.createElement('p');
    let text = document.createTextNode("Last date to apply : ");
    p.appendChild(text);
    div.appendChild(p);

    let span = document.createElement('span');
    let day = document.createTextNode(due);
    span.appendChild(day);
    div.appendChild(span);

    let p2=document.createElement('p');
    let a = document.createElement('a');
    let click = document.createTextNode("click here to apply");
    a.appendChild(click);
    let attr = document.createAttribute('href');
    attr.value=link;
    a.setAttributeNode(attr);
    p2.appendChild(a);
    div.appendChild(p2);

    upcomingDrive.appendChild(div)
   

}
function removeCompany(event){
    let span = event.target.currentTarget;
    span.parentNode.style.display = 'none';
}

//ADD NEW RECORD
function newRecord(){
    
    let i1=document.getElementById('sno').innerHTML;
    // let i2 = document.getElementById('NewCompanyName').value;
    // let i3 = document.getElementById('ece').value;
    // let i4 = document.getElementById('cse').value;
    // let i5 = document.getElementById('eee').value;
    // let i6 = document.getElementById('mech').value;
    // let i7 = document.getElementById('civil').value;
    let row = document.createElement('tr');
    // let c1 = document.createElement('td');
    // let c1data = document.createTextNode(i1);
    // c1.appendChild(c1data);
    // row.appendChild(c1);
    // let table = document.getElementById('table');
    let last = document.getElementById('totals');
}
