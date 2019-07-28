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
    case (this.direction === "N"):
      this.direction = "W"
      break;
    case (this.direction === "W"): 
      this.direction = "S"
      break;   
    case (this.direction === "S"): 
      this.direction = "E"
      break;    
    case (this.direction === "E"): 
      this.direction = "N"
      break;    
  } 
  console.log("turnLeft was called!");
}

rover1.l = turnLeft;
rover2.l = turnLeft;

function turnRight(rover){
  switch(true){
    case  (this.direction === "N") : 
      this.direction = "E"
      break;
    case (this.direction === "E") : 
      this.direction = "S"
      break;
    case (this.direction === "S") : 
      this.direction = "W"
      break;
    case (this.direction === "W") : 
      this.direction = "N"
      break;
  } 
  console.log("turnRight was called!");
}

rover1.r = turnRight;
rover2.r = turnRight;

function moveForward(rover){
  console.log("moveForward was called");
  if(((this.positionX < 0)|| (this.positionX > 9)) || (this.positionY < 0) || (this.positionY > 9))
    { console.log("Rover is out of the grid!");
  }
  else {
    this.travelLog.push(this.positionX);
    this.travelLog.push(this.positionY);
    switch(true){
      case ((this.direction === "N") && (this.positionX > 0)) : 
        this.positionY -= 1
        this.gridPosition = grid[this.positionY][this.positionX]
        if(this.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped.")
          this.positionY += 1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          this.positionY += 1
        }
        break;
      case this.direction === "E" : 
        this.positionX += 1
        this.gridPosition = grid[this.positionY][this.positionX]
        if(this.gridPosition === "O"){
          console.log("An obstacle was found. The rover stopped.")
          this.positionX -= 1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          this.positionX -= 1 
        }
        break;
      case this.direction === "S" : 
        this.positionY += 1
        this.gridPosition = grid[this.positionY][this.positionX]
        if(this.gridPosition === "O"){
          console.log("An obstacle was found. The rover stopped.")
          this.positionY -= 1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          this.positionY -= 1
        }
        break;
      case ((this.direction === "W") && (this.positionY > 0)) && !(this.gridPosition === "O") : 
        this.positionX -= 1
        this.gridPosition = grid[this.positionY][this.positionX]
        if(this.gridPosition === "O"){
          console.log("An obstacle was found. The rover stopped.")
          this.positionX += 1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          this.positionX += 1}
        break;
      default:
        console.log("Rover is out of the grid!")
        break; 
    } 
  } 
  this.gridPosition = grid[this.positionY][this.positionX]
  console.log(this.travelLog);
}

rover1.f = moveForward;
rover2.f = moveForward;

function moveBackward(rover){
  console.log("moveBackward was called");
  if(((this.positionX < 0)|| (this.positionX > 9)) || (this.positionY < 0) || (this.positionY > 9))
    { console.log("Rover is out of the grid!"); 
  } 
  else {
    this.travelLog.push(this.positionX);
    this.travelLog.push(this.positionY);
    switch(true){
      case this.direction === "N": 
        this.positionY += 1
        this.gridPosition = grid[this.positionY][this.positionX];
        if(this.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped."),
          this.positionY -=1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          this.positionY -=1;
        }
        break;
      case ((this.direction === "E") && (this.positionY > 0)) : 
        this.positionX -= 1
        this.gridPosition = grid[this.positionY][this.positionX];
        if(this.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped."),
          this.positionX +=1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          this.positionX +=1;
        }
        break;
      case ((this.direction === "S") && (this.positionX > 0)) : 
        this.positionY -= 1
        this.gridPosition = grid[this.positionY][this.positionX];
        if(this.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped."),
          this.positionY +=1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          this.positionY +=1;
        }
        break;
      case this.direction === "W" : 
        this.positionX += 1
        this.gridPosition = grid[this.positionY][this.positionX];
        if(this.gridPosition === "O"){
          console.log("An obstacle was found. The rover stoped."),
          this.positionX -=1
        }
        else if((rover1.positionY && rover1.positionX) === (rover2.positionY && rover2.positionX)){
          console.log("Rover is going to run into another rover. You have to stop")
          this.positionX -=1;
        }
        break;
      default:
        console.log("Rover is out of the grid!")
        break; 
    } 
  } 
  this.gridPosition = grid[this.positionY][this.positionX]
  console.log(this.travelLog);
}

rover1.b = moveBackward;
rover2.b = moveBackward;

function commandsList1(commands){
  console.log("commandsList was called")
  for(let i = 0 ; i < commands.length ; i++){
    if (commands[i] === "l"){
      rover1.l();
    }
    else if (commands[i] === "r"){
      rover1.r();
    }
    else if (commands[i] === "f"){
    rover1.f();
    }
    else if (commands[i] === "b"){
      rover1.b();
    }
    else {
      console.log("Command input must be a 'l', 'r','f' or 'b'. The commands are stoped: you have to enter a new command.")
      break;
    }
  }
}

function commandsList2(commands){
  console.log("commandsList was called")
  for(let i = 0 ; i < commands.length ; i++){
    if (commands[i] === "l"){
      rover2.l();
    }
    else if (commands[i] === "r"){
      rover2.r();
    }
    else if (commands[i] === "f"){
      rover2.f();
    }
    else if (commands[i] === "b"){
      rover2.b();
    }
    else {
      console.log("Command input must be a 'l', 'r','f' or 'b'. The commands are stoped: you have to enter a new command.")
      break;
    }
  }
}

//Rover's turn

for (let i = 1 ; i <= 10 ; i++){
  if (i % 2 === 0){
    console.log("It is rover 1 turn.")
    if (i === 2){
      commandsList1("r")
    }
    if (i === 4){
      commandsList1("f")
    }
    if (i === 6){
      commandsList1("f")
    }
    if (i === 8){
      commandsList1("l")
    }
    if (i === 10){
      commandsList1("b")
    }
  }
  else{
    console.log("It is rover 2 turn.")
    if (i === 1){
      commandsList2("r")
    }
    if (i === 3){
      commandsList2("f")
    }
    if (i === 5){
      commandsList2("f")
    }
    if (i === 7){
      commandsList2("b")
    }
    if (i === 9){
      commandsList2("r")
    }
  }
}

//commandsList2("rfffffffrffffff");


//commandsList1("rrfffflffrrb");

