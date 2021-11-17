const buttons = document.querySelectorAll(".buttons button")
const winner = document.querySelector(".winner")
const reset = document.querySelector(".reset")
const vsfriend = document.querySelector(".vsfriend")
const player = document.querySelector(".player")
let multi = false
player.innerHTML = "PLAYER VS COMPUTER"
vsfriend.addEventListener("click",()=>{
    multi = true
    player.innerHTML = "PLAYER VS PLAYER"
})
let value = false
let arr = new Array(9)
reset.addEventListener("click",()=>{
     player.innerHTML = "PLAYER VS COMPUTER"
    winner.innerHTML = ""
    vsfriend.disabled = false
    arr = new Array(9)
    buttons.forEach((e)=>{
        e.innerHTML = ""
        e.disabled = false
        value = false;
    })
})
buttons.forEach((e)=>{
    e.addEventListener("click",(a)=>{
        vsfriend.disabled = true
        if(winner.innerHTML.length == 0)
        {
            if(value == false)
            {
                e.innerHTML = "X"
                e.disabled = true
                e.style.color = "red"
                value = true
                arr[parseInt(a.target.dataset.id)] = "X"
                if(multi == false)
                {
                                let newArr = []
                                for (let i = 0; i < 9; i++) 
                                {
                                    if (arr[i] == undefined) 
                                    {
                                        newArr.push(i)
                                    }
                                }
                                if(newArr.length > 0)
                                {
                                let random = Math.floor(Math.random() * newArr.length)
                                arr[newArr[random]] = "O"
                                buttons[newArr[random]].innerHTML = "O"
                                buttons[newArr[random]].disabled = true
                                buttons[newArr[random]].style.color = "blue"
                                value = false
                            }
                        }
                    }
                    else
                    {
                            e.innerHTML = "O"
                            e.disabled = true
                            e.style.color = "blue"
                            value = false
                            arr[parseInt(a.target.dataset.id)] = "O"
                    }
            
            if(arr.includes(undefined) == false && a.target.dataset.id != 0)
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
