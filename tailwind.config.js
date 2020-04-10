module.exports = {
  theme: {
    fontFamily: {
      body: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#8884ff",
        accent: "#6fd2d6",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "active"],
    boxShadow: ["responsive", "hover", "active"],
    borderColor: ["responsive", "hover", "active"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "hover", "active"],
  },
  plugins: [],
}
