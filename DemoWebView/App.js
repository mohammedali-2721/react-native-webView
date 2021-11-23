import React, { Component } from 'react';
import { SafeAreaView, View ,Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {

  render() {
       const windowHeight = Dimensions.get('window').height;

   return (
   <SafeAreaView>
       <View style={{height:windowHeight,marginTop:20,justifyContent:'center',}}>
            <WebView
              originWhitelist={['*']}
              source={{ html: '<h1>This is a static HTML source Hello World!</h1>' }}
             />
        </View>
  </SafeAreaView>
   );
  }

}