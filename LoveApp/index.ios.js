'use strict';

var React = require('react-native');

var {
    Text,
    Image,
    View
} = React;

var styles = React.StyleSheet.create({
                                     container:{
                                     flex:1,
                                     backgroundColor: '#f5f5f5'
                                     },
                                     maxFont:{
                                     fontSize:25
                                     }
});

class LoveApp extends React.Component{
    
    render(){
        return (
                <View style = {styles.container}>
                    <Text style = {styles.maxFont}> welcome to React Native! I am  Andrew </Text>
                <Image source={{uri:'http://pic27.nipic.com/20130324/9252150_195040697000_2.jpg'}} } style = {width:40,height:40} ></Image>
                </View>
        )
    }
}

React.AppRegistry.registerComponent( 'LoveApp', () => LoveApp );
