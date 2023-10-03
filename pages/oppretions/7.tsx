import { PageContent } from "./layout";
import Title from "./layout";

export default function Page() {

return (
<main>
    <Title> 
        <h2 className="tpbreadcrumb-title">
        عملية جراحة الوجه
        </h2>
        <p>
        تصبح آثار الشيخوخة والتعرض لأشعة الشمس لفترة طويلة والإجهاد اليومي واضحة بشكل خاص على الوجه والرقبة. تظهر الأخاديد والطيات مما يقلل من تعريف الوجه وثباته. ولحسن الحظ , يوجد حل لعلامات الشيخوخة . 
        </p> 
    </Title>

    <PageContent>
    <div className="services-details-item mb-55">
                {/* <div className="services-details-thumb mb-30">
                  <img src="/assets/img/services/service-details/service-details-2.jpg"alt="" />
                </div> */}
                <h2>كيف تتم عملية شد الوجه؟</h2>
  <p>
    تتم عملية شد الوجه تحت التخدير العام. يقوم الجراح بعمل شقوق صغيرة في فروة الرأس، ثم يقوم بشد الجلد وإزالة الأنسجة الزائدة. يتم خياطة الشقوق بالغرز.
  </p>
  <p>
    عادة ما تستغرق عملية شد الوجه من 3 إلى 5 ساعات.
  </p>
  <h2>ما هي مخاطر عملية شد الوجه؟</h2>
  <p>
    تشمل مخاطر عملية شد الوجه ما يلي:
    
  </p>
  <ul>
      <li>التورم</li>
      <li>الندوب</li>
      <li>الألم</li>
      <li>عدم تناسق الوجه</li>
      <li>التهابات</li>
      <li>تفاعلات التخدير</li>
    </ul>
  <h2>ما هي فترة التعافي بعد عملية شد الوجه؟</h2>
  <p>
    فترة التعافي بعد عملية شد الوجه حوالي أسبوعين إلى شهرين. خلال هذه الفترة، قد يعاني المريض من تورم وألم وكدمات.
  </p>
  <p>
    يجب على المريض اتباع تعليمات الطبيب بعناية خلال فترة التعافي.
  </p>
  <h2>هل هناك بدائل لشد الوجه بدون جراحة؟</h2>
  <p>
    هناك العديد من العلاجات غير الجراحية التي يمكن أن تساعد في تحسين مظهر الوجه، مثل:
    
  </p>
    <ul>
      <li>حقن البوتوكس</li>
      <li>فيلر الوجه</li>
      <li>خيوط شد الوجه</li>
      <li>علاجات الليزر</li>
    </ul>
  <p>
    هذه العلاجات أقل تكلفة وأقل توغلاً من عملية شد الوجه، ولكنها قد لا توفر نفس النتائج.
  </p>
  <h2>أسئلة مهمة حول شد الوجه</h2>
  <ul>
      <li>ما هو شد الوجه الجراحي؟</li>
      <li>ما هي الأسباب التي تدفع الناس لإجراء عملية شد الوجه؟</li>
      <li>ما هي المخاطر المحتملة لعملية شد الوجه؟</li>
      <li>ما هي فترة الانتعاش بعد عملية شد الوجه؟</li>
      <li>هل هناك أي توصيات للعناية بالجلد بعد الجراحة؟</li>
      <li>هل يمكن أن يكون شد الوجه مناسبًا للجميع؟</li>
      <li>ما هي التكلفة المتوقعة لعملية شد الوجه؟</li>
    </ul>
  <p>
    يمكن الإجابة على هذه الأسئلة من قبل الطبيب أو الجراح.
  </p>

    </div>
    </PageContent>
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
</main>
)
}
