function sendMessage(json){
    return new Promise((resolve,reject)=>{
        fetch('/send',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(json)
        }).then(response=>{
            if(response.ok){
                resolve()
            }else{
                response.text().then(res=>{
                    reject(res)
                })
            }
        })
    })
}

export {sendMessage}