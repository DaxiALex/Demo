import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '../../styles';


const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'space-between',
  },

  mainContainer: {
    alignItems: 'center',
  },

  icon: {
    marginTop: 50,
  },

  title: {
    fontSize: fontSizes.xbig,
    marginTop: dimensions.doubleIndent,
    marginBottom: dimensions.indent,
  },


});

export default styles;
