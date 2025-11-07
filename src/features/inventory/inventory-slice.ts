import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/redux/store';
import { inventoryData as mockInventoryData } from '@/lib/data';
import axios from '@/lib/axios'; // Using the configured instance, though not for a real API call here

// Define a type for the slice state
interface InventoryItem {
  id: number;
  name: string;
  category: string;
  stock: number;
  unit: string;
  lowStockThreshold: number;
}

interface InventoryState {
  items: InventoryItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial state
const initialState: InventoryState = {
  items: [],
  status: 'idle',
  error: null,
};

// Create the async thunk for fetching inventory
export const fetchInventory = createAsyncThunk('inventory/fetchInventory', async () => {
  // We'll mock the API call with a delay to simulate a network request
  // In a real app, you would do: const response = await axios.get('/inventory');
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockInventoryData as InventoryItem[];
});

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    // We could add reducers for adding/updating items here
    addItem: (state, action: PayloadAction<InventoryItem>) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch inventory';
      });
  },
});

// Export actions
export const { addItem } = inventorySlice.actions;

// Create selectors
export const selectInventoryItems = (state: RootState) => state.inventory.items;
export const selectInventoryStatus = (state: RootState) => state.inventory.status;

// Export the reducer
export default inventorySlice.reducer;
