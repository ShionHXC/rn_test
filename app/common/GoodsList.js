import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

// 列表数据
const goods = [
    {
        title: '空气净化器',
        url: 'http://img.muji.com.cn/img/item/4547315820665_400.jpg'
    },
    {
        title: '棉不均匀染色开衫',
        url: 'http://img.muji.com.cn/img/item/4549738656746_400.jpg'
    },
    {
        title: '硅胶球形制冰器',
        url: 'http://img.muji.com.cn/img/item/4549738306771_400.jpg'
    },
    {
        title: '组合柜',
        url: 'http://img.muji.com.cn/img/item/4549337263215_400.jpg'
    },
    {
        title: '牛奶巧克力',
        url: 'http://img.muji.com.cn/img/item/4549738664512_400.jpg'
    },
    {
        title: '棉法兰绒被套 ',
        url: 'http://img.muji.com.cn/img/item/4549738391210_400.jpg'
    }
]

// 商品块组件

class Good extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.item}>
                <TouchableOpacity onPress={this.props.press}>
                    <Image 
                        resizeMode="contain"
                        style={styles.img} 
                        source={{uri: this.props.url}}
                    >
                        <Text numberOfLines={1} style={styles.item_text}>{this.props.title}</Text>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }
}
// 列表组件
class List extends Component{
    press(data) {
        alert(data.url);
    }
    render(){
        let data = this.props.goods;
        let list = [];
        for(var i in data){
            if(i % 2 === 0){
                let row = (
                    <View style={styles.row} key={i}>
                        <Good 
                            press={this.press.bind(this, data[i])}
                            title={data[i].title}
                            url={data[i].url}
                        />
                        <Good
                            press={this.press.bind(this, data[parseInt(i)+1])}
                            title={data[parseInt(i)+1].title}
                            url={data[parseInt(i)+1].url}
                        />
                    </View>
                )
                list.push(row)
            }
        }
        return(
            <ScrollView>
                {list}
            </ScrollView>
        )
    }
    
}
//
export default class GoodsList extends Component{
    render(){
        return (
            <View style={styles.flex}>
                <List goods={goods}/>
            </View>
        )
    }
}
//样式定义
const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    item: {
        flex: 1,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 5,
        height: 140,
    },
    img: {
        flex:1,
        //width: 50,
        //height: 50,
        //backgroundColor: 'transparent'
        height: 198,
        width: 300,
    },
    item_text: {
        backgroundColor: '#000',
        opacity: 0.7,
        color: '#fff',
        height: 25,
        lineHeight: 18,
        textAlign: 'center',
        marginTop: 114
    }
});


