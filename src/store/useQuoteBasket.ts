import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface QuoteItem {
  id: string;
  name: string;
  image: string;
  category: string;
  quantity: number;
}

interface QuoteBasketStore {
  items: QuoteItem[];
  isOpen: boolean;
  addItem: (item: QuoteItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearBasket: () => void;
  totalItems: () => number;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useQuoteBasket = create<QuoteBasketStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (newItem) => {
        const items = get().items;
        const existing = items.find((item) => item.id === newItem.id);
        if (existing) {
          set({
            items: items.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            ),
          });
        } else {
          set({ items: [...items, newItem] });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((item) => item.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }),
      clearBasket: () => set({ items: [] }),
      totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      openDrawer: () => set({ isOpen: true }),
      closeDrawer: () => set({ isOpen: false }),
    }),
    {
      name: 'biotech-quote-basket',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
