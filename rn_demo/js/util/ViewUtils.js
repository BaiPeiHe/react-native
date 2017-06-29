
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';

export default class ViewUtils{
    static getLeftButton(callback){

        return <TouchableOpacity
            style={{padding:8}}
            onPress={callback}>

            <Image
                style={{width:22,height:22,margin:5}}
                source={require('../../res/images/ic_arrow_back_white_36pt.png')}></Image>
        </TouchableOpacity>
    }

}

