import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Mohamed",
            email: 'mo.halbouni@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Ahmed',
            email: 'ahmed@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Headphones PB',
            slug: 'power-beats',
            category: 'Headphones',
            image: '/images/headphones.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Power Beats',
            rating: 4.5,
            numReviews: 5,
            description: 'Pure Adaptive Noise Canceling for active noise blocking with real-time audio calibration based on fit',
        },
        {
            name: 'Laptop Arma',
            slug: 'Arma-hurron',
            category: 'Laptop',
            image: '/images/laptop.jpg',
            price: 2700,
            countInStock: 10,
            brand: 'Arma',
            rating: 2.5,
            numReviews: 5,
            description: 'Gaming pc that will run anything for you, great quality with high end graphic cards, 2TB SSD',
        },
        {
            name: 'Headphones TB',
            slug: 'True-beats',
            category: 'Headphones',
            image: '/images/Headphones2.jpg',
            price: 120,
            countInStock: 10,
            brand: 'True Beats',
            rating: 3.5,
            numReviews: 5,
            description: 'Pure Adaptive Noise Canceling for active noise blocking with real-time audio calibration based on fit',
        },
        {
            name: 'Tablet Kiwii',
            slug: 'soadas',
            category: 'Tablets',
            image: '/images/Tablet.jpg',
            price: 1300,
            countInStock: 10,
            brand: 'Kiwii',
            rating: 4.5,
            numReviews: 5,
            description: 'very nice tablet for all purpose',
        },
    ],
};

export default data;