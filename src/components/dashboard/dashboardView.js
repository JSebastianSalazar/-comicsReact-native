import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class DashBoardView extends Component{

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Hola</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25
    }
});