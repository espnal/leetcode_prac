async function sleep(millis) {
    const x =  await new Promise((res)=>{
        setTimeout(()=>{
            res()
            }, millis)
    })
    return x
}
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t))