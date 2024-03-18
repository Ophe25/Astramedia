import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import CustomButton from '../CustomComponent/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from '../Menu/Menu';

// import './Accueil.css'



class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render() {
        return (
            <>
                {this.state.isOpen ?
                    <Menu onPress={() => this.setState({ isOpen: false })} />
                    :
                    <View style={{ flex: 1, backgroundColor: '#03030E', padding: 20, paddingBottom: 50 }}>
                        <Image
                            source={require('../../assets/image/ellipseaccueil.png')}
                            style={{ position: 'absolute', bottom: 0 }}
                        />
                        <View
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
                        </View>
                        <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                            <Text style={{ textAlign: 'center', marginBottom: 15, color: 'white' }}>Choisissez un parcours :</Text>

                            <CustomButton
                                title={'Parcours Formation'}
                                style={{ padding: 20 }}
                                onPress={() => {
                                    this.props.navigation.navigate("Scan")
                                }}

                            />
                            <Text style={{ textAlign: 'center', marginBottom: 30, marginTop: 10, paddingHorizontal: 20, color: 'white' }}>
                                Vous aimerez en savoir plus sur la formation Métiers du Multimédia et de l’Internet
                            </Text>
                            <CustomButton
                                title={'Parcours Historique'}
                                style={{ padding: 20 }}
                                onPress={() => {
                                    this.props.navigation.navigate("Menu")
                                }}

                            />
                            <Text style={{ textAlign: 'center', marginBottom: 45, marginTop: 10, paddingHorizontal: 20, color: 'white' }}>
                                Vous aimerez découvrir le lieu et l’histoire de votre futur établissement
                            </Text>

                        </View>

                    </View>
                }
            </>

        );
    }
}

export default (Accueil);
