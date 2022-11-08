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
      getAllCinemaAction: (state,action) => {
        state.arrCinema=action.payload
      },
  }
});

export const {getListCinemaAction,getAllCinemaAction} = CinemaReducer.actions

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

export const getAllCinemaApi = () => {
      const result = http.get("QuanLyRap/LayThongTinHeThongRap");
      return result
      //let result = await managerMovieService.layDanhSachBanner();
}
export const getThongTinCumRap = (maHTR) => {
  return  http.get("QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=" + maHTR);
} 

export const taoLichChieu = (thongTinLichChieu) => {
     return http.post("QuanLyDatVe/TaoLichChieu",thongTinLichChieu);
  }