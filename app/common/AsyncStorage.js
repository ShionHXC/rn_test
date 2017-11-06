import React , {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    TextInput
} from "react-native"

// 用户信息填写组件
export default class UserInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            phone: ""
        }
    }
    // 页面组件渲染完成后
    componentDidMount(){
        let _that = this;
        // 需要查询的键值对
        let keys = ["name","phone"]
        // 根据键值对数组查询保存的键值对
        AsyncStorage.multiGet(keys, function(err, result){
            if(err){
                return;
            }
            //得到的结果是二维数组（result[i][0]表示我们存储的键，result[i][1]表示我们存储的值）
            _that.setState({
                name: (result[0][1] != null) ? result[0][1] : "",
                phone: (result[1][1] != null) ? result[1][1] : ""
            })
        });
    }
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.row}>
                    <View style={styles.head}>
                        <Text style={styles.label}>姓名</Text>
                    </View>
                    <View style={styles.flex}>
                        <TextInput
                            value={this.state.name}
                            onChangeText={(name) => this.setState({name})}
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.head}>
                        <Text style={styles.label}>手机</Text>
                    </View>
                    <View style={styles.flex}>
                        <TextInput
                            value={this.state.phone}
                            onChangeText={(phone) => this.setState({ phone })}
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <Text onPress={this.save.bind(this)} style={styles.btn}>保存</Text>
                    <Text onPress={this.clear.bind(this)} style={styles.btn}>清除</Text>
                </View>
            </View>
        )
    }
    // 保存数据
    save(){
        let keyValues = [['name', this.state.name],['phone', this.state.phone]];
        AsyncStorage.multiSet(keyValues, function(err){
            if(err){
                return 
            }
            alert("数据保存成功")
        })
    }
    // 清除
    clear(){
        let _that = this;
        AsyncStorage.clear(function(err){
            if(!err){
                _that.setState({
                    name: '',
                    phone: ''
                })
                alert("数据清除完成")
            }
        })
    }
}

//样式定义
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    topStatus: {
        marginTop: 25,
    },
    row: {
        flexDirection: 'row',
        height: 45,
        marginBottom: 10
    },
    head: {
        width: 70,
        marginLeft: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    input: {
        height: 45,
        borderWidth: 1,
        marginRight: 5,
        paddingLeft: 10,
        borderColor: '#ccc'
    },
    btn: {
        flex: 1,
        backgroundColor: '#FF7200',
        height: 45,
        textAlign: 'center',
        color: '#fff',
        marginLeft: 5,
        marginRight: 5,
        lineHeight: 45,
        fontSize: 15,
    },
})