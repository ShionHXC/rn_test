import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
//网络图片数组
const imgs = [
    'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2263582212.jpg',
    'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2265761240.jpg',
    'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2266110047.jpg'
];
//导入 nativeImageSource函数
let nativeImageSource = require('nativeImageSource');

export default class MyImage extends Component{
    
    render(){
        return(
            <View style={styles.flex}>
                <ImageModule imgs={imgs}/>
            </View>
        )
    }
}
class ImageModule extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgs: props.imgs,
            count: 0
        }
    }
    render(){
        return(
            <View style={styles.flex}>
                <View style={styles.image}>
                    <Image 
                        style={styles.img}
                        source={{uri: this.state.imgs[this.state.count]}}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity 
                        onPress={() => this.goPreview()}
                        activeOpacity={0.8}
                    >
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.goNext()}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    // 上一张图片
    goPreview(){
        let count = this.state.count;
        count--;
        if(count < 0){
            count = this.state.imgs.length - 1;
        }
        this.setState({count})
    }
    // 下一张图片
    goNext(){
        let count = this.state.count;
        count++;
        let len = this.state.imgs.length - 1;
        if(count > len){
            count = 0;
        }
        this.setState({count})
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        borderWidth: 1,
        width: 300,
        height: 200,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    img: {
        height: 198,
        width: 300,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    btn: {
        width: 60,
        height: 30,
        borderColor: '#0089FF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 20,
    },
})