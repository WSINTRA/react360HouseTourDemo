import React from 'react';
import {
  asset,
  Image,
  NativeModules,
  View,
  VrButton
} from 'react-360';


const { AudioModule } = NativeModules;

class AudioPanel extends React.Component {
  playAmbientMusic() {
    AudioModule.playEnvironmental({
      source: asset('audio/DarkestHouseBlues.wav'),
      volume: 0.7
    })
  }

  stopAmbientMusic() {
    AudioModule.stopEnvironmental();
  }

  render() {
    return (
      <View >
        <VrButton onClick={() => this.playAmbientMusic()}>
          <Image style={{height:50, width: 50}} source={asset('audioOn.png')} />
        </VrButton>
        <VrButton onClick={() => this.stopAmbientMusic()}>
          <Image style={{height:50, width: 50}} source={asset('audioOff.png')} />
        </VrButton>
      </View>
    );
  }
}

export default AudioPanel;
