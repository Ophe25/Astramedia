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
} from '@viro-community/react-viro';
import TowerIUT from './CustomComponent/TowerIUT';
import PosterIllustration from './CustomComponent/PosterIllustration';


class History extends React.Component {
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

    // init = () => {

    //     ViroARTrackingTargets.createTargets({
    //         "targetOne": {
    //             source: require('../assets/image/iut.jpg'),
    //             orientation: "Up",
    //             physicalWidth: 0.1 // real world width in meters  
    //         },
    //     });

    // }

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
                    <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
                        <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />
                        {/* reconnaissance QR Code */}
                        {/* <ViroARImageMarker target={"target_filter"} onAnchorFound={() => this.props.visible()}>
                        </ViroARImageMarker> */}
                        {/* Objets mis en scène lors de la reconnaissance du QR Code (Tour IUT) */}
                        <ViroARImageMarker target={"target_tower"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND TOWER")}>
                            <TowerIUT />
                        </ViroARImageMarker>
                        <ViroARImageMarker target={"target_filter"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND POSTER")}>
                            <PosterIllustration />
                        </ViroARImageMarker>
                    </ViroARScene >
                }
            </>

        );
    };

}

//Initialisation des cibles

ViroARTrackingTargets.createTargets({
    target_poster: {
        source: require('../assets/image/QrCode/history_poster.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },

    target_tower: {
        source: require('../assets/image/QrCode/history_tower.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },

    target_newspaper: {
        source: require('../assets/image/QrCode/history_newspaper.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },

    target_filter: {
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

export default (History);