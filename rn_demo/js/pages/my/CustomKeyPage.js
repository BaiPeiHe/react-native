/**
 * Created by baihe on 2017/6/28.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    Navigator,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import NavigationBar from "../../common/NavigationBar";
import ViewUtils from '../../util/ViewUtils'
import ArrayUtils from '../../util/ArrayUtils'
import LanguageDao,{FLAG_LANGUAGE} from '../../expand/dao/LanguageDao'
import CheckBox from 'react-native-check-box'

export default class CustomKeyPage extends Component{
    constructor(props){
        super(props);
        // 数据列表
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        // 修改的数据
        this.changeValues = [];
        this.state={
            dataArr:[],
        }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        this.languageDao.fetch()
            .then(result=>{
                this.setState({
                    dataArr:result
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }

    renderView(){
        if(!this.state.dataArr || this.state.dataArr.length === 0) return null;
        let len = this.state.dataArr.length;
        let views = [];
        for(let i = 0,l = len - 2; i < l; i+=2){
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArr[i])}
                        {this.renderCheckBox(this.state.dataArr[i + 1])}
                    </View>
                    <View style={styles.line}></View>
                </View>
            )
        }

        // 少加的元素
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBox(this.state.dataArr[len - 2]) : null}
                    {this.renderCheckBox(this.state.dataArr[len - 1])}
                </View>
            </View>
        );

        return views;
    }

    renderCheckBox(data){
        let leftText = data.name;

        return (
            <CheckBox
                style = {{flex:1, margin:10}}
                onClick={()=>this.onClick(data)}
                leftText={leftText}
                isChecked={data.checked}
                checkedImage={<Image
                    style={{tintColor:'#6495ED'}}
                    source={require('./images/ic_check_box.png')}/>}
                uncheckedimage={<Image
                    style={{tintColor:'#6495ED'}}
                    source={require('./images/ic_check_box_outline_blank.png')}/>}

            />
        )
    }

    onClick(data){
        data.checked = !data.checked;
        ArrayUtils.updateArray(this.changeValues,data);
    }

    onSave(){

        if(this.changeValues.length === 0){
            this.props.navigator.pop();
            return;
        }
        this.languageDao.save(this.state.dataArr);
        this.props.navigator.pop();

    }
    onBack(){
        if(this.changeValues.length === 0){
            this.props.navigator.pop();
            return;
        }
        Alert.alert(
            '提示',
            '要保存修改吗？',
            [
                {text:'不保存',onPress: ()=>{
                    this.props.navigator.pop();
                },style: 'cancel'},
                {text: '保存', onPress: ()=>{this.onSave()}},
            ]
        )
    }

    render(){

        let rightButton =<TouchableOpacity
            onPress={()=>this.onSave()}
        >
            <View style={{margin:10}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>

        return <View style={styles.container}>
            <NavigationBar
                title='自定义标签'
                style={{backgroundColor:'#6495ED'}}
                leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
                rightButton={rightButton}
            />

            <ScrollView>
                {this.renderView()}
            </ScrollView>

        </View>
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    tips:{
        fontSize:29,
    },
    title:{
        fontSize:18,
        color:'white',

    },
    line:{
        height:0.3,
        backgroundColor:'darkgray'
    },
    item:{
        flexDirection:'row',
        alignItems:'center'
    },
})