import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

import { Label, Input } from './Filter.styled';

const Filter = () => {

  const dispatch = useDispatch();
  const changeFilter = e => {
    const target = e.target.value;
    const normalizedFilter = target.toLowerCase().trim();
    dispatch(filterContacts(normalizedFilter));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={changeFilter}
        placeholder="Enter name"
      />
    </Label>
  );
};

export default Filter;
