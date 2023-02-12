import { useDispatch,useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
 

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
        placeholder="Enter name"
      />
    </Label>
  );
};

export default Filter;
