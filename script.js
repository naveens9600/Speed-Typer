let word = document.getElementById('word');
let inword = document.getElementById('inword');
let score = document.getElementById('score');
let time = document.getElementById('time');
const endgameElement = document.getElementById("end-game-container");



let randomword;
let score1 = 0;
let time1 = 20;
let difficulty="";
const timeInterval = setInterval(updateTime, 1000);

const words = [
  "hi",
  "snake",
  "airplane",
  "ball",
  "pies",
  "juice",
  "game",
  "class",
  "document",
  "machine",
  "fullstack",
  "admit",
  "cat",
  "metro"
]

function Getrandomwords() {
  return words[Math.floor(Math.random() * words.length)]
}

function wordtodom() {
  randomword = Getrandomwords();
  word.innerText = randomword;
  

}
function updatescore() {
  score1 += 1;
  score.innerText = score1
}

function easy(){
  document.getElementById('easy').style.backgroundColor='blue'
  document.getElementById('hard').style.backgroundColor='black'
  difficulty="easy";
  
}
function hard(){
  document.getElementById('hard').style.backgroundColor='red'
  document.getElementById('easy').style.backgroundColor='black'
  difficulty="hard";
 
}


inword.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomword) {
    e.target.value = "";
    wordtodom();
    updatescore();
    // document.getElementById('pp').innerText=difficulty;
    

    if (difficulty === "hard") time1 += 2;
    else time1 += 5;
    updateTime();
    
  }
});

function updateTime() {
  time1--;
  time.innerText = time1 + "s";
  if (time1 === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}




function gameOver() {
  endgameElement.innerHTML = `
  <h1>Time ran out</h1>
  <p>Your final score is ${score1}</p>
  <button onclick="history.go(0)" >Play Again</button>
  `;
  endgameElement.style.display = "flex";
  document.getElementById("con").style.display="none";
  
}
easy();
wordtodom();

