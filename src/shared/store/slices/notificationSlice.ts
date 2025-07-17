import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Notification = {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
};

type NotificationsState = {
  queue: Notification[];
};

const initialState: NotificationsState = {
  queue: [],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.queue.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.queue = state.queue.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
