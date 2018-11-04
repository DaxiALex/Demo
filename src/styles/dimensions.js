import { Platform, Dimensions } from 'react-native';
// import Expo from 'expo';
import { moderateScale, verticalScale } from '../utils/scalingUtils';


export const { width, height } = Dimensions.get('window');

export const indent = moderateScale(16);
export const halfIndent = moderateScale(indent / 2);
export const doubleIndent = moderateScale(indent * 2);

export const verticalIndent = verticalScale(indent);

export const commonHeight = verticalScale(40);

export const borderRadius = 4;

export const iconSize = moderateScale(25);

// export const statusBar = Expo.Constants.statusBarHeight;


export const appBarHeight = Platform.OS === 'ios' ? 44 : 56;
// export const statusBarHeight = Platform.OS === 'ios' ? statusBar : 0;
// export const headerHeight = appBarHeight + statusBarHeight;

// export const containerHeight =
//   height - headerHeight - (Platform.OS === 'android' ? Expo.Constants.statusBarHeight : 0);
//
// export const containerHeightWithTabBar = containerHeight - 49;
