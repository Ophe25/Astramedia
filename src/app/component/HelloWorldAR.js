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


class HelloWorldAR extends React.Component {
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
                    <ViroARScene >
                        <ViroText transformBehaviors={'billboard'} style={styles.helloWorldTextStyle} text="Hello!" position={[0, 0, -1]} />
                    </ViroARScene>
                    :
                    <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
                        <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />
                        <ViroARImageMarker target={"target"} onAnchorFound={() => this.props.visible()}>
                        </ViroARImageMarker>

                        <ViroARImageMarker target={"targetOne"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND")}>
                            <ViroNode>
                                <ViroSpotLight
                                    innerAngle={5}
                                    outerAngle={90}
                                    direction={[0, -1, -.2]}
                                    position={[0, 3, 1]}
                                    color="#fff"
                                    castsShadow={true}
                                />

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

                                <Viro3DObject
                                    source={require('../assets/image/touriut.obj')}
                                    width={150}
                                    position={[0, -15, 0]}
                                    scale={[0.8, 0.8, 0.8]}
                                    type="OBJ"
                                    resources={[
                                        require('../assets/image/touriut.mtl'),
                                    ]}
                                    onClick={() => this.props.setDescriptionVisible()}
                                    //transformBehaviors={'billboard'}
                                    rotation={[-90, 0, 40]}
                                />

                                {/* <ViroQuad
                                    rotation={[-90, 0, 0]}
                                    width={.5}
                                    height={.5}
                                    arShadowReceiver={true}
                                    lightReceivingBitMask={2}
                                /> */}

                            </ViroNode>
                        </ViroARImageMarker>
                    </ViroARScene >
                }
            </>

        );
    };

}


ViroARTrackingTargets.createTargets({
    targetOne: {
        source: require('../assets/image/QrCode/qr_code_tour.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },
    target: {
        source: require('../assets/image/QrCode/qr_code_filtre.png'),
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

export default (HelloWorldAR);
