import Link from "next/link";

export default function About(props: any) {
    return (
    <>
    <div id="loading">
         <div id="loading-center">
            <div id="loading-center-absolute">
               <div className="object" id="object_one"></div>
               <div className="object" id="object_two" style={{ color: 'red' }}></div>
               <div className="object" id="object_three" style={{left:"40px"}}></div>
               <div className="object" id="object_four" style={{left:'60px'}}></div>
               <div className="object" id="object_five" style={{ color: 'red' }}></div>
            </div>
         </div>
      </div>

      <div className="back-to-top-wrapper">
         <button id="back_to_top" type="button" className="back-to-top-btn">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>               
         </button>
      </div>
    
    

    <header>
         <div className="header__area header-1 theme-bg tp-header-height">
            <div className="header__bottom-wrap theme-bg" id="header-sticky">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-4 col-6">
                        <div className="logo">
                           <Link href="/">
                              <img height={70} src="/assets/img/logo/logo-white.png" alt="logo"/>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                        <div className="main-menu  menu-position">
                           <nav id="mobile-menu" className="tp-main-menu-content">
                              <ul>{/*className="has-dropdown"*/}
                                 <li >
                                    <Link href="/" >الرئيسية</Link>

                                    
                                 </li>
                                 <li>
                                 <Link href="/about" > من نحن </Link>
                                   
                                 </li>
                                 <li className="has-dropdown">
                                    <a href="#">العمليات</a>
                                    <ul className="tp-submenu">
                                       <li><Link href="/oppretions/1">شفط الدهون</Link></li>
                                       <li><Link href="/oppretions/2">عملية شد الزراعين</Link></li>
                                       <li><Link href="/oppretions/3">عملية تكبير الثدي بالسيليكون</Link></li>
                                       <li><Link href="/oppretions/4">جراحة تجميل الأنف</Link></li>
                                       <li><Link href="/oppretions/5">التثدي عند الرجال</Link></li>
                                       {/* <li><Link href="/oppretions/6">جراحة تجميل الأنف</Link></li> */}
                                       <li><Link href="/oppretions/7">عملية جراحة الوجه</Link></li>
                                       <li><Link href="/oppretions/8">عملية رفع الجفن</Link></li>
                                       <li><Link href="/oppretions/9">تكبير الأرداف</Link></li>
                                       <li><Link href="/oppretions/10">شد البطن</Link></li>
                                       <li><Link href="/oppretions/11">زراعة الشعر</Link></li>
                                       <li><Link href="/oppretions/12">بناء الثدي</Link></li>
                                      
                                    </ul>
                                 </li>
                                 {/* <li className="has-dropdown">
                                    <a href="shop.html">Shop</a>
                                    <ul className="tp-submenu">
                                       <li><a href="shop.html">Shop</a></li>
                                       <li><a href="shop-details.html">Shop Details</a></li>
                                       <li><a href="cart.html">Cart</a></li>
                                       <li><a href="checkout.html">Checkout</a></li>
                                       <li><a href="wishlist.html">Wishlist</a></li>
                                       <li><a href="order.html">Order</a></li>
                                       <li><a href="login.html">Log In</a></li>
                                       <li><a href="register.html">Register</a></li>
                                       <li><a href="forgot.html">Reset Password</a></li>
                                    </ul>
                                 </li> */}
                                 <li>
                                    <Link href="/contact">تواصل معنا</Link>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-8 col-6">
                        <div className="header__bottom-right d-flex justify-content-end align-items-center">
                           <div className="d-none d-md-block">
                              <div className="header__right d-flex justify-content-end align-items-center">
                                 <div className="header__search tp-search-toggle">
                                    <i>
                                       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M21 21L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                       </svg>
                                    </i>
                                 </div>
                                 <div className="header__phone">
                                    <a href="tel:0123456789">
                                       <i>
                                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                                             <path d="M17.5 8C17.5 7.4 17.03 6.48 16.33 5.73C15.69 5.04 14.84 4.5 14 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                             <path d="M21 8C21 4.13 17.87 1 14 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                       </i>
                                    </a>
                                 </div>
                                 <div className="header__contact">
                                    <span>Call Us Now</span>
                                    <a href="tel:0123456789">(839) 367 025</a>
                                 </div>
                              </div>
                           </div>
                           <div className="offcanvas-btn d-xl-none ml-20">
                              <button className="offcanvas-open-btn"><i className="fa-solid fa-bars"></i></button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>


    {/* offcanvas area start */}
    <div className="offcanvas__area">
        <div className="offcanvas__wrapper">
        <div className="offcanvas__close">
            <button className="offcanvas__close-btn offcanvas-close-btn">
            <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                <path
                d="M1 1L11 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </button>
        </div>
        <div className="offcanvas__content">
            <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
            <div className="offcanvas__logo logo">
                <Link href="/">
                <img src="/assets/img/logo/logo.png" alt="logo" />
                </Link>
            </div>
            </div>
            <div className="tp-main-menu-mobile" />
            <div className="offcanvas__btn">
            <a href="contact.html" className="tp-btn-offcanvas">
                Getting Started <i className="fa-regular fa-chevron-right" />
            </a>
            </div>
            <div className="side-info-contact">
            <span>we are here</span>
            <p>
                1489 Langley Ave <br /> Grand Forks Afb, North.
            </p>
            </div>
            <div className="side-info-social">
            <a href="#">
                <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#">
                <i className="fa-brands fa-twitter" />
            </a>
            <a href="#">
                <i className="fa-brands fa-pinterest-p" />
            </a>
            <a href="#">
                <i className="fa-solid fa-paper-plane" />
            </a>
            </div>
        </div>
        </div>
    </div>
    <div className="body-overlay" />
    {/* offcanvas area end */}
    {/* header-search */}
    <div className="tpsearchbar tp-sidebar-area">
        <button className="tpsearchbar__close">
        <i className="fal fa-times" />
        </button>
        <div className="search-wrap text-center">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-8 col-12 pt-100 pb-100">
                <h2 className="tpsearchbar__title">What Are You Looking For?</h2>
                <div className="tpsearchbar__form">
                <form action="#">
                    <input
                    type="text"
                    name="search"
                    placeholder="Search Product..."
                    />
                    <button className="tpsearchbar__search-btn">
                    <i className="fal fa-search" />
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="search-body-overlay" />
    {/* header-search-end */}
    </>
    )
  }