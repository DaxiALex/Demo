import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import T from 'prop-types';
import s from './styles';

const Separator = ({
  marginVertical,
  marginTop,
  marginBottom,
  style,
  big,
}) => (
  <View
    style={[
      s.root,
      marginVertical && { marginVertical },
      marginTop && { marginTop },
      marginBottom && { marginBottom },
      big && s.big,
      style,
    ]}
  />
);
Separator.propTypes = {
  marginVertical: T.number,
  marginTop: T.number,
  marginBottom: T.number,
  big: T.bool,
  style: ViewPropTypes.style,
};

export default Separator;
