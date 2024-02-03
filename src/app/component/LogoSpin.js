import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, SafeAreaView, Easing, Image } from 'react-native';
import { connect } from 'react-redux'
import store from '../redux/store/store';
import { setIsFirstConnection } from '../redux/reducers/introductionReducer';

function LogoSpin(props) {
    const rotateAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        this._navigateAfterSpin()
    }, [])

    _navigateAfterSpin = () => {
        setTimeout(() => {
            if (props.isFirstConnection) {
                store.dispatch(setIsFirstConnection(false))
                props.navigation.navigate("Etapes")

            } else {
                props.navigation.navigate("Accueil")

            }
        }, 1000);
    }

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1700,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ).start();
    }, [rotateAnim]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#03030E' }}>
            <Image
                source={require('../assets/image/ellipselaunchscreen.png')}
                style={{ position: 'absolute', bottom: 0, right: 0 }}
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.transformOriginWrapper}>
                    <Animated.Image
                        source={require('../assets/image/logo_white.png')}
                        style={[
                            styles.transformOriginView,
                            {
                                transform: [{ rotate: spin }],
                            },
                        ]}
                    />
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Image
                        source={require('../assets/image/texte_astramedia_logo.png')}
                        style={{ width: 140, height: 20 }}
                    />
                </View>

            </SafeAreaView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    transformOriginView: {
        height: 120,
        width: 120,
    },
});

const mapStateToProps = state => ({
    isFirstConnection: state.connection.isFirstConnection,
});


export default connect(mapStateToProps, null)(LogoSpin);
