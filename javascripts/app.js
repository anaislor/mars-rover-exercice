// Rover Objects Go Here
let rover1 = {
  direction : "N",
  positionX : 0,
  positionY : 0,
  travelLog : [0,0],
}

let rover2 = {
  direction : "S",
  positionX : 9,
  positionY : 9,
  travelLog : [9,9],
}

// Grid

let grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "O", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, "O", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "O", null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
]

rover1.gridPosition = grid[rover1.positionY][rover1.positionX];
rover2.gridPosition = grid[rover2.positionY][rover2.positionX];

// ======================

function turnLeft(rover){
  switch (true){
    case (rover.direction === "N"):
      rover.direction = "W"
      break;
    case (rover.direction === "W"): 
      rover.direction = "S"
      break;   
    case (rover.direction === "S"): 
      rover.direction = "E"
      break;    
    case (rover.direction === "E"): 
      rover.direction = "N"
      break;    
  } 
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch(true){
    case  (rover.direction === "N") : 
      rover.direction = "E"
      break;
    case (rover.direction === "E") : 
      rover.direction = "S"
      break;
    case (rover.direction === "S") : 
      rover.direction = "W"
      break;
    case (rover.direction === "W") : 
      rover.direction = "N"
      break;
  } 
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called");
  if(((rover.positionX < 0)|| (rover.positionX > 9)) || (rover.positionY < 0) || (rover.positionY > 9))
    { console.log("Rover is out of the grid!");
  }
  else {
    rover.travelLog.push(rover.positionX);
    rover.travelLog.push(rover.positionY);
    switch(true){
      case ((rover.direction === "N") && (rover.positionX > 0)) : 
        rover.positionY -= 1
        rover.gridPosition = grid[rover.positionY][rover.positionX]
        if(rover.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped.")
          rover.positionY += 1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          rover.positionY += 1
        }
        break;
      case rover.direction === "E" : 
        rover.positionX += 1
        rover.gridPosition = grid[rover.positionY][rover.positionX]
        if(rover.gridPosition === "O"){
          console.log("An obstacle was found. The rover stopped.")
          rover.positionX -= 1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          rover.positionX -= 1 
        }
        break;
      case rover.direction === "S" : 
        rover.positionY += 1
        rover.gridPosition = grid[rover.positionY][rover.positionX]
        if(rover.gridPosition === "O"){
          console.log("An obstacle was found. The rover stopped.")
          rover.positionY -= 1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          rover.positionY -= 1
        }
        break;
      case ((rover.direction === "W") && (rover.positionY > 0)) && !(rover.gridPosition === "O") : 
        rover.positionX -= 1
        rover.gridPosition = grid[rover.positionY][rover.positionX]
        if(rover.gridPosition === "O"){
          console.log("An obstacle was found. The rover stopped.")
          rover.positionX += 1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          rover.positionX += 1}
        break;
      default:
        console.log("Rover is out of the grid!")
        break; 
    } 
  } 
  rover.gridPosition = grid[rover.positionY][rover.positionX]
  console.log(rover.travelLog);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if(((rover.positionX < 0)|| (rover.positionX > 9)) || (rover.positionY < 0) || (rover.positionY > 9))
    { console.log("Rover is out of the grid!"); 
  } 
  else {
    rover.travelLog.push(rover.positionX);
    rover.travelLog.push(rover.positionY);
    switch(true){
      case rover.direction === "N": 
        rover.positionY += 1
        rover.gridPosition = grid[rover.positionY][rover.positionX];
        if(rover.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped."),
          rover.positionY -=1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          rover.positionY -=1;
        }
        break;
      case ((rover.direction === "E") && (rover.positionY > 0)) : 
        rover.positionX -= 1
        rover.gridPosition = grid[rover.positionY][rover.positionX];
        if(rover.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped."),
          rover.positionX +=1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          rover.positionX +=1;
        }
        break;
      case ((rover.direction === "S") && (rover.positionX > 0)) : 
        rover.positionY -= 1
        rover.gridPosition = grid[rover.positionY][rover.positionX];
        if(rover.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped."),
          rover.positionY +=1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          rover.positionY +=1;
        }
        break;
      case rover.direction === "W" : 
        rover.positionX += 1
        rover.gridPosition = grid[rover.positionY][rover.positionX];
        if(rover.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped."),
          rover.positionX -=1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          rover.positionX -=1;
        }
        break;
      default:
        console.log("Rover is out of the grid!")
        break; 
    } 
  } 
  rover.gridPosition = grid[rover.positionY][rover.positionX]
  console.log(rover.travelLog);
}

function commandsList(rover, commands){
  console.log("commandsList was called")
  for(let i = 0 ; i < commands.length ; i++){
    if (commands[i] === "l"){
      turnLeft(rover);
    }
    else if (commands[i] === "r"){
      turnRight(rover);
    }
    else if (commands[i] === "f"){
    moveForward(rover);
    }
    else if (commands[i] === "b"){
      moveBackward(rover);
    }
    else {
      console.log("Command input must be a 'l', 'r','f' or 'b'. The commands are stopped: you have to enter a new command.")
      break;
    }
  }
}

//Rover's turn

for (let i = 1 ; i <= 10 ; i++){
  if (i % 2 === 0){
    console.log("It is rover 1 turn.")
    if (i === 2){
      commandsList(rover2, "r")
    }
    if (i === 4){
      commandsList(rover2, "f")
    }
    if (i === 6){
      commandsList(rover2, "f")
    }
    if (i === 8){
      commandsList(rover2, "b")
    }
    if (i === 10){
      commandsList(rover2, "r")
    }
  }
  else{
    console.log("It is rover 2 turn.")
    if (i === 1){
      commandsList(rover1,"r")
    }
    if (i === 3){
      commandsList(rover1, "f")
    }
    if (i === 5){
      commandsList(rover1,"f")
    }
    if (i === 7){
      commandsList(rover1,"l")
    }
    if (i === 9){
      commandsList(rover1,"b")
    }
  }
}

//commandsList(rover1, "rfffbl");


