import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AppState
} from 'react-native'

export default class CurrentState extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text 
                    style={styles.item}
                    onPress={this.getState.bind(this)}
                >
                    获取当前状态
                </Text>
            </View>
        )
    }
    getState(){
        alert("当前状态" + AppState.currentState)
    }
}
//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    item: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 30,
        borderWidth: 1,
        padding: 6,
        borderColor: '#ddd',
        textAlign: 'center'
    },
});