import React from 'react';
import T from 'prop-types';
import { View, Image } from 'react-native';
import s from './styles';
import {
  TouchableItem, Icon, Text, Spinner,
} from '../../../../components';
import colors from '../../../../styles/colors';

// TODO add animation for image

const ImagePicker = ({
  onPickImage,
  avatar,
  setShowLoader,
  isShowLoader,
}) => (
  <View style={s.contentContainer}>
    {isShowLoader && <View style={[s.fillAll, s.loaderContainer]}><Spinner /></View>}

    {avatar
      ? (
        <View style={s.fillAll}>
          <Image
            source={{ url: avatar }}
            style={s.fillAll}
            resizeMode="cover"
            onLoad={() => setShowLoader(false)}
          />
          <TouchableItem onPress={onPickImage} style={s.chooseAnotherPhotoContainer}>
            <Icon name="camera" color={colors.white} size={20} />
            <Text style={s.chooseAnotherPhotoTitle}>Choose another photo</Text>
          </TouchableItem>
        </View>
      )
      : (
        <TouchableItem style={s.buttonContainer} onPress={onPickImage}>
          <Icon name="image" color={colors.secondary} size={30} />
          <Text style={s.buttonTitleText}>Add Picture</Text>
        </TouchableItem>
      )
    }
  </View>
);

ImagePicker.propTypes = {
  onPickImage: T.func.isRequired,
  isShowLoader: T.bool,
  avatar: T.string.isRequired,
  setShowLoader: T.func.isRequired,
};


export default ImagePicker;
