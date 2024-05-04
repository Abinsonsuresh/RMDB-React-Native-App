import { View, Text, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { images } from '../../constants'
import useFetch from '../../utils/useFetch'
import { image500 } from '../../utils/apiFetch'

let {width, height} = Dimensions.get('window')
const TrendingMovies = ({ data }) => {
    // console.log(data)
    const onClickHandler = () =>{

    }
    return (
        <View>
            <Text className="text-white px-4 mb-3 text-xl font-bold">Trending</Text>
            <Carousel data={data} renderItem={({ item }) => <MovieCard item={item} handler={onClickHandler} />}
            inactiveSlideOpacity={0.60}
             firstItem={1} sliderWidth={width} itemWidth={width*0.62} slideStyle={{ display: "flex", alignItems: "center" }} />
        </View>
    )
}

export default TrendingMovies

const MovieCard = ({item, handler}) => {
    const posterUrl = item.poster_path ? "https://image.tmdb.org/t/p/original" + item.poster_path : "";
    // console.log(item.poster_path)
    return(
    <TouchableWithoutFeedback onPress={handler}>
        {/* <Text className="text-white">Movie</Text> */}
        <Image source={{uri: posterUrl}} style={{width: width*0.6, height: height*0.6 }} className="rounded-2xl"/>
    </TouchableWithoutFeedback>
    )
}