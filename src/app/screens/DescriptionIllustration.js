import React from 'react';
import { View, Image, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { Text } from 'react-native-paper';
import CustomButton from '../component/CustomComponent/CustomButton';


class DescriptionIllustration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

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
                    source={require('../assets/image/GlowStep3.png')}
                    style={{ position: 'absolute', right: 0 }}
                />
                <Image
                    source={require('../assets/image/GlowDescription3.png')}
                    style={{ position: 'absolute', bottom: 0 }}
                />
                <Text style={styles.Titre}>
                    Batiment de l'Illustration
                </Text>
                <ScrollView style={{ flex: 1, padding: 15 }}>

                    <Text style={[styles.Text, { fontSize: 18, fontFamily: 'DarkerGrotesque-Bold', paddingBottom: 10 }]}>
                        Le bâtiment de l’illustration : un lieu emblématique de l’ancienne imprimerie
                    </Text>
                    <Text style={styles.Text}>
                        Inauguré en 1933 à Bobigny en présence du ministre de l’intérieur,
                        le bâtiment de l’illustration est un lieu rempli d’histoire.
                        Aujourd’hui réaménagé pour l’université, ce lieu fut le principal élément
                        parmi les réserves de stockages et autres pièces de l’ancienne imprimerie où
                        se déroulaient les impressions d’un hebdomadaire populaire à l’époque.
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/IUTBefore.png')}
                            style={styles.Image}
                        />
                    </View>
                    <Text style={styles.Text}>
                        Son architecture type industrielle et ses briques rouges exclusivement
                        conçues pour le bâtiment par une entreprise belge rappellent le Mouvement
                        Moderne et influença par la suite d’autres lieux comme la distillerie Cusenier.
                        On distingue aussi le bâtiment par son envergure de 141 mètres de long et
                        90 mètres de large avec ses trois étages aux façades horizontales.
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/IUTAfter.png')}
                            style={styles.Image}
                        />
                    </View>
                    <Text style={[styles.Text, { marginBottom: 20 }]}>
                        L’histoire du bâtiment est encore présente actuellement.
                        En effet, certaines fondations ont été conservées en l’état
                        et des objets sont exposés dans un hall permettant de garder
                        une trace de ce lieu historique ancré dans l’histoire de l’université.
                    </Text>
                    {this.props.route.params.Scan ? <CustomButton
                        title={'Scanner un autre QR Code'}
                        style={{ marginVertical: 20 }}
                        onPress={() => this.props.navigation.replace("Scan", { parcours: "historique" })}
                    /> :
                        <></>}

                </ScrollView>
            </View >


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
        aspectRatio: 570 / 280,
        width: '100%',
        height: undefined,
        alignSelf: 'center',
        marginVertical: 15
    }
});


export default (DescriptionIllustration);