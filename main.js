const containerShell = document.getElementsByClassName("shell")[0];
const selectDifficulty = document.getElementById("select_difficulty");
const btnStartGame = document.getElementById("start_game");





function numberCellsDifficulty(level){

    let numberCells;

    if (parseInt(level) === 3) {
        numberCells = 49;
    } else if (parseInt(level) === 2) {
        numberCells = 81;
    } else if (parseInt(level) === 1) {
        numberCells = 100;
    }

    return numberCells;

}



btnStartGame.addEventListener("click", function() {

    const level = selectDifficulty.value;

    const cells = numberCellsDifficulty(level);

    console.log(level);
    console.log(cells);

    buildMinefield(cells);

});

function buildMinefield (cells) {

    const cellsDifficulty = Math.sqrt(cells);
    const cellSize = 100 / cellsDifficulty;
    
    containerShell.innerHTML="";

    for (let i=1; i <= cells; i++){

        containerShell.innerHTML += `<div class="box d-flex justify-content-center align-items-center" style="width: ${cellSize}%; height:${cellSize}% ">
                                        <div> ${i} </div>
                                    </div>` ;
        
       
       
        

    }
    let cellCreated = document.getElementsByClassName("box");
    console.log(cellCreated);
    for (let x = 1; x < cellCreated.length; x++) {
        const singleCell = cellCreated[x];
        singleCell.addEventListener("click", boxClick);
    }
}




function boxClick() {
    
    this.classList.toggle("bg-click");
  }


