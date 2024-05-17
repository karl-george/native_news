import { FlatList, ScrollView } from 'react-native';
import NewsCardSmall from './NewsCardSmall';

const NewsList = ({ newsArticles }) => {
  return (
    <FlatList
      data={newsArticles}
      keyExtractor={(item) => item.article_id}
      renderItem={({ item }) => <NewsCardSmall newsArticle={item} />}
      scrollEnabled={false}
    />
  );
};

export default NewsList;
