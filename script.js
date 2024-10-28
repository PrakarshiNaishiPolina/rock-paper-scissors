let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user");
const compscorepara=document.querySelector("#comp");
let choices=document.querySelectorAll(".choice");
   choices.forEach((choice )=> {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute('id');
    playgame(userchoice);
    });

   });
const playgame =(userchoice)=>{
    console.log("user choice = ",userchoice);
    //Generate computer choice
    const computer=compchoice();
    console.log("computer choice = ",computer);
    if(userchoice===computer){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){//scissors,paper for computer
          userwin= computer==="paper"?false:true;
        }else if(userchoice==="paper")
            //rock,scissors for computer
           userwin= computer==="scissors"?false:true;
           else{
            //rock,paper for computer
            userwin=computer==="rock"?false:true;
           }
           showWinner(userwin,userchoice,computer);
    }
};
const compchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomidx=(Math.floor(Math.random()*3));
    return options[randomidx];
}

const drawgame=()=>{

    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userwin,userchoice,computer)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
    console.log("you win!");
msg.innerText=`You win! Your ${userchoice} beats ${computer}`;
msg.style.backgroundColor="green";
    }
else{
    compscore++;
        compscorepara.innerText=compscore;
console.log("you lose");
msg.innerText=`You lost.${computer} beats your ${userchoice}`;
msg.style.backgroundColor="red";
}
}