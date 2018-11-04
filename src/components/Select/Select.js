import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import Text from '../Text/Text';
import TouchableItem from '../TouchableItem/TouchableItem';
import s from './styles';
import { colors } from '../../styles';
import Separator from '../Separator/Separator';
import Icon from '../Icon/Icon';


// TODO add modal with options list

const Select = ({
  label,
  options,
  selectedOption,
  onSelect,
  padding = true,
}) => (
  <View
    style={[
      s.contentContainer,
      padding && s.padding,
    ]}
  >
    <TouchableItem
      style={s.mainContainer}
      onSelect={onSelect}
    >
      {selectedOption
        ? (
          <View style={s.optionContainer}>
            <Text style={s.littleLabelText}>{label}</Text>
            <Text style={s.selectedOptionText}>{selectedOption}</Text>

          </View>
        )
        : (
          <View style={s.optionContainer}>
            <View />
            <Text style={s.bigLabelText}>{label}</Text>
            <View />
          </View>
        )
    }
      <Icon name="chevron-right" color={colors.secondaryLight} size={14} />
    </TouchableItem>
    <Separator big />
  </View>
);

Select.propTypes = {
  label: T.string,
  options: T.array,
  selectedOption: T.string,
  onSelect: T.func,
  padding: T.bool,
};

export default Select;
