import { View, Text, TouchableWithoutFeedback, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { images } from '../../constants'

let { width, height } = Dimensions.get('window')

const MovieList = ({ title, data }) => {
    return (
        <View className="mt-4">
            <View>
                <Text className="text-xl text-white font-bold px-4 my-3">{title}</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    data.map((item, index) => {
                        const posterUrl = item.poster_path ? "https://image.tmdb.org/t/p/original" + item.poster_path : "";

                        const title = item.title.length > 20 ? item.title.slice(0,20) + ".." : item.title

                        return (
                            <TouchableWithoutFeedback key={index}>
                                <View className="mr-4">
                                    <Image source={{ uri: posterUrl }} style={{ width: width * 0.33, height: height * 0.22 }} />
                                    <Text className="text-white">{title}</Text>
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