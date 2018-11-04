/* eslint-disable operator-linebreak */
import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { NavigationActions } from 'react-navigation';
import TouchableItem from '../TouchableItem/TouchableItem';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import { colors, dimensions } from '../../styles';
import s from './styles';


const NavigationButton = (props) => {
  const {
    title,
    titleStyle,
    tintColor,
    iconName,
    onPress,
    isDisabled,
    containerStyle,
    navigation,
    backOnSuccess,
    isVisible = true,
    ...iconProps
  } = props;

  const onPressButton = () => {
    if (onPress) onPress();
    if (navigation && backOnSuccess) {
      navigation.dispatch(NavigationActions.back());
    }
  };

  return isVisible ? (
    <TouchableItem
      disabled={isDisabled}
      style={[s.container, containerStyle]}
      onPress={onPressButton}
      borderless
      useOpacity
    >
      <View>
        {iconName && (
        <Icon
          tintColor={tintColor || colors.white}
          style={{ color: tintColor || colors.primary }}
          name={iconName}
          size={dimensions.iconSize}
          {...iconProps}
        />
        )}

        {title && (
          <Text
            style={[
              s.title,
              titleStyle,
              isDisabled && s.disabledText,
            ]}
          >
            {title}
          </Text>
        )}


      </View>
    </TouchableItem>

  ) : null;
};

NavigationButton.propTypes = {
  navigation: T.object,
  isVisible: T.bool,
  backOnSuccess: T.bool,
  tintColor: T.string,
  name: T.string,
  onPress: T.func,
  containerStyle: ViewPropTypes.style,
  title: T.string,
  iconName: T.string,
  titleStyle: T.any,
  isDisabled: T.bool,
};

export default NavigationButton;
