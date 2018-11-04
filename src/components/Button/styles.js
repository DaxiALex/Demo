import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: dimensions.commonHeight,
    width: '100%',
    // borderRadius: dimensions.commonHeight / 2,
    borderRadius: 10,
  },
  containerPressed: {
    backgroundColor: colors.buttonPressed,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.medium,
  },
  titlePressed: {
    color: colors.white,
  },
  titleDisabled: {
    color: colors.primary,
  },
  disabled: {
    backgroundColor: colors.secondaryDisabled,
  },
  rowAligned: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: 24,
  },
  marginRight: {
    marginRight: 24,
  },

  iconLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

});

export default styles;
