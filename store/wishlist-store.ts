
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
}

interface WishlistStore {
  items: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (product: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (product) =>
        set((state) => ({
          items: state.items.some((item) => item.id === product.id)
            ? state.items
            : [...state.items, product],
        })),

      removeFromWishlist: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      toggleWishlist: (product) => {
        const exists = get().items.some(
          (item) => item.id === product.id
        );

        if (exists) {
          get().removeFromWishlist(product.id);
        } else {
          get().addToWishlist(product);
        }
      },

      isInWishlist: (id) =>
        get().items.some((item) => item.id === id),

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "panpie-wishlist",
    }
  )
);
