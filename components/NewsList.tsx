import { FlatList, ScrollView } from 'react-native';
import NewsCardSmall from './NewsCardSmall';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewsList = ({ newsArticles }) => {
  return (
    <FlatList
      data={newsArticles}
      keyExtractor={(item) => item.article_id}
      renderItem={({ item }) => <NewsCardSmall newsArticle={item} />}
    />
  );
};

export default NewsList;
