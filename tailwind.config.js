export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                surface: "#121212",
                primary: "#6366f1",
                secondary: "#a855f7",
                accent: "#ec4899",
                text: {
                    DEFAULT: "#f8fafc",
                    muted: "#94a3b8"
                }
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
