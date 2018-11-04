import {
  Platform,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';

export const { isTVOS, isPad } = Platform;

export const isIphoneX = (
  isIos
  && !isPad
  && !isTVOS
  && (height === 812 || width === 812)
);


export const isTablet = (
  isPad
);

export const getDeviceInfo = () => ({
  isLandscape: Dimensions.get('window').width > Dimensions.get('window').height,
});
