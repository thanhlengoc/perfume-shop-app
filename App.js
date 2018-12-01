import React from 'react';
import { StatusBar } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Authentication from './components/Authenication/Authenication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import Main from './components/Main/Main';
import OrderHistory from './components/OrderHistory/OrderHistory';

import refreshToken from './api/refreshToken';

StatusBar.setHidden(true);

export default class App extends React.Component {
  
  componentDidMount() {
    setInterval(refreshToken, 60000);
  }

  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'MAIN' }}
        renderScene = {(route, navigator) => {
          switch (route.name) {
            case 'MAIN': return <Main navigator={navigator}/>;
            case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} user={route.user}/>;
            case 'AUTHENTICATION': return <Authentication navigator={navigator}/>;
            default: return <OrderHistory navigator={navigator}/>
          }
        }}
        configureScene = { route => {
          if(route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
          return Navigator.SceneConfigs.FloatFromLeft;
        }}
        />
    );
  }
}


