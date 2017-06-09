/**
 * Created by baihe on 2017/6/8.
 */

import React,{Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

// 导出
export default class RepositoryCell extends Component{
    render(){
        return <TouchableOpacity style={style.container}>

            <View style={style.cell_container}>
                <Text style={style.title}>{this.props.data.full_name}</Text>
                <Text style={style.description}>{this.props.data.description}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text>Author:</Text>
                        <Image
                            style={{height:22,width:22}}
                            source={{url:this.props.data.owner.avatar_url}}
                        />
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text>Stars:</Text>
                        <Text>{this.props.data.stargazers_count}</Text>
                    </View>

                    <Image style={{width:22,height:22}} source={require('../../res/images/ic_star.png')}/>
                </View>
            </View>
        </TouchableOpacity>

    }
}

const style=StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        fontSize:16,
        marginBottom:2,
        color:'#212121'
    },
    description:{
        fontSize:12,
        marginBottom:2,
        color:'#757575'
    },
    cell_container:{
        backgroundColor:'white',
        // 内边距
        padding:10,
        // 左边距
        marginLeft:5,
        // 右边距
        marginRight:5,
        // 垂直边距
        marginVertical:3,
        // 边框
        borderWidth:0.5,
        borderColor:'#dddddd',
        borderRadius:5,
        // iOS 上阴影
        shadowColor:'gray',
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:1,
        shadowRadius:1,
        // Android 上阴影
        elevation:2,
    }
})
