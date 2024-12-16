export const paths = {
    home: {
        getHref: () => '/',
    },
    movie: {
        getHref: (id: number) => `/movies/${id}`,
    },
    genre: {
        getHref: (id: number) => `/movies/genres/${id}`,
    },
    search: {
        getHref: (query: string) => `/movies/search/${query}`,
    },
    favorites: {
        getHref: () => '/movies/favorites',
    },
}