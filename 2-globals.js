a = 0
setInterval(()=>{
    console.log('Timer'+a)
    a = a+1
    if (a==20) {
        console.log('wait a sec')
    }
}, 1000)