import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import TrendingMovies from '../../../components/home/TrendingMovies'

const home = () => {
    const [trendingData, setTrendingData] = useState([1,2,3])
    return (
        <View className="bg-[#12151c] flex-1">
            <SafeAreaView className="mb-3">
                <StatusBar style='light'/>
                <View className="flex-row justify-between items-center mx-4 mt-3">
                    <Text className="text-4xl font-bold text-white">=</Text>

                    <Text className="text-4xl font-bold text-orange-300">R<Text className="text-white">MDB</Text></Text>

                    <Text className="text-4xl font-bold text-white">S</Text>


                </View>
            </SafeAreaView>

            <ScrollView>
                <TrendingMovies data={trendingData}/>
            </ScrollView>
        </View>
    )
}

export default home