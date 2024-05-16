import { News, NewsList } from '@/typings';
import { FlatList } from 'react-native';
import NewsCardLarge from './NewsCardLarge';

// TODO: Fix this type
const BreakingNews = ({ news }: NewsList) => {
  return (
    <FlatList
      data={news}
      keyExtractor={(item) => item.article_id}
      renderItem={({ item }) => <NewsCardLarge newsArticle={item} />}
      horizontal
    />
  );
};

export default BreakingNews;
