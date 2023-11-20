import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function UserMenu({name}) {
    const [selectedValue, setSelectedValue] = useState('');
    
    const handleChange = (event) => {
        console.log("qqqqqqq");
        setSelectedValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }} я>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                value= {selectedValue}
            >
                <MenuItem 
                    value='' 
                    onClick={()=>{
                        console.log('Профиль')}
                    }>
                    Профиль
                </MenuItem>
                <MenuItem 
                    value='' 
                    onClick={()=>{
                        console.log('История заказов')}
                    }>
                    История заказов
                </MenuItem>
                <MenuItem 
                    value='' 
                    onClick={()=>{
                        console.log('Выйти')}
                    }>
                    Выйти
                </MenuItem>
            </Select>
          </FormControl>
        </Box>
    );
}

export default UserMenu