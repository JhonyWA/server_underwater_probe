function getData(type){
    return new Promise((resolve,reject)=>{
        fetch(`/data/getData/${type}`).then(response=>{
            if(response.ok){
                response.json().then(res=>{
                    resolve(res)
                })
            }else{
                response.text().then(error=>{
                    reject(error)
                })
            }
        })
    })
}

export {getData}