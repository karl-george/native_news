import BreakingNews from '@/components/BreakingNews';
import CategoryList from '@/components/CategoryList';
import NewsList from '@/components/NewsList';
import SearchInput from '@/components/SearchInput';
import { Link } from 'expo-router';
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
        {loading ? (
          <Text>Loading...</Text>
        ) : categorySelected === 'All' || categorySelected === '' ? (
          <View>
            <Link href={`/category/top`}>
              <Text className='text-text_primary'>See More</Text>
            </Link>
            <NewsList newsArticles={latestNews.slice(4)} />
          </View>
        ) : (
          <View>
            <Link href={`/category/${categorySelected}`}>
              <Text className='text-text_primary'>See More</Text>
            </Link>
            <NewsList newsArticles={news} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
