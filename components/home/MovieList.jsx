import { View, Text, TouchableWithoutFeedback, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { images } from '../../constants'

let {width, height} = Dimensions.get('window')

const MovieList = ({ title, data }) => {
    return (
        <View>
            <View>
                <Text>{title}</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback key={index}>
                                <View className="mr-4">
                                    <Image source={images.cards} style={{width:width*0.33, height:height*0.22}}/>
                                <Text className="text-white">{"Ant MAn"}</Text>
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