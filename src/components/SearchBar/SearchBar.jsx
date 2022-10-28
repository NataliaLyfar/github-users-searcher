import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from 'redux/githubUsers/searcherSelector';
import { changeSearch } from 'redux/githubUsers/searchSlice';
import { Input } from 'antd';
import styled from 'styled-components';

export const SearchBar = () => {
  const query = useSelector(getSearch);
  const dispatch = useDispatch();

  return (
    <StyledInput
      name="search"
      value={query}
      onChange={e => dispatch(changeSearch(e.target.value.trim()))}
      placeholder="input to search Github users"
    />
  );
};

const StyledInput = styled(Input)`
  max-width: 338px;
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
