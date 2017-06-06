/**
 * Created by baihe on 2017/6/6.
 */

import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Navigator
} from 'react-native'
import NavigationBar from '../common/NavigationBar'
import HomePage from './HomePage'

export default class WelcomePage extends Component{

    componentDidMount(){
        // 暂停两秒后，重置路由指向首页，之前的页面都不需要了。
        this.timer = setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000);
    }
    // 组件取消后，取消计时器，防止组件取消后计时器还存在导致异常
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }

    render(){
        return <View>
            <NavigationBar title={'欢迎'}/>

            <Text>欢迎</Text>
        </View>
    }
}