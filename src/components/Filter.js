import Select from 'react-select';

const options = [
  { value: '', label: 'All' },
  { value: 'unCompleted', label: 'unCompleted' },
  { value: 'completed', label: 'completed' },
];

const Filter = ({ onSelect, value }) => {

  return (
    <Select
      value={value}
      onChange={onSelect}
      options={options}
      className='filter'
    />
  );
};

export default Filter;
