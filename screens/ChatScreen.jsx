import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, FlatList } from 'react-native'
import React from 'react';
import { assets, COLORS, msgData } from "../constants";
import tw from "twrnc";
import { Messages, Search } from '../components';

const { width, height } = Dimensions.get("screen");


const ChatScreen = () => {
  return (
    <>
      <SafeAreaView 
        style={tw`bg-white flex-1 px-5 pt-4`}
      >
        <View style={tw`font-semibold text-xl`}>
          Chat
        </View>
        <Search
          placeholder='Search'
          placeholderTextColor={"#8B8B8B"}
          style={[{
              color: "#8B8B8B",
              backgroundColor: COLORS.blurGray,
              borderRadius: 20,
              borderWidth: 0,
              width: "100%",
          }, tw`pl-4 mr-5 py-4 my-4`]}
        />
        <TouchableOpacity 
        style={[tw`flex-row justify-between items-center`]}>
          <Text style={tw``}>Messages</Text>
          <Image
            source={assets.chat}
            resizeMethod={"contain"}
            style={{
              width: 25,
              height: 25
            }}
          />
        </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={msgData}
          renderItem={({ item }) => <Messages item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  )
}

export default ChatScreen