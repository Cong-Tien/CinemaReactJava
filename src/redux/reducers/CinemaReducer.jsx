import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrCinema: [],
    arrSystem:[],
    arrFullCinema:[]
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
      getListSystemAction: (state,action) => {
        state.arrSystem=action.payload
      },
      getFullCinemaAction: (state,action) => {
        state.arrFullCinema=action.payload
      }
  }
});

export const {getListCinemaAction,getAllCinemaAction,getListSystemAction,getFullCinemaAction} = CinemaReducer.actions

export default CinemaReducer.reducer

//=================== asyn action ===================
export const getCinemaApi = () => {
    return async dispatch => {
      let result = await http.get("/system/systemShowtime");
      //let result = await managerMovieService.layDanhSachBanner();
      const action =getListCinemaAction(result.data.data);
      dispatch(action);
    }
}
export const getSystemCinemaApi = () => {
  return async dispatch => {
    let result = await http.get("/system");
    //let result = await managerMovieService.layDanhSachBanner();
    const action =getListSystemAction(result.data.data);
    console.log(result.data);
    dispatch(action);
  }
}
export const getFullCinemaApi = () => {
  return async dispatch => {
    let result = await http.get(`http://localhost:8080/lecongtien/api/cinema`);
    //let result = await managerMovieService.layDanhSachBanner();
    const action =getFullCinemaAction(result.data.data);
    console.log("==============",result.data);
    dispatch(action);
  }
}  

export const getAllCinemaApi = () => {
      const result = http.get("/system");
      return result
      
      //let result = await managerMovieService.layDanhSachBanner();
}
export const getThongTinCumRap = (maHTR) => {
  return  http.post("/cinema?maHTR=" + maHTR);
} 
export const getThongTinPhong = (maCumRap) => {
  return  http.get("/room?maCumRap=" + maCumRap);
} 

export const taoLichChieu = (thongTinLichChieu) => {
     return http.post("/showtime",thongTinLichChieu);
  }