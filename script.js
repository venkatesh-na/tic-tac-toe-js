const buttons = document.querySelectorAll(".buttons button")
const winner = document.querySelector(".winner")
const reset = document.querySelector(".reset")
let value = false
let arr = new Array(9)
reset.addEventListener("click",()=>{
    winner.innerHTML = ""
    arr = []
    buttons.forEach((e)=>{
        e.innerHTML = ""
        e.disables = false
    })
})
buttons.forEach((e)=>{
    e.addEventListener("click",(a)=>{
        if(winner.innerHTML.length == 0)
        {
            if(value == false)
            {
                e.innerHTML = "X"
                e.disabled = true
                e.style.color = "red"
                value = true
                arr[parseInt(a.target.dataset.id)] = "X"
            }
            else
            {
                e.innerHTML = "O"
                e.disabled = true
                e.style.color = "blue"
                value = false
                arr[parseInt(a.target.dataset.id)] = "O"
            }
            if(arr.includes(undefined) == false)
            {
                winner.innerHTML = "Match Draw"
            }
        winnerCheck()
        }
      })
    })
const winnerCheck = ()=>{
    //012 036 048 256 678 345 147
    let arr1 = [[0,1,2],[0,3,6],[0,4,8],[2,4,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7]]
    arr1.forEach((e)=>{
        if (arr[e[0]] == "X" && arr[e[1]] == "X" && arr[e[2]] == "X") {
            winner.innerHTML = "X wins"
            console.log("x")
        }
        else if (arr[e[0]] == "O" && arr[e[1]] == "O" && arr[e[2]] == "O") {
            winner.innerHTML = "O wins"
            console.log("o")
        }
    })
    
}
