'use strict';

var React = require('react-native');

var {
    Text,
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
                </View>
        )
    }
}

React.AppRegistry.registerComponent( 'LoveApp', () => LoveApp );
