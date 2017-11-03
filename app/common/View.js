import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    PixelRatio
} from 'react-native'

export default class ViewTest extends Component{
    render () {
        return (
            <View style={styles.flex}>
                <View style={styles.container}>
                    <View style={[styles.item, styles.center]}>
                        <Text style={styles.font}>编程社区</Text>
                    </View>
                    <View style={[styles.item, styles.lineLeftRight]}>
                        <View style={[styles.center, styles.flex, styles.lineCenter]}>
                            <Text style={styles.font}>Swift</Text>
                        </View>
                        <View style={[styles.center, styles.flex]}>
                            <Text style={styles.font}>React</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.center, styles.flex, styles.lineCenter]}>
                            <Text style={styles.font}>HTML5</Text>
                        </View>
                        <View style={[styles.center, styles.flex]}>
                            <Text style={styles.font}>Cordova</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        backgroundColor: '#2D9900',
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 2,
    },
    item: {
        flex: 1,
        height: 80
    },
    center: {
        justifyContent: 'center', /*垂直居中，即flexDirection方向居中*/
        alignItems: 'center' /*水平居中*/
    },
    font: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 16
    },
    lineLeftRight: {
        borderColor: "#fff",
        borderLeftWidth: 1/PixelRatio.get(),
        borderRightWidth: 1/PixelRatio.get()
    },
    lineCenter: {
        borderColor: "#fff",
        borderBottomWidth: 1/PixelRatio.get()
    }
})