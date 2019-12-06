import Button from './Button'
import React from 'react'
import styles from '../style/style'
import AudioPanel from './AudioPanel'
import { Text,View, } from 'react-360';

class ButtonInfoPanel extends React.Component {
  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room => (
      buttons.push(<Button key={`${room}` + '-button'} room={room}/>)
    ));
    return buttons;
  }

  render() {
    return (
      <View>
        <View style={styles.buttonPanel}>
          <Text style={styles.header}>Room Selection</Text>
          { this.createRoomButtons(this.props.adjacentRooms) }
          <AudioPanel />
        </View>
      </View>
    );
  }
}

export default ButtonInfoPanel;