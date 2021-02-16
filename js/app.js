'use strict';
let opTime = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
let allTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let divEl = document.getElementById('cookieStand');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);

function randomGenerator(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
function header() {
  const hrEl = document.createElement('tr');
  tableEl.appendChild(hrEl);
  for (let i = 0; i < opTime.length; i++) {
    const hcEl = document.createElement('th');
    hrEl.appendChild(hcEl);
    hcEl.textContent = opTime[i];
  }}
function Branches(location, min, max, avgCookie, cookiePurArray, total) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.cookiePurArray = cookiePurArray;
  this.total = total;
  Branches.prototype.getCookiePerCust = function () {
    for (let i = 0; i < (opTime.length - 1); i++) {
      this.cookiePurArray[i] = Math.floor(randomGenerator(this.min, this.max) * this.avgCookie);
      this.total += this.cookiePurArray[i];
    }
    this.cookiePurArray[14] = this.total;
  },
  Branches.prototype.render = function () {
    this.getCookiePerCust();
    const dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);
    const dataCellEl = document.createElement('td');
    dataRowEl.appendChild(dataCellEl);
    dataCellEl.textContent = this.location;
    for (let i = 0; i < this.cookiePurArray.length; i++) {
      const dataCellEl = document.createElement('td');
      dataRowEl.appendChild(dataCellEl);
      dataCellEl.textContent = this.cookiePurArray[i];
      allTotal[i] += this.cookiePurArray[i];
    }};}
const seattle = new Branches('Seattle', 23, 65, 6.3, [], 0);
const tokyo = new Branches('Tokyo', 3, 24, 1.2, [], 0);
const dubai = new Branches('Dubai', 11, 38, 3.7, [], 0);
const paris = new Branches('Paris', 20, 38, 2.3, [], 0);
const lima = new Branches('Lima', 2, 16, 4.6, [], 0);
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
