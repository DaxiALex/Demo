import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';


const { halfIndent, indent, labelHeight } = dimensions;


const styles = StyleSheet.create({

  contentContainer: {
    marginBottom: halfIndent,
    // height: 60,
  },

  padding: {
    marginLeft: indent,
  },

  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: halfIndent,
    justifyContent: 'space-between',
    paddingRight: indent,
  },

  bigLabelText: {
    color: colors.secondary,
    fontSize: fontSizes.medium,
  },

  selectedOptionText: {
    color: colors.text,
    fontSize: fontSizes.medium,
  },

  littleLabelText: {
    fontSize: fontSizes.small,
    lineHeight: labelHeight,
    color: colors.secondary,
  },

  optionContainer: {
    height: 45,
    paddingTop: 2,
    justifyContent: 'space-between',
  },


});

export default styles;
