/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#dd8036",
        backgroundColor: "#36ae9a",
      },
    },
    // screens:{
    //   sm :"576px",
    //   md :"768px",
    //   lg :"992px",
    //   xl :"1200px",
    //   xxl :"1400px"
    // }
  },
  
  plugins: [
    
  ],
};
