import React, {useState} from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
import {WebView} from 'react-native-webview';

type RTE = 'slate' | 'lexical';

const RTE_URI: Record<RTE, string> = {
  slate: 'https://www.slatejs.org/examples/richtext',
  lexical: 'https://playground.lexical.dev/',
};

const App = () => {
  const [whichOne, setWhichOne] = useState<RTE>('slate');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', height: 40}}>
        <View style={{flex: 1}}>
          <Button onPress={() => setWhichOne('slate')} title="Slate" />
        </View>
        <View style={{flex: 1}}>
          <Button onPress={() => setWhichOne('lexical')} title="Lexical" />
        </View>
      </View>
      <WebView
        key={whichOne}
        source={{uri: RTE_URI[whichOne]}}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default App;
