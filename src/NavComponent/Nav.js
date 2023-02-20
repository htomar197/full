
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';



import "./Nav.css"


import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';


const Nav = () => {

     const item=useSelector((state)=>state.cart)




    return (
        <>
            
                <header>
                    <nav>
                        <div className='left'>
                            <div className='navlogo'>
                                <Link to={"/"}> <img src='./images/amazon_PNG25.png' /></Link>
                            </div>
                            <div className='nav_searchbaar'>
                                <input type="text" placeholder='Serach your product'></input>
                                <div className='search_icon'>
                                    <SearchIcon id="serach" />
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='nav_btn'>

                                <a ><Link to={"/login"} >signin</Link></a>

                            </div>
                           <Link to="/cart"> <div className="cart_btn">
                                <Badge color="secondary" badgeContent={item.length}>
                                    <i className="fas fa-shopping-cart" id="icon"></i>
                                </Badge>
                                <p>Cart</p>
                            </div></Link>
                            <Avatar id="avtar" />
                        </div>
                    </nav>
                </header>
            
        </>
    )
}

export default Nav;