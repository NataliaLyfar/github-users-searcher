import { FavoriteList } from 'components/FavoriteList';
import { SearchBar } from 'components/SearchBar';
import { UsersList } from 'components/UsersList';

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <UsersList />
      <FavoriteList />
    </>
  );
};

export default HomePage;
