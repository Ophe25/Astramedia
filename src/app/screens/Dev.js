import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Menu from '../component/CustomComponent/Menu';
import ButtonMenu from '../component/CustomComponent/ButtonMenu';
// import Menu from '../Menu/Menu';



class Dev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#03030E', paddingBottom: 20 }}>
                <Image
                    source={require('../assets/image/GlowDescription2.png')}
                    style={{ position: 'absolute', top: 0 }}
                />
                <Image
                    source={require('../assets/image/GlowStep2.png')}
                    style={{ position: 'absolute', right: 0, bottom: 0 }}
                />
                <View style={{ flexDirection: 'row', paddingTop: 15, alignSelf: 'center' }}>
                    <Text
                        style={styles.Titre}>
                        Développement Web et Dispositifs Intéractifs
                    </Text>
                </View>
                <ScrollView style={{ flex: 1, padding: 20 }}>
                    <Text style={styles.Text}>
                        Le parcours Développement Web et Dispositifs Interactifs apporte les connaissances et
                        compétences nécessaires en abordant le codage et les algorithmes à travers la théorie
                        et la pratique.
                    </Text>
                    <Text style={styles.Text}>
                        Il prépare les futurs étudiants aux enjeux du développement
                        d’applications et sites web par l’apprentissage de divers ou outils et langages
                        tel que Affinity, Javascript, C++, PHP etc.
                    </Text>
                    <Text style={styles.Text}>
                        En s’appuyant sur la compétence “Développer”,
                        ce parcours met l’accent sur le code afin d’atteindre une
                        maîtrise selon le type de développement web(Front-end,
                        Back-end, Full-stack).
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/Commat.png')}
                            style={styles.Image}
                        />
                    </View>
                    <Text style={styles.Text}>
                        Le parcours permet à l’étudiant d’appliquer ses compétences
                        et de se challenger lors de projets en groupe ou individuel.
                        Parmi ces projets, il est amené à concevoir un jeu vidéo,
                        coder un site web ou encore développer une application
                        sur mobile.
                    </Text>
                    <Text style={styles.Text}>
                        Quelques métiers liés :
                    </Text>
                    <View style={{ paddingLeft: 15, paddingBottom: 20 }}>
                        <Text style={styles.List}>
                            - Intégrateur web
                        </Text>
                        <Text style={styles.List}>
                            - Développeur web
                        </Text>
                        <Text style={styles.List}>
                            - Directeur de systèmes d’information
                        </Text>
                        <Text style={styles.List}>
                            - Ingénieur
                        </Text>
                    </View>
                </ScrollView>
            </View>


        );
    }
}

var styles = StyleSheet.create({
    Titre: {
        fontFamily: 'DarkerGrotesque-Medium',
        // textAlign: 'center',
        marginBottom: 15,
        color: 'white',
        fontSize: 20,
        // paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50
    },
    Text: {
        fontFamily: 'DarkerGrotesque-Medium',
        lineHeight: 20,
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
        paddingVertical: 10
    },
    List: {
        fontFamily: 'DarkerGrotesque-Medium',
        lineHeight: 20,
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
    },
    Image: {
        aspectRatio: 570 / 450,
        width: '100%',
        height: undefined,
        marginVertical: 15
    }
});


export default (Dev);