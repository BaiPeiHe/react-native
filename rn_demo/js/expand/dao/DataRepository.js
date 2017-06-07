/**
 * Created by baihe on 2017/6/7.
 */

export default class DataRepository{
    fetchNetRepository(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                })
        })
    }
}
