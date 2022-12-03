/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#333C4D",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/bg.png')",
        'hero-pattern2': "url('/src/assets/images/appointment.png')",
        'contact-bg': "url('/src/assets/images/appointment.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
