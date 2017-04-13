/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Navigator,
  Text,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import boy from './js/boy'
import ListViewTest from './js/ListViewTest'

export default class rn_demo extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedTab: 'tb_popular',
        }
    }


    render() {
        return (
            <View style={styles.container}>
                {/*
          <TabNavigator>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_popular'}
                  selectedTitleStyle={{color:'red'}}
                  title="最热"
                  renderIcon={() => <Image style={styles.iconImage} source={require('./res/images/ic_polular.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.iconImage,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                  badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
                  <View style={styles.page1}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_trending'}
                  selectedTitleStyle={{color:'red'}}
                  title="趋势"
                  renderIcon={() => <Image style={styles.iconImage} source={require('./res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.iconImage,{tintColor:'red'}]} source={require('./res/images/ic_trending.png')} />}
                  onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                  <View style={styles.page2}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_favorite'}
                  selectedTitleStyle={{color:'red'}}
                  title="收藏"
                  renderIcon={() => <Image style={styles.iconImage} source={require('./res/images/ic_polular.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.iconImage,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                  badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                  <View style={styles.page1}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'tb_my'}
                  selectedTitleStyle={{color:'red'}}
                  title="我的"
                  renderIcon={() => <Image style={styles.iconImage} source={require('./res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.iconImage,{tintColor:'red'}]} source={require('./res/images/ic_trending.png')} />}
                  onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                  <View style={styles.page2}></View>
              </TabNavigator.Item>
          </TabNavigator>
          */}
                {/*
                <Navigator

                    initialRoute={{
                        component:boy
                    }}

                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component navigator={navigator}{...route.param}/>
                    }}></Navigator>
                 */}

                 <ListViewTest/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F5FCFF',
    },

    page1:{
        flex:1,
        backgroundColor:'red',
    },

    page2:{
        flex:1,
        backgroundColor:'yellow',
    },

    iconImage:{
        height:22,
        width:22
    }

});

AppRegistry.registerComponent('rn_demo', () => rn_demo);
