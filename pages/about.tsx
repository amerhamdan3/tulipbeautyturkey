import Link from "next/link";

export default function name(params:any) {

    return(
        <main>
        {/* breadcrumb-area-start */}
        <section
            className="breadcrumb-area tpbreadcrumb-overlay"
            data-background="assets/img/breadcrumb/breadcrumb-bg-1.jpg"
        >
            <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                <div className="tpbreadcrumb text-center">
                    <h2 className="tpbreadcrumb-title"> من نحن </h2>
                    <p>
                    مرحبًا بك في عيادة التجميل الرائدة!
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* about-area-start */}
        <section className="about-area pt-145 pb-95">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7">
                <div className="about-inner mb-60">
                    <div className="tpsection mb-30">
                    <h2 className="tpsection-title mb-25">
                        مهمتنا  تقديم أعلى مستوى من الخدمة والرعاية لعملائنا
                    </h2>
                    <p>
                    مع التركيز على تحقيق نتائج طبيعية وجميلة تعكس أفضل إصدار لكل فرد. نحن نؤمن بأهمية الثقة بالنفس والتوازن الجمالي، ونسعى جاهدين لتلبية توقعات عملائنا وتحقيق أحلامهم من خلال أحدث التقنيات والممارسات الطبية.
                    </p>
                    </div>
                    <ul>
                    <li>
                        <span>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_364_2683)">
                            <path
                                d="M12.0001 0C18.6301 0 24.0001 5.37 24.0001 12C24.0001 18.63 18.6301 24 12.0001 24C5.37006 24 5.59967e-05 18.63 5.59967e-05 12C-0.019944 5.39 5.32006 0.02 11.9301 0C11.9501 0 11.9801 0 12.0001 0Z"
                                fill="currentColor"
                            />
                            <path
                                d="M18.6516 8.69027L10.1316 17.2203L5.35156 12.4803L7.30156 10.5703L10.1316 13.3603L16.7016 6.78027L18.6516 8.69027Z"
                                fill="white"
                            />
                            </g>{" "}
                            <defs>
                            <clipPath id="clip0_364_26831">
                                <rect width={24} height={24} fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                        </span>
                        عش كل لحظة من الجمال
                    </li>
                    <li>
                        <span>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_364_2683)">
                            <path
                                d="M12.0001 0C18.6301 0 24.0001 5.37 24.0001 12C24.0001 18.63 18.6301 24 12.0001 24C5.37006 24 5.59967e-05 18.63 5.59967e-05 12C-0.019944 5.39 5.32006 0.02 11.9301 0C11.9501 0 11.9801 0 12.0001 0Z"
                                fill="currentColor"
                            />
                            <path
                                d="M18.6516 8.69027L10.1316 17.2203L5.35156 12.4803L7.30156 10.5703L10.1316 13.3603L16.7016 6.78027L18.6516 8.69027Z"
                                fill="white"
                            />
                            </g>{" "}
                            <defs>
                            <clipPath id="clip0_364_26832">
                                <rect width={24} height={24} fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                        </span>
                        نهدف إلى إظهار أفضل ما فيك
                    </li>
                    <li>
                        <span>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_364_2683)">
                            <path
                                d="M12.0001 0C18.6301 0 24.0001 5.37 24.0001 12C24.0001 18.63 18.6301 24 12.0001 24C5.37006 24 5.59967e-05 18.63 5.59967e-05 12C-0.019944 5.39 5.32006 0.02 11.9301 0C11.9501 0 11.9801 0 12.0001 0Z"
                                fill="currentColor"
                            />
                            <path
                                d="M18.6516 8.69027L10.1316 17.2203L5.35156 12.4803L7.30156 10.5703L10.1316 13.3603L16.7016 6.78027L18.6516 8.69027Z"
                                fill="white"
                            />
                            </g>{" "}
                            <defs>
                            <clipPath id="clip0_364_26833">
                                <rect width={24} height={24} fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                        </span>
                        الجمال والتألق يمكن أن يكونا مثاليين
                    </li>
                    <li>
                        <span>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_364_2683)">
                            <path
                                d="M12.0001 0C18.6301 0 24.0001 5.37 24.0001 12C24.0001 18.63 18.6301 24 12.0001 24C5.37006 24 5.59967e-05 18.63 5.59967e-05 12C-0.019944 5.39 5.32006 0.02 11.9301 0C11.9501 0 11.9801 0 12.0001 0Z"
                                fill="currentColor"
                            />
                            <path
                                d="M18.6516 8.69027L10.1316 17.2203L5.35156 12.4803L7.30156 10.5703L10.1316 13.3603L16.7016 6.78027L18.6516 8.69027Z"
                                fill="white"
                            />
                            </g>{" "}
                            <defs>
                            <clipPath id="clip0_364_26834">
                                <rect width={24} height={24} fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                        </span>
                        يظهر أفضل ما فيك
                    </li>
                    </ul>
                    <div className="about-inner-btn">
                    <Link href="/contact" className="tp-btn">
                        تواصل معنا
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                <div
                    className="about-inner-wrap text-lg-end mb-60 wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                >
                    <div className="about-inner-thumb">
                    <img src="assets/img/about/inner/about-inner-1.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* about-area-end */}
        {/* history-area-start */}
        {/* <section className="history-area pb-105">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="tpsection text-center mb-65">
                    <h2 className="tpsection-title">Our Growth History</h2>
                </div>
                </div>
            </div>
            <div className="history-item-main">
                <ul>
                <li>
                    <div className="history-item-meta">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                        <div
                            className="history-item mb-40 wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".2s"
                        >
                            <div className="history-thumb">
                            <img
                                src="assets/img/history/history-thumb-1.jpg"
                                alt=""
                            />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-2">
                        <div className="history-item mb-40">
                            <div className="history-item-year text-center">
                            <span>1987</span>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5">
                        <div
                            className="history-item history-content-box mb-40 wow fadeInLeft"
                            data-wow-duration="1s"
                            data-wow-delay=".2s"
                        >
                            <div className="history-item-icon">
                            <i>
                                <span>
                                <svg
                                    width={38}
                                    height={34}
                                    viewBox="0 0 38 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M8.16675 34.0003C7.18183 34.0003 6.20656 33.8063 5.29662 33.4294C4.38668 33.0525 3.55989 32.5001 2.86345 31.8036C2.16701 31.1072 1.61456 30.2804 1.23765 29.3705C0.860741 28.4605 0.666748 27.4852 0.666748 26.5003C0.666748 25.5154 0.860741 24.5401 1.23765 23.6302C1.61456 22.7203 2.16701 21.8935 2.86345 21.197C3.55989 20.5006 4.38668 19.9481 5.29662 19.5712C6.20656 19.1943 7.18183 19.0003 8.16675 19.0003C10.1559 19.0003 12.0635 19.7905 13.47 21.197C14.8766 22.6035 15.6667 24.5112 15.6667 26.5003C15.6667 28.4894 14.8766 30.3971 13.47 31.8036C12.0635 33.2101 10.1559 34.0003 8.16675 34.0003V34.0003ZM8.16675 30.667C9.27182 30.667 10.3316 30.228 11.113 29.4466C11.8944 28.6652 12.3334 27.6054 12.3334 26.5003C12.3334 25.3953 11.8944 24.3354 11.113 23.554C10.3316 22.7726 9.27182 22.3337 8.16675 22.3337C7.06168 22.3337 6.00187 22.7726 5.22047 23.554C4.43907 24.3354 4.00008 25.3953 4.00008 26.5003C4.00008 27.6054 4.43907 28.6652 5.22047 29.4466C6.00187 30.228 7.06168 30.667 8.16675 30.667V30.667ZM29.8334 34.0003C28.8485 34.0003 27.8732 33.8063 26.9633 33.4294C26.0533 33.0525 25.2266 32.5001 24.5301 31.8036C23.8337 31.1072 23.2812 30.2804 22.9043 29.3705C22.5274 28.4605 22.3334 27.4852 22.3334 26.5003C22.3334 25.5154 22.5274 24.5401 22.9043 23.6302C23.2812 22.7203 23.8337 21.8935 24.5301 21.197C25.2266 20.5006 26.0533 19.9481 26.9633 19.5712C27.8732 19.1943 28.8485 19.0003 29.8334 19.0003C31.8225 19.0003 33.7302 19.7905 35.1367 21.197C36.5432 22.6035 37.3334 24.5112 37.3334 26.5003C37.3334 28.4894 36.5432 30.3971 35.1367 31.8036C33.7302 33.2101 31.8225 34.0003 29.8334 34.0003V34.0003ZM29.8334 30.667C30.9385 30.667 31.9983 30.228 32.7797 29.4466C33.5611 28.6652 34.0001 27.6054 34.0001 26.5003C34.0001 25.3953 33.5611 24.3354 32.7797 23.554C31.9983 22.7726 30.9385 22.3337 29.8334 22.3337C28.7283 22.3337 27.6685 22.7726 26.8871 23.554C26.1057 24.3354 25.6667 25.3953 25.6667 26.5003C25.6667 27.6054 26.1057 28.6652 26.8871 29.4466C27.6685 30.228 28.7283 30.667 29.8334 30.667ZM17.3717 16.1753L20.6667 19.0003V29.0003H17.3334V20.667L12.8017 16.8903C12.3985 16.6132 12.0612 16.2507 11.8138 15.8285C11.5664 15.4064 11.4149 14.9349 11.3702 14.4477C11.3255 13.9604 11.3887 13.4693 11.5551 13.0092C11.7216 12.549 11.9873 12.1312 12.3334 11.7853L17.0467 7.07199C17.3563 6.76232 17.7238 6.51667 18.1283 6.34907C18.5328 6.18147 18.9664 6.0952 19.4042 6.0952C19.8421 6.0952 20.2757 6.18147 20.6802 6.34907C21.0847 6.51667 21.4522 6.76232 21.7617 7.07199L24.1184 9.42866C25.8835 11.2 28.173 12.3545 30.6467 12.7203L30.6301 16.0787C27.2737 15.6923 24.1474 14.1794 21.7617 11.787L17.3717 16.1753V16.1753ZM25.6667 7.33366C24.7827 7.33366 23.9348 6.98247 23.3097 6.35735C22.6846 5.73223 22.3334 4.88438 22.3334 4.00033C22.3334 3.11627 22.6846 2.26842 23.3097 1.6433C23.9348 1.01818 24.7827 0.666992 25.6667 0.666992C26.5508 0.666992 27.3986 1.01818 28.0238 1.6433C28.6489 2.26842 29.0001 3.11627 29.0001 4.00033C29.0001 4.88438 28.6489 5.73223 28.0238 6.35735C27.3986 6.98247 26.5508 7.33366 25.6667 7.33366V7.33366Z"
                                    fill="currentColor"
                                    />
                                </svg>
                                </span>
                            </i>
                            </div>
                            <div className="history-item-content">
                            <h5 className="history-item-title">Start From Here</h5>
                            <p>
                                Lorem ipsum dolor amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="history-item-meta">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                        <div
                            className="history-item history-content-box mb-40 wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".4s"
                        >
                            <div className="history-item-icon">
                            <i>
                                <span>
                                <svg
                                    width={34}
                                    height={31}
                                    viewBox="0 0 34 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M17.0016 2.5483C20.9166 -0.9667 26.9666 -0.850033 30.7383 2.9283C34.5083 6.7083 34.6383 12.7283 31.1316 16.655L16.9983 30.8083L2.86826 16.655C-0.638405 12.7283 -0.506738 6.6983 3.2616 2.9283C7.0366 -0.845033 13.0749 -0.9717 17.0016 2.5483V2.5483ZM28.3783 5.2833C25.8783 2.77997 21.8449 2.6783 19.2283 5.0283L17.0033 7.02497L14.7766 5.02997C12.1516 2.67663 8.12659 2.77997 5.61993 5.28663C3.1366 7.76997 3.0116 11.745 5.29993 14.3716L16.9999 26.09L28.6999 14.3733C30.9899 11.745 30.8649 7.77497 28.3783 5.2833V5.2833Z"
                                    fill="currentColor"
                                    />
                                </svg>
                                </span>
                            </i>
                            </div>
                            <div className="history-item-content">
                            <h5 className="history-item-title">Open New Branch</h5>
                            <p>
                                Lorem ipsum dolor amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-2">
                        <div className="history-item mb-40">
                            <div className="history-item-year text-center">
                            <span>2000</span>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5">
                        <div
                            className="history-item mb-40 wow fadeInLeft"
                            data-wow-duration="1s"
                            data-wow-delay=".4s"
                        >
                            <div className="history-thumb-2">
                            <img
                                src="assets/img/history/history-thumb-3.jpg"
                                alt=""
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li>
                    <div className="history-item-meta">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                        <div
                            className="history-item mb-40 wow fadeInRight"
                            data-wow-duration="1s"
                            data-wow-delay=".6s"
                        >
                            <div className="history-thumb">
                            <img
                                src="assets/img/history/history-thumb-2.jpg"
                                alt=""
                            />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-2">
                        <div className="history-item mb-40">
                            <div className="history-item-year text-center">
                            <span>2023</span>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5">
                        <div
                            className="history-item history-content-box mb-40 wow fadeInLeft"
                            data-wow-duration="1s"
                            data-wow-delay=".6s"
                        >
                            <div className="history-item-icon">
                            <i>
                                <span>
                                <svg
                                    width={34}
                                    height={34}
                                    viewBox="0 0 34 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M7.19326 30.478C5.06664 28.9328 3.33628 26.9058 2.14391 24.563C0.951527 22.2203 0.331039 19.6284 0.333258 16.9997C0.333258 7.79468 7.79492 0.333008 16.9999 0.333008C26.2049 0.333008 33.6666 7.79468 33.6666 16.9997C33.6688 19.6284 33.0483 22.2203 31.8559 24.563C30.6636 26.9058 28.9332 28.9328 26.8066 30.478L25.1149 27.5797C27.3256 25.884 28.9495 23.5384 29.7586 20.8723C30.5677 18.2063 30.5214 15.3538 29.626 12.7155C28.7307 10.0771 27.0314 7.78556 24.7668 6.16261C22.5021 4.53967 19.786 3.6669 16.9999 3.6669C14.2138 3.6669 11.4977 4.53967 9.23309 6.16261C6.96848 7.78556 5.26916 10.0771 4.37382 12.7155C3.47848 15.3538 3.43211 18.2063 4.24122 20.8723C5.05033 23.5384 6.67426 25.884 8.88492 27.5797L7.19326 30.478V30.478ZM10.5833 24.6697C9.0083 23.352 7.87716 21.5815 7.34351 19.5986C6.80986 17.6157 6.89959 15.5166 7.6005 13.5865C8.30141 11.6564 9.57951 9.98884 11.2612 8.81042C12.9428 7.63199 14.9465 6.99984 16.9999 6.99984C19.0534 6.99984 21.057 7.63199 22.7387 8.81042C24.4203 9.98884 25.6984 11.6564 26.3993 13.5865C27.1003 15.5166 27.19 17.6157 26.6563 19.5986C26.1227 21.5815 24.9915 23.352 23.4166 24.6697L21.6999 21.7263C22.6362 20.7956 23.2751 19.6078 23.5356 18.3135C23.796 17.0192 23.6663 15.6767 23.1629 14.4562C22.6595 13.2358 21.805 12.1922 20.7078 11.4579C19.6107 10.7236 18.3202 10.3316 16.9999 10.3316C15.6797 10.3316 14.3892 10.7236 13.292 11.4579C12.1948 12.1922 11.3404 13.2358 10.8369 14.4562C10.3335 15.6767 10.2038 17.0192 10.4643 18.3135C10.7247 19.6078 11.3636 20.7956 12.2999 21.7263L10.5833 24.6697V24.6697ZM15.3333 18.6663H18.6666V33.6663H15.3333V18.6663Z"
                                    fill="currentColor"
                                    />
                                </svg>
                                </span>
                            </i>
                            </div>
                            <div className="history-item-content">
                            <h5 className="history-item-title">Spread Worldwide</h5>
                            <p>
                                Lorem ipsum dolor amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </section> */}
        {/* history-area-end */}
        {/* brand-area-start */}
        {/* <div className="brand-area pb-145">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="swiper-container brand-active">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/sponsor-1.svg" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/sponsor-2.svg" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/sponsor-3.svg" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="brand-item">
                        <a href="#">
                            <img src="assets/img/brand/sponsor-4.svg" alt="" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div> */}
        {/* brand-area-end */}
        {/* choose-area-start */}
        {/* <section className="choose-area pb-60">
            <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-12">
                <div
                    className="choose-inner-thumb text-lg-end mb-50 wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                >
                    <img src="assets/img/choose/choose-inner-1.png" alt="" />
                </div>
                </div>
                <div className="col-xl-8 col-lg-12">
                <div className="choose-inner-wrap mb-50">
                    <div className="tpsection mb-50">
                    <h2 className="tpsection-title">Why Choose Vamary?</h2>
                    </div>
                    <div className="choose-inner-info d-flex">
                    <div className="choose-inner-content">
                        <div className="choose-inner-text">
                        <p>
                            Lorem ipsum amet consectetur adipisicing elit, sedesd do
                            eiusmod tempors incididunt labore etshile dolore magna
                            aliqua utased enim minim veniam.
                        </p>
                        </div>
                        <div className="about-3-list-item mb-25">
                        <div className="about-3-list-icon">
                            <span>
                            <svg
                                width={30}
                                height={40}
                                viewBox="0 0 30 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M28.9954 32.3C28.9554 32.2656 25.1202 28.866 20.8486 24.1272C24.2702 19.614 27.001 14.9616 27.001 11.6C27.001 11.5016 26.9894 11.4044 26.9646 11.3092C25.8374 6.79759 23.3706 0.799988 15.001 0.799988C6.63136 0.799988 4.16456 6.79759 3.03736 11.3092C3.01256 11.4044 3.00096 11.5016 3.00096 11.6C3.00096 14.614 5.01056 18.7204 9.14056 24.1356C4.88176 28.856 1.09096 32.226 1.00656 32.3C0.759357 32.5192 0.611757 32.832 0.602157 33.1624C0.591757 33.494 0.718157 33.814 0.952557 34.0484L5.75256 38.8484C5.98696 39.0828 6.29376 39.2 6.60096 39.2C6.89496 39.2 7.19056 39.092 7.42136 38.8752C7.75136 38.566 11.1374 35.3728 15.0026 31.1112C19.0038 35.5132 22.5426 38.8392 22.581 38.8752C22.8114 39.092 23.107 39.2 23.401 39.2C23.7082 39.2 24.015 39.0828 24.2494 38.8484L29.0494 34.0484C29.2838 33.814 29.4102 33.494 29.3998 33.1624C29.3906 32.832 29.2438 32.5192 28.9954 32.3ZM15.0086 16.94C13.4726 14.8064 12.2214 12.8016 11.2734 10.9396C11.3402 10.82 12.2862 9.19999 15.001 9.19999C17.7594 9.19999 18.697 10.8804 18.7274 10.9368C18.729 10.9396 18.731 10.9416 18.7322 10.944C17.7154 12.942 16.4298 14.9688 15.0086 16.94V16.94ZM20.851 4.96359C20.6638 6.11799 20.303 7.32079 19.819 8.54759C18.923 7.71599 17.4002 6.79999 15.001 6.79999C12.6126 6.79999 11.0846 7.70959 10.187 8.53799C9.68616 7.26639 9.35056 6.07479 9.17136 4.96079C10.5594 3.88159 12.4238 3.19999 15.001 3.19999C17.585 3.19999 19.461 3.87839 20.851 4.96359ZM5.40336 11.7408C5.81016 10.1452 6.34856 8.54359 7.20616 7.16559C8.15576 10.5984 10.263 14.5452 13.5026 18.9484C12.6062 20.1024 11.6826 21.2264 10.7602 22.2984C6.47896 16.6028 5.45616 13.4364 5.40336 11.7408V11.7408ZM6.62216 36.3244L3.54136 33.2436C7.17656 29.892 19.9114 17.5884 22.8094 7.18679C23.6602 8.56039 24.1946 10.154 24.599 11.7408C24.4158 17.9376 12.2918 30.8668 6.62216 36.3244V36.3244ZM23.3834 36.3208C22.0898 35.066 19.4566 32.452 16.6098 29.3076C17.527 28.2572 18.4506 27.1624 19.3494 26.046C22.3642 29.3656 25.0846 31.9676 26.4618 33.2408L23.3834 36.3208Z"
                                fill="currentColor"
                                />
                            </svg>
                            </span>
                        </div>
                        <div className="about-3-list-content">
                            <h4 className="about-3-list-title">Care About Client’s</h4>
                            <p>
                            Lorem ipsum amet consectet adipisicing elit sedesd do
                            eiusmod tempo
                            </p>
                        </div>
                        </div>
                        <div className="about-3-list-item mb-25">
                        <div className="about-3-list-icon">
                            <span>
                            <svg
                                width={32}
                                height={40}
                                viewBox="0 0 32 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M16.0004 39.2C15.7684 39.2 15.5364 39.1328 15.3348 38.9984L5.20959 32.2484C2.19799 30.2404 0.400391 26.8812 0.400391 23.2624V7.99999C0.400391 7.33839 0.937191 6.80239 1.59879 6.79999C1.67799 6.79999 9.59199 6.71079 15.152 1.15159C15.6208 0.682788 16.38 0.682788 16.8488 1.15159C22.4328 6.73559 30.3212 6.79999 30.4004 6.79999C31.0632 6.79999 31.6004 7.33719 31.6004 7.99999V23.2624C31.6004 26.8812 29.8028 30.2404 26.7912 32.2484L16.666 38.9984C16.4644 39.1328 16.2324 39.2 16.0004 39.2ZM2.80039 9.13559V23.2624C2.80039 26.0772 4.19919 28.69 6.54119 30.2516L16.0004 36.558L25.4596 30.2516C27.8016 28.69 29.2004 26.0772 29.2004 23.2624V9.13559C26.708 8.91479 20.8344 7.94079 16.0004 3.64839C11.1664 7.94079 5.29279 8.91479 2.80039 9.13559ZM22.0004 18.8H17.2004V14C17.2004 13.3372 16.6632 12.8 16.0004 12.8C15.3376 12.8 14.8004 13.3372 14.8004 14V18.8H10.0004C9.33759 18.8 8.80039 19.3372 8.80039 20C8.80039 20.6628 9.33759 21.2 10.0004 21.2H14.8004V26C14.8004 26.6628 15.3376 27.2 16.0004 27.2C16.6632 27.2 17.2004 26.6628 17.2004 26V21.2H22.0004C22.6632 21.2 23.2004 20.6628 23.2004 20C23.2004 19.3372 22.6632 18.8 22.0004 18.8Z"
                                fill="currentColor"
                                />
                            </svg>
                            </span>
                        </div>
                        <div className="about-3-list-content">
                            <h4 className="about-3-list-title">24/7 Support</h4>
                            <p>
                            Lorem ipsum amet consectet adipisicing elit sedesd do
                            eiusmod tempo
                            </p>
                        </div>
                        </div>
                    </div>
                    <div
                        className="choose-inner-sm-thumb wow fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay=".4s"
                    >
                        <img src="assets/img/choose/choose-inner-2.png" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section> */}
        {/* choose-area-end */}
        {/* team-area-start */}
        {/* <section className="team-area theme-bg-7 pt-140 pb-105">
            <div className="container">
            <div className="row">
                <div className="col-lg-9">
                <div className="tpsection mb-65">
                    <div className="tpsection-sub-title">
                    <span>Team Member</span>
                    </div>
                    <h2 className="tpsection-title">Our Expert Surgeon</h2>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="team-arrows mb-65 d-flex align-items-center justify-content-end">
                    <div className="team-single-arrow team-button-prev">
                    <span>
                        <svg
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clipPath="url(#clip0_326_651)">
                            <path
                            d="M35 13.9954H3.29442e-07"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            />
                            <path
                            d="M13.5547 0C13.5547 7.73574 7.49212 13.9953 -0.000121431 13.9953"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            />
                            <path
                            d="M-0.000121431 13.9954C7.49212 13.9954 13.5547 20.255 13.5547 27.9907"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_326_6511">
                            <rect
                                width={35}
                                height={28}
                                fill="white"
                                transform="matrix(-1 0 0 1 35 0)"
                            />
                            </clipPath>
                        </defs>
                        </svg>
                    </span>
                    </div>
                    <div className="team-single-arrow team-button-next ml-25">
                    <span>
                        <svg
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clipPath="url(#clip0_326_645)">
                            <path
                            d="M0 13.9954H35"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            />
                            <path
                            d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            />
                            <path
                            d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_326_6451">
                            <rect width={35} height={28} fill="white" />
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
                    <div className="team-item fix tp-thumb-common mb-40">
                    <div className="tp-thumb-common-overlay wow" />
                    <div className="team-profile">
                        <img src="assets/img/team/team-1.jpg" alt="" />
                    </div>
                    <div className="team-content text-center">
                        <div className="team-author-social pt-50 pb-20">
                        <a href="#">
                            <i className="fa-solid fa-paper-plane" />
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-pinterest-p" />
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-twitter" />
                        </a>
                        </div>
                        <h4 className="team-author-title">
                        {" "}
                        <a href="team-details.html">Dr. Farzana Leo</a>{" "}
                        </h4>
                        <span className="team-author-position">Skin Surgeon</span>
                    </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="team-item fix tp-thumb-common mb-40">
                    <div className="tp-thumb-common-overlay wow" />
                    <div className="team-profile">
                        <img src="assets/img/team/team-2.jpg" alt="" />
                    </div>
                    <div className="team-content text-center">
                        <div className="team-author-social pt-50 pb-20">
                        <a href="#">
                            <i className="fa-solid fa-paper-plane" />
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-pinterest-p" />
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-twitter" />
                        </a>
                        </div>
                        <h4 className="team-author-title">
                        {" "}
                        <a href="team-details.html">Dr. Farzana Leo</a>{" "}
                        </h4>
                        <span className="team-author-position">Skin Surgeon</span>
                    </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="team-item fix tp-thumb-common mb-40">
                    <div className="tp-thumb-common-overlay wow" />
                    <div className="team-profile">
                        <img src="assets/img/team/team-3.jpg" alt="" />
                    </div>
                    <div className="team-content text-center">
                        <div className="team-author-social pt-50 pb-20">
                        <a href="#">
                            <i className="fa-solid fa-paper-plane" />
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-pinterest-p" />
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-twitter" />
                        </a>
                        </div>
                        <h4 className="team-author-title">
                        {" "}
                        <a href="team-details.html">Dr. Farzana Leo</a>{" "}
                        </h4>
                        <span className="team-author-position">Skin Surgeon</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section> */}
        {/* team-area-end */}
        {/* testimonial-area-start */}
        {/* <section className="testimonial-area pt-135 mb-80">
            <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-6">
                <div className="testimonial-wrap p-relative mt-20 mb-60">
                    <div className="testimonial-main-bg">
                    <img src="assets/img/testimonial/testimonial-1-bg-1.png" alt="" />
                    </div>
                    <div className="testimonial-shape">
                    <div
                        className="testimonial-shape-1 wow fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay=".4s"
                    >
                        <img
                        src="assets/img/testimonial/testimonial-1-bg-2.png"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="happy-client">
                    <h2 className="count">
                        <span className="odometer" data-count={26} />K
                    </h2>
                    <p>
                        Happy <br /> Customers
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                <div className="testimonial-wrapper mb-60">
                    <div className="tpsection mb-25">
                    <div className="tpsection-sub-title mb-15">
                        <span>Testimonial</span>
                    </div>
                    <h2 className="tpsection-title">
                        What Our Customers Says About Us
                    </h2>
                    </div>
                    <div className="testimonial-box p-relative">
                    <div className="testimonial-1-thumb">
                        <div className="swiper-container swiper  test-ava-active">
                        <div className="swiper-wrapper testi-avta-bottom pt-20 pb-30">
                            <div className="swiper-slide">
                            <div className="testimonial-author-thumb">
                                <img
                                src="assets/img/testimonial/testimonial-author-1.png"
                                alt=""
                                />
                            </div>
                            </div>
                            <div className="swiper-slide">
                            <div className="testimonial-author-thumb">
                                <img
                                src="assets/img/testimonial/testimonial-author-2.png"
                                alt=""
                                />
                            </div>
                            </div>
                            <div className="swiper-slide">
                            <div className="testimonial-author-thumb">
                                <img
                                src="assets/img/testimonial/testimonial-author-3.png"
                                alt=""
                                />
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
                                “Fringilla utade morbi tincidunt augu interdum velit
                                euismo. Nullam consequat volutpat donec urna lorem
                                pellentesque.Fringilla amusb morbi tincidunt.”
                                </p>
                                <div className="testimonial-author">
                                <span className="testimonial-author-name">
                                    Ferrora Decosta
                                </span>
                                <span className="testimonial-author-position">
                                    CTO
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="swiper-slide">
                            <div className="testimonial-content">
                                <p>
                                “Fringilla utade morbi tincidunt augu interdum velit
                                euismo. Nullam consequat volutpat donec urna lorem
                                pellentesque.Fringilla amusb morbi tincidunt augue
                                interdum velit euismo.”
                                </p>
                                <div className="testimonial-author">
                                <span className="testimonial-author-name">
                                    Ferrora Decosta
                                </span>
                                <span className="testimonial-author-position">
                                    CEO &amp; Founder
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="swiper-slide">
                            <div className="testimonial-content">
                                <p>
                                “Fringilla utade morbi tincidunt augu interdum velit
                                euismo. Nullam consequat volutpat donec urna lorem
                                pellentesque.Fringilla amusb morbi tincidunt augue
                                interdum velit euismo.”
                                </p>
                                <div className="testimonial-author">
                                <span className="testimonial-author-name">
                                    Ferrora Decosta
                                </span>
                                <span className="testimonial-author-position">
                                    Founder
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="testimonial-arrows d-flex align-items-center justify-content-end">
                        <div className="testimonial-single-arrow testimonial-button-prev">
                        <span>
                            <svg
                            width={35}
                            height={28}
                            viewBox="0 0 35 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <g clipPath="url(#clip0_326_651)">
                                <path
                                d="M35 13.9954H3.29442e-07"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                />
                                <path
                                d="M13.5547 0C13.5547 7.73574 7.49212 13.9953 -0.000121431 13.9953"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                />
                                <path
                                d="M-0.000121431 13.9954C7.49212 13.9954 13.5547 20.255 13.5547 27.9907"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_326_651">
                                <rect
                                    width={35}
                                    height={28}
                                    fill="white"
                                    transform="matrix(-1 0 0 1 35 0)"
                                />
                                </clipPath>
                            </defs>
                            </svg>
                        </span>
                        </div>
                        <div className="testimonial-single-arrow testimonial-button-next ml-25">
                        <span>
                            <svg
                            width={35}
                            height={28}
                            viewBox="0 0 35 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <g clipPath="url(#clip0_326_645)">
                                <path
                                d="M0 13.9954H35"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                />
                                <path
                                d="M21.4453 0C21.4453 7.73574 27.5079 13.9953 35.0001 13.9953"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                />
                                <path
                                d="M35.0001 13.9954C27.5079 13.9954 21.4453 20.255 21.4453 27.9907"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeMiterlimit={10}
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_326_6452">
                                <rect width={35} height={28} fill="white" />
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
        </section> */}
        {/* testimonial-area-end */}
        {/* brand-slider-area-start */}
        <section className="brand-slider-area" dir='ltr'>
       <div className="brand-slider-wrap">
          <div className="brand-slide-active splide">
             <div className="splide__track">
                <div className="splide__list">
                   <div className="splide__slide">
                      <div className="brand-slider-item">
                         <h4 className="brand-slider-title"> <i><img src="assets/img/shape/brand-slider-icon-1.png" alt=""/></i> <a href="#">عناية مميزة</a> </h4>
                      </div>
                   </div>
                   <div className="splide__slide">
                      <div className="brand-slider-item">
                         <h4 className="brand-slider-title"><i> <img src="assets/img/shape/brand-slider-icon-1.png" alt=""/></i> <a href="#">الجمال الطبيعي</a></h4>
                      </div>
                   </div>
                   <div className="splide__slide">
                      <div className="brand-slider-item">
                      <h4 className="brand-slider-title"><i> <img src="assets/img/shape/brand-slider-icon-1.png" alt=""/></i> <a href="#">تحسين الحياة</a></h4>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
        {/* brand-slider-area-end */}
        </main>

    );
    
}