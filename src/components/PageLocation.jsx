import React from 'react'
import { Link } from "react-router-dom";


const PageLocation = () => {
    const currentPage = window.location.pathname.slice(1)

    return (
        <div className="page-location">
            <div className="container">
                <div className="border-bottom py-4 mb-5">
                    <Link to='/' className="home-link fw-bold">
                        Početna
                    </Link>
                    <span className="text-capitalize">
                        {currentPage === 'nalog' ? 'moj nalog' : currentPage === 'o_nama' ? 'o nama' : currentPage}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PageLocation