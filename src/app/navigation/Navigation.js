import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Accueil from "../component/Accueil/Accueil";
import Scan from "../component/Scan";
import Menu from "../component/Menu/Menu";
import LogoSpin from "../component/LogoSpin";
import Etape1 from "../component/EtapesExplication/Etape1";
import Etape2 from "../component/EtapesExplication/Etape2";
import Etape3 from "../component/EtapesExplication/Etape3";
import HelloWorldAR from "../component/HelloWorldAR";

export default function Navigation(props) {
    return (
        <NavigationContainer>
            {MainStackScreen(props)}
        </NavigationContainer>
    );
};
const MainStack = createNativeStackNavigator();
const MainStackScreen = (props) => (
    <MainStack.Navigator
        initialRouteName="LogoSpin"
        screenOptions={{
            headerShown: false,

        }}
    >
        <MainStack.Screen
            name="LogoSpin"
            component={LogoSpin}
            options={{
                header: () => null,
            }}
        />
        <MainStack.Screen
            name="Accueil"
            component={Accueil}
            options={{
                header: () => null,
            }}
        />

        <MainStack.Screen
            name="Scan"
            component={Scan}
            options={{
                header: () => null,
            }}
        />

        <MainStack.Screen
            name="HelloWorld"
            component={HelloWorldAR}
            options={{
                header: () => null,
            }}
        />

        <MainStack.Screen
            name="Menu"
            component={Menu}
            options={{
                header: () => null,
            }}
        />

        <MainStack.Screen
            name="Etapes"
            component={EtapeStackScreen}
            options={{
                header: () => null,
            }}
        />


    </MainStack.Navigator>
)

const EtapeStack = createNativeStackNavigator();
const EtapeStackScreen = (props) => (
    <EtapeStack.Navigator
        initialRouteName="Etape1"
        screenOptions={{
            headerShown: false,
        }}
    >
        <EtapeStack.Screen
            name="Etape1"
            component={Etape1}
            options={{
                header: () => null,
            }}
        />
        <EtapeStack.Screen
            name="Etape2"
            component={Etape2}
            options={{
                header: () => null,
            }}
        />
        <EtapeStack.Screen
            name="Etape3"
            component={Etape3}
            options={{
                header: () => null,
            }}
        />

    </EtapeStack.Navigator>

);