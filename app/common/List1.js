import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
class ListView extends Component{
    show(title){
        alert(title)
    }
    render() {
        let news = [];
        for(let i in this.props.news){
            var text = (
                <View key={i} style={styles.list_item}>
                    <Text
                        onPress={this.show.bind(this,this.props.news[i])}
                        style={styles.list_item_font}
                    >
                        {this.props.news[i]}
                    </Text>
                </View>
            );
            news.push(text)
        }
        return (
            <View style={styles.flex}>
                {news}
            </View>
        )
    }
}

export default class MainList extends Component {
    render () {
        const news = [
            'Swift - 滑块（UISlider）的用法',
            'Swift - 告警框（UIAlertView）的用法',
            'Swift - 选择框（UIPickerView）的用法',
            'Swift - 操作表（UIActionSheet）的用法',
            'Swift - 滚动视图（UIScrollView）的用法'
        ];
        return (
                <ListView news={news}></ListView>    
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },
    list_item_font: {
        fontSize: 16
    },

})