/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './index.css';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../footer';

const FooterForHeader = ReactDOM.createPortal(
  <div className="footerForHeader"><Footer /></div>, document.getElementById('root') as Element,
);
export default function Header() {
  const [showLanguagePanel, setShowLanguagePanel] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showMenu, setMenu] = useState<boolean>(false);
  return (
    <header className={`${showMenu ? 'act' : ''} header`}>
      <div className="insider">
        <Link to="/" className="logo">CGC</Link>
        <nav className="header_nav">
          <span><Link to="/tickets">Tickets</Link></span>
          <span><Link to="/channel">channel</Link></span>
          <span><Link to="/whats-on">whats on</Link></span>
          <span><Link to="/collection">collection</Link></span>
          <span><Link to="/store">store</Link></span>
          <span><Link to="/whats-on">shop</Link></span>
          <span><Link to="/plan-your-visit">play your visit</Link></span>
          <span><Link to="/membership">join</Link></span>
        </nav>
        <div className="rightNgv">
          <span className="changelanguage" onClick={() => { setShowLanguagePanel(!showLanguagePanel); }}>
            <LanguageIcon />
            EN
            {
              showLanguagePanel ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
          </span>

          <span onClick={() => { setShowSearch(!showSearch); }}>
            {
              showSearch ? <KeyboardArrowDownIcon /> : <SearchIcon />
            }
          </span>
          <span onClick={() => {
            setMenu(!showMenu);
            const ngvmune = document.querySelector('.footerForHeader .footer') as HTMLElement;
            if (!showMenu) {
              ngvmune.style.height = '100%';
            } else {
              ngvmune.style.height = '0';
            }
          }}
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}

          </span>
        </div>
      </div>
      {showSearch
        ? (
          <div className="searchbar">
            <input placeholder="Search" type="input" />
            <span><SearchIcon /></span>
          </div>
        ) : undefined}
      <div className={showLanguagePanel ? 'languagepanel' : 'languagepanel hiden'}>
        <ul>
          <li><a href="/">العَرَبِيَّة</a></li>
          <li><a href="/">中文</a></li>
          <li><a href="/">DEUTSCH</a></li>
          <li><a href="/">ENGLISH</a></li>
          <li><a href="/">ESPAÑOL</a></li>
          <li><a href="/">FRANÇAIS</a></li>
          <li><a href="/">ITALIANO</a></li>
          <li><a href="/">日本語</a></li>
        </ul>
      </div>
      {FooterForHeader}
    </header>
  );
}
