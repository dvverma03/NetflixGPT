import { createSlice } from "@reduxjs/toolkit"


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        popularPlaying:null,
        upcomingPlaying:null
    },
    reducers:{
        addNowPlayings:(state, action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularPlayings:(state, action)=>{
            state.popularPlaying= action.payload;
        },
        addUpcoming:(state, action)=>{
            state.upcomingPlaying= action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },    
    },
});
export const  {addNowPlayings, addTrailerVideo, addPopularPlayings, addUpcoming} = movieSlice.actions;
export default movieSlice.reducer;