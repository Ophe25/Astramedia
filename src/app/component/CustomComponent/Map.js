import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';


class Map extends React.Component {

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={this.props.onPress}
            >
                <Text style={[styles.Text]}>Les Qr Codes sont répartis dans 3 salles différentes, la 207, la 212 et la 205.
                    Chaque salle corresponds à un parcours, Développement web et Dispositifs Intéractifs, Stratégie de Communication Numérique et Design
                    d'Expérience et Création Numérique.
                    À vous de les retrouver afin d'apprendre à mieux connaître l'IUT et la formation MMI.</Text>

                <View style={{ flex: 9 }}>
                    <Image
                        source={require('../../assets/image/Map.png')}
                        style={{
                            aspectRatio: 85 / 150, width: undefined, height: '100%', alignSelf: 'center'
                        }} />
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    Text: {
        flex: 1,
        fontFamily: 'Arial',
        fontSize: 15,
        color: '#fff',
        textAlignVertical: 'bottom',
        textAlign: 'center',
        paddingBottom: 15,
        paddingHorizontal: '10%'
    },
});

export default (Map);

