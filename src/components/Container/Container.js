import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import s from './styles';
import { colors } from '../../styles';

const Container = ({
  children,
  style,
  withoutPadding,
  dark,
}) => (
  <View style={[
    s.container,
    style,
    !withoutPadding && s.padding,
    dark && { backgroundColor: colors.primaryDark },
  ]}
  >
    {children}
  </View>
);

Container.propTypes = {
  children: T.node,
  style: ViewPropTypes.style,
  withoutPadding: T.bool,
  dark: T.bool,
};

export default Container;
