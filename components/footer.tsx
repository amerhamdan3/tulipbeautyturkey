import Script from 'next/script';
export default function About(props: any) {
    return (
        <>
<footer>
  <div className="footer-area">
    <div className="footer-top pt-55">
      <div className="container">
        <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div
              className="footer-widget footer-col-2 mb-70 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <span className="footer-title">خدماتنا</span>
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="#">تكبير الثدي بالسيليكون</a>
                  </li>
                  <li>
                    <a href="#">عملية شفط الدهون</a>
                  </li>
                  <li>
                    <a href="#">تجميل الانف</a>
                  </li>
                  <li>
                    <a href="#">زراعة الشعر</a>
                  </li>
                  <li>
                    <a href="#">إعادة بناء الثدي</a>
                  </li>
                  <li>
                    <a href="#">عملية شد الوجه</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div
              className="footer-widget footer-col-1 mb-70 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="footer-logo">
                <a href="index.html">
                  <img height={150} src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
              <div className="footer-content">
                <div className="footer-info">
                  <p>
                  تقديم أعلى مستوى من الخدمة والرعاية لعملائنا، مع التركيز على تحقيق نتائج طبيعية وجميلة تعكس أفضل إصدار لكل فرد. نحن نؤمن بأهمية الثقة بالنفس والتوازن الجمالي، ونسعى جاهدين لتلبية توقعات عملائنا وتحقيق أحلامهم من خلال أحدث التقنيات والممارسات الطبية.
                  <i className="fa-facebook-f" />
                  </p>
                  <div className="footer-social" dir='rtl'>
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
                      <i className="fa-brands fa-wordpress" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="col-xl-6 col-lg-5 col-md-8">
            <div
              className="footer-widget footer-col-3 mb-70 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              <span className="footer-title">أهم الاقسام</span>
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="team.html">Doctor</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-newsletter">
                <span className="footer-title pt-65">الخدمة البريدية</span>
                <div className="footer-newsletter-wrap">
                  <form action="#">
                    <div className="footer-newsletter-wrapper">
                      <div className="footer-input">
                        <input type="email" placeholder="Email Address" />
                      </div>
                      <div className="footer-newsletter-submit">
                        <button>
                          <span>
                            <svg
                              width={29}
                              height={29}
                              viewBox="0 0 29 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.00156 19.2225C0.771562 19.2225 0.541562 19.1345 0.365562 18.9585C0.0135625 18.6075 0.0135625 18.0375 0.365562 17.6865L3.22756 14.8245C3.57956 14.4725 4.14856 14.4725 4.49956 14.8245C4.85156 15.1755 4.85156 15.7455 4.49956 16.0965L1.63756 18.9585C1.46256 19.1345 1.23256 19.2225 1.00156 19.2225Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.31797 26.5824C3.08797 26.5824 2.85797 26.4944 2.68197 26.3184C2.32997 25.9674 2.32997 25.3974 2.68197 25.0464L8.06597 19.6624C8.41797 19.3104 8.98697 19.3104 9.33797 19.6624C9.68997 20.0134 9.68997 20.5834 9.33797 20.9344L3.95397 26.3194C3.77797 26.4954 3.54797 26.5824 3.31797 26.5824Z"
                                fill="currentColor"
                              />
                              <path
                                d="M10.6793 28.9003C10.4493 28.9003 10.2193 28.8123 10.0433 28.6363C9.6913 28.2853 9.6913 27.7153 10.0433 27.3643L12.9053 24.5023C13.2573 24.1503 13.8263 24.1503 14.1773 24.5023C14.5293 24.8533 14.5293 25.4233 14.1773 25.7743L11.3153 28.6363C11.1403 28.8123 10.9103 28.9003 10.6793 28.9003Z"
                                fill="currentColor"
                              />
                              <path
                                d="M26.4741 0.0842309L2.97013 7.09423C1.19513 7.62323 1.07113 10.0892 2.78313 10.7942L12.8751 14.9532C12.9191 14.8462 12.9831 14.7462 13.0701 14.6602L18.2311 9.49923C18.5831 9.14723 19.1521 9.14723 19.5031 9.49923C19.8551 9.85023 19.8551 10.4202 19.5031 10.7712L14.3421 15.9322C14.2551 16.0192 14.1551 16.0842 14.0481 16.1282L18.2091 26.2252C18.9131 27.9342 21.3751 27.8102 21.9031 26.0382L28.9151 2.52523C29.3611 1.03123 27.9691 -0.360769 26.4741 0.0842309Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <div className="footer-bottom footer-bottom-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="footer-copyright text-center">
              <span>
                Copyright © 2023-24  | Designed by Oztuna Media
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    {/* <Script src="/js/vendor/jquery.js"/> */}
    <Script strategy='beforeInteractive' src="/js/vendor/jquery.js"/>
    <Script src="/js/vendor/waypoints.js"/>
    <Script src="/js/bootstrap-bundle.js"/>
    <Script src="/js/meanmenu.js"/>
    <Script src="/js/swiper-bundle.js"/>
    <Script src="/js/slick.js"/>
    <Script src="/js/nouislider.js"/>
    <Script src="/js/magnific-popup.js"/>
    <Script src="/js/parallax.js"/>
    <Script src="/js/nice-select.js"/>
    <Script src="/js/wow.js"/>
    <Script src="/js/isotope-pkgd.js"/>
    <Script src="/js/imagesloaded-pkgd.js"/>
    <Script src="/js/jquery.appear.js"/>
    <Script src="/js/odometer.min.js"/>
    
  
    <Script src="/js/pignose.calendar.full.min.js"/>
    <Script src="/js/ajax-form.js"/>
    <Script src="/js/splide.js"/>
    <Script src="https://unpkg.com/default-passive-events"></Script>

    <Script strategy="lazyOnload"  onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } src="/js/main.js"/>
    
    
    </>
    )
}