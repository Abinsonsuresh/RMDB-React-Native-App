import { View, Text, TouchableWithoutFeedback, Image, FlatList, Dimensions, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from "react";
import { APIData } from '../../../utils/apiFetch';
import { useRouter } from 'expo-router';
import useFetch from '../../../utils/useFetch';

const TVScreen = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  const { data: pdata, loading: pLoading } = useFetch(`/discover/tv`);
  useEffect(() => {
    if (!pLoading) {
      setData(pdata?.results);
    }
  }, [pLoading, pdata]);
  console.log(pdata);

  const MovieCard = ({ item }) => {
    const posterUrl = item?.poster_path ? "https://image.tmdb.org/t/p/original" + item?.poster_path : "";
    const title = item?.title?.length > 15 ? item?.title.slice(0, 15) + ".." : item?.title
const type= "tv"
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
    <View className="bg-black-100">
      <SafeAreaView className="mt-3">
        <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 15 }}>
          <View className="flex justify-center items-center">
          <Text className=" px-4 mb-3 text-2xl text-center text-orange-300 font-bold">TV Shows</Text>

            <FlatList
              data={data}
              numColumns={2}
              renderItem={({ item }) => <MovieCard item={item} />}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default TVScreen;
