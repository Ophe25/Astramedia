import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import LogoSpin from '../screens/LogoSpin';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Menu from '../component/CustomComponent/Menu';
import Step1 from '../screens/StepExplication/Step1';
import Step2 from '../screens/StepExplication/Step2';
import Step3 from '../screens/StepExplication/Step3';

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
            name="Home"
            component={Home}
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
            name="Menu"
            component={Menu}
            options={{
                header: () => null,
            }}
        />

        <MainStack.Screen
            name="Step"
            component={StepStackScreen}
            options={{
                header: () => null,
            }}
        />


    </MainStack.Navigator>
)

const StepStack = createNativeStackNavigator();
const StepStackScreen = (props) => (
    <StepStack.Navigator
        initialRouteName="Step1"
        screenOptions={{
            headerShown: false,
        }}
    >
        <StepStack.Screen
            name="Step1"
            component={Step1}
            options={{
                header: () => null,
            }}
        />
        <StepStack.Screen
            name="Step2"
            component={Step2}
            options={{
                header: () => null,
            }}
        />
        <StepStack.Screen
            name="Step3"
            component={Step3}
            options={{
                header: () => null,
            }}
        />

    </StepStack.Navigator>

);