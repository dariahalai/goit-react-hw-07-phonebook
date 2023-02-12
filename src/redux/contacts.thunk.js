import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getContactsThunk = createAsyncThunk('contacts',async ()=>{
    const data = await axios.get('https:63e7a672cbdc5658737b00c0.mockapi.io/contacts')
    console.log(data)
}) 

