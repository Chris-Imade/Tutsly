import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { assets } from '../constants';

const Messages = ({ item }) => {
  return (
    <TouchableOpacity>
      <Image
        source={assets.profile}
        resizeMode={"contain"}
        style={{
            width: 63,
            height: 63
        }}
      />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.shortMsg1}</Text>
        <Text>{item.shortMsg2}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Messages