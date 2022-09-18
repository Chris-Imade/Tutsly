import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import React from 'react';
import tw from "twrnc";
import { assets } from '../constants';

const PageTopNav = () => {
  return (
    <View style={[tw`bg-white flex-row justify-between items-center top-0 right-0 left-0 px-4 ${Platform.OS == "android" ? `pt-8 pb-6` : `p-4`} fixed`]}>
        <View style={[tw``]}>
            <Text style={[tw`font-semibold`]}>Good morning,</Text>
            <Text style={[tw`font-bold text-4xl`]}>Jonathan</Text>
        </View>
        <View>
            <TouchableOpacity>
                <Image
                    source={assets.profile}
                    resizeMode={"contain"}
                    style={{
                        width: 63,
                        height: 63
                    }}
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default PageTopNav