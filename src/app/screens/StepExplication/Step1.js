import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { width } = Dimensions.get('window');

this.styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
});

class Step1 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#03030E', padding: 20, paddingBottom: 50 }}>

                <Image
                    source={require('../../assets/image/GlowStep1.png')}
                    style={{ position: 'absolute' }}
                />
                {/*<View style={{ flex: 1, justifyContent: 'center', marginTop: 150 }}>
                    <Image
                        source={require('../../assets/image/GlowStep1.png')}
                        style={{ height: 200, width: 200, alignSelf: 'center', justifyContent: 'center', paddingBottom: 20 }}
        />
                </View>*/}
                <View style={{ flex: 1, alignSelf: 'center', paddingVertical: 90, justifyContent: 'center' }}>
                    <Icon
                        name="hand-wave"
                        size={30}
                        color={'#fff'}
                        style={{ textAlign: 'center', paddingBottom: 10 }}
                    />

                    <Text style={[{ color: 'white', textAlign: 'center' }]}>Bienvenue</Text>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Astramédia est conçue pour vous faire découvrir des lieux éducatifs ainsi que leur histoire de manière immersive.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        onPress={() => { }}
                    >Passer</Button>
                    <Button
                        onPress={() => this.props.navigation.navigate("Step2")}
                    >Suivant</Button>

                </View>

            </View>

        );
    }
}

export default (Step1);
