import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://www.slatejs.org/examples/richtext'}}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default App;
