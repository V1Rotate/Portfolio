import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: [
    { name: 'Welcome', key: 'welcome' },
    { name: 'About Me', key: 'about' },
    { name: 'Projects', key: 'projects' },
    { name: 'Contacts', key: 'contacts' },
  ],
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {},
});

export const selectSections = (state) => state.section.sections;

export default sectionSlice.reducer;
