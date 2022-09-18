import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import assets from '../constants/assets';
import { COLORS, nativeSpeakers, STYLES } from '../constants';
import tw from "twrnc";
import { PageTopNav, Search } from "../components/index";



const HomeScreen = () => {
  return (
    <>
    <StatusBar hidden/>
    <PageTopNav />
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={tw`flex-1 bg-white px-4 pt-4 pb-12`}>
            <View style={tw`flex-row flex-1 my-6 justify-between`}>
                <Search
                    placeholder='Search'
                    placeholderTextColor={"#8B8B8B"}
                    style={[{
                        color: "#8B8B8B",
                        backgroundColor: COLORS.blurGray,
                        flex: .9999,
                        borderRadius: 20,
                        borderWidth: 0
                    }, tw`pl-4 mr-5`]}
                />
                <View style={{
                    width: 68,
                    height: 68,
                    backgroundColor: COLORS.blurGray,
                    borderRadius: 20,
                    justifyContent: "center",
                    padding: 10,
                    alignItems: "center"
                    }}>
                        <TouchableOpacity>
                            <Image 
                                source={assets.filter}
                                resizeMode={"contain"}
                                style={{
                                    width: 29,
                                    height: 29
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={tw`flex-row justify-between py-4 px-12 bg-[#772893] rounded-[25px] mb-6`}>
                    <Image
                        source={assets.meeting}
                        resizeMode={"contain"}
                        style={{
                            width: 45,
                            height: 95
                        }}
                    />
                    <View style={tw`justify-center items-center`}>
                        <View style={tw`mb-2`}>
                            <Text style={tw`text-white`}>Schedule a meeting</Text>
                            <Text style={tw`text-white`}>with native speakers</Text>
                        </View>
                        <TouchableOpacity style={tw`w-[155px] h-[42px] rounded-[10px] bg-white justify-center items-center`}>
                            <Text style={tw`text-[#772893] font-bold`}>Schedule</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={tw`font-semibold text-xl`}>Native speakers</Text>
                    {nativeSpeakers.map((item, index) => (
                        <TouchableOpacity 
                            key={`native-speaker-${index}`}
                            style={[{
                                position: "relative",
                                shadowColor: STYLES.smallSadow
                            }, tw`flex-row mt-6 items-center rounded-[14px] p-3`]}
                        >
                            <Image
                                source={item.image}
                                resizeMode={"contain"}
                                style={{
                                    width: 63,
                                    height: 63
                                }}
                            />
                            <View style={tw`ml-4`}>
                                <Text style={tw`font-semibold text-xl`}>{item.name}</Text>
                                <Text style={[tw``, { color: COLORS.grayText}]}>{item.desc}</Text>
                                <Text style={[tw``, { color: COLORS.grayText}]}>{item.descMinor1}</Text>
                                <Text style={[tw``, { color: COLORS.grayText}]}>{item.descMinor2}</Text>
                                <View style={tw`mt-3 flex-row items-center`}>
                                    <Image 
                                        source={assets.location}
                                        style={{
                                            width: 12,
                                            height: 12
                                        }}
                                        resizeMode={"contain"}
                                    />
                                    <Text style={tw`text-[#CAC8BE]`}>{item.location}</Text>
                                </View>
                            </View>
                            
                            <Image
                                source={item.flag}
                                resizeMode={"contain"}
                                style={[{
                                    position: "absolute",
                                    width: 36,
                                    height: 16,
                                }, tw`top-6 right-3`]}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
        </ScrollView>
    </>
  )
}

export default HomeScreen