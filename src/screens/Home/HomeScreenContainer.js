import {
  compose,
  branch,
  withHandlers,
  hoistStatics,
  renderComponent,
  lifecycle,
  withState,
  withProps,
  withPropsOnChange,
} from 'recompose';
import R from 'ramda';
import { Alert } from 'react-native';
import HomeScreenView from './HomeScreenView';
import { RootSpinner } from '../../components';

const enhance = compose(

  withState('avatar', 'setAvatar', ''),
  withState('name', 'setName', ''),
  withState('price', 'setPrice', ''),
  withState('details', 'setDetails', ''),

  withState('list', 'setList', 'Chairs'),

  withState('group', 'setGroup', 'Piece'),
  withState('selectedTab', 'setSelectTab', 'Buy'),

  withState('selectedTabIndex', 'setSelectedTabIndex', 0),


  withProps({
    groups: ['Piece', 'Service'],
    tabs: ['Stock', 'Buy'],
    list: ['Chairs', 'Bla bla'],
  }),

  withHandlers({
    onCancel: props => () => {
      props.navigation.goBack();
    },
    onSubmit: props => () => {
      Alert.alert(
        'Success',
        'Post created!',
        [
          { text: 'Ok' },
        ],
      );
      props.navigation.goBack();
    },
    onPriceInputBlur: props => () => {
      if (props.price.length) props.setPrice(`${props.price} HKD`);
    },
    onPriceInputFocus: props => () => {
      props.setPrice(props.price.substring(0, props.price.length - 4));
    },
  }),

  withPropsOnChange(
    ['avatar', 'name', 'price', 'details'],
    props => ({
      isReadyForSubmit: R.all(R.equals(true))([
        !!props.avatar,
        !!props.name,
        !!props.price,
        !!props.details,
      ]),
    })
  ),

  withPropsOnChange(
    ['isReadyForSubmit'],
    ({ navigation, isReadyForSubmit }) => {
      navigation.setParams(
        {
          isReadyForSubmit,
        }
      );
    }
  ),


  lifecycle({
    componentDidMount() {
      this.props.navigation.setParams(
        {
          cancelButtonTitle: 'Undo',
          submitButtonTitle: 'Post',
          onCancel: this.props.onCancel,
          onSubmit: this.props.onSubmit,
          isReadyForSubmit: false,
        }
      );
    },
  }),
  branch(R.prop('isLoading'), renderComponent(RootSpinner)),
);

export default hoistStatics(enhance)(HomeScreenView);
