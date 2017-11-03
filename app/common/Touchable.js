import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native'

export default class Touchable extends Component{
    render(){
        return(
            <View style={styles.flex}>
                <HighLight/>
                <Opacity/>
            </View>
        )
    }
}

class HighLight extends Component{
    render() {
        return(
        <View>
            <TouchableHighlight
                onPress={this.show.bind(this, 'TouchableHighlight')}
                underlayColor="#f0f"
            >
                <Text 
                    style={styles.item}
                >
                    TouchableHighlight
                </Text>
            </TouchableHighlight>
        </View>
        )
    }
    show(text){
        //alert(text)
    }
}

class Opacity extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: "按钮"
        }
    }
    render() {
        return(
            <View>
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => this.setState({text:'onPress'})}
                    onLongPress={() => this.setState({text:'onLongPress'})}
                    onPressIn={() => this.setState({text: "onPressIn"})}
                    onPressOut={() => this.setState({text: 'onPressOut'})}
                >
                    <View style={styles.btn}>
                        <Text style={styles.font}>{this.state.text}</Text>
                    </View>
                    
                </TouchableOpacity>
            </View>
        )
    }
}

//样式定义
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop: 30
    },
    item: {
        fontSize: 18,
        marginLeft: 10,
        color: '#434343'
    },
    btn: {
        marginLeft: 30,
        marginTop: 30,
        width: 160,
        height: 160,
        backgroundColor: '#18B4FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
    },
    font: {
        color:"#fff",
        fontSize: 22
    }
});