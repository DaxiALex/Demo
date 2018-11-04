import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
} from '../../../../styles';

// TODO change height if need
const styles = StyleSheet.create({
  contentContainer: {
    height: 280,
    // height: dimensions.height * 0.4,
    width: '100%',
    backgroundColor: colors.secondaryLighter,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    height: 140,
    width: 180,
    // height: dimensions.height * 0.2,
    // width: dimensions.width * 0.4,
    borderWidth: 3,
    borderColor: colors.secondary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTitleText: {
    marginTop: dimensions.halfIndent,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.semiBold,
    color: colors.secondary,
  },

  loaderContainer: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryLighter,
  },

  fillAll: {
    height: '100%',
    width: '100%',
  },


  chooseAnotherPhotoContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: dimensions.halfIndent,
    paddingHorizontal: dimensions.indent,
    backgroundColor: colors.secondaryOpacity,
  },

  chooseAnotherPhotoTitle: {
    color: colors.white,
    marginLeft: dimensions.halfIndent,
  },


});

export default styles;
