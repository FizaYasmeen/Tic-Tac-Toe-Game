let boxes=document.querySelectorAll(".box");
let Reset = document.querySelector("#Reset");
let ngbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector("#draw");
let msgCtn =document.querySelector(".msg-ctn");

let turn0= true; //player x, player o
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];

    const resetGame = () =>{
        turn0=true;
        enableboxes();
        msgContainer.classList.add("hide");
    };

    boxes.forEach((box) =>
    {
        box.addEventListener("click", () =>{
            if(turn0)
            {
                box.innerText='O';
                turn0 =false;
            }else{
                box.innerText='X';
                turn0 =true;
            }
            box.disabled = true;

            checkWinner();
        });
    });

    const disableboxes = () =>{
        for(let b of boxes){
            b.disabled =true;
        }
    };
    const enableboxes = () =>{
        for(let b of boxes){
            b.disabled =false;
            b.innerText = "";
        }
    };

    const showWinner = (winner) =>
    {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableboxes();
    };
    
    const   checkWinner = () =>
    {
        for (let p of winPatterns)
        {
            
            let pos1= boxes[p[0]].innerText;
            let pos2= boxes[p[1]].innerText;
            let pos3= boxes[p[2]].innerText;
            if(pos1 != "" && pos2 !="" && pos3 != "")
            {
                if(pos1 === pos2 && pos2 === pos3)
                {   
                    showWinner(pos1);
                }
            }
        }
    };
    
    

    ngbtn.addEventListener("click", resetGame);
    Reset.addEventListener("click", resetGame);

