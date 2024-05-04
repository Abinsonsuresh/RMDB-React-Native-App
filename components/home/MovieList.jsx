import { View, Text, TouchableWithoutFeedback, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { images } from '../../constants'
import { router } from 'expo-router'

let { width, height } = Dimensions.get('window')

const MovieList = ({ title, data, type }) => {
    return (
        <View className="mt-4">
            <View>
                <Text className="text-xl text-white font-bold px-4 my-3">{title}</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    data.map((item, index) => {
                        const posterUrl = item.poster_path ? "https://image.tmdb.org/t/p/original" + item.poster_path : "";

                        const title = item?.name?.length > 15 || item?.title?.length > 15 ? item?.name?.slice(0,15) || item?.title?.slice(0,15) + ".." : item?.name || item?.title

                        return (
                            
                            <TouchableWithoutFeedback onPress={() => router.push(`../details?id=${item.id}&type=${type}`)} key={index}>
                                <View className="mr-4 bg-[#090909] relative shadow-md  rounded-lg  cursor-pointer ">
                                    <Image className="rounded-t-lg" source={{ uri: posterUrl }} style={{ width: width * 0.33, height: height * 0.22 }} />
                                    <Text className="text-white font-pmedium mt-2 p-2">{title}</Text>
                                    <Text className="text-white font-pthin p-2">{type}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default MovieList