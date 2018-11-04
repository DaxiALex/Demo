import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
} from '../../styles';

const { halfIndent, indent, labelHeight } = dimensions;


const styles = StyleSheet.create({
  contentContainer: {
    marginBottom: halfIndent,
  },

  mainContainer: {
    justifyContent: 'center',
    width: 160,
    marginBottom: halfIndent,
  },

  optionContainer: {
    minHeight: indent * 1.5,
    justifyContent: 'center',
  },

  optionStyle: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.semiBold,
    color: colors.white,
    alignSelf: 'center',
  },

  padding: {
    paddingLeft: indent,
  },

  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: halfIndent,
  },

  labelText: {
    fontSize: fontSizes.small,
    lineHeight: labelHeight,
    color: colors.secondary,
    marginRight: halfIndent,
  },
});

export default styles;
