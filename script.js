window.onload = heroeffect();

function heroeffect(params) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var name = document.getElementById("name");
    let iterations = 0;

    const interval = setInterval(() => {
        name.innerText = name.innerText.split("")
            .map((letter,index) =>{
                if(index < iterations){
                    return name.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            }).join("");
        if(iterations >= name.dataset.value.length){
            clearInterval(interval);
        };
        
        iterations += 1/2;
    }, 30)
}