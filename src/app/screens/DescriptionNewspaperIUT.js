import React from 'react';
import { View, Image, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { Text } from 'react-native-paper';
import CustomButton from '../component/CustomComponent/CustomButton';


class DescriptionNewspaperIUT extends React.Component {

    componentDidMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            () => { return true },
        );
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
                <Text style={styles.Titre}>
                    Journal de l'Illustration
                </Text>
                <ScrollView style={{ flex: 1, padding: 15 }}>
                    <Text style={[styles.Text, { fontSize: 18, fontFamily: 'DarkerGrotesque-Bold', }]}>
                        L'Illustration : Un Témoin Privilégié de l'Histoire Mondiale
                    </Text>
                    <Text style={styles.Text}>
                        Fondé en 1843, L'Illustration se positionne comme un pilier incontournable de la presse française,
                        couvrant un siècle d'histoire, de la Monarchie de Juillet à la fin de la IIIe République.
                        Ce journal universel, traitant de l'actualité sous tous ses aspects,
                        offre une perspective complète sur les événements majeurs du monde.
                    </Text>
                    <View>
                        <Image
                            style={styles.Image}
                            source={require('../assets/image/NewspaperIllustration.png')}
                        />
                    </View>
                    <Text style={styles.Text}>
                        Révolutionnant la presse mondiale dès sa création,
                        L'Illustration accorde une place prépondérante aux images,
                        engageant les meilleurs dessinateurs, illustrateurs, artistes,
                        reporters et photographes. Surnommé "la plus vivante des encyclopédies universelles",
                        il est le premier média français à utiliser systématiquement la photographie,
                        marquant ainsi une nouvelle ère dans le journalisme visuel.
                        Premier hebdomadaire illustré de langue française,
                        L'Illustration innove également en adoptant une position neutre et indépendante,
                        éloignée de tout parti pris. Cette approche lui confère une notoriété mondiale,
                        avec une diffusion dans 150 pays et plus de 40 000 abonnés aux États-Unis.
                    </Text>
                    <View>
                        <Image
                            style={styles.Image}
                            source={require("../assets/image/Poster1.png")}
                        />
                    </View>
                    <Text style={styles.Text}>
                        Premier hebdomadaire illustré de langue française,
                        L'Illustration innove également en adoptant une position neutre et indépendante,
                        éloignée de tout parti pris. Cette approche lui confère une notoriété mondiale,
                        avec une diffusion dans 150 pays et plus de 40 000 abonnés aux États-Unis.

                        Aujourd'hui, ce journal vit une nouvelle ère numérique,
                        accessible dans son intégralité depuis mars 2013 sur Internet.
                        vec 5293 numéros et environ 180 000 pages,
                        sa version numérique offre une précieuse source d'informations pour
                        les chercheurs et les passionnés d'histoire.
                    </Text>
                    <Text style={[styles.Text, { marginBottom: 20 }]}>
                        Aujourd'hui, ce journal vit une nouvelle ère numérique,
                        accessible dans son intégralité depuis mars 2013 sur Internet.
                        vec 5293 numéros et environ 180 000 pages,
                        sa version numérique offre une précieuse source d'informations pour
                        les chercheurs et les passionnés d'histoire.
                    </Text>
                    {this.props.route.params.Scan ? <CustomButton
                        title={'Scanner un autre QR Code'}
                        style={{ marginVertical: 20 }}
                        onPress={() => this.props.navigation.replace("Scan", { parcours: "historique" })}
                    /> :
                        <></>}
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
        marginVertical: 15,
        alignSelf: 'center',

    }
});


export default (DescriptionNewspaperIUT);