import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroTrackingStateConstants,
    ViroARSceneNavigator,
    ViroARTrackingTargets,
    Viro3DObject,
    ViroARImageMarker,
    ViroBox,
    ViroOmniLight,
    ViroAmbientLight,
    ViroSpotLight,
    ViroMaterials,
    ViroNode,
    ViroQuad,
    ViroScene,
    ViroCamera,
    ViroImage,
} from '@viro-community/react-viro';


class Formation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Initializing AR...',
            loopState: false,
            animationName: "01",
            pauseUpdates: false,
            playAnim: false,
            modelAnim: false,
            hasARInitialized: false,
            IsOpen: false,
        }
    }

    componentDidMount() {

    }

    onInitialized = (state, reason) => {
        console.log('guncelleme', state, reason);
        if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
            this.setState({ text: 'Hello World!' });
        } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    }

    // Cette fonction sert à vérifier si l'initialisation de la réalité augmentée est effectuée

    _onTrackingUpdated = (state, reason) => {
        // if the state changes to "TRACKING_NORMAL" for the first time, then
        // that means the AR session has initialized!
        if (!this.state.hasARInitialized && state == ViroTrackingStateConstants.TRACKING_NORMAL) {
            this.setState({
                hasARInitialized: true,
                text: "Hello World!"
            });
        }
    }


    render() {
        return (
            <>
                {this.state.IsOpen ?
                    // Scène de réalité augmentée si la tour de l'iut n'est pas chargée
                    <ViroARScene >
                        {/* Texte Initialisation en cours en RA */}
                        <ViroText transformBehaviors={'billboard'} style={styles.helloWorldTextStyle} text="Hello!" position={[0, 0, -1]} />
                    </ViroARScene>
                    :
                    // Scène tour iut RA
                    <>
                        <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
                            <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />
                            {/* reconnaissance QR Code */}
                            <ViroARImageMarker target={"target"} onAnchorFound={() => this.props.visible()}>
                            </ViroARImageMarker>
                            {/* Objets mis en scène lors de la reconnaissance du QR Code */}
                            <ViroARImageMarker target={"targetDev"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND")}>
                                <ViroNode>
                                    <ViroImage
                                        height={2}
                                        width={2}
                                        rotation={[-95, 0, 0]}
                                        position={[0, -4, 0]}
                                        onClick={this.props.onPressDev}
                                        // placeholderSource={require("./res/local_spinner.jpg")}
                                        source={require("../assets/image/Commat.png")}
                                    />
                                </ViroNode>
                            </ViroARImageMarker>
                            <ViroARImageMarker target={"targetCrea"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND POSTER")}>
                                <ViroNode>
                                    <ViroImage
                                        height={2}
                                        width={2}
                                        rotation={[-95, 0, 0]}
                                        position={[0, -4, 0]}
                                        onClick={this.props.onPressCrea}
                                        // placeholderSource={require("./res/local_spinner.jpg")}
                                        source={require("../assets/image/Crea.png")}
                                    />
                                </ViroNode>
                            </ViroARImageMarker>
                            <ViroARImageMarker target={"targetComm"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND POSTER")}>
                                <ViroNode>
                                    <ViroImage
                                        height={2}
                                        width={2}
                                        rotation={[-95, 0, 0]}
                                        position={[0, -4, 0]}
                                        onClick={this.props.onPressComm}
                                        // placeholderSource={require("./res/local_spinner.jpg")}
                                        source={require("../assets/image/StratUXAfter.png")}
                                    />
                                </ViroNode>
                            </ViroARImageMarker>
                        </ViroARScene >

                    </>
                }
            </>

        );
    };

}

//Initialisation des cibles

ViroARTrackingTargets.createTargets({
    targetDev: {
        source: require('../assets/image/QrCode/dev.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },
    targetCrea: {
        source: require('../assets/image/QrCode/crea.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },
    targetComm: {
        source: require('../assets/image/QrCode/comm.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },
    target: {
        source: require('../assets/image/QrCode/Kakemono.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },
})

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 15,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

export default (Formation);
