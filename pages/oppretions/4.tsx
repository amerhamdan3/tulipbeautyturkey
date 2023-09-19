import { PageContent } from "./layout";
import Title from "./layout";

export default function Page() {

return (
<main>
    <Title> 
        <h2 className="tpbreadcrumb-title">جراحة تجميل الأنف</h2>
            <p>جراحة تجميل الأنف (Rhinoplasty) هي إجراء جراحي يُعزز مظهر الأنف ونناسبه وهي مُوصى بها للمرضى الذين يشعرون بعدم الرضا عن حجم أو شكل أو مظهر أعضاء الشم.</p>
    </Title>

    <PageContent>
    <div className="services-details-item mb-55">
                <div className="services-details-thumb mb-30">
                  <img src="/assets/img/services/service-details/service-details-2.jpg"alt="" />
                </div>
                <h4 className="services-details-item-title">
                من هم المرضى المستحسن إجراء جراحة تجميل الأنف عليهم ؟
                </h4>
                <p>
                    بشكل عام، يمكن أن يتقدم بجراحة تجميل الأنف جميع الأشخاص الذين يشعرون بعدم الراحة بشكل وحجم أنوفهم. يجب أن يتم إجراء العملية بدءًا من سن 18 عام عندما يكتمل تطور الهياكل العظمية للوجه.
                </p>

                <h2>النتائج التي يمكن تحقيقها من خلال جراحة تجميل الأنف</h2>
                <ul>
                    <li>زيادة أو تقليل حجم الأنف</li>
                    <li>تصحيح شكل الظهر الأنفي</li>
                    <li>تحسين انبثاق طرف الأنف</li>
                    <li>إصلاح ملامح الأنف</li>
                    <li>تصحيح انحرافات أو تشوهات الأنف</li>
                    <li>تخفيف الحُزَمَة أو النتوء العظمي للأنف</li>
                    <li>تنحيف جناحي الأنف</li>
                    <li>تناسق شكل وحجم الفتحات الأنفية</li>
                </ul>

                <h2>كيف يتم إجراء جراحة تجميل الأنف؟</h2>
                <p>
                    يمكن إجراء جراحة تجميل الأنف عن طريق طريقتين:
                    <ul>
                    <li>الطريقة المفتوحة: يتم إجراء شق في قاعدة الأنف لرفع الجلد للوصول إلى الغضروف والعظم.</li>
                    <li>الطريقة المغلقة: يتم إجراء شقوق صغيرة داخل الأنف للوصول إلى الغضروف والعظم.</li>
                    </ul>
                </p>

                <h2>ما هي مرحلة ما قبل الجراحة لجراحة تجميل الأنف؟</h2>
                <p>
                    يجب إجراء العديد من الفحوصات قبل جراحة تجميل الأنف لتقييم الحالة الصحية للمريض والتأكد من عدم وجود أي موانع للجراحة.
                </p>

                <h2>التعافي بعد الجراحة</h2>
                <p>
                    يتطلب التعافي من جراحة تجميل الأنف عدة أسابيع. قد يعاني المريض من تورم وكدمات في البداية، والتي ستزول تدريجيًا.
                </p>

                <h2>أسئلة شائعة حول جراحة تجميل الأنف</h2>
                <ul>
                    <li>ما هي العيوب التي يمكن تصحيحها بعملية تجميل الأنف؟</li>
                    <li>ما هي الفترة الزمنية المتوقعة للتعافي بعد جراحة تجميل الأنف؟</li>
                    <li>هل تترك جراحة تجميل الأنف الندبات ؟</li>
                    <li>هل يمكنني العودة لارتداء النظارات بعد الجراحة؟</li>
                    <li>هل أنا مرشح لجراحة تجميل الأنف؟</li>
                </ul>

                <p>
                    يجب استشارة جراح تجميل الأنف للحصول على مزيد من المعلومات حول الجراحة ومدى ملاءمتها للمريض.
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
