function setup(){
  canvas = createCanvas(windowWidth, windowHeight-10);

  setupControls(); //TODO
  placeEnemies(); // TODO
  spaceship = placeSpaceShip(); //TODO
  gameObjects.push(spaceship);
}

function draw(){
  background(0);
  for (var i = 0; i < gameObjects.length; i++) {
    //console.log(gameObjects[i]);
    gameObjects[i].draw();
    gameObjects[i].update();
  }
}
