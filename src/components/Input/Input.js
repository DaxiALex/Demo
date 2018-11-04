import React from 'react';
import T from 'prop-types';
import { TextField } from 'react-native-material-textfield';
import s from './styles';
import { colors, dimensions, fontSizes } from '../../styles';


const Input = ({
  label,
  value,
  onChangeText,
  ...props
}) => (
  <TextField
    label={label}
    value={value}
    lineWidth={1}
    fontSize={fontSizes.medium}
    labelFontSize={fontSizes.small}
    labelHeight={dimensions.labelHeight}
    inputContainerPadding={dimensions.halfIndent}
    onChangeText={onChangeText}
    textColor={colors.text}
    tintColor={colors.primary}
    baseColor={colors.secondary}
    inputContainerStyle={s.inputContainer}
    titleTextStyle={s.inputTitleTextStyle}
    {...props}
  />
);

Input.propTypes = {
  label: T.string.isRequired,
  value: T.string.isRequired,
  onChangeText: T.func.isRequired,

};

export default Input;
