import { PageContent } from "./layout";
import Title from "./layout";

export default function Page() {

return (
<main>
    <Title> 
        <h2 className="tpbreadcrumb-title">التثدي عند الرجال</h2>
        <p>
            التثدي هو حالة تضخم أنسجة الثدي لدى الرجال. يمكن أن يؤثر على أحد الثديين أو كليهما. 
        </p> 
    </Title>

    <PageContent>
    <div className="services-details-item mb-55">
                {/* <div className="services-details-thumb mb-30">
                  <img src="/assets/img/services/service-details/service-details-2.jpg"alt="" />
                </div> */}
                <p>
                    التثدي شائع نسبيًا، ويقدر أنه يؤثر على ما بين 40٪ إلى 60٪ من الرجال. يمكن أن يحدث في أي عمر، ولكن هو أكثر شيوعًا في مرحلة المراهقة والبلوغ.
                </p>
                
                    هناك عدة أسباب للتثدي، بما في ذلك:
                    <ul>
                    <li>التغيرات الهرمونية</li>
                    <li>الأدوية</li>
                    <li>الأمراض المزمنة</li>
                    <li>العوامل الوراثية</li>
                    </ul>
                
                <p>
                    يعتمد علاج التثدي على شدة الحالة. في الحالات البسيطة، قد يكون العلاج غير الجراحي كافيًا. تشمل العلاجات غير الجراحية ما يلي:
                    <ul>
                    <li>تغيير نمط الحياة، مثل فقدان الوزن والتمارين الرياضية</li>
                    <li>تنظيم الهرمونات</li>
                    <li>الأدوية</li>
                    </ul>
                </p>
                <p>
                    في الحالات الشديدة، قد يكون العلاج الجراحي ضروريًا. تتضمن الجراحة إزالة أنسجة الثدي الزائدة.
                </p>
                <h2>أسئلة شائعة</h2>
                <p>
                    <b>ما هو سبب التثدي لدى الرجال؟</b>
                    <br/>قد يكون للتثدي لدى الرجال أسباب متنوعة، بما في ذلك التغيرات الهرمونية، والأدوية، والأمراض المزمنة، والعوامل الوراثية.
                </p>
                <p>
                    <b>هل التثدي لدى الرجال شائع؟</b>
                    <br/>نعم، التثدي لدى الرجال شائع نسبيًا ويمكن أن يحدث في أي مرحلة من مراحل الحياة.
                </p>
                <p>
                    <b>هل يمكن علاج التثدي لدى الرجال بدون جراحة؟</b>
                    <br/>نعم، في العديد من الحالات يمكن علاج التثدي لدى الرجال بواسطة علاجات غير جراحية مثل تغيير نمط الحياة، والتمارين الرياضية، وتنظيم الهرمونات، والأدوية.
                </p>
                <p>
                    <b>هل هناك حاجة للجراحة في بعض الحالات؟</b>
                    <br/>نعم، في حالات التثدي الشديدة أو التي لا تستجيب للعلاجات الغير جراحية، يمكن أن تكون الجراحة هي الخيار الأمثل.
                </p>
                <p>
                    <b>هل هناك آثار جانبية لجراحة التثدي لدى الرجال؟</b>
                    <br/>من الممكن وجود آثار جانبية مؤقتة بعد جراحة التثدي لدى الرجال مثل الألم والورم، ولكن عادة ما تتلاشى هذه الآثار مع مرور الوقت.
                </p>
                <p>
                    <b>هل يمكن منع التثدي لدى الرجال؟</b>
                    <br/>لا يمكن دائمًا منع التثدي لدى الرجال، ولكن يمكن تقليل خطر حدوثه من خلال الحفاظ على نمط حياة صحي، وتجنب استخدام بعض الأدوية التي يمكن أن تسبب التثدي، والتحكم في العوامل الهرمونية إذا كان ذلك ضروريًا.
                </p>
                <p>
                    <b>هل يمكن للتثدي لدى الرجال أن يكون علامة على مشكلة صحية أخرى؟</b>
                    <br/>نعم، في بعض الحالات، قد يكون التثدي لدى الرجال علامة على وجود مشكلة صحية أخرى مثل اضطراب هرموني أو مرض مزمن، لذا من المهم استشارة الطبيب للتحقق من الأسباب الأساسية.
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
