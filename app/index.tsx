import BreakingNews from '@/components/BreakingNews';
import SearchInput from '@/components/SearchInput';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from '../constants/data';
import Categories from '@/components/Categories';

// TODO: Create a constants/data file and put in the results from the api call so as to not use all the free tokens/requests.
// TODO: Then pass the constant data into the breaking news component

export default function Index() {
  const [news, setNews] = useState([]);

  const fakeNews = data.results;
  const breakingNewsArticles = data.results.slice(0, 3);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&q=pizza`
      );
      const res = await response.json();
      setNews(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <SafeAreaView className='h-full px-4 bg-primary'>
      <ScrollView>
        <View className='items-center justify-center'>
          <SearchInput />
        </View>
        <Text className='text-xl text-text_primary'>Breaking News</Text>
        <BreakingNews news={breakingNewsArticles} />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
