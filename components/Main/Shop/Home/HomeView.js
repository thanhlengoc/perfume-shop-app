
import React, {Component} from 'react';
import { ScrollView } from 'react-native';

import Category from './Category';
import Collection from './Collection';
import TopProduct from './TopProduct';

class HomeView extends Component {
    render() {
        const { types, topProducts } = this.props;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection navigator={this.props.navigator}/>
                <Category navigator={this.props.navigator} types={types}/>
                <TopProduct navigator={this.props.navigator} topProducts={topProducts}/>
            </ScrollView>
        )
    }
}

export default HomeView;
