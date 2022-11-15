import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';

const params = {        
        api_key: '3102fd9d415f7daf1e30271b3b4dfac5',        
    }

export async function getMovieTrends(page, media_type = 'movie', time_window = 'week') {
    params.page = page;
        
    const response = await axios.get(`${BASE_URL}trending/${media_type}/${time_window}`, {params});
    return response;    
}

export async function getMovies(query, page) {    
    params.query = query;
    params.page = page; 
    
    const response = await axios.get(`${BASE_URL}search/movie`, {params});
    return response;    
}

export async function getMovieById(movie_id) {   
    
    const response = await axios.get(`${BASE_URL}movie/${movie_id}`, {params});
    return response;    
}

export async function getCast(movie_id) {    
    
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/credits`, {params});
    return response;    
}

export async function getReview(movie_id) {    
    
    const response = await axios.get(`${BASE_URL}movie/${movie_id}/reviews`, {params});
    return response;    
}