import { PageContent } from "./layout";
import Title from "./layout";

export default function Page() {

return (
<main>
    <Title> 
        <h2 className="tpbreadcrumb-title">
        عملية رفع الجفن (رأب الجفن )
        </h2>
        <p>
        رأب الجفن، أو جراحة الجفن، هو إجراء جراحي يهدف إلى إزالة الدهون والجلد الزائد والعضلات من منطقة الجفن العلوي والسفلي. الهدف هو تصحيح أكياس العين واستعادة النعومة في هذا الجزء من الوجه، وتجنب علامات التقدم في السن وصورة التعب في المنطقة المجاورة للعين.
        </p> 
    </Title>

    <PageContent>
    <div className="services-details-item mb-55">
                {/* <div className="services-details-thumb mb-30">
                  <img src="/assets/img/services/service-details/service-details-2.jpg"alt="" />
                </div> */}
                <h2>ما هو رأب الجفن ومما يتكون؟</h2>

<ul>
  <li>رأب الجفن العلوي: الهدف هو تقليل الدهون الزائدة في الجفون العلوية، ورفع الجفن بشكل واضح.</li>
  <li>رأب الجفن السفلي: يتم إجراء عملية جراحية على الجفن السفلي بهدف اختفاء الأكياس عادة.</li>
</ul>

<h2>من المرشح المناسب لعملية جراحة الجفن؟</h2>

<ul>
  <li>الأشخاص الذين يريدون تحسنًا ملحوظًا في حالة الجلد حول العين.</li>
  <li>الأشخاص الذين يعانون من تدلي الجفون العلوية أو الأكياس في الجفون السفلية.</li>
</ul>

<h2>أنواع رأب الجفن</h2>

<ul>
  <li>رأب الجفن العلوي</li>
  <li>رأب الجفن السفلي</li>
</ul>

<h2>ما قبل الجراحة والتخدير من رأب الجفن</h2>

<ul>
  <li>تحليل إنتاج الدموع وقياس الجفن</li>
  <li>تقييم الحالة العامة للعيون من قبل طبيب العيون</li>
  <li>فحص العين الكامل</li>
</ul>

<h2>كيف يتم إجراء رأب الجفن؟</h2>

<ul>
  <li>رأب الجفن العلوي: يتم عمل شق في الجفن، ثم يتم إغلاق الشق بغرز دقيقة جداً.</li>
  <li>رأب الجفن السفلي: يتم إجراء العملية عبر الملتحمة أو عبر الجلد.</li>
</ul>

<h2>فوائد جراحة الجفون</h2>

<ul>
  <li>تحسين مظهر العيون بشكل واضح وعام</li>
  <li>تجديد شباب الوجه</li>
  <li>إزالة الأكياس</li>
  <li>نتائج دائمة</li>
</ul>

<h2>رأب الجفن بعد العملية الجراحية - الرعاية بعد جراحة الجفن</h2>

<ul>
  <li>تورم خفيف في منطقة الجفن</li>
  <li>كدمة أو منطقة متهيجة</li>
  <li>وضع مرهم على العين</li>
  <li>إبقاء رأسك منتصباً</li>
  <li>وضع كمادات باردة على الجفن</li>
  <li>العودة إلى العمل بعد 7 إلى 10 أيام</li>
</ul>

<h2>مضاعفات عملية رأب الجفن ؟</h2>

<ul>
  <li>التهابات أو ردود فعل للتخدير</li>
  <li>رؤية غير واضحة أو مزدوجة</li>
</ul>

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
