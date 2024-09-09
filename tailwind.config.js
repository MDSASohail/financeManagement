/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        voilet100:"#7F3DFF",
        voilet80:"#8F57FF",
        voilet60:"#B18AFF",
        voilet40:"#D3BDFF",
        voilet20:"#EEE5FF",
        red100:"#FD3C4A",
        red80:"#FD5662",
        red60:"#FD6F7A",
        red40:"#FDA2A9",
        red20:"#FDD5D7",
        blue100:"#0077FF",
        blue80:"#248AFF",
        blue60:"#57A5FF",
        blue40:"#8AC0FF",
        blue20:"#BDDCFF",
        yellow100:"#FCAC12",
        yellow80:"#FCBB3C",
        yellow60:"#FCCC6F",
        yellow40:"#FCDDA1",
        yellow20:"#FCEED4",
        green100:"#00A86B",
        green80:"#2AB784",
        green60:"#65D1AA",
        green40:"#93EACA",
        green20:"#CFFAEA",
        black100:"#0D0E0F",
        black75:"#161719",
        black50:"#464A4D",
        black25:"#7A7E80",
        light20:"#91919F"
      }
    },
  },
  plugins: [],
}