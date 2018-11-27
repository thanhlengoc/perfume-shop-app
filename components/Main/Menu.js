import React, { Component } from 'react';
import {
    View, Text,
    TouchableOpacity, StyleSheet, Image
} from 'react-native';
//import global from '../global';
//import profileIcon from '../../media/temp/profile.png';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null};
        //global.onSignIn = this.onSignIn.bind(this);
    }

    onsignin(user) {
        this.setState({user});
    }

    // onSignOut() {
    //     this.setState({ user: null });
    //     //saveToken('');
    // }

    // gotoAuthentication() {
    //     const { navigator } = this.props;
    //     navigator.push({ name: 'AUTHENTICATION' });
    // }
    // gotoChangeInfo() {
    //     const { navigator } = this.props;
    //     navigator.push({ name: 'CHANGE_INFO', user: this.state.user });
    // }
    // gotoOrderHistory() {
    //     const { navigator } = this.props;
    //     navigator.push({ name: 'ORDER_HISTORY' });
    // }

    render() {
        return (
            <View>
                <Image/>
            </View>
        )
    }
}

export default Menu;