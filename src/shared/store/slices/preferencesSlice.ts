import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PreferencesState = {
  language: string;
  currency: string;
  layout: 'cozy' | 'compact';
};

const initialState: PreferencesState = {
  language: 'en',
  currency: 'INR',
  layout: 'cozy',
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setLayout: (state, action: PayloadAction<'cozy' | 'compact'>) => {
      state.layout = action.payload;
    },
  },
});

export const { setLanguage, setCurrency, setLayout } = preferencesSlice.actions;
export default preferencesSlice.reducer;
