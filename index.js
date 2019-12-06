import React from 'react';
import {  AppRegistry } from 'react-360';
import { connect } from './store';
import HouseInfoPanel from './components/HouseInfoPanel'
import ButtonInfoPanel from './components/ButtonInfoPanel'

const ConnectedButtonInfoPanel = connect(ButtonInfoPanel);
const ConnectedHouseInfoPanel = connect(HouseInfoPanel);


AppRegistry.registerComponent('ConnectedButtonInfoPanel', () => ConnectedButtonInfoPanel);
AppRegistry.registerComponent('ConnectedHouseInfoPanel', () => ConnectedHouseInfoPanel);