import React from 'react';
import T from 'prop-types';
// import { View } from 'react-native';
import {
  Button,
  Text,
  Container,
  NavigationButton,
} from '../../components';
import { colors, headerStyle } from '../../styles';
import { getParamOr } from '../../utils/navHelper';


const Home = ({
  onLogOut,
}) => (
  <Container>
    <Text>Home Page</Text>


    <Button
      title="Log out"
      onPress={onLogOut}
    />
  </Container>
);

Home.navigationOptions = ({ navigation }) => ({
  ...headerStyle,
  title: 'New place',
  headerLeft:
    <NavigationButton
      title={getParamOr(null, 'cancelButtonTitle')(navigation)}
      onPress={getParamOr(null, 'onCancel')(navigation)}
    />,
  headerRight:
    <NavigationButton
      isDisabled={getParamOr(null, 'isSubmitDisabled')(navigation)}
      title={getParamOr(null, 'submitButtonTitle')(navigation)}
      onPress={getParamOr(null, 'onSubmit')(navigation)}
    />,
});

Home.propTypes = {
  onLogOut: T.func,
};

export default Home;
