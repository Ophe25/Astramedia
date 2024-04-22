import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    ViroTrackingStateConstants,
    ViroARSceneNavigator,
} from '@viro-community/react-viro';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import { Text } from 'react-native-paper';
import History from '../component/History';
import Menu from '../component/CustomComponent/Menu';
import Map from '../component/CustomComponent/Map';
import Formation from '../component/Formation';





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
        console.log('guncelleme', state, reason, this.state.text);
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
        console.log('parcours', this.props.parcours)
        return (
            <>
                {
                    this.state.menuIsOpen ?
                        <Menu onPress={() => this.setState({ menuIsOpen: false })} />
                        :

                        <>
                            <View>
                                <View
                                    style={{
                                        // flex: 1,
                                        // alignItems: 'flex-end',
                                        position: 'absolute',
                                        top: 10,
                                        left: 10,
                                        zIndex: 1,
                                        backgroundColor: "rgba(255,255,255, 0.30)",
                                        padding: 5,
                                        borderRadius: 30
                                    }}
                                >
                                    <Icon
                                        name="menu"
                                        size={25}
                                        color="white"
                                        onPress={() => this.setState({ menuIsOpen: true })}
                                    />
                                </View>
                                <View
                                    style={{
                                        // flex: 1,
                                        // alignItems: 'flex-end',
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                        zIndex: 2,
                                        backgroundColor: this.state.visible ? "rgba(255, 255, 255, 0.10)" : "rgba(255,255,255, 0.30)",
                                        padding: 5,
                                        borderRadius: 30,
                                        alignItems: 'center'
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: this.state.visible ? "rgba(255,255,255, 0.20)" : "rgba(255,255,255, 0)",
                                        borderRadius: 99,
                                        padding: 25,
                                        position: 'absolute',
                                        top: 0,
                                        right: -3.5
                                    }}>
                                    </View>
                                    <Icon
                                        name="map-outline"
                                        size={22}
                                        color="white"
                                        onPress={() => this.setState({ carteIsOpen: true })}
                                        style={{ paddingVertical: 10 }}

                                    />

                                    <Icon2
                                        name="sound-mix"
                                        size={22}
                                        color="white"
                                        onPress={() => this.setState({ isOpen: true })}
                                        style={{ paddingVertical: 10 }}
                                    />
                                    <View
                                        style={{
                                            // flex: 1,
                                            // alignItems: 'flex-end',
                                            backgroundColor: "rgba(0,0,0, 0.30)",
                                            padding: 5,
                                            borderRadius: 30,
                                            marginTop: 5,
                                        }}
                                    >
                                        <Icon2
                                            name="plus"
                                            size={22}
                                            color="white"
                                            onPress={() => this.setState({ isOpen: true })}
                                        />
                                    </View>
                                </View>
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
                                        zIndex: 1,
                                        backgroundColor: "rgba(0,0,0, 0.50)",
                                        textAlign: 'center'
                                    }}>
                                    {this.state.carteIsOpen ?
                                        // <TouchableOpacity
                                        //     style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}
                                        //     onPress={() => this.setState({ visible: false, carteIsOpen: false })}
                                        // >
                                        //     <Text style={styles.helloWorldTextStyle}>Point suivant : salle 228</Text>

                                        //     <Image
                                        //         source={require('../assets/image/carte.png')}
                                        //     />
                                        // </TouchableOpacity>
                                        <Map
                                            style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}
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

                            {/* <SwipeablePanel
                                isActive={this.state.descriptionVisible}
                                fullWidth={true}
                                onClose={() => this.setState({ descriptionVisible: false })}
                                style={{ backgroundColor: 'black' }}
                            >
                                <Text style={[styles.helloWorldTextStyle, { paddingTop: 20 }]}>Le Bobigny Matsuri</Text>
                                <Text style={styles.helloWorldTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a molestie ante, quis porta enim. Pellentesque ut rutrum massa, ac ornare leo. Ut ultricies, sapien in pharetra sagittis, risus nunc imperdiet sapien, a interdum risus risus sed ligula. Duis vehicula elit non urna vehicula vehicula.</Text>
                            </SwipeablePanel> */}
                            {this.props.parcours === 'historique' ? <ViroARSceneNavigator
                                autofocus={true}
                                initialScene={{
                                    scene: () => <History
                                        navigation={this.props.navigation}
                                        visible={this._setVisible}
                                        setDescriptionVisible={this._setDescriptionVisible}
                                        onPressIllustration={() => this.props.navigation.navigate("DescriptionNewspaperIUT")}
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
                                            onPressIllustration={() => this.props.navigation.navigate("DescriptionNewspaperIUT")}
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
        fontFamily: 'Arial',
        fontSize: 15,
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center',
        paddingBottom: 15
    },
});

export default (Scan);
