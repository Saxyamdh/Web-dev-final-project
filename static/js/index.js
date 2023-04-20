//changing creatine's images
const creatine = document.getElementById('creatine');
const images = ['../static/pictures/creatine3.jpeg', '../static/pictures/creatine-powder2.jpeg', '../static/pictures/creatine1.jpeg'];

let index = 0;
setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  creatine.style.opacity = 0.02 
  setTimeout(() => {
    creatine.src = images[index]
    creatine.style.opacity = 1
  }, 2000)
}, 7000)


//changing whey's images
const whey = document.getElementById('whey')
const imagesTwo = ['../static/pictures/whey.jpeg', '../static/pictures/whey2.jpeg', '../static/pictures/whey3.jpeg']

let indexTwo = 0
setInterval(() => {
  indexTwo++;
  if (indexTwo >= imagesTwo.length) {
    indexTwo = 0
  }
  whey.style.opacity = 0.02;
  setTimeout(() => {
    whey.src = imagesTwo[indexTwo]
    whey.style.opacity = 1
  }, 2000)
}, 7000)

window.onscroll = function() {
    
  const wheyIndex = Math.floor(window.scrollY / window.innerHeight) % imagesTwo.length
  indexTwo = wheyIndex
  whey.src = imagesTwo[indexTwo]
};


//creating a nutritionn  tip bar
//creatine
const nutritionTooltip = document.querySelector('.nutrition-tooltip')

creatine.addEventListener('mouseenter', showTooltip)
creatine.addEventListener('mouseout', hideTooltip)

function showTooltip() {
  nutritionTooltip.style.left = '-200px'
  nutritionTooltip.style.visibility = 'visible'
  nutritionTooltip.style.opacity = '1'
}

function hideTooltip() {
  nutritionTooltip.style.visibility = 'hidden'
  nutritionTooltip.style.opacity = '0'
}


//whey
const wheyTooltip = document.querySelector('.tooltip-whey')
const wheyImage = document.querySelector('#whey')

wheyImage.addEventListener('mouseenter', showTooltiptwo)

wheyImage.addEventListener('mouseout',hideTooltiptwo)

function showTooltiptwo(){
  wheyTooltip.style.left = `-200px`
  wheyTooltip.style.visibility=`visible`
  wheyTooltip.style.opacity = '1'
};

function hideTooltiptwo(){
    wheyTooltip.style.visibility = 'hidden'
    wheyTooltip.style.opacity = '0'
}