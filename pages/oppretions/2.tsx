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
    {/* breadcrumb-area-start */}
    <section
      className="breadcrumb-area tpbreadcrumb-overlay"
      data-background="/assets/img/breadcrumb/breadcrumb-bg-1.jpg"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="tpbreadcrumb text-center">
              <h2 className="tpbreadcrumb-title">عملية شد الزراعين</h2>
              <p>
              عملية شد الزراعين هي إجراء جراحي يهدف إلى تحسين مظهر الزراعين وشدّهما. تُجرى هذه العملية عادة لأشخاص يعانون من ترهل وتراخي في جلد الزراعين نتيجة لتقدم العمر، فقدان الوزن بشكل كبير، أو بعض العوامل الوراثية.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb-area-end */}
    {/* services-details-area-start */}
    <section className="services-details pt-145 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="services-details-right">
              <div className="services-details-item mb-55">
                {/* <div className="services-details-thumb mb-30">
                  <img src="/assets/img/services/service-details/service-details-2.jpg"alt="" />
                </div> */}
                <div className='service-content'>
                <h1>ماهي عملية شد الزراعين :</h1>
                <p>عملية شد الزراعين هي إجراء جراحي يهدف إلى تحسين مظهر الزراعين وشدّهما. تُجرى هذه العملية عادة لأشخاص يعانون من ترهل وتراخي في جلد الزراعين نتيجة لتقدم العمر، فقدان الوزن بشكل كبير، أو بعض العوامل الوراثية.</p>
                <h2>من المرشحين لعملية شد الزراعين :</h2>
                <ol>
                    <li>البالغين الذين يعانون من ترهل ملحوظ في جلد الذراع.</li>
                    <li>البالغين من جميع الأعمار الذين يحافظون على وزن مستقر وليسوا فوق الوزن الزائد.</li>
                    <li>الأفراد الأصحاء الذين لا يعانون من أي مرض يمكن أن يؤثر على التئام الجروح أو يزيد من مخاطر الجراحة.</li>
                    <li>غير المدخنين.</li>
                    <li>الأفراد الذين لديهم نظرة إيجابية وتوقعات واقعية.</li>
                </ol>
                <h2>تعليمات قبل عملية شد الزراعين :</h2>
                <ol>
                    <li>إجراء فحوصات مخبرية أو تقييم طبي.</li>
                    <li>تناول بعض الأدوية أو ضبط الأدوية الحالية.</li>
                    <li>التوقف عن التدخين قبل الجراحة بمدة كافية.</li>
                    <li>تجنب تناول الأسبرين ومضادات الالتهابات والأدوية الطبيعية، حيث يمكن أن تزيد من نزيف الدم.</li>
                </ol>
                <h2>كيف تتم عملية شد الزراعين :</h2>
                <p><strong>أولاً - التخدير</strong></p>
                <p>يتم إعطاء الأدوية لراحتك أثناء العملية الجراحية. تشمل الخيارات التخدير الوريدي والتخدير العام. سيرشح لك الطبيب الخيار الأفضل بالنسبة لك.</p>
                <p><strong>ثانياً - القطع</strong></p>
                <p>طول القطع والنمط سيعتمدان على كمية وموقع الجلد الزائد الذي يتم إزالته، بالإضافة إلى تقدير جراح التجميل.</p>
                <p>عادةً ما يتم إجراء القطع من الداخل أو الخلفية للذراع، اعتمادًا على تفضيلات الجراح، ويمكن أن تمتد من تحت الإبط إلى أعلى الكوع قليلاً. إذا كان هناك حاجة لتقليل الدهون أثناء العملية، سيتم إزالة الدهون أو شفطها.</p>
                <p>القطع في الجزء الداخلي من الذراع، وحسب الظروف المحددة، قد تكون القطع أكثر اقتصارًا. يتم شد الأنسجة الداعمة الأساسية وإعادة تشكيلها باستخدام الخياطة الداخلية. في النهاية، يتم تنعيم الجلد على طول المحيط الجديد للذراع.</p>
                <p><strong>ثالثاً - إغلاق القطع</strong></p>
                <p>ستتم إغلاق القطع بالخيوط القابلة للامتصاص، أو النقاط التي سيتم إزالتها في غضون 1-2 أسابيع بعد الجراحة.</p>
                <h2>تعليمات ما بعد عملية شد الزراعين :</h2>
                <ol>
                    <li>الراحة والتدبير الذاتي: حاول تفادي الأنشطة الشاقة والرياضة المكثفة لمدة تحددها الطبيب، واحرص على عدم رفع الأشياء الثقيلة خلال الفترة النقهة.</li>
                    <li>تحرك وتمارين: حتى وإن كنت بحاجة للراحة، فإن الحفاظ على تحريك ذراعيك برفق سيساعد على تجنب تصلبهما.</li>
                    <li>العناية بالجروح: احرص على الاهتمام بالجروح ومراقبة أي تغيرات في حالة الجرح. قد تحتاج إلى تنظيفها وتغيير الضمادات وفقًا لتوجيهات الطبيب.</li>
                    <li>اتباع نظام غذائي صحي: حافظ على تناول وجبات غذائية صحية ومتوازنة لدعم التئام الجرح وتقوية نظام المناعة.</li>
                    <li>الحد من التدخين والكحول: إذا كنت مدخنًا، فتجنب التدخين لأنه يعوق عملية الشفاء. وكذلك الكحول قد يؤثر سلبًا على الشفاء ويجب الامتناع عن تناوله خلال فترة التعافي.</li>
                </ol>
                <h2>أهم الأسئلة الشائعة لعملية شد الزراعين :</h2>
                <ol>
                    <li>هل يمكن لعملية شد الزراعين تحقيق نتائج دائمة؟</li>
                    <p>نعم، يمكن لعملية شد الزراعين تحقيق نتائج دائمة إلى حد ما. ومع ذلك، يجب على المرضى مراعاة بعض العوامل التي تؤثر على مرونة الجلد، مثل تقدم العمر والتغيرات في الوزن. ينصح بتبني نمط حياة صحي والاهتمام بالبشرة للحفاظ على النتائج لأطول فترة ممكنة.</p>
                    <li>هل هناك أوقات محددة لإجراء عملية شد الزراعين؟</li>
                    <p>يمكن إجراء عملية شد الزراعين في أي وقت يشاء المريض. ومع ذلك، فإن العملية تكون أكثر نجاحًا لدى الأشخاص الذين تنطبق عليهم شروط الصحة العامة والمثاليين في وزنهم.</p>
                    <li>ما هي المدة الزمنية المقدرة للعملية؟</li>
                    <p>عادةً، تستغرق عملية شد الزراعين من ساعتين إلى ثلاث ساعات، وقد يختلف ذلك حسب حجم العملية وحالة الجلد.</p>
                    <li>هل تترك العملية ندبات؟</li>
                    <p>نعم، يمكن أن تترك العملية ندبات على طول الذراع، ولكن عادةً تكون هذه الندبات مخفية في مناطق غير بارزة عند ارتداء الملابس.</p>
                    <li>هل هناك بدائل غير جراحية لشد الزراعين؟</li>
                    <p>نعم، هناك بعض العلاجات غير الجراحية التي يمكن أن تساعد في تحسين مظهر الذراعين، مثل علاجات التجميل بالليزر والراديو تردد والملء بالحمض الهيالورونيك. ولكن قد تكون النتائج أقل دائمية من العملية الجراحية.</p>
                </ol>
                </div>

              </div>

              <div className="services-details-feature mb-25">
                <ul>
                  <li>
                    <div className="services-details-feature-item">
                      <div className="services-details-feature-icon">
                        <span>
                          <svg
                            width={28}
                            height={34}
                            viewBox="0 0 28 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 21.9997C20.8 21.9997 26.41 27.0897 27.23 33.6663H0.77002C1.59002 27.0897 7.20002 21.9997 14 21.9997ZM10.9784 25.7997C8.58835 26.5563 6.57669 28.188 5.33335 30.333H14L10.9784 25.7997ZM17.0234 25.7997L14 30.333H22.665C21.4234 28.188 19.4117 26.5563 17.0234 25.7997V25.7997ZM24 0.333008V10.333C24 15.8563 19.5234 20.333 14 20.333C8.47669 20.333 4.00002 15.8563 4.00002 10.333V0.333008H24ZM7.33335 10.333C7.33335 14.0163 10.3167 16.9997 14 16.9997C17.6834 16.9997 20.6667 14.0163 20.6667 10.333H7.33335ZM20.6667 3.66634H7.33335V6.99967H20.6667V3.66634Z"
                              fill="#CD5F37"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="services-details-feature-content">
                        <h4 className="services-details-feature-title">
                          جراحين مختصين
                        </h4>
                        <p>لكل عملية جراح متخصص بها</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="services-details-feature-item">
                      <div className="services-details-feature-icon">
                        <span>
                          <svg
                            width={31}
                            height={32}
                            viewBox="0 0 31 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.33342 0V3.33333H4.00008V10C4.00008 13.6833 6.98341 16.6667 10.6667 16.6667C14.3501 16.6667 17.3334 13.6833 17.3334 10V3.33333H14.0001V0H19.0001C19.9201 0 20.6667 0.746667 20.6667 1.66667V10C20.6667 14.955 17.0634 19.0667 12.3334 19.8617V22.5C12.3334 25.7217 14.9451 28.3333 18.1667 28.3333C20.6617 28.3333 22.7917 26.7667 23.6251 24.5617C21.8801 23.7833 20.6667 22.0333 20.6667 20C20.6667 17.2383 22.9051 15 25.6667 15C28.4284 15 30.6667 17.2383 30.6667 20C30.6667 22.285 29.1334 24.2117 27.0401 24.8083C26.0167 28.7533 22.4317 31.6667 18.1667 31.6667C13.1034 31.6667 9.00008 27.5633 9.00008 22.5V19.8617C4.27008 19.0683 0.666748 14.955 0.666748 10V1.66667C0.666748 0.746667 1.41341 0 2.33341 0H7.33342ZM25.6667 18.3333C24.7467 18.3333 24.0001 19.08 24.0001 20C24.0001 20.92 24.7467 21.6667 25.6667 21.6667C26.5867 21.6667 27.3334 20.92 27.3334 20C27.3334 19.08 26.5867 18.3333 25.6667 18.3333Z"
                              fill="#CD5F37"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="services-details-feature-content">
                        <h4 className="services-details-feature-title">
                          24/7 خدمة
                        </h4>
                        <p>يمكنك التواصل مع طبيبك</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="services-details-quote mb-50">
                <h4 className="services-details-quote-text">
                الجمال هو تعبير عن الروح.”
                </h4>
                <p>
                إيلينا فيرانتي، . <span>كاتبة إيطالية</span>
                </p>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </section>
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
</main>
  

)
}
