import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const profilePhoto = {
  uri: 'https://preview.redd.it/hyacine-bp-icon-v0-a1upcim6r01f1.jpeg?width=640&crop=smart&auto=webp&s=53b71229254a96ee2928bd2e626e08140211c41d' 
};
const normalGif = {
  uri: 'https://i.redd.it/bc9c02trbv1f1.gif' 
};


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={normalGif} style={styles.normalImageImage} />
      <Image source={profilePhoto} style={styles.profileImage} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },

  normalImage: {
    width: 400,
    height: 300
  },

});
