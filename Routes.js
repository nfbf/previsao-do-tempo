import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './app/pages/Home';
import PrevisaoDoTempo from './app/pages/PrevisaoDoTempo';

const AppStack = createStackNavigator();

const Routes=() =>{
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" initialRouteName="Home">
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="PrevisaoDoTempo" component={PrevisaoDoTempo}/>
                </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;