import { Platform } from 'react-native';
import { colors, fontSizes, fontWeights } from './index';

const androidConfig = {
  height: 56,
};

const headerStyle = {
  headerStyle: {
    ...(Platform.OS === 'ios' ? {} : androidConfig),
    backgroundColor: colors.secondaryLighter,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    color: colors.text,
    alignSelf: 'center',
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.bold,
  },
  headerTintColor: colors.primary,
};

export default headerStyle;
