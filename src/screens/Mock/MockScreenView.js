import React from 'react';
import T from 'prop-types';
// import { View } from 'react-native';
import {
  // Button,
  Text,
  Container,
} from '../../components';
import { colors, headerStyle } from '../../styles';


const Mock = ({
  on,
}) => (
  <Container>
     <Text>SomeText</Text>
  </Container>
);

Mock.navigationOptions = ({
  header: null,
  // ...headerStyle,
});

Mock.propTypes = {
  on: T.func,
};

export default Mock;
