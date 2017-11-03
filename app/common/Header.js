import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    PixelRatio
} from 'react-native'

export default class Header extends Component{
    render() {
        return(
            <View style={styles.flex}>
                <Text style={styles.font}>
                    Header
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        height: 50,
        backgroundColor: '#2D9900',
        alignItems: 'center', /*使Text组件水平居中*/
        justifyContent: 'center' /*使Text组件垂直居中*/
    },
    font: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center' /*使文字在Text组件中居中*/
    },
})