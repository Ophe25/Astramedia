import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { setIsFirstConnection } from '../../redux/reducers/introductionReducer';
import store from '../../redux/store/store';
import { connect } from 'react-redux';


const { width } = Dimensions.get('window');

this.styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
});


class Step3 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#03030E', padding: 20, paddingBottom: 50 }}>

                <Image
                    source={require('../../assets/image/GlowStep3.png')}
                    style={{ position: 'absolute', right: 0 }}
                />


                <View style={{ justifyContent: 'center', flex: 5, paddingVertical: 90 }}>
                    <Icon
                        name="rocket-outline"
                        size={30}
                        color={'#fff'}
                        style={{ textAlign: 'center', paddingBottom: 10, paddingBottom: 30 }}
                    />
                    <Text style={styles.Titre}>Plongez dans notre univers</Text>
                    <Text style={styles.Text}>
                        Plongez dans un monde où l’éducation se mèle à l’innovation !
                        Découvrez la formation MMI ainsi que l'histoire du bâtiment en cherchant des QR Codes
                        mis dans certains endroits. Scannez les pour découvrir les objets cachés en réalité augmentée.
                    </Text>
                </View>

                {/* <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <CustomButton
                            backgroundColor='rgba(255, 255, 255, 0.1)'
                            title="C'est parti !"
                            style={{}}
                            onPress={() => {
                                this.props.navigation.navigate("Home")

                            }}
                        />
                    </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                    >Précédent</Button>
                    <Button
                        onPress={() => {
                            store.dispatch(setIsFirstConnection(false))
                            this.props.navigation.replace("Menu")
                        }
                        }
                    >C'est parti !</Button>

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
    },
    Image: {
        aspectRatio: 500 / 750,
        width: '100%',
        height: undefined,
        marginVertical: 15
    }
});


const mapStateToProps = state => ({
    isFirstConnection: state.connection.isFirstConnection,
});


export default connect(mapStateToProps, null)(Step3);