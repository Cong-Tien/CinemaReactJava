import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrMovie: [
        {
            "maPhim": 6060,
            "tenPhim": "Amsterdam: Vụ Án Mạng Kỳ Bí ",
            "biDanh": "amsterdam-vu-an-mang-ky-bi",
            "trailer": "https://www.youtube.com/embed/PsytxwRTMIo",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/amsterdam-vu-an-mang-ky-bi_gp01.jpg",
            "moTa": "Bộ phim gốc này kể về ba người bạn thân vô tình trở thành nhân vật chính trong một trong những vụ án chấn động lịch sử Hoa Kỳ.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-10-30T00:00:00",
            "danhGia": 8,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          }
    ],
    dangChieu:false,
    sapChieu:false,
    arrMovieDefault: []
}

const MovieReducer = createSlice({
  name: "MovieReducer",
  initialState,
  reducers: {
    getListMovieAction: (state,action) => {
      state.arrMovie=action.payload;
      state.arrMovieDefault=action.payload;
    },
    getPhimDangChieu: (state,action) => {
      state.dangChieu = !state.dangChieu;
      if(state.dangChieu == state.sapChieu){
        state.sapChieu = !state.sapChieu;
      }
      state.arrMovie=state.arrMovieDefault.filter(movie => movie.dangChieu === state.dangChieu);
    },
    getPhimSapChieu: (state,action) => {
      state.sapChieu = !state.sapChieu;
      if(state.sapChieu == state.dangChieu){
        state.dangChieu = !state.dangChieu;
      }
      state.arrMovie=state.arrMovieDefault.filter(movie => movie.sapChieu === state.sapChieu);
    },
  }
});

export const {getListMovieAction,getPhimDangChieu,getPhimSapChieu} = MovieReducer.actions

export default MovieReducer.reducer

//=================== asyn action ===================
export const getMovieApi = () => {
  return async dispatch => {
    let result = await http.get("QuanLyPhim/LayDanhSachPhim");
    //let result = await managerMovieService.layDanhSachBanner();
    const action =getListMovieAction(result.data.content);
    dispatch(action);
  }
} 