/**
 * Created by baihe on 2017/4/13.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    StyleSheet,
    RefreshControl,
    TouchableOpacity,
}from 'react-native';

import NavigationBar from './common/NavigationBar'
// DURATION 是常量，表示显示的时长
import Toast,{DURATION} from 'react-native-easy-toast'

var data={
    "result":[
        {
            "email":"email00",
            "fullName":"张三00"
        },
        {
            "email":"email01",
            "fullName":"张三01"
        },
        {
            "email":"email02",
            "fullName":"张三02"
        },
        {
            "email":"email03",
            "fullName":"张三03"
        },
        {
            "email":"email04",
            "fullName":"张三04"
        },
        {
            "email":"email05",
            "fullName":"张三05"
        },
        {
            "email":"email06",
            "fullName":"张三06"
        },
        {
            "email":"email07",
            "fullName":"张三07"
        },
        {
            "email":"email08",
            "fullName":"张三08"
        },
        {
            "email":"email09",
            "fullName":"张三09"
        },
        {
            "email":"email10",
            "fullName":"张三10"
        },
        {
            "email":"email11",
            "fullName":"张三11"
        },
    ]
};
export default class ListViewTest extends Component{

    constructor(props){
        super(props);

        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});

        this.state={
            dataSource:ds.cloneWithRows(data.result),
            isLoading:true,
        }
        this.onLoad();

    }

    renderRow(item){
        return <View style={styles.row}>
            <TouchableOpacity
            onPress={()=>{
                this.toast.show('你单击了：'+item.fullName,DURATION.LENGTH_LONG);
            }}
            >
                <Text style={styles.tips}>{item.fullName}</Text>
                <Text style={styles.tips}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    }
    // 渲染分割线
    renderSeparator(sectionID,rowID,adjacentRowHightlighted){
        return <View key={rowID} style={styles.line}></View>
    }
    renderFooter(){
        return <Image style={{width:400,height:100}} source={{url:'https://images.gr-assets.com/hostedimages/1406479536ra/10555627.gif'}}></Image>
    }
    // 加载数据
    onLoad(){
        // 延时两秒
        setTimeout(()=>{
            // 设置状态，这时就不会显示刷新了
            this.setState({
                isLoading:false
            })
        },2000);

    }

    render(){
        return(
            <View style={styles.container}>
                <NavigationBar
                    title={'ListViewTest'}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    // 每个 Cell
                    renderRow={(item)=>this.renderRow(item)}
                    // 分割线
                    renderSeparator={()=>this.renderSeparator()}
                    // 脚视图
                    renderFooter={()=>this.renderFooter()}
                    //
                    refreshControl={<RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={()=>this.onLoad()}
                    />}

                ></ListView>

                <Toast ref={toast=>{this.toast=toast}}/>
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
        fontSize:18
    },
    tips:{
        fontSize:18
    },
    row:{
        height:50
    },
    line:{
        height:1,
        backgroundColor:'black'
    },
});