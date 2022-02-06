import React from 'react'
import { useState } from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';
import { assets } from '../../constants/assetsArray'

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleInput = (event, newInputValue) => {
    setSearchValue(newInputValue)
  }

  const handleSelection = (event, newSelection) => {
    setSelectedValue(newSelection.symbol);
  }

  return (
    <Autocomplete
      id="search-bar"
      sx={{ width: 600, margin: 10 }}  // may need to revise styles once page component is made
      options={assets}
      getOptionLabel={(option) => `${option.long_name} (${option.symbol})`}
      noOptionsText={"No Results, try Netflix, Bitcoin, AMZN ..."}
      disableClearable={true}

      renderInput={(params) => <TextField {...params} label="Search" />}

      value={selectedValue.symbol}
      onChange={handleSelection}
      inputValue={searchValue}
      onInputChange={handleInput}
    />
  );
}