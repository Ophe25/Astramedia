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


class Carte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Initializing AR...',
        }
    }




    render() {
        return (
            <ViroScene>
                <ViroCamera position={[-1, 0, 0]} active={true} />
                <ViroText style={styles.helloWorldTextStyle} text="Hello!" position={[-1, 0, -1]} />
            </ViroScene>

        );
    };

}


var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

export default (Carte);
