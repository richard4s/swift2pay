import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    Stylesheet,
    View,
} from 'react-native';

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userId');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={{ position: 'absolute', top:"50%", right: 0, left: 0 }}>
                <ActivityIndicator size="large" color="#0000ff" animating={true} />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}