import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DetailPost extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Detail du post</Text>
            </View>
        );
    }
}
