import React from 'react';
import T from 'prop-types';
import { ViewPropTypes, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Text from '../Text/Text';
import TouchableItem from '../TouchableItem/TouchableItem';
import s from './styles';
import { colors, dimensions } from '../../styles';


const Button = (props) => {
  const {
    backgroundColor,
    color,
    containerStyle,
    icon,
    iconRight,
    title,
    titleStyle,
    containerDisabled = s.disabled,
    isActive = false,
    activeBackgroundColor,
    activeColor,
    ...touchableProps
  } = props;

  return (
    <View style={[
      s.container,
      containerStyle,
    ]}
    >
      <TouchableItem
        borderless
        // rippleColor={colors.secondaryDisabled}
        style={[
          s.container,
          (!!icon || !!iconRight) && s.rowAligned,
          isActive && activeBackgroundColor,
          touchableProps.disabled && containerDisabled,
          backgroundColor && { backgroundColor },
        ]}
        {...touchableProps}
      >
        <View style={s.iconLeftContainer}>
          {!!icon
            && (
            <FontAwesome
              color={colors.white}
              size={dimensions.iconSize}
              {...icon}
            />
            )
          }
          <Text
            style={[
              s.title,
              titleStyle,
              !!icon && s.marginLeft,
              !!iconRight && s.marginRight,
              color && { color },
              isActive && { color: activeColor },
              touchableProps.disabled && s.titleDisabled,
            ]}
          >
            {title}
          </Text>
          {!!iconRight && <FontAwesome {...iconRight} />}
        </View>
      </TouchableItem>
    </View>
  );
};

Button.propTypes = {
  backgroundColor: T.string,
  color: T.string,
  colorDisabled: T.string,
  containerStyle: ViewPropTypes.style,
  containerDisabled: ViewPropTypes.style,
  icon: T.object,
  iconRight: T.object,
  title: T.string,
  titleStyle: ViewPropTypes.style,
  activeBackgroundColor: ViewPropTypes.style,
  activeColor: T.string,
};

export default Button;
