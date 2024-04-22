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
import Crea from '../screens/Crea';
import Comm from '../screens/Comm';
import Dev from '../screens/Dev';
import DescriptionTowerIUT from '../screens/DescriptionTowerIUT';
import DescriptionIllustration from '../screens/DescriptionIllustration';
import DescriptionNewspaperIUT from '../screens/DescriptionNewspaperIUT';

export default function Navigation(props) {
    return (
        <NavigationContainer >
            {MainStackScreen(props)}
        </NavigationContainer>
    );
};

const MainStack = createNativeStackNavigator();
const MainStackScreen = (props) => (
    <>
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
                name="Menu"
                options={{
                    header: () => null,
                }}
            >
                {() => MenuStackScreen(props)}
            </MainStack.Screen>
            <MainStack.Screen
                name="Step"
                component={StepStackScreen}
                options={{
                    header: () => null,
                }}
            />
        </MainStack.Navigator>
    </>
)

const MenuStack = createNativeStackNavigator();
const MenuStackScreen = (props) => (
    <>
        <Menu {...props} ></Menu>
        <MenuStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,

            }}
        >
            <MenuStack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null,
                }}
            />

            <MenuStack.Screen
                name="Scan"
                component={Scan}
                options={{
                    header: () => null,
                }}
            />

            <MenuStack.Screen
                name="Step"
                component={StepStackScreen}
                options={{
                    header: () => null,
                }}
            />
            <MenuStack.Screen
                name="Dev"
                component={Dev}
                options={{
                    header: () => null,
                }}
            />
            <MenuStack.Screen
                name="Comm"
                component={Comm}
                options={{
                    header: () => null,
                }}
            />
            <MenuStack.Screen
                name="Crea"
                component={Crea}
                options={{
                    header: () => null,
                }}
            />
            <MenuStack.Screen
                name="Newspaper"
                component={DescriptionNewspaperIUT}
                options={{
                    header: () => null,
                }}
            />
            <MenuStack.Screen
                name="Tower"
                component={DescriptionTowerIUT}
                options={{
                    header: () => null,
                }}
            />
            <MenuStack.Screen
                name="Illustration"
                component={DescriptionIllustration}
                options={{
                    header: () => null,
                }}
            />


        </MenuStack.Navigator>
    </>
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