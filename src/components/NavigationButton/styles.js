import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.indent,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
  },
  disabledText: {
    color: colors.secondary,
  },
});

export default styles;
