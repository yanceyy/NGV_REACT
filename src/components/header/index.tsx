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

const LANGUAGE_LINKS = [
  { key: 'l1', name: 'العَرَبِيَّة' },
  { key: 'l2', name: '中文' },
  { key: 'l3', name: 'DEUTSCH' },
  { key: 'l4', name: 'ENGLISH' },
  { key: 'l5', name: 'ESPAÑOL' },
  { key: 'l6', name: 'FRANÇAIS' },
  { key: 'l7', name: 'ITALIANO' },
  { key: 'l8', name: '日本語' },
];

export default function Header() {
  const [showLanguagePanel, setShowLanguagePanel] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showMenu, setMenu] = useState<boolean>(false);
  return (
    <header className={`${showMenu ? 'act' : ''} header`}>
      <div className="insider">
        <Link to="/" className="logo" aria-label="Home Page">
          VGN
        </Link>
        <nav className="header_nav">
          <span>
            <Link to="/tickets">Tickets</Link>
          </span>
          <span>
            <Link to="/whats-on">whats on</Link>
          </span>
          <span>
            <Link to="/channel">channel</Link>
          </span>
          <span>
            <Link to="/collection">collection</Link>
          </span>
          <span>
            <Link to="/plan-your-visit">play your visit</Link>
          </span>
          <span>
            <Link to="/membership">join</Link>
          </span>
          <span>
            <Link to="/whats-on">support</Link>
          </span>
          <span>
            <Link to="/whats-on">shop</Link>
          </span>
        </nav>
        <div className="rightNgv">
          <button
            type="button"
            aria-label="Change language"
            className="changelanguage"
            title="language"
            onClick={() => {
              setShowLanguagePanel(!showLanguagePanel);
            }}
          >
            <span aria-hidden="true">
              <LanguageIcon />
              EN
              {showLanguagePanel ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </span>
          </button>

          <button
            type="button"
            aria-label="Search"
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          >
            <span aria-hidden="true">
              {showSearch ? <KeyboardArrowDownIcon /> : <SearchIcon />}
            </span>
          </button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => {
              setMenu(!showMenu);
            }}
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {showSearch ? (
        <div className="searchbar">
          <input placeholder="Search" type="input" />
          <span>
            <SearchIcon />
          </span>
        </div>
      ) : undefined}
      <div
        aria-hidden={!showLanguagePanel}
        className={showLanguagePanel ? 'languagepanel' : 'languagepanel hiden'}
      >
        <ul>
          {
            LANGUAGE_LINKS.map((item) => (
              <li key={item.key}>
                <a tabIndex={showLanguagePanel ? 0 : -1} href="/">{item.name}</a>
              </li>
            ))
           }
        </ul>
      </div>
      {showMenu
        ? ReactDOM.createPortal(
          <div className="footerForHeader">
            <Footer />
          </div>,
            document.getElementById('root') as Element,
        )
        : undefined}
    </header>
  );
}
