import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (
  <main>


    <section className="banner-area theme-bg-2 p-relative">
    <video autoPlay muted data-autoplay="true" data-loop="true" className='headerVideo' src="/assets/VID-20231026-WA0006.mp4"></video>
       <div className="container">
          <div className="row">
             <div className="col-lg-6">
                <div className="tpbanner">
                   <div className="tpbanner-content">
                   <p></p>
                     <br></br>
                      {/* <h2 className="tpbanner-title">عيادة التجميل</h2> */}
                      <b></b>
                      <p style={{color:'#b1aa9f'}}>نحن نفهم تمامًا أهمية الجمال والثقة بالنفس.<br/>
                         في عيادتنا، نسعى جاهدين لجعل أحلامك الجمالية حقيقة. مهمتنا هي تقديم أعلى مستويات الرعاية والجودة في مجال عمليات التجميل.</p>
                   </div>
                   {/* <ul className="tpbanner-list">
                      <li className="tpbanner-list-1"><Link href="/oppretions/1"><span>زراعة الشعر</span></Link></li>
                      <li className="tpbanner-list-2"><Link href="/oppretions/2"><span>التجميل الجراحي</span></Link></li>
                      <li className="tpbanner-list-3"><Link href="/oppretions/3"><span>عمليات الأسنان</span></Link></li>
                      <li className="tpbanner-list-4"><Link href="/oppretions/4"><span>عمليات تخفيض الوزن</span></Link></li>
                   </ul> */}
                </div>
             </div>
             <div className="col-lg-6">
                <div className="tpbanner-shape p-relative">
                   <div className="tpbanner-shape-1  d-lg-none d-xl-block">
                      {/* <img src="assets/img/banner/banner-1-img-1.png" alt=""/> */}
                   </div>
                   <div className="tpbanner-shape-2 d-none d-lg-block">
                      <img src="assets/img/banner/banner-1shape-1.svg" alt=""/>
                   </div>
                   <div className="tpbanner-shape-3">
                      <img src="assets/img/banner/banner-1shape-2.svg" alt=""/>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    
    <section className="about-area pt-130 pb-90">
       <div className="container">
          <div className="row">
             <div className="col-lg-4">
                <div className="tpsection mt-20">
                   <div className="tpsection-sub-title">
                      <span>من نحن</span>
                   </div>
                </div>
                <div className="about-thumb mt-70 wow fadeInUp mb-30"  data-wow-duration="1s" data-wow-delay=".6s">
                   <img src="assets/img/about/about-thumb-1.png" alt=""/>
                </div>
             </div>
             <div className="col-lg-8">
                <div className="about-wrapper">
                   <div className="tpsection about-left mb-45">
                      <h2 className="tpsection-title">فريق طبي متخصص 
                      <span><img  className="d-none d-md-block wow fadeInRight" src="assets/img/about/about-1-shape-1.png" alt=""  data-wow-duration="1s" data-wow-delay=".6s"/> </span>
                       </h2>
                   </div>
                   <div className="about-box">
                      <div className="row">
                         <div className="col-lg-6 col-md-6">
                            <div className="about-box-content p-relative mb-30">
                               
                               <h5 className="about-box-title">مهمتنا</h5>
                               <p>مهمتنا هي تقديم أعلى مستويات الرعاية والجودة في مجال عمليات التجميل.</p>
                               <div className="about-box-shape">
                                  <img src="assets/img/about/about-1-shape-2.png" alt=""/>
                               </div>
                            </div>
                         </div>
                         <div className="col-lg-6 col-md-6">
                            <div className="about-box-content about-box-2 p-relative mb-30">
                               
                               <h5 className="about-box-title">رؤيتنا</h5>
                               <p>توفير أحدث التقنيات والمعدات في مجال التجميل لضمان نتائج ممتازة وأمان عالي لعملائنا.</p>
                               <div className="about-box-shape">
                                  <img src="assets/img/about/about-1-shape-2.png" alt=""/>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* about-area-end */}

    {/* brand-area-start */}
    <div className="brand-area pb-140">
       <div className="container">
          <div className="row">
             <div className="col-lg-12">
                <div className="swiper-container brand-active">
                   <div className="swiper-wrapper">
                      <div className="swiper-slide">
                         <div className="brand-item">
                            <a href="#">
                               <img src="assets/img/brand/sponsor-1.svg" alt=""/>
                            </a>
                         </div>
                      </div>
                      <div className="swiper-slide">
                         <div className="brand-item">
                            <a href="#">
                               <img src="assets/img/brand/sponsor-2.svg" alt=""/>
                            </a>
                         </div>
                      </div>
                      <div className="swiper-slide">
                         <div className="brand-item">
                            <a href="#">
                               <img src="assets/img/brand/sponsor-3.svg" alt=""/>
                            </a>
                         </div>
                      </div>
                      <div className="swiper-slide">
                         <div className="brand-item">
                            <a href="#">
                               <img src="assets/img/brand/sponsor-4.svg" alt=""/>
                            </a>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    {/* brand-area-end */}

    {/* before-after-area-start */}
    <div className="before-after-area pb-135">
       <div className="container">
          <div className="row">
             <div className="col-lg-12">
                <div className="beforeAfter">
                  
                   <img loading="lazy" width={100} src="assets/img/before-after/before-after-1.jpg" alt=""/>
                   <img loading="lazy" width={100} src="assets/img/before-after/before-after-2.jpg" alt=""/>
                </div>
             </div>
          </div>
       </div>
    </div>
    {/* before-after-area-end */}

    {/* team-area-start */}
    <section className="team-area mb-120">
       <div className="container">
          <div className="row">
             <div className="col-lg-9">
                <div className="tpsection mb-65">
                   
                   <h2 className="tpsection-title">فريق طبي متخصص</h2>
                </div>
             </div>
             <div className="col-lg-3 align-self-end">
                <div className="team-arrows mb-65 d-flex align-items-center justify-content-end">
                   <div className="team-single-arrow team-button-prev">
                      <span>
                         <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_326_651)">
                            <path d="M35 13.9954H3.29442e-07" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M13.5547 0C13.5547 7.73574 7.49212 13.9953 -0.000121431 13.9953" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M-0.000121431 13.9954C7.49212 13.9954 13.5547 20.255 13.5547 27.9907" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_326_651">
                            <rect width="35" height="28" fill="white" transform="matrix(-1 0 0 1 35 0)"/>
                            </clipPath>
                            </defs>
                         </svg>
                      </span>
                   </div>
                   <div className="team-single-arrow team-button-next ml-25">
                      <span>
                         <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_326_645)">
                            <path d="M0 13.9954H35" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                            <path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_326_645">
                            <rect width="35" height="28" fill="white"/>
                            </clipPath>
                            </defs>
                         </svg>
                      </span>
                   </div>
                </div>
             </div>
          </div>
          <div className="swiper-container team-active">
             <div className="swiper-wrapper">
                <div className="swiper-slide">
                   <div className="team-item tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <div className="team-profile">
                         <img loading="lazy" src="assets/img/team/team-1.jpg" alt=""/>
                      </div>
                      <div className="team-content text-center">
                         <div className="team-author-social pt-50 pb-20">
                            <a href="#"><i className="fa-solid fa-paper-plane"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                         </div>
                         <h4 className="team-author-title under-line-white"><a href="team-details.html">Dr. Michle Jhon</a> </h4>
                         <span className="team-author-position">Plastic Surgeon</span>
                      </div>
                   </div>
                </div>
                <div className="swiper-slide">
                   <div className="team-item tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <div className="team-profile">
                         <img loading="lazy" src="assets/img/team/team-2.jpg" alt=""/>
                      </div>
                      <div className="team-content text-center">
                         <div className="team-author-social pt-50 pb-20">
                            <a href="#"><i className="fa-solid fa-paper-plane"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                         </div>
                         <h4 className="team-author-title under-line-white"> <a href="team-details.html">Dr. Farzana Leo</a> </h4>
                         <span className="team-author-position">Skin Surgeon</span>
                      </div>
                   </div>
                </div>
                <div className="swiper-slide">
                   <div className="team-item tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <div className="team-profile">
                         <img loading="lazy" src="assets/img/team/team-3.jpg" alt=""/>
                      </div>
                      <div className="team-content text-center">
                         <div className="team-author-social pt-50 pb-20">
                            <a href="#"><i className="fa-solid fa-paper-plane"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                         </div>
                         <h4 className="team-author-title under-line-white"> <a href="team-details.html">Dr. Jesif</a> </h4>
                         <span className="team-author-position">Plastic Surgeon</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* team-area-end */}

    {/* appoinment-form-area-start */}
    <section className="appoinment-form-area theme-bg-2 p-relative mb-140 pt-150 pb-140">
       <div className="container">
          <div className="row">
             <div className="col-xxl-5 col-xl-6 col-lg-5">
                <div className="tpsection mb-30">
                   {/* <div className="tpsection-sub-title">
                      <span>Get Appointment</span>
                   </div> */}
                   <h2 className="tpsection-title">تواصل معنا <br/><br/> بشكل مباشر</h2>
                </div>
             </div>
             <div className="col-xxl-7 col-xl-6 col-lg-7">
                <div className="form-wrap wow fadeInRight" data-wow-duration="1.8s" data-wow-delay=".7s">
                   <form action="https://formspree.io/f/xrgwylpl">
                      <div className="row">
                         <div className="col-lg-6">
                            <div className="appoinment-form-input mb-30">
                               <input name='name' type="text" placeholder="الاسم"/>
                            </div>
                         </div>
                         <div className="col-lg-6">
                            <div className="appoinment-form-input mb-30">
                               <input name='phone' type="text" placeholder="الهاتف"/>
                            </div>
                         </div>
                         <div className="col-lg-6">
                            <div className="appoinment-form-input mb-30">
                               <input name='email' type="email" placeholder="البريد الالكتروني"/>
                            </div>
                         </div>
                         <div className="col-lg-6">
                            <div className="appoinment-form-input mb-30">
                               <select name='surgery' className="doctor-name wide">
                                  <option disabled selected>ما هي العملية</option>
                                  <option value="Cleaning Service">زراعة شعر</option>
                                  <option value="Carpet Service">تجميل جراحي</option>
                                  <option value="Iron Service">أسنان</option>
                                  <option value="Iron Service">تخفيض الوزن</option>
                                 
                               </select>
                            </div>
                         </div>
                         {/* <div className="col-lg-6">
                            <div className="appoinment-form-input mb-30">
                               <select name='doctor' className="doctor-name wide">
                                  <option>Choose Doctor</option>
                                  <option value="Cleaning Service">Dr. Jhong</option>
                                  <option value="Iron Service">Dr. Phongsuk</option>
                                  <option value="Carpet Service">Dr. Wagdhu</option>
                               </select>
                            </div>
                         </div> */}
                         <div className="col-lg-12">
                            <div className="appoinment-form-submit mb-30">
                               <button className="tp-btn">احصل على موعد مباشرة</button>
                            </div>
                         </div>
                      </div>
                   </form>
                </div>
             </div>
          </div>
       </div>
       <div className="appoinment-shape">
          <div className="appoinment-shape-1">
             <img loading="lazy" src="assets/img/shape/form-shape-1.png" alt=""/>
          </div>
          {/* <div className="appoinment-shape-2">
             <img  loading="lazy" src="assets/img/shape/form-shape-2.png" alt=""/>
          </div> */}
       </div>
    </section>
    {/* appoinment-form-area-end */}

    {/* testimonial-area-start */}
    <section className="testimonial-area mb-60">
       <div className="container">
          <div className="row">
             <div className="col-xl-7 col-lg-6">
                <div className="testimonial-wrap p-relative mt-20 mb-60">
                   <div className="testimonial-main-bg">
                      <img loading="lazy" src="assets/img/testimonial/testimonial-1-bg-1.png" alt=""/>
                   </div>
                   <div className="testimonial-shape">
                      <div className="testimonial-shape-1 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                         <img loading="lazy" src="assets/img/testimonial/testimonial-1-bg-2.png" alt=""/>
                      </div>
                   </div>
                   <div className="happy-client">
                      <h2 className="count"><span className="odometer" data-count="26"></span>K</h2>
                      <p>زبون  <br/> سعيد</p>
                   </div>
                </div>
             </div>
             <div className="col-xl-5 col-lg-6">
                <div className="testimonial-wrapper mb-60">
                   <div className="tpsection mb-25">
                      <div className="tpsection-sub-title mb-15">
                         <span>Testimonial</span>
                      </div>
                      <h2 className="tpsection-title">ماذا قالو عننا</h2>
                   </div>
                   <div className="testimonial-box p-relative">
                      <div className="testimonial-1-thumb">
                         <div className="swiper-container swiper  test-ava-active">
                            <div className="swiper-wrapper testi-avta-bottom pt-20 pb-30">
                               <div className="swiper-slide">
                                  <div className="testimonial-author-thumb">
                                     <img src="assets/img/testimonial/testimonial-author-1.png" alt=""/>
                                  </div>
                               </div>
                               <div className="swiper-slide">
                                  <div className="testimonial-author-thumb">
                                     <img src="assets/img/testimonial/testimonial-author-2.png" alt=""/>
                                  </div>
                               </div>
                               <div className="swiper-slide">
                                  <div className="testimonial-author-thumb">
                                     <img src="assets/img/testimonial/testimonial-author-3.png" alt=""/>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="testimonial-content">
                         <div className="swiper-container swiper test-active">
                            <div className="swiper-wrapper">
                               <div className="swiper-slide">
                                  <div className="testimonial-content">
                                     <p>
                                       أنا لا أستطيع التحدث بما فيه الكفاية عن تجربتي في مركز توليب للجمال! لقد كانت تجربة مذهلة بكل المقاييس.
                                       فريق العمل محترف للغاية وودود، والخدمات التي قدموها لي كانت ممتازة.
                                       لقد شعرت بالراحة من اللحظة الأولى وتركوا بصمة إيجابية على جمالي وثقتي بنفسي.
                                       شكراً توليب لجعلكم يومي أكثر سعادة وجمالاً!
                                    ”</p>
                                     <div className="testimonial-author">
                                        <span className="testimonial-author-name">Amina Khalil</span>
                                        <span className="testimonial-author-position">تجميل</span>
                                     </div>
                                  </div>
                               </div>
                               <div className="swiper-slide">
                                  <div className="testimonial-content">
                                     <p>لا يمكنني إلا أن أشيد بجمال توليب! إنه المكان الذي يجعلك تشعرين وكأنك في عالم آخر مليء بالجمال والرفاهية. العلاجات التي قدموها لي كانت فعلاً استثنائية، وأرى فرقًا واضحًا في بشرتي ومظهري. شكرًا لكم على العناية الرائعة والاهتمام بالتفاصيل الصغيرة. أنا ممتنة جدًا وسأعود بالتأكيد!”</p>
                                     <div className="testimonial-author">
                                        <span className="testimonial-author-name">Leila Ahmed</span>
                                        <span className="testimonial-author-position">تجميل</span>
                                     </div>
                                  </div>
                               </div>
                               <div className="swiper-slide">
                                  <div className="testimonial-content">
                                     <p>أنا مدمنة على توليب للجمال! إنه المكان الذي أجد فيه الهدوء والاسترخاء بالإضافة إلى الجمال. خدمة العملاء هناك لا تضاهى، والمعالجات تمتزج بين الفخامة والجودة. لقد شعرت بأنني في عالم خاص بي حيث الجمال يأتي من الداخل والخارج. أنصح بشدة بتوليب لكل من يبحث عن تجربة جمال فريدة من نوعها!”</p>
                                     <div className="testimonial-author">
                                        <span className="testimonial-author-name">Yasmin Hamdi</span>
                                        <span className="testimonial-author-position">تجميل</span>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="testimonial-arrows d-flex align-items-center justify-content-end">
                      <div className="testimonial-single-arrow testimonial-button-next ml-25">
                            <span>
                               <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_326_645)">
                                  <path d="M0 13.9954H35" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                                  <path d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                                  <path d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                                  </g>
                                  <defs>
                                  <clipPath id="clip0_326_6455">
                                  <rect width="35" height="28" fill="white"/>
                                  </clipPath>
                                  </defs>
                               </svg>
                            </span>
                         </div>
                         <div className="testimonial-single-arrow testimonial-button-prev">
                            <span>
                               <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_326_651)">
                                  <path d="M35 13.9954H3.29442e-07" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                                  <path d="M13.5547 0C13.5547 7.73574 7.49212 13.9953 -0.000121431 13.9953" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                                  <path d="M-0.000121431 13.9954C7.49212 13.9954 13.5547 20.255 13.5547 27.9907" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                                  </g>
                                  <defs>
                                  <clipPath id="clip0_326_6512">
                                  <rect width="35" height="28" fill="white" transform="matrix(-1 0 0 1 35 0)"/>
                                  </clipPath>
                                  </defs>
                               </svg>
                            </span>
                         </div>
                         
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* testimonial-area-end */}

    {/* cta-area-start */}
    <section className="cta-area mb-120">
       <div className="container">
          <div className="cta-bg" data-background="">
             <div className="row align-items-center">
                <div className="col-lg-9 col-md-9">
                   <div className="tpsection">
                      <div className="tpsection-sub-title">
                        <br/>
                      </div>
                      <h2 className="tpsection-title">استشر الطبيب  المختص</h2>
                   </div>
                </div>
                <div className="col-lg-3 col-md-3">
                   <div className="cta-phone text-center pl-10">
                      <a className="tp-ripple" href=""><i className="fa-light fa-phone-volume"></i></a>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* cta-area-end */}

    {/* blog-area-start */}
    {/* <section className="blog-area mb-110">
       <div className="container">
          <div className="row">
             <div className="col-lg-12">
                <div className="tpsection text-center mb-80">
                   <div className="blog-sub-title tpsection-sub-title mb-10">
                      Get Appointment 1
                   </div>
                   <h2 className="tpsection-title">Latest From Blogs</h2>
                </div>
             </div>
          </div>
          <div className="row">
             <div className="col-lg-4 col-md-6">
                <div className="blog-item mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                   <div className="blog-content">
                      <span className="blog-title under-line-theme"><a href="blog-details.html">Practicing The Art of Plastic Surgery For Skin</a></span>
                   </div>
                   <div className="blog-thumb tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <a href="blog-details.html">
                         <img src="assets/img/blog/blog-sm-1.jpg" alt=""/>
                      </a>
                   </div>
                   <div className="blog-btn">
                      <a href="blog-details.html">Read More 
                         <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                         </span>
                      </a>
                   </div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="blog-item mb-30 wow fadeInUp"  data-wow-duration="1s" data-wow-delay=".6s">
                   <div className="blog-content">
                      <span className="blog-title under-line-theme"><a href="blog-details.html">The Surgeon General Says It Is Okay to Competition</a></span>
                   </div>
                   <div className="blog-thumb tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <a href="blog-details.html">
                         <img src="assets/img/blog/blog-sm-2.jpg" alt=""/>
                      </a>
                   </div>
                   <div className="blog-btn">
                      <a href="blog-details.html">Read More 
                         <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                         </span>
                      </a>
                   </div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="blog-item mb-30 wow fadeInUp"  data-wow-duration="1s" data-wow-delay=".9s">
                   <div className="blog-content">
                      <span className="blog-title under-line-theme"><a href="blog-details.html">General Repairs High Quality At Great Prices</a></span>
                   </div>
                   <div className="blog-thumb tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <a href="blog-details.html">
                         <img src="assets/img/blog/blog-sm-3.jpg" alt=""/>
                      </a>
                   </div>
                   <div className="blog-btn">
                      <a href="blog-details.html">Read More 
                         <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16602 10H15.8327" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                         </span>
                      </a>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section> */}
    {/* blog-area-end */}

    {/* brand-slider-area-start */}
    <section className="brand-slider-area" dir='ltr'>
       <div className="brand-slider-wrap">
          <div className="brand-slide-active splide">
             <div className="splide__track">
                <div className="splide__list">
                   <div className="splide__slide">
                      <div className="brand-slider-item">
                         <h4 className="brand-slider-title"> <i><img src="assets/img/shape/brand-slider-icon-3.png" alt=""/></i> <a href="#">عناية مميزة</a> </h4>
                      </div>
                   </div>
                   <div className="splide__slide">
                      <div className="brand-slider-item">
                         <h4 className="brand-slider-title"><i> <img src="assets/img/shape/brand-slider-icon-3.png" alt=""/></i> <a href="#">الجمال الطبيعي</a></h4>
                      </div>
                   </div>
                   <div className="splide__slide">
                      <div className="brand-slider-item">
                      <h4 className="brand-slider-title"><i> <img src="assets/img/shape/brand-slider-icon-3.png" alt=""/></i> <a href="#">تحسين الحياة</a></h4>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    {/* brand-slider-area-end */}
    <Script src="/js/beforeafter.jquery-1.0.0.min.js"/>
 </main>

  )
}
