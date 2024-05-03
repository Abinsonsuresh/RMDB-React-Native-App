import { View, Text, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { images } from '../../constants'

let {width, height} = Dimensions.get('window')
const TrendingMovies = ({ data }) => {
    return (
        <View>
            <Text>Trending</Text>
            <Carousel data={data} renderItem={({ item }) => <MovieCard item={item} />}
            inactiveSlideOpacity={0.60}
             firstItem={1} sliderWidth={width} itemWidth={width*0.62} slideStyle={{ display: "flex", alignItems: "center" }} />
        </View>
    )
}

export default TrendingMovies

const MovieCard = ({item}) => {
    return(
    <TouchableWithoutFeedback>
        {/* <Text className="text-white">Movie</Text> */}
        <Image source={images.cards} style={{width: width*0.6, height: height*0.6 }} className="rounded-2xl"/>
    </TouchableWithoutFeedback>
    )
}