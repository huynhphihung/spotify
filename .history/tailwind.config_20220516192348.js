module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            height: {
                'screen-navbar-player': cancelIdleCallback(100vh)
            }
        },
    },
    plugins: [],
};
