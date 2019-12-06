import React from 'react'
import styles from '../style/style'
import { Text,View } from 'react-360';

class HouseInfoPanel extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.infoPanel}>
          <Text style={styles.header}>Room Info</Text>
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            { this.props.info}
          </Text>
        </View>
      </View>
    );
  }
};

export default HouseInfoPanel;