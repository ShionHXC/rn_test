import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    PixelRatio
} from 'react-native'

export default class TextInputTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            show: false
        }
    }
    render() {
        return (
            <View style={[styles.flex, styles.topStatus]}>
                <View style={[styles.flexDirection, styles.inputHeight]}>
                    <View style={styles.flex}>
                        <TextInput
                            onChangeText={this.changeText.bind(this)}
                            style={styles.input}
                            value={this.state.text}
                            placeholder="请输入搜索关键字"
                            returnKeyType="search"
                        />
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search} onPress={() => this.search()}>搜索</Text>
                    </View>
                </View>
                <Text style={styles.tip}>已输入{this.state.text.length}个字符</Text>
                {
                    this.state.show ?
                        <View style={styles.list}>
                            <Text
                                onPress={() => this.hideList(this.state.text + "网站")}
                                style={styles.item}
                                numberOfLines={1}
                            >
                                {this.state.text}网站
                            </Text>
                            <Text
                                onPress={() => this.hideList(this.state.text + "文章")}
                                style={styles.item}
                                numberOfLines={1}
                            >
                                {this.state.text}文章
                            </Text>
                            <Text
                                onPress={() => this.hideList(this.state.text + "新闻")}
                                style={styles.item}
                                numberOfLines={1}
                            >
                                {this.state.text}新闻
                            </Text>
                        </View>
                        :
                        null
                }
            </View>
        )
    }
    //搜索事件
    search() {
        alert("搜索内容 " + this.state.text)
    }
    //输入框文字改变
    changeText(text) {
        this.setState({
            text,
            show: text == "" ? false : true
        })
    }
    // 隐藏自动提示列表
    hideList(text) {
        this.setState({
            text,
            show: false
        })
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flexDirection: {
        flexDirection: 'row'
    },
    topStatus: {
        marginTop: 25,
    },
    inputHeight: {
        height: 45,
    },
    input: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    tip: {
        marginLeft: 5,
        marginTop: 5,
        color: '#C0C0C0',
    },
    list: {
        marginTop: 1 / PixelRatio.get(),
        marginLeft: 5,
        marginRight: 5,
        height: 200,
        borderColor: '#ccc',
        borderTopWidth: 1 / PixelRatio.get(),
    },
    item: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#ddd',
        borderTopWidth: 0,
    }
})