import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    ViroTrackingStateConstants,
    ViroARSceneNavigator,
} from '@viro-community/react-viro';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-paper';
import History from '../component/History';
import Menu from '../component/CustomComponent/Menu';
import Map from '../component/CustomComponent/Map';
import Formation from '../component/Formation';
import Icon3 from 'react-native-vector-icons/FontAwesome6';

class Scan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Initializing AR...',
            menuIsOpen: false,
            carteIsOpen: false,
            visible: false,
            descriptionVisible: false,
        }
    }

    onInitialized = (state, reason) => {
        if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
            this.setState({ text: 'Hello World!' });
        } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    }

    _setVisible = () => {
        this.setState({ visible: true })
    }

    _setDescriptionVisible = () => {
        this.setState({ descriptionVisible: true })
    }

    render() {
        return (
            <>
                {
                    this.state.menuIsOpen ?
                        <Menu onPress={() => this.setState({ menuIsOpen: false })} />
                        :

                        <>
                            <View
                                style={{
                                    // flex: 1,
                                    position: 'absolute',
                                    width: '100%',
                                    top: 0,
                                    right: 0,
                                    zIndex: 2,
                                    backgroundColor: this.state.visible ? "rgba(0,0,0, 0.10)" : "rgba(0,0,0, 0.50)",
                                    paddingVertical: 18,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingLeft: 70,
                                }}
                            >
                                <Text style={[styles.helloWorldTextStyle, {
                                    justifyContent: 'center',
                                    paddingBottom: 0,
                                    fontSize: 18
                                }]}>Parcours {this.props.route.params.parcours === 'formation' ? 'formation' : 'patrimoine'}</Text>
                                <View style={{
                                    backgroundColor: this.state.visible ? "rgba(255,255,255, 0.20)" : "rgba(255,255,255, 0)",
                                    borderRadius: 99,
                                    padding: 25,
                                    position: 'absolute',
                                    top: 5,
                                    right: -3.5,
                                }}>
                                </View>
                                {this.state.visible ?
                                    <View style={{
                                        position: 'absolute', right: 54, top: 20,
                                    }}>
                                        <Icon3
                                            name="arrow-right-long"
                                            size={20}
                                            color="white"
                                        />
                                    </View> : <></>}
                                <Icon
                                    name="map-outline"
                                    size={22}
                                    color="white"
                                    onPress={() => this.setState({ carteIsOpen: true })}
                                    style={{
                                        paddingRight: 10,
                                    }}
                                />
                            </View>

                            {this.state.visible || this.state.carteIsOpen ?
                                <View
                                    style={{
                                        // flex: 1,
                                        // alignItems: 'flex-end',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        zIndex: 4,
                                        backgroundColor: "rgba(0,0,0, 0.70)",
                                        textAlign: 'center'
                                    }}>
                                    {this.state.carteIsOpen ?
                                        <Map
                                            style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 20, zIndex: 2 }}
                                            onPress={() => this.setState({ visible: false, carteIsOpen: false })}
                                        />
                                        :
                                        <View style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}>
                                            <Text style={styles.helloWorldTextStyle}>Bravo !</Text>
                                            <Text style={styles.helloWorldTextStyle}>Vous pouvez désormais utiliser la réalité augmenté !</Text>
                                            <Text style={styles.helloWorldTextStyle}>Utilisez la carte pour trouver les points d’informations</Text>

                                        </View>}
                                </View>
                                :
                                <></>
                            }
                            {this.props.route.params.parcours === 'historique' ? <ViroARSceneNavigator
                                autofocus={true}
                                initialScene={{
                                    scene: () => <History
                                        navigation={this.props.navigation}
                                        visible={this._setVisible}
                                        setDescriptionVisible={this._setDescriptionVisible}
                                        onPressIllustration={() => this.props.navigation.replace("Newspaper", { Scan: true })}
                                        onPressTower={() => this.props.navigation.replace("Tower", { Scan: true })}
                                        onPressPoster={() => this.props.navigation.replace("Illustration", { Scan: true })}
                                    />
                                }}
                                style={styles.f1}
                            />
                                :
                                <ViroARSceneNavigator
                                    autofocus={true}
                                    initialScene={{
                                        scene: () => <Formation
                                            navigation={this.props.navigation}
                                            visible={this._setVisible}
                                            setDescriptionVisible={this._setDescriptionVisible}
                                            onPressDev={() => this.props.navigation.replace("Dev", { Scan: true })}
                                            onPressCrea={() => this.props.navigation.replace("Crea", { Scan: true })}
                                            onPressComm={() => this.props.navigation.replace("Comm", { Scan: true })}
                                        />
                                    }}
                                    style={styles.f1}
                                />}


                        </>
                }
            </>
        );
    };
}
var styles = StyleSheet.create({
    f1: { flex: 1 },
    helloWorldTextStyle: {
        fontFamily: 'DarkerGrotesque-Medium',
        fontSize: 15,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center',
        paddingBottom: 15
    },
});

export default (Scan);
