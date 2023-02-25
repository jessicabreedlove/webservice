const app = Vue.createApp({
    data() {
        return {
            product: 'Movies',
            image: './images/placeholder-square.jpg',
            details: ['Ideally this is dynamic from using my api'],
            movies: [
              {title: 'Title Here', year: 1999, summary: 'popularity summary', image: './images/placeholder-square.jpg' },
              {title: 'Title Here', year: 1999, summary: 'popularity summary', image: './images/placeholder-square.jpg' },
              {title: 'Title Here', year: 1999, summary: 'popularity summary', image: './images/placeholder-square.jpg' },
              {title: 'Title Here', year: 1999, summary: 'popularity summary', image: './images/placeholder-square.jpg' },
              {title: 'Title Here', year: 1999, summary: 'popularity summary', image: './images/placeholder-square.jpg' }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        }
    }
})