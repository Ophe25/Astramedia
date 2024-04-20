import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {
    ViroTrackingStateConstants,
    ViroARSceneNavigator,
} from '@viro-community/react-viro';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
// import Carte from './carte';
import { Text } from 'react-native-paper';
// import { SwipeablePanel } from 'rn-swipeable-panel';
import ToolsScan from '../component/CustomComponent/ToolsScan';
import Menu from '../component/CustomComponent/Menu';
import ButtonMenu from '../component/CustomComponent/ButtonMenu';
import TourIUT from '../component/History';
import Map from '../component/CustomComponent/Map';
import History from '../component/History';


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
        return (
            <>

                <>
                    <View>
                        <ButtonMenu onPress={() => this.setState({ menuIsOpen: true })} background />
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
                            }} />
                            {this.state.visible ?
                                <View style={{ position: 'absolute', right: 54, top: 15 }}>
                                    <Icon3
                                        name="arrow-right-long"
                                        size={20}
                                        color="white"
                                    />
                                </View> : <></>}
                            <ToolsScan
                                onPressMap={() => this.setState({ carteIsOpen: true })}
                                onPressFilter={() => this.setState({ isOpen: true })}
                                onPressMore={() => this.setState({ isOpen: true })}
                                visible={this.state.visible}
                            />
                        </View>
                    </View>

                    {this.state.visible || this.state.carteIsOpen ?
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                zIndex: 1,
                                backgroundColor: "rgba(0,0,0, 0.50)",
                            }}>
                            {this.state.carteIsOpen ?
                                <Map
                                    onPress={() => this.setState({ visible: false, carteIsOpen: false })}
                                />
                                // <TouchableOpacity
                                //     style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}
                                //     onPress={() => this.setState({ visible: false, carteIsOpen: false })}
                                // >
                                //     <Text style={styles.helloWorldTextStyle}>Point suivant : salle 228</Text>
                                //     <View>
                                //         <Image
                                //             source={require('../assets/image/carte1.png')}
                                //         // resizeMode='center'
                                //         // resizeMethod='resize'
                                //         />
                                //         {/* <Logo width={120} height={40} /> */}
                                //     </View>
                                // </TouchableOpacity>
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

                    {this.props.parcours == "historique" ? <ViroARSceneNavigator
                        autofocus={true}
                        initialScene={{
                            scene: () => <TourIUT navigation={this.props.navigation} visible={this._setVisible} setDescriptionVisible={this._setDescriptionVisible} />
                        }}
                        style={styles.f1}
                    />
                        :
                        <ViroARSceneNavigator
                            autofocus={true}
                            initialScene={{
                                scene: () =>
                                    <History navigation={this.props.navigation} visible={this._setVisible} setDescriptionVisible={this._setDescriptionVisible} />
                            }}
                            style={styles.f1}
                        />
                    }

                </>

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
        paddingBottom: 15,
    },
});

export default (Scan);
