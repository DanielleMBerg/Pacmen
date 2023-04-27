const pacMen = [];
const LEFT_OPEN = './PacMan3.png';
const LEFT_CLOSED = './PacMan4.png';
const RIGHT_OPEN = './PacMan1.png';
const RIGHT_CLOSED = './PacMan2.png';


function positionSetToRandom(scale) {
return {
  x: Math.random() * scale + 100,
  y: Math.random() * scale + 100,
};
}

function velocitySetToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
  }

function makePac() {
  const isMouthOpen = true;
  let velocity = velocitySetToRandom(20);
  let position = positionSetToRandom(200);
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './PacMan1.png';
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  game.appendChild(newimg);
  return {
    position,
    velocity,
    newimg,
    isMouthOpen
  };
}

function update() {
  pacMen.forEach((item) => {
  checkCollisions(item);
  changeImageDirection(item);

  item.position.x += item.velocity.x;
  item.position.y += item.velocity.y;

  item.newimg.style.left = item.position.x;
  item.newimg.style.top = item.position.y;
  
});
setTimeout(update, 100);
}


function changeImageDirection(item){
  item.isMouthOpen = !item.isMouthOpen;
  if (item.velocity.x > 0) {
    if (item.isMouthOpen) {
      item.newimg.src = RIGHT_CLOSED;
    } else {
      item.newimg.src = RIGHT_OPEN;
    } 
  } else if (item.velocity.x <= 0) {
    if (item.isMouthOpen) {
      item.newimg.src = LEFT_CLOSED;
    } else {
      item.newimg.src = LEFT_OPEN;
    } 
  }
}

function checkCollisions(item) {
if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
  item.position.x + item.velocity.x < 0) {
  item.velocity.x = -item.velocity.x;
  }
if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
  item.position.y + item.velocity.y < 100) {
  item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac());
}
