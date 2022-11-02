import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrCinema: []
}

const CinemaReducer = createSlice({
  name: "CinemaReducer",
  initialState,
  reducers: {
    getListCinemaAction: (state,action) => {
        state.arrCinema=action.payload
      },
  }
});

export const {getListCinemaAction} = CinemaReducer.actions

export default CinemaReducer.reducer

//=================== asyn action ===================
export const getCinemaApi = () => {
    return async dispatch => {
      let result = await http.get("QuanLyRap/LayThongTinLichChieuHeThongRap");
      //let result = await managerMovieService.layDanhSachBanner();
      const action =getListCinemaAction(result.data.content);
      dispatch(action);
    }
  } 