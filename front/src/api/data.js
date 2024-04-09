function getAllData(type){
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

function getData(type,time){
    return new Promise((resolve,reject)=>{
        fetch(`/data/getData/${type}/${time}`).then(response=>{
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

export {getAllData , getData}