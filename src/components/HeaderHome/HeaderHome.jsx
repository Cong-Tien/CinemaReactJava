import React from 'react'
import {NavLink} from 'react-router-dom'

export default function HeaderHome() {
    return (
        <header className="p-4  bg-gray-200 bg-opacity-20 dark:text-gray-900 fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink
                    rel="noopener noreferrer"
                    to="/"
                    aria-label="Back to homepage"
                    className="flex items-center p-2"
                >
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b358cda7-9810-44f9-9bab-5fcb82773cec/ddokknb-806fad8d-dc11-4993-8ef9-e47722fa78d1.png/v1/fill/w_894,h_894,strp/fox_logo_design__no_background__by_9987neondraws_ddokknb-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwMCIsInBhdGgiOiJcL2ZcL2IzNThjZGE3LTk4MTAtNDRmOS05YmFiLTVmY2I4Mjc3M2NlY1wvZGRva2tuYi04MDZmYWQ4ZC1kYzExLTQ5OTMtOGVmOS1lNDc3MjJmYTc4ZDEucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JzP48xCSxkmMGVS3K48BV0AI6hnk_SNlCMue3oWTZ7c' style={{width:'100px',height:"70px"}}/>
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex hover:bg-pink-300 rounded-full">
                        <NavLink
                            rel="noopener noreferrer"
                            to="/home"
                            className={({isActive}) => isActive ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-pink-600 text-2xl": "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 text-pink-600 text-2xl"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            rel="noopener noreferrer"
                            to="/new"
                            className={({isActive}) => isActive ?"flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:border-violet-400":"flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"}
                        >
                            News
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            rel="noopener noreferrer"
                            to="/"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                        >
                            Link
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            rel="noopener noreferrer"
                            to="#"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                        >
                            Link
                        </NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 shadow-lg">
                        Sign up
                    </button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 dark:text-gray-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
