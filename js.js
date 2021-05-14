const field = document.querySelectorAll(".field");
const reset = document.querySelector(".reset");


document.addEventListener("keyup", e => {
    switch(e.key) {
        case "ArrowUp":
            moving(0,3,6,2,1);
            break;
        case "ArrowRight":
            moving(2,1,0,6,3);
            break;
        case "ArrowDown":
            moving(6,3,0,2,1);
            break;
        case "ArrowLeft":
            moving(0,1,2,6,3);
            break;
        default:
            break;

            
            
                    
    }
});

const colorchange = () => {
    for(i=0;i<=8;i++) {
        if(field[i].innerText != "") {
            field[i].style.background = "#0300fd";
            field[i].style.color = "white";
        } else {
            field[i].style.background = "white";
        }
        switch(field[i].innerText) {
            case "4":
                field[i].style.background = "#30c";
                field[i].style.color = "white";
                break;
            case "8":
                field[i].style.background = "#0027c2";
                field[i].style.color = "white";
                break;
            case "16":
                field[i].style.background = "#b803ff";
                field[i].style.color = "white";
                break;
            case "32":
                field[i].style.background = "#4b0082";
                field[i].style.color = "white";
                break;
            case "64":
                field[i].style.background = "#ff8000";
                field[i].style.color = "white";
                break;
            case "128":
                field[i].style.background = "#e4becf";
                field[i].style.color = "white";
                break;
                    

        }
    }

    
}

const addnumber = (min = 1,max = 8) => {
        let random = Math.floor(Math.random() * (max - min)) + min;
        if(field[random].innerText == "") {
            field[random].innerText = "2";
        }
}

reset.addEventListener("click", () => {
    for(i=0;i<=8;i++) {
        field[i].innerText = "";
        field[i].style.background = "white";
        field[i].style.color = "white"
    }
});

const moving = (scorea,scoreb,scorec,count,score) => {
    for(i=0; i<= count; i=i+score) {
    if(field[scoreb+i].innerText == "") {
        field[scoreb+i].innerText = field[scorec+i].innerText;
        field[scorec+i].innerText = "";
        } else {
            if(field[scorea+i].innerText != "" && field[scoreb+i].innerText != "") {
                if(field[scoreb+i].innerText == field[scorea+i].innerText) {
                let operation = parseFloat(field[scoreb+i].innerText) + parseFloat(field[scorea+i].innerText);
                field[scorea+i].innerText = operation;
                field[scoreb+i].innerText = field[scorec+i].innerText;
                field[scorec+i].innerText = "";
                }
            } else {
                field[scorea+i].innerText = field[scoreb+i].innerText;
                field[scoreb+i].innerText = field[scorec+i].innerText;
                field[scorec+i].innerText = "";
            }
            if(field[scorec+i].innerText != "") {
                if(field[scorec+i].innerText == field[scoreb+i].innerText) {
            operation = parseFloat(field[scoreb+i].innerText) + parseFloat(field[scorec+i].innerText);
                field[scoreb+i].innerText = operation;
                field[scorec+i].innerText = "";
            }
        }
    }
     
    }
    addnumber();
    colorchange();
}

addnumber();
colorchange();
