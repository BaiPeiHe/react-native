/**
 * Created by baihe on 2017/6/6.
 */

import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    ListView,
    RefreshControl,
} from 'react-native';

import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import NavigationBar from '../common/NavigationBar'
import DataRepository from '../expand/dao/DataRepository'
import RepositoryCell from '../common/RepositoryCell'

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component{

    constructor(props){
        super(props);
        this.dataRepository = new DataRepository();
        this.state={
            result:'',
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
        return <View style={styles.container}>
            <NavigationBar
                title={'最热'}
                style={{backgroundColor:'#2196F3'}}
                statusBar={{
                    backgroundColor:'#2196F3'
                }}
            />

            <ScrollableTabView
                renderTabBar={()=><ScrollableTabBar/>}
                // 背景色
                tabBarBackgroundColor='#2196F3'
                // 激活状态的颜色
                tabBarActiveTextColor="white"
                // 未激活状态的颜色
                tabBarInactiveTextColor="mintcream"
                // 下面指示器的颜色
                tabBarUnderlineStyle={{backgroundColor:'#e7e7e7',height:2}}
            >
                <PopularTab tabLabel="Java">Java</PopularTab>
                <PopularTab tabLabel="iOS">iOS</PopularTab>
                <PopularTab tabLabel="Android">Android</PopularTab>
                <PopularTab tabLabel="JavaScript">JavaScript</PopularTab>
            </ScrollableTabView>

        </View>
    }
}

class PopularTab extends Component{
    constructor(props){
        super(props);
        this.dataRespository = new DataRepository();
        this.state = {
            result:'',
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
            isLoading:false,
        }
    }

    // 页面加载时，请求数据
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        this.setState({
            isLoading:true,
        })
        let url = URL + this.props.tabLabel + QUERY_STR;
        this.dataRespository
            .fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(result.items),
                    isLoading:false,
                });
            })
            .catch(error=>{
                console.log(error);
            })
    }

    renderRow(data){
        return <RepositoryCell data={data}/>
    }

    render(){
        return <View style={{flex:1}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow= {(data)=>this.renderRow(data)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={()=>this.loadData()}
                        colors={['#2196F3']}
                        tintColor={'#2196F3'}
                        title={'Loading'}
                        titleColor={'#2196F3'}
                    />}

            ></ListView>

        </View>
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