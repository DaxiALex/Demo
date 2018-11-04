import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

export default StyleSheet.create({
  offlineContainer: {
    backgroundColor: colors.background,
    height: dimensions.height,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  title: {
    fontSize: fontSizes.xxmedium,
    marginTop: 60,
  },

});
