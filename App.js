import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App= function App() {
  return (
    <View style={styles.container}>
       <View style={styles.rec}>
         <Text style={styles.face}>·    ·</Text>
         <Text style={styles.mouth}>‿</Text>
       </View>
      <Text style={styles.fontStyle}>110719018</Text>
      <View style={styles.name}>
        <Text style={styles.nameStyle}>陳姿伃</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48D1CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  face:{
    fontSize:130,
    marginLeft:50,
    marginTop:40,
  },
  mouth:{
    fontSize:130,
    marginLeft:135,
    marginTop:-180,
  },
  rec:{
    backgroundColor: '#AFEEEE',
    width:350,
    height:300,
    borderRadius:20,
    marginTop:-120,
  },
  fontStyle:{ //要給它自己一個區域
    fontSize:40,
    fontWeight:'bold',
    color:'#FFFFFF',
    marginTop:100,
  },
  name:{
    backgroundColor: '#FFFF33',
    height:50,
    width:200,
    borderRadius:20,
  },
  nameStyle:{
    fontSize:30,
    fontWeight:'bold',
    color:'#444444',
    alignSelf:'center',
    marginTop:10,
  }
});

export default App;//使有畫面
