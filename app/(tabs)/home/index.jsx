import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import TrendingMovies from '../../../components/home/TrendingMovies'
import MovieList from '../../../components/home/MovieList'
import useFetch from '../../../utils/useFetch'

const home = () => {
    const { data: populardata, loading: popularLoading } = useFetch(`/movie/popular`)
    const { data: top_rated, loading: top_ratedloading } = useFetch(`/movie/top_rated`)
    const { data: Trendingdata, loading: TrendingLoading } = useFetch(`/trending/all/day`)

    const [trendingData, setTrendingData] = useState(null)
    const [popular, setPopular] = useState(null)
    const [topRated, setTopRated] = useState(null)


    // console.log("POPU", topRated)
    useEffect(() => {
        if (!popularLoading) {
            setPopular(populardata?.results)
        }
        if (!TrendingLoading) {
            setTrendingData(Trendingdata?.results)
        }
        if (!top_ratedloading) {
            setTopRated(top_rated?.results)
        }
    }, [popularLoading, populardata, TrendingLoading, Trendingdata, top_rated, top_ratedloading])


    const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5])

    return (
        <View className="bg-[#12151c] flex-1">
            <SafeAreaView className="-mb-3">
                <StatusBar style='light' />
                <View className="flex-row justify-between items-center mx-4 mt-3">
                    <Text className="text-4xl font-bold text-white">=</Text>

                    <Text className="text-2xl font-bold text-orange-300">R<Text className="text-white">MDB</Text></Text>

                    <Text className="text-4xl font-bold text-white">S</Text>
                </View>
            </SafeAreaView>

            <ScrollView>
                <TrendingMovies data={trendingData} />
                {
                    popular &&
                    <MovieList title={"Popular"} type={"movie"} data={popular} />
                }

                {
                    topRated &&
                    <MovieList title={"Top Rated"} type={"movie"} data={topRated} />
                }
            </ScrollView>
        </View>
    )
}

export default home