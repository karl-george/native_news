import NewsCardSmall from '@/components/NewsCardSmall';
import SearchInput from '@/components/SearchInput';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const { query } = useLocalSearchParams();
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&q=${query}&language=en`
      );
      const res = await response.json();
      setNews(res.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <SafeAreaView className='h-full px-4 bg-primary'>
      <View className='flex-row items-center justify-between'>
        <TouchableOpacity
          className='p-2 rounded-full bg-card'
          onPress={() => router.back()}
        >
          <Feather name='arrow-left' size={24} color='#6A717A' />
        </TouchableOpacity>
        <SearchInput />
      </View>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsCardSmall newsArticle={item} />}
      />
    </SafeAreaView>
  );
};

export default Search;
