const table       = document.querySelector('#table');
const tbody       = table.getElementsByTagName('tbody')[0];
const divInfo    = document.querySelector('#info');
const divNextgame = document.querySelector('#nextgame')

let levelChoice = 0;
let playerChar = 'X'

class Game{
  constructor(playerChar){
    this.activGame = true;
    this.playField=[
                    ['','',''],
                    ['','',''],
                    ['','','']
                  ];
    this.playerChar;
    this.ComputerChar;
    this.level;
    this.startDialogXO();
    this.freeCels = [];
  }

  welcomeScreen(){

  }
  startDialogXO(){
    let question = document.createElement('div');
    question.style.fontFamily = 'Pangolin';
    question.style.fontSize = '30px';
    question.style.color = 'white';
    question.textContent = "Choose which one to play with:";

    let buttonX = document.createElement('button');
    buttonX.textContent = 'X';
    buttonX.style.fontSize = '35px';
    buttonX.style.borderRadius = '40%';
    buttonX.style.backgroundColor ='rgb(20, 52, 254)';
    buttonX.style.color = 'white';
    buttonX.style.margin = '0 20px';
    buttonX.addEventListener('click', choiceXO);
    buttonX.name='X';
    console.log(buttonX);

    let buttonO = document.createElement('button');
    buttonO.textContent = 'O';
    buttonO.style.fontSize = '35px';
    buttonO.style.borderRadius = '40%';
    buttonO.style.backgroundColor ='rgb(20, 52, 254)';
    buttonO.style.color = 'white';
    buttonO.addEventListener('click', choiceXO);
    buttonO.name='O';

    // ÷divInfo.textContent = "Choose which one to play with: ";
    divInfo.appendChild(question);
    divInfo.appendChild(buttonX);
    divInfo.appendChild(buttonO);
    divInfo.style.display = 'inline-flex';
    divInfo.style.flexWrap = 'wrap';
    divInfo.style.justifyContent = 'space-around';
    divInfo.style.alignItems = 'center';
  }

  startDialogLevel(){
    divInfo.textContent = "";
    let divText = document.createElement('div');
    divText.style.display = 'display-flex';
    divText.style.fontFamily = 'Pangolin';
    divText.style.fontSize = '30px';
    divText.style.color = 'white';
    // divText.style.marginTop = '20px';
    divText.style.marginRight = '20px';
    divText.textContent = "Choose difficulty level (1-10)";
    divInfo.appendChild(divText);

    let divLevels = document.createElement('div');
    divLevels.style.display = 'inline-flex';
    divLevels.style.alignItems = 'center'
    divInfo.appendChild(divLevels);

    for (let i=1; i<=10; i++){
      let newButton = document.createElement('button');
      newButton.style.fontSize = '35px';
      newButton.style.width = `${15+2*i}px`;
      newButton.style.height = `${15+2*i}px`;
      newButton.style.borderRadius = '50%';
      newButton.style.backgroundColor ='rgb(20, 52, 254)';
      newButton.name = i;
      newButton.addEventListener('click', choiceLevel);
      console.log(newButton);
      divLevels.appendChild(newButton);
    }
  }




// Game
  setFreeCels(){
    this.freeCels=[];
    for (let y = 0 ; y < 3; y++){
      for (let x=0; x < 3; x++){
        // console.log();
        if (!Boolean(this.playField[y][x].char)){
          this.freeCels.push({x,y});
        }
      }
    } 
  }

  nextHumanStep(cel,char){
    this.nextStepFunc(cel,char);
    this.whatDoOnGameStatus ();
    this.nextComputerStep(cel,char);
    this.whatDoOnGameStatus ();
  }

  whatDoOnGameStatus(){
    let gStatus = this.gameStatus();
    if (gStatus === 'F'){
      this.activGame = false;
      this.finishNoWinner();
    } else if(gStatus === 'X' || gStatus ==='O'){
      this.activGame = false;
      this.finishWithWinner(gStatus);
    }
  }

  nextComputerStep(cel,char){
    if (this.activGame){
      let i = rndRange (0,10);
      if (i <= this.level){
        this.computerStepLevel0(cel,char);
      } else {
        this.computerStepLevel1(cel,char);
      }
    }
  }

  finishWithWinner(ch){
    divInfo.textContent = `Winer is ${ch}`
    divInfo.style.display = 'inline-block'
    divInfo.style.fontFamily = 'Pangolin';
    divInfo.style.fontSize = '30px';
    divInfo.style.color = 'white';

    for (let y=0; y<3; y++){
      for (let x=0; x<3; x++){
        if (this.playField[y][x].winner){
          this.playField[y][x].tag.style.backgroundColor = 'Yellow'
        }
      }
    } 
    // this.rePlayGame();
  }

  finishNoWinner(ch){
    divInfo.textContent = `Draw. There is no winner in this game`
    divInfo.style.display = 'inline-block' 
    divInfo.style.fontFamily = 'Pangolin';
    divInfo.style.fontSize = '30px';
    divInfo.style.color = 'white';
    // this.rePlayGame();
  }

  rePlayGame(){
    let next = document.createElement('div');
    next.style.width = '200px';
    next.style.height = '200px';
    next.style.backgroundColor = 'rgba(69, 70, 109, 0.7)';
    next.style.position = 'absolute';
    next.style.zIndex = '20';
    next.style.margin = 'auto';
    divInfo.appendChild(next);
  }


  nextStepFunc(cel,char){
    console.log('Next step cell ***',cel, char, this.freeCels.length);
    if (!Boolean(this.playField[cel.y][cel.x].char)){
      this.playField[cel.y][cel.x].char = char;
      this.playField[cel.y][cel.x].tag.textContent = char;
      return true;
    } else {
      alert('This cell is already taken. Choose another')
      return false;
    }
  }

  computerStepLevel1(cel,char){
    this.setFreeCels();
    let nextStep = this.freeCels[rndRange(0,this.freeCels.length-1)];
    this.nextStepFunc(nextStep,this.ComputerChar)
  }

  computerStepLevel0(cel,char){
    this.setFreeCels();
    let nextStep = '';
    if (cel.x === 1 && cel.y ===1){
      if (this.playField[0][0].char === char){
        nextStep = {x:2,y:2};
      } else if (this.playField[0][1].char === char){
        nextStep = {x:1,y:2};
      } else if (this.playField[0][2].char === char){
        nextStep = {x:0,y:2};
      } else if (this.playField[1][0].char === char){
        nextStep = {x:2,y:1};
      } else if (this.playField[1][2].char === char){
        nextStep = {x:0,y:1};
      } else if (this.playField[2][0].char === char){
        nextStep = {x:2,y:0};
      } else if (this.playField[2][1].char === char){
        nextStep = {x:1,y:0};
      } else if (this.playField[2][2].char === char){
        nextStep = {x:0,y:0};
      } 
    } else if(cel.x === 0 && cel.y ===0){
      if (this.playField[1][1].char === char){
        nextStep = {x:2,y:2};
      } else if (this.playField[2][2].char === char){
        nextStep = {x:1,y:1};
      }
    } else if(cel.x === 2 && cel.y ===0){
      if (this.playField[1][1].char === char){
        nextStep = {x:0,y:2};
      } else if (this.playField[2][0].char === char){
        nextStep = {x:1,y:1};
      }
    } else if(cel.x === 0 && cel.y ===2){
      if (this.playField[1][1].char === char){
        nextStep = {x:2,y:0};
      } else if (this.playField[0][2].char === char){
        nextStep = {x:1,y:1};
      }
    } else if(cel.x === 2 && cel.y ===2){
      if (this.playField[1][1].char === char){
        nextStep = {x:0,y:0};
      } else if (this.playField[0][0].char === char){
        nextStep = {x:1,y:1};
      }
    } 
    if (!Boolean(nextStep)){
      if (this.playField[0][cel.x].char === char && this.playField[1][cel.x].char === char && this.playField[2][cel.x].char != this.ComputerChar){
        nextStep = {x:cel.x,y:2};
      } else if (this.playField[0][cel.x].char === char && this.playField[2][cel.x].char === char && this.playField[1][cel.x].char != this.ComputerChar){
        nextStep = {x:cel.x,y:1};
      } else if (this.playField[1][cel.x].char === char && this.playField[2][cel.x].char === char && this.playField[0][cel.x].char != this.ComputerChar){
        nextStep = {x:cel.x,y:0};
      } else if (this.playField[cel.y][0].char === char && this.playField[cel.y][1].char === char && this.playField[cel.y][2].char != this.ComputerChar){
        nextStep = {x:2,y:cel.y};
      } else if (this.playField[cel.y][0].char === char && this.playField[cel.y][2].char === char && this.playField[cel.y][1].char != this.ComputerChar){
        nextStep = {x:1,y:cel.y};
      } else if (this.playField[cel.y][1].char === char && this.playField[cel.y][2].char === char && this.playField[cel.y][0].char != this.ComputerChar){
        nextStep = {x:0,y:cel.y};
      }
    }

    if (!Boolean(nextStep)){
      nextStep = this.freeCels[rndRange(0,this.freeCels.length-1)];
    }
    if (Boolean(this.playField[nextStep.y][nextStep.x].char) ){
      nextStep = this.freeCels[rndRange(0,this.freeCels.length-1)];
    }
    this.nextStepFunc(nextStep,this.ComputerChar)
  }

  createField(){
    for (let y=0; y<3; y++){
        let newTr = document.createElement('tr');
        for (let x=0; x<3; x++){
          let newTd = document.createElement('td');
          this.playField[y][x]={
                          char:'',
                          tag:newTd,
                          winner:false
                        }
          newTd.classList.add('cel');
          newTd.setAttribute ('xx',x);
          newTd.setAttribute ('yy',y);
          newTd.style.fontFamily = 'Pangolin';
          newTd.style.fontSize = '80px';
          newTd.style.color = 'white';
          newTd.textContent = '';
          newTd.addEventListener('click', onClickFunc);
          newTr.appendChild (newTd);
        }
        tbody.appendChild(newTr);
    }
  }

  isFreeCels(){
    return this.freeCels.length > 0 ? true : false;
  }
  
  gameStatus(){
    this.setFreeCels();
    //See if there is a winner. If there is, select the winning cells and return the winner icon.
    for (let ch of ['X','O']){
      console.log('ch', ch);
      for (let i = 0; i < 3; i++){
        if (this.playField[i][0].char === ch && this.playField[i][1].char === ch && this.playField[i][2].char === ch){
          this.playField[i][0].winner = true;
          this.playField[i][1].winner = true;
          this.playField[i][2].winner = true;
          return ch;
        }
        
        if (this.playField[0][i].char === ch && this.playField[1][i].char === ch && this.playField[2][i].char === ch){
          this.playField[0][i].winner = true;
          this.playField[1][i].winner = true;
          this.playField[2][i].winner = true;
          return ch;

        }
      }
      if (this.playField[0][0].char === ch && this.playField[1][1].char === ch && this.playField[2][2].char === ch){
        this.playField[0][0].winner = true;
        this.playField[1][1].winner = true;
        this.playField[2][2].winner = true;
        return ch;
      } 
      if (this.playField[0][2].char === ch && this.playField[1][1].char === ch && this.playField[2][0].char === ch){
        this.playField[0][2].winner = true;
        this.playField[1][1].winner = true;
        this.playField[2][0].winner = true;
        return ch;
      }
    }
    // If there is no winner and the cells are over, we return ('F')
    if (!this.isFreeCels()){
      return 'F'
    }
    // If the game can be continued, return (false)
    return false;
  }
  
}

// Start the game
let game = new Game(playerChar);

//Waiting for the player's next turn
function onClickFunc(e){
  if (game.activGame){
    console.log(e, e.target);
    let x = Number(e.target.attributes.xx.nodeValue);
    let y = Number(e.target.attributes.yy.nodeValue);
    game.nextHumanStep({x, y}, game.playerChar)
  }
}

// Waiting for the choice of whose turn will be the first
function choiceXO(e){
  game.playerChar = e.target.name;
  game.ComputerChar = (game.playerChar === 'X') ? 'O' : 'X';
  game.startDialogLevel();
}

// We are waiting for the choice of difficulty level
function choiceLevel(e){
  divInfo.style.display = 'none';
  game.level=Number(e.target.name);
  game.createField();
  game.setFreeCels();
  if (game.playerChar === 'O'){
    game.nextComputerStep({x:0,y:0},'X');
  }

}

function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}

