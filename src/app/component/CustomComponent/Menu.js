import React from 'react';
import { StyleSheet, View } from 'react-native';
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
            <View style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, backgroundColor: '#03030E', justifyContent: 'center' }}>
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
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    {/* 1ere ligne de boutons */}
                    <View style={styles.Ligne_de_bouton}>
                        {/* Bouton Développement web */}
                        <CustomButtonMenu
                            ViewStyle={{ marginRight: 10 }}
                            onPress={() => {
                                navigation.navigate("Dev")
                                setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)
                            }}
                            title={'Développement web'}
                        />
                        {/* Bouton Graphisme */}
                        <CustomButtonMenu
                            ViewStyle={{ marginLeft: 10 }}
                            onPress={() => {
                                navigation.navigate("Crea")
                                setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)

                            }}
                            title={'Création Numérique'}
                        />
                    </View>

                    {/* 2e ligne de boutons */}
                    <View style={styles.Ligne_de_bouton}>
                        {/* Bouton Communication & Strat UX */}
                        <CustomButtonMenu
                            ViewStyle={{ marginRight: 10 }}
                            onPress={() => {
                                navigation.navigate("Comm")
                                setTimeout(() => store.dispatch(setMenuIsOpen(false)), 500)

                            }}
                            title={'Communication & Strat UX'}
                        />
                        {/* Bouton Licence Jeux vidéos */}
                        <CustomButtonMenu
                            ViewStyle={{ marginLeft: 10 }}
                            title={'Licence Jeux vidéos'}
                        />
                    </View>
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
        color: 'white',
        textAlign: 'center',
    },
    Bouton: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: 130,
        height: 130,
        borderRadius: 12,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    Ligne_de_bouton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 20
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

