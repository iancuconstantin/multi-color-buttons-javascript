window.addEventListener("load", function(){ 
    const btn = document.getElementById('change-color');

    btn.addEventListener("click", (event) =>{ 
        event.target.classList.toggle("red")
    })
    
    const element = document.getElementById("span2");
    const btn2 = document.getElementById('btn2');

    btn2.addEventListener("click", function() {
        element.classList.add("red2");
        });

    let btn3 = document.querySelector("#count");
    btn3.textContent = 0;
        btn3.onclick = (event) => {
            event.target.textContent++;
        } 

    const button = document.getElementById('flip-flop');

    button.addEventListener('click', event =>{
        button.classList.toggle("right");   
        if(button.textContent === 'Go Left!'){
            button.textContent = `Go Right!`;
        }else{
            button.textContent = `Go Left!`;
        }
    });
});