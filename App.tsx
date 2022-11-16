import React, {useState} from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
import {WebView} from 'react-native-webview';

type RTE = 'slate' | 'lexical' | 'ckeditor';

interface Info {
  uri: string;
  title: string;
}
const RTE_Info: Record<RTE, Info> = {
  slate: {title: 'Slate', uri: 'https://www.slatejs.org/examples/richtext'},
  lexical: {title: 'Lexical', uri: 'https://playground.lexical.dev/'},
  ckeditor: {title: 'CKEditor', uri: 'https://ckeditor.com/ckeditor-5/demo/'},
};

const App = () => {
  const [whichOne, setWhichOne] = useState<RTE>('slate');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', height: 40}}>
        {(Object.entries(RTE_Info) as [RTE, Info][]).map(([rte, info]) => (
          <View style={{flex: 1}}>
            <Button onPress={() => setWhichOne(rte)} title={info.title} />
          </View>
        ))}
      </View>
      <WebView
        key={whichOne}
        source={{uri: RTE_Info[whichOne].uri}}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default App;
