import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Navigator,
} from 'react-native';
//import { SearchBar, Header } from 'react-native-elements';


export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    // header: <Header
    //   leftComponent={{ icon: 'menu', color: '#fff' }}
    //   centerComponent={{ text: 'Perfume Shop', style: { color: '#fff' } }}
    //   rightComponent={{ icon: 'home', color: '#fff' }}
    // />,
    headerTitle: 'Perfume Shop',
    title: 'Clothing',
    headerStyle: {
        backgroundColor: '#f4511e',
        height: 45,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerLeft: (
        <MenuButton navigation = { navigation } />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
