import React, { useState } from 'react';
import styles from './TheHeader.module.css';

const NavLinks = [
  {path:"/" ,name:"Home"},
  {path:"/contact-us" ,name:"ContactUs"},
  {path:"/login" ,name:"Login"},
  {path:"/products" ,name:"Products"},
  {path:"/register" ,name:"Register"},
];


function TheHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'AR' : 'EN'));
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>RADIANCE</div>
        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          ☰
        </button>
        <nav className={styles.nav}>
          <a href="index.html" className={styles.navText} data-en="HOME" data-ar="الرئيسية">
            HOME
          </a>
          <a href="Products.html" className={styles.navText} data-en="PRODUCTS" data-ar="المنتجات">
            PRODUCTS
          </a>
          <a href="#about" className={styles.navText} data-en="ABOUT" data-ar="من نحن">
            ABOUT
          </a>
          <a href="#contact" className={styles.navText} data-en="CONTACT" data-ar="اتصل بنا">
            CONTACT
          </a>
          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search products..."
              data-placeholder-en="Search products..."
              data-placeholder-ar="ابحث عن المنتجات..."
            />
            <button className={styles.searchBtn}>🔍</button>
          </div>
          <button className={styles.langToggle} onClick={toggleLanguage}>
            {language} | {language === 'EN' ? 'AR' : 'EN'}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className={styles.mobileNav} id="mobileNav">
            <a href="#home" className={styles.navText} data-en="HOME" data-ar="الرئيسية" onClick={toggleMobileMenu}>
              HOME
            </a>
            <a href="#products" className={styles.navText} data-en="PRODUCTS" data-ar="المنتجات" onClick={toggleMobileMenu}>
              PRODUCTS
            </a>
            <a href="#about" className={styles.navText} data-en="ABOUT" data-ar="من نحن" onClick={toggleMobileMenu}>
              ABOUT
            </a>
            <a href="#contact" className={styles.navText} data-en="CONTACT" data-ar="اتصل بنا" onClick={toggleMobileMenu}>
              CONTACT
            </a>
            <div className={styles.searchBox} style={{ width: '100%' }}>
              <input
                type="text"
                className={`${styles.searchInput} ${styles.mobileSearch}`}
                placeholder="Search products..."
                data-placeholder-en="Search products..."
                data-placeholder-ar="ابحث عن المنتجات..."
                style={{ width: '100%' }}
              />
              <button className={styles.searchBtn}>🔍</button>
            </div>
            <button className={styles.langToggle} onClick={toggleLanguage}>
              {language} | {language === 'EN' ? 'AR' : 'EN'}
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default TheHeader;
