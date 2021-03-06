'use strict';
let opTime = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
let allTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let divEl = document.getElementById('cookieStand');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);

let seattle = new Branches('Seattle', 23, 65, 6.3, [], 0);
let tokyo = new Branches('Tokyo', 3, 24, 1.2, [], 0);
let dubai = new Branches('Dubai', 11, 38, 3.7, [], 0);
let paris = new Branches('Paris', 20, 38, 2.3, [], 0);
let lima = new Branches('Lima', 2, 16, 4.6, [], 0);

function randomGenerator(min, max) {
  return Math.ceil(Math.floor(Math.random() * (max - min + 1)) + min);
}
function header() {
  let hrEl = document.createElement('tr');
  tableEl.appendChild(hrEl);
  for (let i = 0; i < opTime.length; i++) {
    let hcEl = document.createElement('th');
    hrEl.appendChild(hcEl);
    hcEl.textContent = opTime[i];
  }}
function Branches(locations, min, max, avgCookie, cookiephArr, total) {
  this.locations = locations;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.cookieAv = cookiephArr;
  this.total = total;
  Branches.prototype.avgCookiesgen = function () {
    for (let i = 0; i < (opTime.length - 2); i++) {
      this.cookieAv[i] = Math.ceil(Math.floor(randomGenerator(this.min, this.max) * this.avgCookie));
      this.total += this.cookieAv[i];
    }
    this.cookieAv[14] = this.total;
  },
  Branches.prototype.render = function () {
    this.avgCookiesgen();
    let dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);
    let dataCellEl = document.createElement('td');
    dataRowEl.appendChild(dataCellEl);
    dataCellEl.textContent = this.locations;
    for (let i = 0; i < this.cookieAv.length; i++) {
      let dataCellEl = document.createElement('td');
      dataRowEl.appendChild(dataCellEl);
      dataCellEl.textContent = this.cookieAv[i];
      allTotal[i] += this.cookieAv[i];
    }};}
function footer() {
  const footerRowEl = document.createElement('tr');
  tableEl.appendChild(footerRowEl);
  const footerCellEl = document.createElement('th');
  footerRowEl.appendChild(footerCellEl);
  footerCellEl.textContent = 'Totals';
  for (let i = 0; i < allTotal.length; i++) {
    const footCellEl = document.createElement('th');
    footerRowEl.appendChild(footCellEl);
    footCellEl.textContent = allTotal[i];
  }}
header();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
footer();

let form = document.getElementById('new');
form.addEventListener('submit', function(event){
  event.preventDefault();
  let location = event.target.newlocation.value;
  let min = event.target.minimum.value;
  let max = event.target.maximum.value;
  let avgCookie = event.target.average.value;
  let newBranch = new Branches(location,min,max,avgCookie,[], 0);
  tableEl.deleteRow(tableEl.rows.length-1);
  newBranch.render();
  footer();
  form.reset();
});

