import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import s from './styles';
import { colors, dimensions } from '../../styles';
import Text from '../Text/Text';
import IconButton from '../IconButton/IconButton';
import Separator from '../Separator/Separator';


const ButtonsSelector = ({
  options,
  onSelection,
  selectedOption,
  label,
  withPadding = true,
  containerStyle,
  icon,
}) => (
  <View
    style={[
      s.contentContainer,
      withPadding && s.padding,
      containerStyle,
    ]}
  >
    <View style={[
      s.mainContainer,
      containerStyle,
    ]}
    >
      <View style={s.labelContainer}>
        <Text light style={s.labelText}>{label}</Text>
        { icon && <IconButton {...icon} /> }
      </View>

      <SegmentedControls
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
        containerBorderRadius={dimensions.borderRadius}
      />
    </View>
    <Separator big />

  </View>

);

ButtonsSelector.propTypes = {
  options: T.array,
  onSelection: T.func,
  selectedOption: T.string,
  label: T.string,
  withPadding: T.bool,
  containerStyle: ViewPropTypes.style,
  icon: T.object,

};

export default ButtonsSelector;
