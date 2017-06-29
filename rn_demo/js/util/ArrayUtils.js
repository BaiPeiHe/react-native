
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';

export default class ArrayUtils{
    /*、
    * 更新数组，若 item 已经存在就从数组中移除，否则就添加到数组中
    * */
    static updateArray(array,item){

        for (var i = 0, len = array.length; i < len; i++){
            var temp  = array[i];
            if(temp === item){
                // 从数组中移除
                array.splice(i,1);
                return;
            }
        }
        // 添加到数组中
        array.push(item);
    }

}

