'use strict';
function creatRandom(min,max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);}

const seattle={
  location:'seattle',
  min:23,
  max:65,
  avgSale:6.3,
  total:0,
  openTimer: [],
  opTime: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm','total'],
  countSales : function(){
    for (let i=0; i < ( this.opTime.length -1 ); i++) {
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
    for (let i=0;i<this.opTime.length; i++){
      let liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`${this.opTime[i]}:${this.openTimer[i]}`;
    }
  }
};

seattle.countSales();
seattle.render();
