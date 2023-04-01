import React from 'react'
import {useFormik} from 'formik'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import LoginFacebook from '../Login/LoginFacebook';
import { registerApi } from '../../redux/reducers/UserReducer';

export default function Register() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
          name: '',
          password:'',
          email: '',
          sdt: '',
        },
        onSubmit: values => {
          const action = registerApi(values);
          dispatch(action)
        }

    });

    const {userLogin} = useSelector(state => state.UserReducer);

    return (
        <div className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="pt-5 pb-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div>
                        <img className=' w-20 h-20' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b358cda7-9810-44f9-9bab-5fcb82773cec/ddokknb-806fad8d-dc11-4993-8ef9-e47722fa78d1.png/v1/fill/w_894,h_894,strp/fox_logo_design__no_background__by_9987neondraws_ddokknb-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwMCIsInBhdGgiOiJcL2ZcL2IzNThjZGE3LTk4MTAtNDRmOS05YmFiLTVmY2I4Mjc3M2NlY1wvZGRva2tuYi04MDZmYWQ4ZC1kYzExLTQ5OTMtOGVmOS1lNDc3MjJmYTc4ZDEucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JzP48xCSxkmMGVS3K48BV0AI6hnk_SNlCMue3oWTZ7c'/>
                    </div>
                    
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-3 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
                    Register
                </h2>
                <div className="mt-12">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                               Email
                            </div>
                            <input
                                name='email' onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Nhập email nào <3"
                            />
                        </div>
                        
                        <div className='mt-8'>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                               Password
                            </div>
                            <input
                                name='password' onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Nhập mật khẩu nào <3"
                            />
                        </div>
                        <div className='mt-8'>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                               Name
                            </div>
                            <input
                                name='name' onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Nhập cách ny bạn gọi bạn đi nào <3"
                            />
                        </div>
                        <div className='mt-8'>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                               Phone
                            </div>
                            <input
                                name='sdt' onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Let type your phone.Ok <3"
                            />
                        </div>
                        <div className="mt-10">
                            <button type='submit' className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                                Đăng ký
                            </button>
                        </div>
                    </form>
                    
                    <LoginFacebook/>
                </div>
            </div>
        </div>
    )
}
