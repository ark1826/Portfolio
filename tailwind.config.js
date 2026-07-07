export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
            },
            boxShadow: {
                glow: '0 25px 80px rgba(56, 189, 248, 0.12)',
            },
            backgroundImage: {
                hero: 'radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 35%), radial-gradient(circle at bottom right, rgba(168,85,247,0.14), transparent 28%)',
            },
        },
    },
    plugins: [],
};