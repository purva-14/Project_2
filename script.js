let quotes=["The best way to predict the future is to invent it.",
    "Success is not final, failure is not fatal",
    "Believe you can and you're halfway there.",
    "Do one thing every day that scares you.",
    "Act as if what you do makes a difference. It does."]

    const quotebox=document.querySelector(".quote");
    const button=document.querySelector(".btn");
    button.addEventListener("click",()=>{
        showquote();
    })
    function showquote(){
const mathindex=Math.floor(Math.random()*quotes.length);
quotebox.textContent=quotes[mathindex];
    }