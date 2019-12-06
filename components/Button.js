import React from 'react'
import styles from '../style/style'
import { Text,View, VrButton } from 'react-360';
import { changeRoom } from '../store';

class Button extends React.Component {
  state = {
    hover: false
  }

  clickHandler(roomSelection) {
    changeRoom(roomSelection);
  }

  render() {
    return(
      <View>
        <VrButton style={this.state.hover ? styles.hover : styles.button}
                  onEnter={() => this.setState({hover: true})}
                  onExit={() => this.setState({hover: false})}
                  onClick={() => this.clickHandler(this.props.room.split(' ').join('_'))}>
                  <Text style={{textAlign: 'center'}}>{this.props.room.split('_').join(' ')}</Text>
        </VrButton>
      </View>
    );
  }
}

export default Button;