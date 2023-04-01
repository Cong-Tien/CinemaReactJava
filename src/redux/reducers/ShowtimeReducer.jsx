import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrShowtime:[]
}

const ShowtimeReducer = createSlice({
  name: "ShowtimeReducer",
  initialState,
  reducers: {
    getAllShowtimeAction: (state, action) => {
        state.arrShowtime = action.payload
    }
  }
});

export const {getAllShowtimeAction} = ShowtimeReducer.actions

export default ShowtimeReducer.reducer

export const getShowtimeApi = () => {
    return async (dispatch) => {
        let result = await http.get('/showtime')
        //let result = await managerMovieService.layDanhSachBanner();
        console.log(result.data.data);
        const action = getAllShowtimeAction(result.data.data)
        dispatch(action)
    }
}