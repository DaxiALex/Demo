import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
} from '../../styles';

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',

  },
  optionContainer: {
    minHeight: dimensions.indent * 1.5,
    justifyContent: 'center',
  },
  optionStyle: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.semiBold,
    color: colors.white,
    alignSelf: 'center',
  },
  padding: {
    padding: dimensions.indent,
  },
});

export default styles;
