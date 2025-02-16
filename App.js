import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const myName = 'Seoyoon';
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'tomato' }}></View>
      <View style={{ width: 100, height: 100, backgroundColor: 'teal' }}></View>
      <View style={{ width: 100, height: 100, backgroundColor: 'orange' }}></View>
      {/* <Text style={styles.text}>Hello {myName} made a ReactNative APP!!!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

//STyleSheet을 쓰는 이점은 내장된 함수들을 자동완성 기능으로 보여줘서 편리학기 때문이다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color: 'blue',
  },
});
