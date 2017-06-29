/**
 * Created by baihe on 2017/6/7.
 */

import {AsyncStorage,} from 'react-native';

export default class DataRepository{

    fetchRepository(url){
        return new Promise((resolve,reject)=>{
            // 获取本地数据
            this.fetchLocalRepository(url)
                .then(result=>{
                    if(result){
                        resolve(result);
                    }
                    else {
                        this
                    }
                })
        })
    }

    /**
     * 获取本地数据
     * @param url
     * @returns {Promise}
     */
    fetchLocalRepository(url){
        return new Promise((resolve,reject)=>{
            AsyncStorage.getItem(url,(error,result)=>{
                if(!error){
                    try {
                        resolve(JSON.parse(result));
                    }catch (e){
                        reject(e);
                    }
                }
                else {
                    reject(error);
                }
            })
        })
    }


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
