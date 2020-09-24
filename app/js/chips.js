
/*function chips(message, timeremove = 3000) {
    // if (timeremove === undefined) timeremove = 3000;
    let chips = document.createElement('div');
    chips.classList.add('chips');
    chips.innerHTML = message;
    //document.querySelector('body').appendChild(chips);
    addChips(chips);
    setTimeout(function () { deleteChips(chips) }, timeremove);
}

function deleteChips(chips) {
    chips.remove();
    let allChips = document.querySelectorAll('.chips-field .chips');
    if (allChips.length == 0) document.querySelector('.chips-field').remove();
}

function addChips(chips) {
    let chipsField = document.querySelector('.chips-field');
    if (chipsField) {
        chipsField.appendChild(chips);
    }
    else {
        let chipsField = document.createElement('div');
        chipsField.classList.add('chips-field');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);
    }
}

document.querySelector('button').onclick = function () {
    chips('hello', 5000);
}


//chips('hello');*/


/* my cod*/
 
let input = document.querySelector('input');
let close =  document.querySelector('#close');
let win = document.querySelector('.win');
let pWin = document.querySelector('.win-p');
let timer = document.querySelector('.timer');
let line = document.querySelector('.line');
 let run =document.querySelector('#run');
 let color = document.querySelector('.color');
 run.onclick = runWin;
 close.onclick = winClose;





function runWin(){
    input = input.value;
  
  pWin.style.color = `${input}`;
  timer.style.color = `${input}`;
  line.style.backgroundColor = `${input}`;
  win.style.display = 'block';
  run.style.display ='none';
  color.innerHTML = 'спасибо за просмотр';
  
 
  setTimeout(inclose,10000);
  setTimeout(winCloseBig,30000);
  setInterval(timerClose,1000);

}
function inclose(){
    close.style.display = 'block';
}

function winClose(){
    win.style.display = 'none';
  //  run.style.display ='block';
}
function winCloseBig(){
    win.style.display = 'none';
    //run.style.display ='block';
}

let count = 30;
let lineCount = 300;
function timerClose(){
    
    count -- ;
    lineCount = lineCount - 10;
    if(count <=0){
        return false;
    }
    else{
        timer.innerHTML = `${count}`;
        line.style.width = lineCount + 'px' ;
    }
   
}

