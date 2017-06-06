/**
 * Created by baihe on 2017/6/6.
 */

import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Navigator,
} from 'react-native'

import WelcomePage from'./WelcomePage'

function setup () {
    // 进行一些初始化配置

    class Root extends Component{

        renderScene(route, navigator){
            let Component = route.component;

            return <Component {...route.param} navigator={navigator}/>
        }

        render(){
            return <Navigator
                initialRoute={{component:WelcomePage}}
                renderScene={(route, navigator) => this.renderScene(route,navigator)}
            />
        }
    }
    // 返回根组件
    return <Root/>
}

module.exports=setup;