import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Menu extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#03030E', justifyContent: 'center' }}>
                {/* Vue pour fermer le menu */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        paddingRight: 10,
                        paddingTop: 10
                    }}
                >
                    <Icon
                        name="close"
                        size={30}
                        color="white"
                        onPress={this.props.onPress}
                    />
                </View>
                {/* Boutons des différents parcours */}
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    {/* 1ere ligne de boutons */}
                    <View style={styles.Ligne_de_bouton}>
                        {/* Bouton Développement web */}
                        <View style={[styles.Bouton, { marginRight: 10 }]}>
                            <Text style={styles.text}>Développement web</Text>
                        </View>
                        {/* Bouton Graphisme */}
                        <View style={[styles.Bouton, { marginLeft: 10 }]}>
                            <Text style={styles.text}>Graphisme</Text>
                        </View>
                    </View>

                    {/* 2e ligne de boutons */}
                    <View style={styles.Ligne_de_bouton}>
                        {/* Bouton Communication & Strat UX */}
                        <View style={[styles.Bouton, { marginRight: 10 }]}>
                            <Text style={styles.text}>Communication & Strat UX</Text>
                        </View>
                        {/* Bouton Licence Jeux vidéos */}
                        <View style={[styles.Bouton, { marginLeft: 10 }]}>
                            <Text style={styles.text}>Licence Jeux vidéos</Text>
                        </View>
                    </View>

                    {/* bouton Projets étudiants */}
                    <View style={[styles.Bouton, { alignSelf: 'center' }]}>
                        <Text style={styles.text}>Projets étudiants</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={styles.bouton_text}
                        onPress={() => {
                            this.props.navigation.navigate("Home")
                        }}                    >
                        Changer de parcours
                    </Text>
                    <Text
                        style={[styles.bouton_text, { color: 'red' }]}>Quitter la session</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
    },
    Bouton: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: 130,
        height: 130,
        borderRadius: 12,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    Ligne_de_bouton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 20
    },
    bouton_text: {
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        justifyContent: 'flex-end',
        paddingTop: 20,
    },

});


export default (Menu);
