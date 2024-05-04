import { View, Text, TextInput, StatusBar, TouchableOpacity, ScrollView, FlatList, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import useFetch from '../../../utils/useFetch'
import { APIData } from '../../../utils/apiFetch'

let { width, height } = Dimensions.get('window')

const Searchindex = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState(null);

    const handleInputChange = (text) => {
        setQuery(text);
    };

    const handleSearch = () => {
        if (query.trim().length > 0) {
          APIData(`/search/multi?query=${query}`).then(res => {
            setData(res?.results)
          })
            console.log('Search initiated with query:', query);
         
        }
    };
    console.log(query)
    const MovieCard = ({ item }) => {
        const posterUrl = item?.poster_path ? "https://image.tmdb.org/t/p/original" + item?.poster_path : "";
        const title = item.title?.length > 15 ? item.title.slice(0, 15) + ".." : item.title
        const type = "movie"

        return (
            <TouchableWithoutFeedback onPress={() => router.push(`../details?id=${item.id}&type=${type}`)}>
                <View className="mr-4 my-2 bg-[#090909] relative shadow-md  rounded-lg  cursor-pointer ">

                    <Image className="rounded-t-lg" source={{ uri: `https://image.tmdb.org/t/p/original${item?.poster_path}` }} style={{ width: width * 0.44, height: height * 0.38 }} />
                    <Text className="text-white font-pmedium mt-2 p-2">{title}</Text>
                    {/* <Text className="text-white font-pthin p-2">{type}</Text> */}
                </View>
            </TouchableWithoutFeedback>
        );
    };
    return (
        <View className="bg-[#12151c] flex-1">

            <SafeAreaView className="mb-3">
                <StatusBar style='light' />

                <View className="flex mt-2 flex-row justify-between items-center border border-gray-500 p-3 mx-4 rounded-lg mb-3">
                    <TextInput className="flex-1 text-white text-base font-psemibold" value={query} placeholder="Enter the search" placeholderTextColor={'lightgray'} onChangeText={handleInputChange} onSubmitEditing={handleSearch} />

                    <TouchableOpacity onPress={() => router.push("/home")}>
                        <Text className="text-xl text-white">X</Text>
                    </TouchableOpacity>

                </View>

                <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 15 }}>
                    <View className="flex justify-center items-center">
                        {/* <Text className=" px-4 mb-3 text-2xl text-center text-orange-300 font-bold">Movies</Text> */}

                        <FlatList
                            data={data}
                            numColumns={2}
                            renderItem={({ item }) => <MovieCard item={item} />}
                        />
                    </View>
                </ScrollView>

            </SafeAreaView>

        </View>

    )
}

export default Searchindex