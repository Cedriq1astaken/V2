const conBtn =  document.getElementById('confirm');
let a = 0
let loadingFnc = 
setInterval(()=>{
    let text = document.getElementById('loading-text')
    setTimeout(()=>{
        text.innerHTML = 'loading.'
    }, 500)
    setTimeout(()=>{
        text.innerHTML = 'loading..'
    }, 1000)
    setTimeout(()=>{
        text.innerHTML = 'loading...'
    }, 1500)
    setTimeout(()=>{
        text.innerHTML = 'loading....'
    }, 2000)
    setTimeout(()=>{
        text.innerHTML = 'loading'
    }, 2500)
    a++
    if(a == 3){
        next()
    }
},2550)

let next = () =>{
    let page = document.getElementById('loading-page')
    let num =10
    let a =  setInterval(()=>{
        page.style.opacity = num*0.1;
        num--
        if(num == -1){
            clearInterval(a)
            clearInterval(loadingFnc)
            page.style.display = 'none'
        }
    },250)
}
conBtn.onclick= ()=>{
    playerName = document.getElementById('nameInput').value;
    document.getElementById('main-page').style.visibility = 'visible' 
    document.getElementById('name').style.visibility='hidden'
}