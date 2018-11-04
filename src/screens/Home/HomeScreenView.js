import React from 'react';
import T from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native';
import {
  Button,
  Container,
  NavigationButton,
  ButtonsSelector,
  SegmentedControls,
  Select,
  Input,
} from '../../components';
import { headerStyle } from '../../styles';
import { getParamOr } from '../../utils/navHelper';
import { ImagePicker } from './components';
import s from './styles';


const Home = ({
  onSubmit,
  avatar,
  setAvatar,
  name,
  setName,
  details,
  setDetails,
  price,
  setPrice,
  onPriceInputFocus,
  onPriceInputBlur,
  groups,
  group,
  setGroup,
  selectedTabIndex,
  setSelectedTabIndex,
  tabs,
  selectedTab,
  setSelectTab,
  isReadyForSubmit,
}) => (
  <KeyboardAwareScrollView
    style={s.contentContainer}
    keyboardShouldPersistTaps="handled"
  >
    <ImagePicker avatar={avatar} setAvatar={setAvatar} />

    <SegmentedControls // TODO change this component in real project
      options={tabs}
      onSelection={setSelectTab}
      selectedOption={selectedTab}
    />

    <Input
      label="Name"
      value={name}
      lineWidth={1}
      onChangeText={setName}
    />

    <ButtonsSelector
      options={groups}
      label="Group"
      onSelection={setGroup}
      selectedOption={group}
    />

    <Select
      options={groups}
      label="List"
      onSelect={setGroup}
      selectedOption={group}
    />

    <Input
      multiline
      label="Details"
      value={details}
      onChangeText={setDetails}
      maxLength={250}
      characterRestriction={250}
    />

    <Select
      options={groups}
      label="Area"
      onSelect={setGroup}
      // selectedOption={group}
    />

    <Input
      label="Price"
      value={price}
      lineWidth={1}
      onChangeText={setPrice}
      keyboardType="numeric"
      onFocus={onPriceInputFocus}
      onBlur={onPriceInputBlur}
    />

    <Container>

      <Button
        disabled={!isReadyForSubmit}
        title="Post"
        onPress={onSubmit}
      />


    </Container>
  </KeyboardAwareScrollView>
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
    isDisabled={!getParamOr(null, 'isReadyForSubmit')(navigation)}
    title={getParamOr(null, 'submitButtonTitle')(navigation)}
    onPress={getParamOr(null, 'onSubmit')(navigation)}
  />,
});

Home.propTypes = {
  avatar: T.string,
  setAvatar: T.func,
  onSubmit: T.func,
  name: T.string,
  setName: T.func,
  details: T.string,
  setDetails: T.func,
  price: T.string,
  setPrice: T.func,
  onPriceInputFocus: T.func,
  onPriceInputBlur: T.func,
  groups: T.array,
  group: T.string,
  setGroup: T.func,
  selectedTabIndex: T.number,
  setSelectedTabIndex: T.func,
  tabs: T.array,
  selectedTab: T.string,
  setSelectTab: T.func,
  isReadyForSubmit: T.bool,
};

export default Home;
