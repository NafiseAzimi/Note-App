let input = document.getElementById("input")
let note = document.getElementById("note")
let backgrouncolorCircle
input.addEventListener("keydown", addNote)
let arraycolor = document.querySelectorAll(".color")
let addIcon = document.getElementById("add")
let ShowAlert = document.getElementById("ShowAlert")
addIcon.addEventListener("click", ADDNoteNew)
let removeIcon = document.getElementById("remove")
removeIcon.addEventListener("click", removeIconNew)
let DivNote
let NoTNote = document.getElementById("NoTNote")

function addNote(event) {
    if (event.keyCode == 13) {// check for Enter
        if (input.value === "") {//If Not Note
            NoTNote.innerHTML = "You Must Enter Note"
        }
        else {// else if Enter Not note
            NoTNote.innerHTML = ""
            ADDNoteNew()//Function Enter New Note
        }
    }
    arraycolor.forEach(element => {//chose Color for Div and Input
        element.addEventListener("click", function (event) {
            backgrouncolorCircle = event.target.style.backgroundColor
            input.style.backgroundColor = backgrouncolorCircle
        })
    })
}

function ADDNoteNew() {
    if (input.value == "") {//if Not Note
        NoTNote.innerHTML = "You Must Enter Note"
    }
    else {//else enter New Note
        NoTNote.innerHTML = ""
        DivNote = document.createElement('div');//Creat New Div
        DivNote.style.backgroundColor = backgrouncolorCircle//select Color Div
        DivNote.classList.add("anotherclass");//Add new class
        note.append(DivNote)
        DivNote.innerHTML += input.value//Write Note in Div
        input.value = ""
        DivNote.addEventListener("click", removeClick)//Function Remove Note
    }
}
function removeIconNew() {
    note.removeChild(note.lastChild)//Remove last Note
}

function removeClick(event) {
    event.target.remove()
    setInterval(shoee, 3000)//Interval for Alert
    ShowAlert.style.display = "block"
    ShowAlert.innerHTML = "You Clear Note"
}
function shoee() {
    ShowAlert.style.display = "none"
}



