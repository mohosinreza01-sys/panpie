
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];

  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string, size: string, color: string) => void;
  updateQuantity: (
    id: string,
    size: string,
    color: string,
    quantity: number
  ) => void;
  clearCart: () => void;

  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        set((state) => {
          const existing = state.items.find(
            (item) =>
              item.id === product.id &&
              item.size === product.size &&
              item.color === product.color
          );

          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === product.id &&
                item.size === product.size &&
                item.color === product.color
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        });
      },

      removeFromCart: (id, size, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.id === id &&
                item.size === size &&
                item.color === color
              )
          ),
        }));
      },

      updateQuantity: (id, size, color, quantity) => {
        if (quantity < 1) return;

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id &&
            item.size === size &&
            item.color === color
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "avrone-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
