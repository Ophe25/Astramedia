import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
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



class TowerIUT extends React.Component {

    render() {
        return (
            <ViroNode>
                {/* 1ere lumière */}
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={90}
                    direction={[0, -1, -.2]}
                    position={[0, 3, 1]}
                    color="#fff"
                    castsShadow={true}
                />

                {/* 2e lumière */}
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={45}
                    direction={[0, -1, -.2]}
                    position={[0, 3, 0]}
                    color="#fff"
                    castsShadow={true}
                    influenceBitMask={2}
                    shadowMapSize={2048}
                    shadowNearZ={2}
                    shadowFarZ={5}
                    shadowOpacity={.7}
                />
                {/* Objet 3D */}
                <Viro3DObject
                    source={require('../../assets/image/TowerIUT.obj')}
                    width={150}
                    position={[0, -15, 0]}
                    scale={[0.8, 0.8, 0.8]}
                    type="OBJ"
                    resources={[
                        require('../../assets/image/TowerIUT.mtl'),
                    ]}
                    onClick={() => this.props.setDescriptionVisible()}
                    //transformBehaviors={'billboard'}
                    rotation={[-90, 0, 40]}
                />

            </ViroNode>

        );
    }
}

var styles = StyleSheet.create({
    Text: {
        flex: 1,
        fontFamily: 'Arial',
        fontSize: 15,
        color: '#fff',
        textAlignVertical: 'bottom',
        textAlign: 'center',
        paddingBottom: 15,
        paddingHorizontal: '10%'
    },
});

export default (TowerIUT);

