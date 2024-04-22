import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButtonMenu from './CustomButtonMenu';
import { setMenuIsOpen } from '../../redux/reducers/introductionReducer2';
import { connect } from 'react-redux';
import ButtonMenu from './ButtonMenu';
import store from '../../redux/store/store';
import { useNavigation } from '@react-navigation/core'


function Menu(props) {
    const navigation = useNavigation();
    return (
        !props.menuIsOpen ? <ButtonMenu
            onPress={() => {
                console.log('test', props)
                store.dispatch(setMenuIsOpen(true))
            }}
        /> :
            <View style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, backgroundColor: '#03030E' }}>
                <Image
                    source={require('../../assets/image/Glowlaunchscreen.png')}
                    style={{ position: 'absolute' }}
                />
                {/* Vue pour fermer le menu */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        paddingRight: 10,
                        paddingTop: 10
                    }}
                >
                    <Icon
                        name="close"
                        size={30}
                        color="white"
                        onPress={() => store.dispatch(setMenuIsOpen(false))}
                    />
                </View>
                {/* Boutons des différents parcours */}
                <View style={{ flex: 4, justifyContent: 'flex-end', padding: 10 }}>
                    <Text style={styles.text}>Parcours Formation</Text>

                    {/* Bouton Développement web */}
                    <CustomButtonMenu
                        onPress={() => {
                            navigation.navigate("Dev")
                            setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)
                        }}
                        title={'Développement web'}
                    />

                    {/* Bouton Graphisme */}
                    <CustomButtonMenu
                        onPress={() => {
                            navigation.navigate("Crea")
                            setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)

                        }}
                        title={'Création Numérique'}
                    />

                    {/* Bouton Communication & Strat UX */}
                    <CustomButtonMenu
                        onPress={() => {
                            navigation.navigate("Comm")
                            setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)

                        }}
                        title={'Communication & Strat UX'}
                    />

                    <Text style={styles.text}>Parcours Patrimoine</Text>

                    {/* Bouton Tour de l'IUT */}
                    <CustomButtonMenu
                        onPress={() => {
                            navigation.navigate("Tower")
                            setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)

                        }}
                        title={'Tour de l\'IUT'}
                    />

                    {/* Bouton Journal de l'Illustration */}
                    <CustomButtonMenu
                        onPress={() => {
                            navigation.navigate("Newspaper")
                            setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)

                        }}
                        title={'Journal de l\'Illustration'}
                    />

                    {/* Bouton Batiment de l'Illustration */}
                    <CustomButtonMenu
                        onPress={() => {
                            navigation.navigate("Illustration")
                            setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)

                        }}
                        title={'Batiment de l\'Illustration'}
                    />

                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={styles.bouton_text}
                        onPress={
                            () => {
                                navigation.navigate("Home")
                                setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)

                            }}
                    >
                        Changer de parcours
                    </Text>
                    <Text
                        onPress={
                            () => {
                                navigation.navigate("Home")
                                setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)
                            }}

                        style={[styles.bouton_text, { color: 'red' }]}>Quitter la session</Text>
                </View>
            </View>
    );

}

var styles = StyleSheet.create({
    text: {
        fontFamily: 'DarkerGrotesque-Medium',
        lineHeight: 20,
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 10
    },
    bouton_text: {
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        justifyContent: 'flex-end',
        paddingTop: 20,
    },

});


const mapStateToProps = state => ({
    isFirstConnection: state.connection.isFirstConnection,

    menuIsOpen: state.menu.menuIsOpen,
});


export default connect(mapStateToProps, null)(Menu);

