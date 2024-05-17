import BreakingNews from '@/components/BreakingNews';
import CategoryList from '@/components/CategoryList';
import NewsList from '@/components/NewsList';
import SearchInput from '@/components/SearchInput';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [latestNews, setLatestNews] = useState([]);
  const [news, setNews] = useState([]);
  const [categorySelected, setCategorySelected] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestNews();
  }, []);

  useEffect(() => {
    fetchNewsByCategory();
  }, [categorySelected]);

  const fetchLatestNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en`
      );
      const res = await response.json();
      setLatestNews(res.results);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNewsByCategory = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&category=${categorySelected}`
      );
      const res = await response.json();
      setNews(res.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className='h-full px-4 bg-primary'>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          <View className='items-center justify-center'>
            <SearchInput />
          </View>
          <Text className='text-xl text-text_primary'>Breaking News</Text>
          <BreakingNews news={latestNews.slice(0, 3)} />
          <CategoryList
            setCategorySelected={setCategorySelected}
            categorySelected={categorySelected}
          />
          {categorySelected === 'All' || categorySelected === '' ? (
            <NewsList newsArticles={latestNews.slice(4)} />
          ) : (
            <NewsList newsArticles={news} />
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
