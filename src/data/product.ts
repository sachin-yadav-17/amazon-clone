import type { Product } from "../types/product";
import { nanoid } from "nanoid";
export const products: Product[] = [
  {
    id: nanoid(),
    title:
      'Redmi Watch 5 Active, 2" Display, Metal Body, 18 Day Battery, Bluetooth Calling, Advanced AI Noise Cancellation, Alexa, Matte Silver',
    price: 1999,
    outOfStock: false,
    rating: 5,
    product_img:
      "https://m.media-amazon.com/images/I/6172ejBpFfL._AC_SY200_.jpg",
  },
  {
    id: nanoid(),
    title:
      "ZEBRONICS Blanc Slim Wireless Mouse with Rechargeable Battery, BT + 2.4GHz, 4 Buttons, 800/1200/1600 DPI, Silent Operation, Multicolor LED Lights",
    price: 399,
    outOfStock: false,
    rating: 5,
    product_img:
      "https://m.media-amazon.com/images/I/51vMo-pHZ5L._AC_SY200_.jpg",
  },
  {
    id: nanoid(),
    title:
      "GOBOULT Z60 Made in India Ear Buds Wireless 60H Playtime, 4 ENC Mics Clear Calling, 50ms Low Latency Gaming, 13mm Bass Driver Earbuds Bluetooth Wireless Earphones (Powder Blue)",
    price: 799,
    outOfStock: false,
    rating: 5,
    product_img:
      "https://m.media-amazon.com/images/I/61-LZt6l8HL._AC_SY200_.jpg",
  },
  {
    id: nanoid(),
    title:
      "Sturlite Konvert Multiplug| 6-16 Amp| 2-Pin & 3-Pin Socket| Universal AC Travel Adapter| Premium Polycarbonate Body Socket| Compact Converter Plug for Travel, Home & Office Use - Pack of 1",
    price: 113,
    outOfStock: false,
    rating: 5,
    product_img:
      "https://m.media-amazon.com/images/I/61VoUTCr4iL._AC_SY200_.jpg",
  },
  {
    id: nanoid(),
    title:
      "Sony Digital Camera ZV-1F for Content Creators with Ultra-Wide 20mm Prime Lens | Soft Skin Feature | Bokeh | Creative Look | Active Mode Stabilisation -Black",
    price: 46990,
    outOfStock: false,
    rating: 5,
    product_img:
      "https://m.media-amazon.com/images/I/71UKHtv92KL._AC_SY200_.jpg",
  },
  {
    id: nanoid(),
    title:
      "GOBOULT Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen™ ENC Mic, Low Latency Gaming, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, IPX5, Ear Buds TWS (White)",
    price: 799,
    outOfStock: false,
    rating: 3,
    product_img:
      "https://m.media-amazon.com/images/I/71zv63FtPuL._AC_SY200_.jpg",
  },
];
