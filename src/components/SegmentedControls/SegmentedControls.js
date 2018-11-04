import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { SegmentedControls as Segment } from 'react-native-radio-buttons';
import s from './styles';
import { colors } from '../../styles';
import Text from '../Text/Text';

const SegmentedControls = ({
  options,
  onSelection,
  selectedOption,
  withPadding = true,
  containerStyle,
}) => (
  <View
    style={[
      s.contentContainer,
      withPadding && s.padding,
      containerStyle,
    ]}
  >
    <Segment
      tint={colors.white}
      separatorWidth={0}
      selectedBackgroundColor={colors.primary}
      backTint={colors.secondary}
      options={options}
      renderOption={(option) => <Text style={s.optionStyle}>{option}</Text>}
      allowFontScaling={false} // default: true
      onSelection={(val) => onSelection(val)}
      selectedOption={selectedOption}
      optionContainerStyle={s.optionContainer}
      containerBorderRadius={30}
    />
  </View>

);

SegmentedControls.propTypes = {
  options: T.array,
  onSelection: T.func,
  selectedOption: T.string,
  withPadding: T.bool,
  containerStyle: ViewPropTypes.style,
};

export default SegmentedControls;
