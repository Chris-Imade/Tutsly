import { View, Text, Image, Animated, Dimensions, ViewBase, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react';
import { assets } from '../constants';
import tw from "twrnc";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");

const DATA = [
  {
    id: 1,
    image: assets.onboardOne,
    writeUp: "Learning never",
    slimWriteUp: "exhausts the mind."
  },
  {
    id: 2,
    image: assets.onboardTwo,
    writeUp: "Join millions of",
    slimWriteUp: " language enthusiast",
    slimWriteUpTwo: "around th world"
  },
  {
    id: 3,
    image: assets.onboardThree,
    writeUp: "Knowlegde is priceless"
  }
]

const Indicator = ({ scrollX }) => {
  
  return (
    <View style={{ 
      justifyContent: "center", 
      alignItems: "center",
      flexDirection: "row",
    }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1 ) * width, i * width, (i + 1) * width];
        const measurement = scrollX.interpolate({
          inputRange,
          outputRange: [25, 69, 25],
          extrapolate: "clamp"
        })

        const bg = scrollX.interpolate({
          inputRange,
          outputRange: ["#cac8be63", "#C680DE", "#cac8be63"],
          extrapolate: "clamp"
        })

        return (
          <Animated.View key={`indicator-${i}`}style={{
            width: measurement,
            height: 12,
            backgroundColor: bg,
            borderRadius: 20,
            margin: 5
          }}></Animated.View>
        )
      })}
    </View>
  )
}

const Welcome = () => {

  const navigation = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.id}
        horizontal
        scrollEventThrottle={35}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: { contentOffset: { x: scrollX } }}],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View style={{ justifyContent: "center", alignContent: "center", width: width, height: height }}>
            <View style={{ flex: .7, justifyContent: "center", alignItems: "center" }}>
              <Image
                source={item.image}
                resizeMode={"contain"}
                style={{
                  width: width,
                  height: width
                }}
              />
            </View>
            <View style={{ flex: .3, alignItems: "flex-start" }}>
              <Text style={[tw`text-3xl px-4`, { fontWeight: 800}]}>{item.writeUp}</Text>
              {item.slimWriteUp && (
                <Text style={[tw`text-3xl px-4`, { fontWeight: 800}]}>{item.slimWriteUp}</Text>
              )}
              {item.slimWriteUpTwo && (
                <Text style={[tw`text-3xl px-4`, { fontWeight: 800}]}>{item.slimWriteUpTwo}</Text>
              )}
            </View>
          </View>
        )}
      />
      <View style={tw`w-full justify-between items-center flex-row px-4 absolute bottom-12`}>
        <Indicator scrollX={scrollX} />
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeTab")}
        >
          <Image
            source={assets.rAComponent}
            resizeMode={"contain"}
            style={{
              width: 57,
              height: 57
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Welcome