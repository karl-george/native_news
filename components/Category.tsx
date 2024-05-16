import { Text, TouchableOpacity } from 'react-native';

interface Props {
  item: string;
  setCategorySelected: Function;
  categorySelected: string;
}

const Category = ({ item, setCategorySelected, categorySelected }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => setCategorySelected(item)}
      className={`px-4 py-2 my-5 mr-2 rounded-md ${
        categorySelected === item ? 'bg-accent' : 'bg-card'
      }`}
    >
      <Text className='capitalize text-text_primary'>{item}</Text>
    </TouchableOpacity>
  );
};

export default Category;
