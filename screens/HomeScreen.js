import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//import { WebBrowser } from 'expo';
//import { MonoText } from '../components/StyledText';

const MenuButton = (props) => (
  <TouchableOpacity onPress={ () => {props.navigation.openDrawer();}} style={{paddingLeft:10}}>
    <Image source ={require('../assets/images/list2.png')} />
  </TouchableOpacity>
);

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    //header: null,
    //headerTitle: <LogoTitle />,
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
