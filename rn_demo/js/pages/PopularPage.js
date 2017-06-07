/**
 * Created by baihe on 2017/6/6.
 */

import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Navigator
} from 'react-native';

// import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'

import NavigationBar from '../common/NavigationBar'
import HomePage from './HomePage'
import DataRepository from '../expand/dao/DataRepository'

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component{

    constructor(props){
        super(props);
        this.dataRepository = new DataRepository();
        this.state={
            result:''
        }
    }

    onLoad(){

        let url = this.getUrl(this.text);

        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result)
                })
            })
            .catch(error=>{
                this.setState({
                    result:'error' + JSON.stringify(error)
                })
            })
    }

    getUrl(key){
        return URL + key + QUERY_STR;
    }

    render(){
        return (<View style={styles.container}>
            <NavigationBar title={'最热'} style={{backgroundColor:'#6495ED'}}/>

            <Text
                onPress={()=>{
                this.onLoad()
                }}
                style={styles.tips}>获取数据</Text>

            <TextInput style={{height:40,borderWidth:1}} onchangetext={text=>this.text=text}/>

            <Text style={{height:500}}>{this.state.result}</Text>

        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tips:{
        fontSize:29,
    }

})