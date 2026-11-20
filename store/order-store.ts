
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  deliveryArea: string;
  paymentMethod: string;
  items: OrderItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  status: string;
  createdAt: string;
}

interface OrderStore {
  orders: Order[];
  addOrder: (order: Order) => void;
  getOrder: (id: string) => Order | undefined;
  clearOrders: () => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],

      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),

      getOrder: (id) =>
        get().orders.find((order) => order.id === id),

      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: "panpie-orders",
    }
  )
);
