import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';

const Separator = ({
  marginVertical,
  marginTop,
  marginBottom,
  style,
  height,
}) => (
  <View
    style={[
      s.root,
      marginVertical && { marginVertical },
      marginTop && { marginTop },
      marginBottom && { marginBottom },
      height && s.height,
      style,
    ]}
  />
);
Separator.propTypes = {
  marginVertical: T.number,
  marginTop: T.number,
  marginBottom: T.number,
  height: T.bool,
  style: ViewPropTypes.style,
};

export default Separator;
