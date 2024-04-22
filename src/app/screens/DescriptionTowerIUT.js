import React from 'react';
import { View, Image, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../component/CustomComponent/CustomButton';
import ButtonMenu from '../component/CustomComponent/ButtonMenu';
import Menu from '../component/CustomComponent/Menu';
// import Menu from '../Menu/Menu';



class DescriptionTowerIUT extends React.Component {
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
                    Tour de l'IUT
                </Text>
                <ScrollView style={{ flex: 1, padding: 15 }}>
                    <Text style={styles.Text}>
                        La Tour de l'Ancienne Imprimerie de "L'Illustration",
                        localisée à Bobigny, représente un symbole marquant de l'histoire de
                        l'imprimerie et de la ville elle-même.
                        Les travaux de construction s'initient le 1er juin 1930 pour se conclure le 30 juin 1933,
                        symbolisant une période de progrès dans le domaine de l'édition.

                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/TowerIUT.png')}
                            style={styles.Image}
                        />
                    </View>
                    <Text style={styles.Text}>
                        Domptant fièrement le paysage urbain,
                        cette tour se distingue par sa stature imposante de 64 mètres,
                        édifiée avec des briques rouges distinctives. À l'époque,
                        on stockait l'eau nécessaire à une technique d'impression en pointe à l'époque,
                        l'héliogravure.
                    </Text>
                    <Text style={styles.Text}>
                        Aujourd'hui, après une réhabilitation soignée,
                        la Tour de l'Ancienne Imprimerie est transformée en logements.
                        Entrant en service à la rentrée universitaire 2009,
                        elle propose désormais 59 habitations,
                        témoignant ainsi de la réussite de sa reconversion.
                        En tant que repère évocateur de l'histoire de l'imprimerie et de Bobigny,
                        cette tour demeure un témoignage vivant du passé industriel et culturel de la région.
                    </Text>
                    <CustomButton
                        title={'Scanner un autre QR Code'}
                        style={{ marginVertical: 20 }}
                        onPress={() => this.props.navigation.replace("Scan", { parcours: "historique" })}
                    />
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
        aspectRatio: 130 / 280,
        width: '50%',
        height: undefined,
        marginVertical: 15
    }
});


export default (DescriptionTowerIUT);