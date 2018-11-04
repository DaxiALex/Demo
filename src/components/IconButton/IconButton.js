import React from 'react';
import T from 'prop-types';
import { ViewPropTypes } from 'react-native';
import TouchableItem from '../TouchableItem/TouchableItem';
import Icon from '../Icon/Icon';


const IconButton = (props) => {
  const {
    color,
    name,
    onPress,
    containerStyle,
    ...iconProps
  } = props;

  return (
    <TouchableItem
      style={containerStyle}
      onPress={onPress}
      borderless
      useOpacity
    >
      <Icon
        color={color}
        name={name}
        {...iconProps}
      />
    </TouchableItem>
  );
};

IconButton.propTypes = {
  color: T.string,
  name: T.string,
  onPress: T.func.isRequired,
  containerStyle: ViewPropTypes.style,
};

export default IconButton;
