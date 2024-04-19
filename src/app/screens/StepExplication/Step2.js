import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


const { width } = Dimensions.get('window');

this.styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
});

class Step2 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#03030E', padding: 20, paddingBottom: 50 }}>
                <Image
                    source={require('../../assets/image/GlowStep2.png')}
                    style={{ position: 'absolute', right: 0 }}
                />
                {/* <View style={{ flex: 1, justifyContent: 'center', marginTop: 150 }}>
                    <Image
                        source={require('../../../../assets/image/GlowStep2.png')}
                        style={{ height: 200, width: 200, alignSelf: 'center', justifyContent: 'center', paddingBottom: 20 }}
                    />
                </View> */}


                <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 90 }}>
                    <Icon
                        name="headset-outline"
                        size={30}
                        color={'#fff'}
                        style={{ textAlign: 'center', paddingBottom: 10 }}
                    />
                    <Text style={{ color: 'white', textAlign: 'center' }}>Mettez des écouteurs</Text>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Pour une meilleure expérience, nous vous conseillons de mettre des écouteurs ou bien un casque audio.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                    >Précédent</Button>
                    <Button
                        onPress={() => this.props.navigation.navigate("Step3")}
                    >Suivant</Button>

                </View>

            </View>

        );
    }
}

export default (Step2);
