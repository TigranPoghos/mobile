import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {styles} from '../styles/style';

const BannerPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBanner}>Учет рабочего времени</Text>
    </View>
  );
};


export default BannerPage;
