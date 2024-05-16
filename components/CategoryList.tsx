import { categories } from '@/constants/data';
import { FlatList } from 'react-native';
import Category from './Category';

const CategoryList = ({ setCategorySelected, categorySelected }) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <Category
          item={item}
          setCategorySelected={setCategorySelected}
          categorySelected={categorySelected}
        />
      )}
      horizontal
    />
  );
};

export default CategoryList;
