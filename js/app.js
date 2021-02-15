'use strict';
let opTime= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm','total'];
function creatRandom(min,max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);}


const seattle={
  location:'seattle',
  min:23,
  max:65,
  avgSale:6.3,
  total:0,
  openTimer: [],
  countSales : function(){
    for (let i=0; i < (opTime.length-1 ); i++) {
      this.openTimer[i]= Math.floor(creatRandom(this.min, this.max)*this.avgSale);
      this.total += this.openTimer[i];
    }
    this.openTimer[15] = this.total;
  },
  render: function(){
    const division =document.getElementById('Salmon Cookies');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    let ulEl =document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i=0;i<opTime.length; i++){
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${opTime[i]}:${this.openTimer[i]}`;
    }
  }
};

seattle.countSales();
seattle.render();

const tokyo={
  location:'Tokyo',
  min:3,
  max:24,
  avgSale:1.2,
  total:0,
  openTimer: [],
  countSales : function(){
    for (let i=0; i < (opTime.length-1 ); i++) {
      this.openTimer[i]= Math.floor(creatRandom(this.min, this.max)*this.avgSale);
      this.total += this.openTimer[i];
    }
    this.openTimer[15] = this.total;
  },
  render: function(){
    const division =document.getElementById('Salmon Cookies');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    let ulEl =document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i=0;i<opTime.length; i++){
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${opTime[i]}:${this.openTimer[i]}`;
    }
  }
};

tokyo.countSales();
tokyo.render();

const dubai={
  location:'Dubai',
  min:11,
  max:38,
  avgSale:3.7,
  total:0,
  openTimer: [],
  countSales : function(){
    for (let i=0; i < (opTime.length-1 ); i++) {
      this.openTimer[i]= Math.floor(creatRandom(this.min, this.max)*this.avgSale);
      this.total += this.openTimer[i];
    }
    this.openTimer[15] = this.total;
  },
  render: function(){
    const division =document.getElementById('Salmon Cookies');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    let ulEl =document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i=0;i<opTime.length; i++){
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${opTime[i]}:${this.openTimer[i]}`;
    }
  }
};

dubai.countSales();
dubai.render();

const paris={
  location:'Paris',
  min:20,
  max:38,
  avgSale:2.3,
  total:0,
  openTimer: [],
  countSales : function(){
    for (let i=0; i < (opTime.length-1 ); i++) {
      this.openTimer[i]= Math.floor(creatRandom(this.min, this.max)*this.avgSale);
      this.total += this.openTimer[i];
    }
    this.openTimer[15] = this.total;
  },
  render: function(){
    const division =document.getElementById('Salmon Cookies');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    let ulEl =document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i=0;i<opTime.length; i++){
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${opTime[i]}:${this.openTimer[i]}`;
    }
  }
};

paris.countSales();
paris.render();


const lima={
  location:'Lima',
  min:2,
  max:16,
  avgSale:4.6,
  total:0,
  openTimer: [],
  countSales : function(){
    for (let i=0; i < (opTime.length-1 ); i++) {
      this.openTimer[i]= Math.floor(creatRandom(this.min, this.max)*this.avgSale);
      this.total += this.openTimer[i];
    }
    this.openTimer[15] = this.total;
  },
  render: function(){
    const division =document.getElementById('Salmon Cookies');
    console.log(division);
    const articleEl = document.createElement('article');
    division.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;
    let ulEl =document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i=0;i<opTime.length; i++){
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${opTime[i]}:${this.openTimer[i]}`;
    }
  }
};

lima.countSales();
lima.render();

