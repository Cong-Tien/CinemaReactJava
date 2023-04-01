import { AudioOutlined, CalendarOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Space, Table } from 'antd'
import React, { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../..'
import { getSystemCinemaApi } from '../../../redux/reducers/CinemaReducer'
import { getMovieApi, xoaPhimApi } from '../../../redux/reducers/MovieReducer'
import { HOST_BE } from '../../../util/config'


const { Search } = Input
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
)

export default function SystemCinemaManager() {
    const onChange = (e) => {
        if(searchRef.current){
            clearTimeout(searchRef.current);
        }
        searchRef.current = setTimeout(() => {
            dispatch(getMovieApi(e.target.value))
        },300)  
    }

    const searchRef = useRef(null);
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maHtr',
            value: (text,object) => {return <span>{text}</span>},
            sorter: (a, b) => a.maHtr - b.maHtr,
            sortDirections: ['descend', 'ascend'],
            sortOrder:'descend',
            width: '10%',
            className:"text-center"
        },
        {
            title: 'Logo',
            dataIndex: 'poster',
            render: (text,system) => {
                return <Fragment>
                    <img src={system.logo?.substring(0,4) != "http" ? `${HOST_BE}/${system?.logo}`: system.logo} width={100} height={150} onError={(e) => {
                        e.target.onError = null; e.target.src='https://img.meta.com.vn/Data/image/2021/08/02/anh-xin-loi-6.jpg'
                    }}/>
                    
                </Fragment>
            },
            //sorter: (a, b) => a.age - b.age,
            width:"15%"
        },
        {
            title: 'Tên Hệ thống Rạp',
            dataIndex: 'tenHtr',
            sorter: (a, b) => {
                let tenPhimA = a.tenHtr.toLowerCase().trim();
                let tenPhimB = b.tenHtr.toLowerCase().trim();
                if(tenPhimA > tenPhimB){
                    return 1
                }
                return -1
            },
            width: '10%',
            sortDirections: ['descend','ascend']
        },
        {
            title: 'Hot call',
            dataIndex: 'hotCall',
            render: (text,movie) => {
                return <Fragment>
                    {/* <iframe style={{width:100,height:100}} src={movie.trailer}></iframe> */}
                    <p>{movie.hotCall}</p>
                </Fragment>
            },
            width: '15%',
        },
        {
            title: 'Khu vực',
            dataIndex: 'khuVuc',
            sorter: (a, b) => {
                let moTaA = a.khuVuc.toLowerCase().trim();
                let moTaB = b.khuVuc.toLowerCase().trim();
                if(moTaA > moTaB){
                    return 1
                }
                return -1
                
            },
            sortDirections: ['descend','ascend'],
            width: '20%',
        },
        
        {
            title: 'Tác vụ',
            dataIndex: 'maPhim',
            render: (text,movie) => { return <Fragment>
                <NavLink key={1} className=' mr-3 text-2xl' to={`/admin/movies/edit/${movie.id}`}><EditOutlined className='text-blue-400'/></NavLink>
                <span style={{cursor:"pointer"}} key={2} className=' text-2xl mr-3' onClick={() => {
                    if(window.confirm('Bạn có chắc muôn xóa phim ' + movie.tenPhim + " ?")){
                        dispatch(xoaPhimApi(movie.id))
                    }
                }}><DeleteOutlined style={{color:"red"}} className='text-red-500'/></span>
                <NavLink key={3} className='text-2xl text-green-400' to={`/admin/showtime/${movie.id}/${movie.tenPhim}`} onClick={() => {
                    localStorage.setItem('movieParams',JSON.stringify(movie))
                }}><CalendarOutlined /></NavLink>
            </Fragment>},
            width: '20%',
        },
    ]
    useEffect(() => {
        dispatch(getSystemCinemaApi())
    }, [])
    const { arrSystem } = useSelector((state) => state.CinemaReducer)
    console.log('arrSystem', arrSystem)
    const data = arrSystem;

    const onSearch = value => {
        dispatch(getMovieApi(value))
    }
    return (
        <div>
            <h3 className="text-4xl">Quản lý Hệ thống Rạp</h3>
            <Button className="mb-5 block" onClick={() => {
                history.push('/admin/movies/addmovie')
            }}>Thêm Hệ thống Rạp</Button>
            <Search
                className="mb-5"
                placeholder="input search text"
                //enterButton=<SearchOutlined />
                size="large"
                suffix={suffix}
                onChange={onChange}
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey="maHtr"/>
        </div>
    )
}
