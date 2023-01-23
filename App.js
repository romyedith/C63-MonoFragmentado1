import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render(){
    return(
      <View style ={styles.container}>
        <Header
          backgroundColor={"#9c8210"}
          centerComponent={{
            text:'mono fragmentado',
            style: { color:'#fff', fontSize:20}
          }}      
       />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
