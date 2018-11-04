import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  // Select,
  Text,
  Container,
  Button,
} from '../../components';
import { colors } from '../../styles';
import s from './styles';

const Login = ({
  onSignIn,
}) => (
  <Container style={s.contentContainer}>


    <View style={s.mainContainer}>
      <Icon name="rocket" size={150} color={colors.primary} style={s.icon} />
      <Text style={s.title}>Demo</Text>

      <Text>Welcome to boilerplate by Alex Yuriev</Text>


    </View>


    <Button
      title="Create new place"
      onPress={onSignIn}
    />

  </Container>
);

Login.navigationOptions = ({
  header: null,
  // ...headerStyle,
});

Login.propTypes = {
  onSignIn: T.func,
};

export default Login;
