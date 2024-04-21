import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../component/CustomComponent/CustomButton';
import ButtonMenu from '../component/CustomComponent/ButtonMenu';
import Menu from '../component/CustomComponent/Menu';
// import Menu from '../Menu/Menu';



class Comm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#03030E', paddingBottom: 20 }}>
                <Text style={styles.Titre}>
                    Communication & Strat UX
                </Text>
                <ScrollView style={{ flex: 1, padding: 15 }}>
                    {/* <View style={{ flex: 1 }}> */}
                    <Text style={styles.Text}>
                        Le parcours stratégie de communication numérique et design d’expérience offre une approche particulière
                        de la communication digitale en mettant l'accent sur deux axes fondamentaux.
                        D'une part, il se concentre sur l'élaboration de stratégies de communication numérique efficaces,
                        alliant analyse fine des besoins des utilisateurs et maîtrise des outils de gestion de projet.
                        D'un autre côté, il forme aussi à la conception d'interfaces centrées sur l'utilisateur,
                        mettant en avant des principes d'ergonomie, de facilité de navigation et de visibilité sur le Web.
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/StratUXBefore.png')}
                            style={styles.Image}
                        />
                    </View>
                    {/* </View> */}
                    <Text style={styles.Text}>
                        Une part importante de leur formation réside  dans la collaboration,
                        où ils apprennent à travailler en équipe pour les former en gestion de projet.
                        Leur travail  consiste à concevoir des supports de communication qui non seulement
                        répondent aux besoins stratégiques, mais aussi aux attentes et aux  exigences des utilisateurs finaux.
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/StratUXAfter.png')}
                            style={styles.Image}
                        />
                    </View>
                    <Text style={styles.Text}>
                        Ces projets, souvent axés sur des produits web (comme le montre les réalisations ci-dessus)
                        offrent aux étudiants  l'opportunité d'explorer et de mettre en pratique leurs compétences en
                        utilisant des outils comme Figma pour concrétiser leurs idées dans des interfaces fluides et intuitives.
                    </Text>
                    <Text style={styles.Text}>
                        Quelques métiers liés :
                    </Text>
                    <View style={{ paddingLeft: 15 }}>
                        <Text style={styles.Text}>
                            - Chargé de communication numérique
                        </Text>
                        <Text style={styles.Text}>
                            - UX designer
                        </Text>
                        <Text style={styles.Text}>
                            - Rédacteur Web
                        </Text>
                        <Text style={styles.Text}>
                            - Community manager
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
        aspectRatio: 280 / 570,
        width: '100%',
        height: undefined,
        marginVertical: 15
    }
});


export default (Comm);