/**
 * Created by baihe on 2017/4/13.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';

import NavigationBar from './NavigationBar'

export default class ListViewTest extends Component{


    render(){
        return(
            <View style={styles.container}>
                <NavigationBar
                    title={'ListViewTest'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    text:{
        fontSize:22
    }
});