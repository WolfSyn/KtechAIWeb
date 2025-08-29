import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: { extend: {} },
    plugins: [],
  };
  
