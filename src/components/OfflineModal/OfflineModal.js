import React from 'react';
import R from 'ramda';
import {
  View,
  NetInfo,
  LayoutAnimation,
} from 'react-native';
import {
  branch,
  compose,
  lifecycle,
  renderNothing,
  withHandlers,
  withState,
  pure,
} from 'recompose';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../Text/Text';
import s from './styles';
import { colors } from '../../styles';


const Notice = () => (
  <View style={s.offlineContainer}>
    <Icon
      name="wifi-strength-off"
      size={120}
      color={colors.grayLight}
    />
    <Text bold style={s.title}>No Internet connection</Text>
  </View>
);

const enhance = compose(
  lifecycle({
    componentWillMount() {
      LayoutAnimation.easeInEaseOut();
    },
    componentWillUnmount() {
      LayoutAnimation.easeInEaseOut();
    },
  }),
);

const MiniOfflineSign = enhance(Notice);


const test = compose(
  pure,
  withState('isConnected', 'setConnected', true),

  withHandlers({
    handleConnectivityChange: props => isConnected => props.setConnected(isConnected),
  }),

  lifecycle({
    componentDidMount() {
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        this.props.handleConnectivityChange
      );
    },
    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener(
        'connectionChange',
        this.props.handleConnectivityChange
      );
    },
  }),
  branch(R.prop('isConnected'), renderNothing),
);


export default test(MiniOfflineSign);
