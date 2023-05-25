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
    this.playerChar = playerChar;
    this.ComputerChar = (playerChar === 'X') ? 'O' : 'X';
    // true - Player step; fals - Computer
    // this.nextStep = (playerChar === 'X' ? true : false);
    this.freeCels = [];
    this.createField();
    console.log('Play feald', this.playField);
    this.setFreeCels();
    if (playerChar === 'O'){
      this.nextComputerStep();
    }
  }
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
      this.computerStepLevel0(cel,char);
    }
  }

  finishWithWinner(ch){
    divInfo.textContent = `Winer is ${ch}`
    divInfo.style.display = 'inline-block'
    for (let y=0; y<3; y++){
      for (let x=0; x<3; x++){
        if (this.playField[y][x].winner){
          this.playField[y][x].tag.style.backgroundColor = 'Yellow'
        }
      }
    } 
  }

  finishNoWinner(ch){
    divInfo.textContent = `Draw. There is no winner in this game`
    divInfo.style.display = 'inline-block' 
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
      console.log('----- Центр-------', nextStep);
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


let game = new Game(playerChar);

function onClickFunc(e){
  if (game.activGame){
    console.log(e, e.target);
    let x = Number(e.target.attributes.xx.nodeValue);
    let y = Number(e.target.attributes.yy.nodeValue);
    game.nextHumanStep({x, y}, game.playerChar)
  }
}

function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}

