import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import NavigationDrawerStructure from './src/components/navigationDrawerStructure' ;
import HomeScreen from './src/routes/homeScreen' ;
import Login from './src/routes/login' ;
import Register from './src/routes/register' ;
import UserProfile from './src/routes/userAccount' ;
import DetailPost from './src/routes/detailPost' ;
import AboutScreen from './src/routes/aboutScreen' ;

const createNav = (screen, rte, title, icon, label) => {
    let nav = {} ;
    nav[rte] = {
        drawerLabel : 'test',
        // drawerIcon:({ tintColor }) => (<Icon name={icon || 'user'} style={{ fontSize: 24, color: tintColor }} />),
        // drawerLabel:title.replace(/\{post.name\}/, ''),
        screen,
        navigationOptions: ({ navigation }) => ({
            drawerLabel : 'test',
            title:title.replace(/\{post.name\}/, navigation.param && navigation.param.post && navigation.param.post.name ? navigation.param.post.name : ''),
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF4300',
            },
            headerTintColor: '#000',
        }),
    } ;
    return {
        screen: createStackNavigator(nav),
        navigationOptions:({ navigation }) => ({
            drawerIcon:({ tintColor }) => (<Icon name={icon || 'user'} style={{ fontSize: 24, color: tintColor }} />),
            drawerLabel:label || title.replace(/\{post.name\}/, ''),
        })
    } ;
}

let isIdentified = false ;
let needregister = false ;

const routes = {
  Home: createNav(HomeScreen, "Home", 'Bienvenue sur itReddit', 'home', 'Accueil'),
  account: (isIdentified ?
      createNav(UserProfile, "UserProfile", 'Votre compte') : (
          needregister ?
              createNav(Login, "Register", "Enregistrement", ) :
              createNav(Login, "Login", 'Identification')
      )
    ),
  DetailPost: createNav(DetailPost, "DetailPost", 'Détail du post {post.name}'),
  About: createNav(AboutScreen, "About", 'A propos')
};

const AppNavigator = createDrawerNavigator(routes);


export default createAppContainer(AppNavigator);
