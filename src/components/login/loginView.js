import React, {Component} from 'react';

import {Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert,
} from 'react-native';


export default class LoginView extends  Component{

    constructor() {
        super();
    }
    onLogin(){
        Alert.alert(
            'Access',
            'You have logged in',
            [
                {
                    text: 'Accept',
                    onPress: (this.accept)
                },
                {
                    text: 'Cancel',
                    onPress: (this.cancel)
                }
        ]
        )
    }

    accept() {

    }

    cancel() {

    }
    render(): * {
        return(
            <View>
                <TouchableHighlight onPress={this.onLogin} style={styles.botton}>
                    <Text style={styles.textBotton}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    botton: {
        width: 300,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1

    },
    textBotton:{
        color: 'white'
    }
})