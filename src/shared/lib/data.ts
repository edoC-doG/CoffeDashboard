// Mock data for CafeFlow

export const inventoryData = [
  { id: 1, name: "Espresso Beans", category: "Coffee Beans", stock: 8, unit: "kg", lowStockThreshold: 10 },
  { id: 2, name: "Decaf Beans", category: "Coffee Beans", stock: 15, unit: "kg", lowStockThreshold: 5 },
  { id: 3, name: "Whole Milk", category: "Dairy", stock: 12, unit: "liters", lowStockThreshold: 10 },
  { id: 4, name: "Oat Milk", category: "Alternatives", stock: 5, unit: "liters", lowStockThreshold: 5 },
  { id: 5, name: "White Sugar", category: "Sweeteners", stock: 50, unit: "kg", lowStockThreshold: 20 },
  { id: 6, name: "12oz Cups", category: "Disposables", stock: 250, unit: "units", lowStockThreshold: 300 },
  { id: 7, name: "12oz Lids", category: "Disposables", stock: 2, unit: "units", lowStockThreshold: 300 },
  { id: 8, name: "Chocolate Syrup", category: "Syrups", stock: 20, unit: "bottles", lowStockThreshold: 5 },
];

export type OrderStatus = "New" | "In Progress" | "Completed" | "Cancelled";

export const orderData = [
  {
    id: 7891,
    customerName: "Jane Doe",
    status: "New" as OrderStatus,
    items: [{ id: 1, name: "Latte", quantity: 2, price: 8.00 }],
    total: 8.00,
  },
  {
    id: 7892,
    customerName: "John Smith",
    status: "In Progress" as OrderStatus,
    items: [{ id: 2, name: "Espresso", quantity: 1, price: 3.00 }, { id: 3, name: "Croissant", quantity: 1, price: 2.50 }],
    total: 5.50,
  },
  {
    id: 7893,
    customerName: "Emily White",
    status: "Completed" as OrderStatus,
    items: [{ id: 4, name: "Iced Coffee", quantity: 1, price: 4.50 }],
    total: 4.50,
  },
  {
    id: 7894,
    customerName: "Michael Brown",
    status: "Cancelled" as OrderStatus,
    items: [{ id: 1, name: "Latte", quantity: 1, price: 4.00 }],
    total: 4.00,
  },
   {
    id: 7895,
    customerName: "Sarah Green",
    status: "New" as OrderStatus,
    items: [{ id: 5, name: "Cappuccino", quantity: 1, price: 4.00 }],
    total: 4.00,
  },
];


export const salesData = [
    {
        id: '1',
        customerName: 'Olivia Martin',
        customerEmail: 'olivia.martin@email.com',
        date: '2023-11-20T10:00:00Z',
        total: 39.99,
        paymentMethod: 'Credit Card',
    },
    {
        id: '2',
        customerName: 'Jackson Lee',
        customerEmail: 'jackson.lee@email.com',
        date: '2023-11-20T10:05:00Z',
        total: 29.99,
        paymentMethod: 'Cash',
    },
    {
        id: '3',
        customerName: 'Isabella Nguyen',
        customerEmail: 'isabella.nguyen@email.com',
        date: '2023-11-20T10:15:00Z',
        total: 299.99,
        paymentMethod: 'Credit Card',
    },
    {
        id: '4',
        customerName: 'William Kim',
        customerEmail: 'will@email.com',
        date: '2023-11-20T11:00:00Z',
        total: 99.99,
        paymentMethod: 'Mobile Pay',
    },
    {
        id: '5',
        customerName: 'Sofia Davis',
        customerEmail: 'sofia.davis@email.com',
        date: '2023-11-20T11:20:00Z',
        total: 39.99,
        paymentMethod: 'Credit Card',
    },
];
