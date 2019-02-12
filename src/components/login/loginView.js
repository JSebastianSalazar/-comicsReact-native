import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
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
            <ImageBackground  style={styles.container} source={{uri: 'https://images.unsplash.com/photo-1531700910244-05f8c922877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}} >
            <View>
                <Text style={styles.title}>Comics</Text>
                <TouchableHighlight onPress={this.onLogin} style={styles.botton}>
                    <Text style={styles.textBotton}>Login</Text>
                </TouchableHighlight>
            </View>
            </ImageBackground>
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
        marginTop: 60,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1

    },
    textBotton:{
        color: 'white'
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 30,
        justifyContent: 'center',
    },
    title: {
        marginTop: 50,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 25
    }
});