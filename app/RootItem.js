/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import ViewTest from "./common/View"
import TextTest from "./common/Text"
import MainList from "./common/List1"
import Header from './common/Header'
import Nav from "./common/Nav"
import TextInputTest from "./common/TextInput"
import Touchable from './common/Touchable'
import MyImage from "./common/Image"
import WebviewModule from "./common/Webview"
import GoodsList from "./common/GoodsList"
import UserInfo from "./common/AsyncStorage"
import CurrentState from "./common/CurrentState"
export default class RootItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    barStyle="dark-content"
                    translucent={false}
                    backgroundColor={"#000"}
                />
                <CurrentState/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 25
    }
});

