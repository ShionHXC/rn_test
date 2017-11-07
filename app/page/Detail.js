import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
 } from 'react-native';

export default class NavDetail extends Component{
    render(){
        return(
            <ScrollView style={styles.flex}>
                <Text style={styles.detail_text}>这个是详情页。欢迎访问hangge.com</Text>
                <Text style={styles.back_text} onPress={this.goback.bind(this)}>
                    返回
                </Text>
            </ScrollView>
            )
    }
    goback(){
        this.props.navigator.pop()
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    detail_text: {
        fontSize: 16,
        margin: 10
    },
    back_text: {
        width: 80,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 20
    }
});
