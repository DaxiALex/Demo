import React from 'react';
import T from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { dimensions, colors } from '../../styles';


const Icon = ({
  IconSet = FontAwesome,
  size = dimensions.iconSize,
  color = colors.primary,
  name,
  ...props
}) => (
  <IconSet
    size={size}
    style={{ color }}
    name={name}
    {...props}
  />
);

Icon.propTypes = {
  size: T.number,
  color: T.string,
  name: T.string.isRequired,
};

export default Icon;
