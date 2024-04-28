import React from 'react';
import { StyleSheet } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroTrackingStateConstants,
    ViroARTrackingTargets,
    Viro3DObject,
    ViroARImageMarker,
    ViroAmbientLight,
    ViroSpotLight,
    ViroNode,
    ViroImage,
} from '@viro-community/react-viro';


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
                            <ViroARImageMarker target={"targetTower"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND Tower")}>
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
                                        source={require('../assets/image/TowerIUT.obj')}
                                        width={150}
                                        position={[0, -15, 0]}
                                        scale={[0.8, 0.8, 0.8]}
                                        type="OBJ"
                                        resources={[
                                            require('../assets/image/TextureTowerIUT.mtl'),
                                        ]}
                                        onClick={this.props.onPressTower}
                                        //transformBehaviors={'billboard'}
                                        rotation={[-90, 0, 40]}
                                    />

                                </ViroNode>
                            </ViroARImageMarker>

                            <ViroARImageMarker target={"targetPoster"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND POSTER")}>
                                <ViroNode>
                                    <ViroImage
                                        height={2}
                                        width={2}
                                        rotation={[-95, 0, 0]}
                                        position={[0, -4, 0]}
                                        onClick={this.props.onPressPoster}
                                        // placeholderSource={require("./res/local_spinner.jpg")}
                                        source={require("../assets/image/IUTBefore.png")}
                                    />
                                </ViroNode>
                            </ViroARImageMarker>

                            <ViroARImageMarker target={"targetNewspaper"} pauseUpdates={false} onAnchorFound={() => console.log("FOUND Newspaper")}>
                                <ViroNode>
                                    <ViroImage
                                        height={2}
                                        width={2}
                                        rotation={[-95, 0, 0]}
                                        position={[0, -4, 0]}
                                        onClick={this.props.onPressIllustration}
                                        // placeholderSource={require("./res/local_spinner.jpg")}
                                        source={require("../assets/image/NewspaperIllustration.png")}
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
    targetTower: {
        source: require('../assets/image/QrCode/history_tower.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },
    targetPoster: {
        source: require('../assets/image/QrCode/history_poster.png'),
        orientation: "Up",
        physicalWidth: 0.15, // real world width in meters  
    },
    targetNewspaper: {
        source: require('../assets/image/QrCode/history_newspaper.png'),
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

export default (History);
