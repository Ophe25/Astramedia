import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../component/CustomComponent/CustomButton';
import ButtonMenu from '../component/CustomComponent/ButtonMenu';
import Menu from '../component/CustomComponent/Menu';
// import Menu from '../Menu/Menu';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#03030E', padding: 20, paddingBottom: 50 }}>
                <Image
                    source={require('../assets/image/GlowHome.png')}
                    style={{ position: 'absolute', bottom: 0 }}
                />
                {/* <View
                            style={{
                                flex: 1,
                                // alignItems: 'flex-end',
                            }}
                        >
                            <Icon
                                name="menu"
                                size={30}
                                color="white"
                                onPress={() => this.setState({ isOpen: true })}
                            />
                        </View> */}

                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Text style={styles.Titre}>Choisissez un parcours :</Text>

                    <CustomButton
                        title={'Parcours Formation'}
                        style={{ padding: 20 }}
                        onPress={() => {
                            this.props.navigation.navigate("Scan", { parcours: "formation" })
                        }}

                    />
                    <Text style={styles.Text}>
                        Vous aimeriez en savoir plus sur la formation Métiers du Multimédia et de l’Internet
                    </Text>
                    <CustomButton
                        title={'Parcours Patrimoine'}
                        style={{ padding: 20 }}
                        onPress={() => {
                            this.props.navigation.navigate("Scan", { parcours: "historique" })
                        }}

                    />
                    <Text style={styles.Text}>
                        Vous aimeriez découvrir le lieu et l’histoire de votre futur établissement
                    </Text>

                </View>

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
        textAlign: 'center',
        marginBottom: 45,
        marginTop: 10,
        paddingHorizontal: 20
    },
});



export default (Home);
