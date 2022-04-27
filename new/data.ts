export const animations = {
    'initial-header': {
        properties: {
            top: {
                values: [0, 100],
                type: 'px',
            },
            opacity: {
                values: [0, 1],
                type: ''
            }
        },
        element: document.querySelector('header'),
        duration: 1,
        frame: 0,
        ease: 'easeInOutCubic',
    },
};
