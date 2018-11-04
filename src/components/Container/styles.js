import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';
import { isIphoneX } from '../../utils/detectDevice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  padding: {
    padding: dimensions.indent,
    paddingBottom: isIphoneX ? dimensions.indent * 1.5 : dimensions.indent,
  },
});

export default styles;
