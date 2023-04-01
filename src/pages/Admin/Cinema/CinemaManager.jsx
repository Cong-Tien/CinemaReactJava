import { AudioOutlined, CalendarOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Space, Table } from 'antd'
import React, { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../..'
import { getFullCinemaAction, getFullCinemaApi, getSystemCinemaApi } from '../../../redux/reducers/CinemaReducer'
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

export default function CinemaManager() {
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
            title: 'Mã Rạp',
            dataIndex: 'idCinema',
            value: (text,object) => {return <span>{text}</span>},
            sorter: (a, b) => a.idCinema - b.idCinema,
            sortDirections: ['descend', 'ascend'],
            sortOrder:'descend',
            width: '10%',
            className:"text-center"
        },
        {
            title: 'Logo',
            dataIndex: 'logoCinema',
            render: (text,system) => {
                return <Fragment>
                    <img src={system.logoCinema?.substring(0,4) != "http" ? `${HOST_BE}/${system?.logoCinema}`: system.logoCinema} width={100} height={150} onError={(e) => {
                        e.target.onError = null; e.target.src='https://img.meta.com.vn/Data/image/2021/08/02/anh-xin-loi-6.jpg'
                    }}/>
                    
                </Fragment>
            },
            //sorter: (a, b) => a.age - b.age,
            width:"15%"
        },
        {
            title: 'Tên Rạp',
            dataIndex: 'nameCinema',
            sorter: (a, b) => {
                let tenPhimA = a.nameCinema.toLowerCase().trim();
                let tenPhimB = b.nameCinema.toLowerCase().trim();
                if(tenPhimA > tenPhimB){
                    return 1
                }
                return -1
            },
            width: '10%',
            sortDirections: ['descend','ascend']
        },
        {
            title: 'Googlemap link',
            dataIndex: 'mapLink',
            render: (text,movie) => {
                return <Fragment>
                    {/* <iframe style={{width:100,height:100}} src={movie.trailer}></iframe> */}
                    <p>{movie.mapLink}</p>
                </Fragment>
            },
            width: '15%',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'infor',
            sorter: (a, b) => {
                let moTaA = a.infor.toLowerCase().trim();
                let moTaB = b.infor.toLowerCase().trim();
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
        dispatch(getFullCinemaApi())
    }, [])
    const { arrFullCinema } = useSelector((state) => state.CinemaReducer)
    console.log('arrFullCinema', arrFullCinema)
    const data = arrFullCinema;

    const onSearch = value => {
        dispatch(getMovieApi(value))
    }
    return (
        <div>
            <h3 className="text-4xl">Quản lý Rạp</h3>
            <Button className="mb-5 block" onClick={() => {
                history.push('/admin/movies/addmovie')
            }}>Thêm Rạp</Button>
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
