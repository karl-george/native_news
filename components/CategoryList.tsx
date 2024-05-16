import { View, Text, FlatList } from 'react-native';
import { categories } from '@/constants/data';
import Category from './Category';

const CategoryList = () => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <Category item={item} />}
      horizontal
    />
  );
};

export default CategoryList;
