import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: dimensions.commonHeight,
    width: '100%',
    // borderRadius: dimensions.commonHeight / 2,
    borderRadius: dimensions.borderRadius,
  },
  containerPressed: {
    backgroundColor: colors.buttonPressed,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.semiBold,
  },
  titlePressed: {
    color: colors.white,
  },
  titleDisabled: {
    color: colors.white,
  },
  disabled: {
    backgroundColor: colors.secondary,
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
