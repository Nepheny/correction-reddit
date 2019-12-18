import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class UserAccount extends Component {
    render() {
        return (
            <>
                <Header containerStyle={{flex: 0, height:60, paddingTop:0}}
                        backgroundColor='#FF4300'
                        leftComponent={<Icon onPress={() => this.props.navigation.goBack()} name='arrow-left' size={25} color='black' style={{marginLeft: 10}}/>}
                        centerComponent={<Text style={{fontSize:25, fontWeight:'bold'}}>Mon compte</Text>}
                />
                <View style={{flex: 1, backgroundColor:'#FF430020'}}>
                    <View style={{flex: 1}}>
                        <Text>Compte utilisateur</Text>
                    </View>
                </View>
            </>
        );
    }
}
