import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    WebView
} from 'react-native'
//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class WebviewModule extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <WebView
                bounces={false}
                scalesPageToFit={true}
                //source={{ uri: "https://www.baidu.com", method: 'GET' }}
                source={{html: "<h1 style='text-align:center;margin-top:30px;font-size:36px;'>Hello World</h1>"}}
                style={{ width: deviceWidth, height: deviceHeight }}>

                </WebView>
            </View>
        )
    }
}