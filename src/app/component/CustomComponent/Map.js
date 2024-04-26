import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


class Map extends React.Component {

    render() {
        return (
            // Ce composant est la carte affiché lors du clique sur l'icon "carte"
            <TouchableOpacity
                style={{ flex: 1, padding: 15 }}
                onPress={this.props.onPress}
            >
                <View style={{ flex: 9 }}>
                    <Image
                        source={require('../../assets/image/Map.png')}
                        style={{
                            aspectRatio: 85 / 150, width: undefined, height: '100%', alignSelf: 'center'
                        }} />
                </View>
                <Text style={[styles.Text]}>Les Qr Codes sont répartis dans 3 salles différentes, la 207, la 212 et la 205.
                    À vous de les retrouver afin d'apprendre à mieux connaître l'IUT et la formation MMI.</Text>

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
        textAlign: 'justify',
    },
});

export default (Map);

