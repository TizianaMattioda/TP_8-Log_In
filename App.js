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
      <View style={styles.header}>
        <Text style={styles.title}>Login App (Hyacine)</Text>
      </View>
      
      <Image source={normalGif} style={styles.banner} />
      <Image source={profilePhoto} style={styles.avatar} />
      
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

  header: {
    width: '100%',
    backgroundColor: '#fee4e8',
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  banner: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -40,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },

});
