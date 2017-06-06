/**
 * Created by baihe on 2017/4/13.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';

import girl from './girl'
import NavigationBar from './common/NavigationBar'

export default class boy extends Component{

    // 构造方法
    constructor(props){
        super(props);
        this.state={
            word:''
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Boy'}
                    statusBar={{
                        backgroundColor:'red',
                    }}
                ></NavigationBar>

                <Text style={styles.text}>I am a Boy!</Text>
                <Text style={styles.text}
                      onPress={()=> {
                          this.props.navigator.push({
                              component:girl,
                              param:{
                                  word:'一枝玫瑰',
                                  // 回调方法
                                  onCallBack:(word)=>{
                                      this.setState({
                                          word:word
                                      })
                                  }
                              }
                          })
                      }}>送女孩一朵玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
    },
    text:{
        fontSize:20,
    }
});