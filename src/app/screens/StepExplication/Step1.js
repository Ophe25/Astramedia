import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { setIsFirstConnection } from '../../redux/reducers/introductionReducer';
import store from '../../redux/store/store';


const { width } = Dimensions.get('window');

this.styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
});

class Step1 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#03030E', padding: 20, paddingBottom: 50 }}>

                <Image
                    source={require('../../assets/image/GlowStep1.png')}
                    style={{ position: 'absolute' }}
                />
                <View style={{ flex: 1, alignSelf: 'center', paddingVertical: 90, justifyContent: 'center' }}>
                    <Icon
                        name="hand-wave"
                        size={30}
                        color={'#fff'}
                        style={{ textAlign: 'center', paddingBottom: 10 }}
                    />

                    <Text style={styles.Titre}>Bienvenue</Text>
                    <Text style={styles.Text}>
                        Astramédia est conçue pour vous faire découvrir des lieux éducatifs ainsi que leur histoire de manière immersive.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        style={styles.Text}
                        onPress={() => {
                            store.dispatch(setIsFirstConnection(false))
                            this.props.navigation.replace("Menu")
                        }}
                    >Passer</Button>
                    <Button
                        style={styles.Text}
                        onPress={() => this.props.navigation.navigate("Step2")}
                    >Suivant</Button>

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


export default connect(mapStateToProps, null)(Step1);