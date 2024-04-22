import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Menu from '../component/CustomComponent/Menu';
import ButtonMenu from '../component/CustomComponent/ButtonMenu';
// import Menu from '../Menu/Menu';



class Crea extends React.Component {
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
                    style={{ position: 'absolute', right: 0 }}
                />
                <View style={{ flexDirection: 'row', paddingTop: 15, alignSelf: 'center' }}>
                    <Text style={styles.Titre}>
                        Création Numérique
                    </Text>
                </View>
                <ScrollView style={{ flex: 1, padding: 20, }}>
                    {/* <View style={{ flex: 1 }}> */}
                    <Text style={styles.Text}>
                        Le parcours Création Numérique est un parcours 360.
                        En effet, il permet d’apprendre les divers aspects du numérique sous forme print,
                        digitale ou audiovisuelle.
                        Ce parcours se concentre à la fois sur les aspects techniques mais aussi théoriques
                        afin de connaître les éléments fondamentaux des divers métiers liés au numérique.
                        Il offre également l’apprentissage des bases dans le domaine de la communication
                        et du développement web afin de connaître le fonctionnement et l’importance de
                        ces secteurs en lien étroit avec la création numérique.
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/Crea1.png')}
                            width={50}
                            height={100}
                            style={styles.Image}
                        />
                    </View>
                    {/* </View> */}
                    <Text style={styles.Text}>
                        La diversité des projets marque la particularité du parcours,
                        permettant de s’épanouir artistiquement tout en se formant sur
                        divers logiciels graphiques comme Illustrator, Photoshop, DaVinci,
                        After Effect etc.
                    </Text>

                    <View>
                        <Image
                            source={require('../assets/image/Crea.png')}
                            width={50}
                            height={100}
                            style={styles.Image}
                        />
                    </View>
                    <Text style={styles.Text}>
                        Ces projets amènent à une démarche conceptuelle de l’élaboration
                        d’un produit final ou d’un prototype en projet d’équipe ou individuel.
                    </Text>

                    <Text style={styles.Text}>
                        Ce parcours se penche sur la compétence “Exprimer” qui vise à créer une
                        identité visuelle et éditoriale transmédia, mais aussi expliquer un récit
                        interactif et une direction artistique.
                    </Text>
                    <Text style={styles.Text}>
                        Quelques métiers liés :
                    </Text>
                    <View style={{ paddingLeft: 15, paddingBottom: 20 }}>
                        <Text style={styles.Text}>
                            - Directeur artistique
                        </Text>
                        <Text style={styles.Text}>
                            - Infographiste
                        </Text>
                        <Text style={styles.Text}>
                            - Motion Designer
                        </Text>
                        <Text style={styles.Text}>
                            - Réalisateur
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
        textAlign: 'center',
        marginBottom: 15,
        color: 'white',
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15,
    },
    Text: {
        fontFamily: 'DarkerGrotesque-Medium',
        lineHeight: 20,
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
    },
    Image: {
        aspectRatio: 500 / 750,
        width: '100%',
        height: undefined,
        marginVertical: 15
    }
});


export default (Crea);