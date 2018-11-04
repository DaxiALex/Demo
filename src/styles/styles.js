import { Platform, StyleSheet } from 'react-native';
import colors from './colors';

export const shadow = Platform.select({
  ios: {
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  android: {
    elevation: 2,
  },
});

export default StyleSheet.create({
  fillAll: {
    flex: 1,
  },
});
