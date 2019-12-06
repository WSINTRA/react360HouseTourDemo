import { StyleSheet } from 'react-360';

const panelBackgroundColour = 'rgba(36,237,5,0.5)'

const styles = StyleSheet.create({
  audioPanel: {
    flexDirection: 'row',
  },
  infoPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: panelBackgroundColour,
    borderColor: 'rgba(255, 255, 255,1)',
    borderWidth: 5,
    borderRadius: 20,
  },
  buttonPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: panelBackgroundColour,
    borderColor: 'rgba(255, 255, 255,1)',
    borderWidth: 5,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  audioButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0,204,102,0.2)',
    borderColor: 'rgba(255,255,255,1)',
    borderWidth: 2,
  },
  button: {
    width: 200,
    backgroundColor: '#5A1C24',
    borderColor: 'rgba(255,255,255,1)',
    borderWidth: 5,
  },
  hover: {
    width: 200,
    backgroundColor: '#E43F52',
    borderColor: 'rgba(255,255,255,1)',
    borderWidth: 5
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default styles;