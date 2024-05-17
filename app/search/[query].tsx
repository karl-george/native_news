import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const query = useLocalSearchParams();

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&q=pizza`
  //     );
  //     const res = await response.json();
  //     setNews(res);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <SafeAreaView className='h-full bg-primary'>
      {/* <FlatList /> */}
    </SafeAreaView>
  );
};

export default Search;
