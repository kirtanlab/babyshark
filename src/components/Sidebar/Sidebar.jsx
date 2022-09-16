import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HistoryIcon from '@mui/icons-material/History';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="sidebar-top">Canteen</div>
        <hr />
        <div className="sidebar-bottom">
            <div className="sidebar-bottom-item">
                <HomeIcon/>
                <h3>Home</h3>
            </div>
            <div className="sidebar-bottom-item">
                <BorderColorIcon/>
                <h3>Orders</h3>
            </div>
            <div className="sidebar-bottom-item">
                <HistoryIcon/>
                <h3>History</h3>
            </div>
            <div className="sidebar-bottom-item">
                <AccountBalanceWalletIcon/>
                <h3>Wallet</h3>
            </div>
        </div>
    </div>
  )
}

export default Sidebar