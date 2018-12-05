import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Header from './components/headers';
import { Avatar } from 'react-native-elements';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={"hellopotato"}/>
      <Text>staph</Text>
      <Avatar
      size="large"
      source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
      />
      <Button 
      title={"stop"} 
      onPress={()=> {console.log('ok'); }}
      color="magenta">
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
