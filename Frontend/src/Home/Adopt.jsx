import React from 'react'
import { useNavigate } from 'react-router'

const Adopt = () => {
    const navigate = useNavigate

    return (
        <>
        <div className="w-64 h-screen bg-amber-800 text-white flex flex-col p-4">
            <h2 className="text-xl font-bold mb-6">Dashboard</h2>
            <button onClick={() => navigate("/adopt")} className="mb-4 text-left hover:text-black hover:cursor-pointer">
                All Listings
            </button>
            <button  className="mb-4 text-left hover:text-black hover:cursor-pointer">
                Your Listings
            </button>
            <button onClick={() => navigate("/queries")} className="mb-4 text-left hover:text-black hover:cursor-pointer">
                Queries
            </button>
        </div>
        </>
    )
}

export default Adopt