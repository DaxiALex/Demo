import React from 'react';
import T from 'prop-types';
// import { View } from 'react-native';
import {
  Button,
  Container,
  NavigationButton,
} from '../../components';
import { headerStyle } from '../../styles';
import { getParamOr } from '../../utils/navHelper';
import { ImagePicker } from './components';


const Home = ({
  onSubmit,
  avatar,
  setAvatar,
}) => (
  <Container withoutPadding>
    <ImagePicker avatar={avatar} setAvatar={setAvatar} />

    <Container>

      <Button
        title="Post"
        onPress={onSubmit}
      />
    </Container>
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
  avatar: T.string,
  setAvatar: T.func,
  onSubmit: T.func,
};

export default Home;
