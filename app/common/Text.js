import React, {Component} from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';

 export default class TextView extends Component{
     render(){
         return(
             <View style={[styles.flex, styles.contenter]}>
                 <Text style={styles.font} onPress={this.show.bind(this,"hello wold")}>Hello World</Text>
                 <Text style={styles.font} numberOfLines={2} ellipsizeMode="middle">
                     askdjlksjflksjflksjdflkajdslkfjsldkfjlaskdjflajdf
                     jsalfkjlskdjfskljfdlksjadflkajsdflkajsdflksjdfl
                 </Text>
                 <Text selectable={true}>1234567</Text>
             </View>
         )
     }
     show(msg){
        alert(msg)
     }
 }
 const styles = StyleSheet.create({
     flex: {
         flex: 1
     },
     contenter: {
         marginLeft: 5,
         marginRight: 5,
         backgroundColor: "#ff0",
         justifyContent: "center",
         alignItems: "center"
     },
     font: {
        color: "#f70",
        fontWeight: "bold",
        fontSize: 40,
        textShadowColor: "#c0c0c0",
        textShadowRadius: 2,
        textShadowOffset: {width:2, height: 2}
     }
 })