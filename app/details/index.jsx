import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, ScrollView } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import useFetch from '../../utils/useFetch'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'


const index = () => {
  const { id, type } = useLocalSearchParams()
  const { data, loading } = useFetch(`/${type}/${id}`)

  const genresAPIData = data?.genres?.map((g, i) => g.id);
  const rating = data?.vote_average.toFixed(1) / 2;

  const posterUrl = "https://image.tmdb.org/t/p/original" + data?.poster_path


  console.log(data)

  return (
    <View className="bg-[#12151c] flex-1">
      <SafeAreaView>
        <StatusBar style='light' />
        <View className="flex-row justify-between items-center mx-4 mt-3">

          <TouchableOpacity onPress={() => router.push("/home")}>
            <Text className="text-sm font-thin text-white">Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>

        {!!data && (
          <View>
            <View className="flex justify-center items-center">
              <Image source={{ uri: posterUrl }} className='max-w-[350px] rounded-xl w-[400px] h-[600px]' alt="" />
              <Image className="rounded-t-lg" source={{ uri: posterUrl }} />
              <Text className="text-white font-pmedium mt-2 p-2">{data.original_title || data.title || data.name}</Text>
              {/* <Text className="text-white font-pthin p-2">{type}</Text> */}
              <Text className='text-md md:text-xl text-white font-thin italic'>{data?.tagline}</Text>

            </View>

            <View className="flex flex-col mt-6 justify-start items-start text-white p-4">
              <Text className="text-white">
                {rating}/5
              </Text>

              <View className='my-4 '>
                <Text className='text-2xl text-white font-semibold'>Overview</Text>
                <Text className='text-sm text-white  mt-4 '>{data.overview}</Text>
              </View>
            </View>

          </View>

        )}

      </ScrollView>
    </View>

  )
}

export default index