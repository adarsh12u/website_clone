/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
      'md': '800px',
      'semi-md':'1050px',
      'lg': '1200px',
      'xl': '1376px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'gray_color':'#9e938f',
        'button_color': '#ff7849',
        'red_color':'#fc5411',
        'blue_color':'#4b50a8',
        'sky_color':'#48ddea',
        'front_color':'#0c4a6e',
        'footer_color':' #1e3a8a',
        'light_gray' : '#f1f5f9',
        'gray_for_text':'#6b7280'
      },
      height: {
         'video':'40rem',
         'header':'10vh'
      },
      width: {
        'w-20%':'20%',
        'w-35%':'35%',
        'w-60%':'60%',
        'w-80%':'80%',
        'w-50%':'50%',
        'w-100%':'100%',
        'w-70vw':'70vw',
        'width_card':'14rem',
        'width_underline' : '2.5rem',
        'video':'40rem',
        '30rem': '30rem',
      },
      spacing: {
         'footer-content':'8rem',
         'small-screen':'5rem',
         'tab-screen':'8rem',
         'screen-content':'15rem',
         'heading-spacing':'5.5rem',
         'all-projects-spacing':'12rem',
         'header':'10vh' 
      }
    },
  },
  plugins: [],
}