<template>
  <div class="page">
    <div class="banner-main">
      <div class="container banner-main__content">
        <div class="banner-main__wrap">
          <p class="banner-main__text">
            Родилась в 1992 году в семье адвокатов. После окончания школы решила продолжить заниматься юридической
            династией и поставила себе цель- стать адвокатом. С 2010 по 2012гг.обучалась в юридическом колледже при
            Российской Академии Адвокатуры и Нотариата (далее РААН), окончив его с отличием, получила специализацию
            «юрист в сфере право социального обеспечения». Далее с 2012 по 2015 обучалась в РААН, окончила с отличием,
            получив квалификацию юрист-бакалавр, тот же год окончила 4.5 обучение на курсах английского языка при
            академии (РААН), получила квалификацию «юрист-переводчик в сфере массовой коммуникации». С 2015-2017г.
            магистратура, с отличием, при РААН. На протяжении своего обучения, посещала и участвовала на международных
            научных конференциях,
          </p>
          <p class="banner-main__text"></p>
          <span @click="$modal.show('application');">
            <Button href="#" class="banner-main__button" type="a">ЗАЯВКА НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</Button>
          </span>
        </div>
      </div>
    </div>
    <section class="section section-info" v-animate="'animate__fadeIn'">
      <div class="container">
        <h2 class="section-info__name">Биография</h2>
        <p class="section-info__text">Родилась в 1992 году в семье адвокатов. После окончания школы решила продолжить
          заниматься юридической династией и поставила себе цель- стать адвокатом. С 2010 по 2012гг.обучалась в
          юридическом колледже при Российской Академии Адвокатуры и Нотариата (далее РААН), окончив его с отличием,
          получила специализацию «юрист в сфере право социального обеспечения». Далее с 2012 по 2015 обучалась в РААН,
          окончила с отличием, получив квалификацию юрист-бакалавр, тот же год окончила 4.5 обучение на курсах
          английского языка при академии (РААН), получила квалификацию «юрист-переводчик в сфере массовой коммуникации».
          С 2015-2017г. магистратура, с отличием, при РААН. На протяжении своего обучения, посещала и участвовала на
          международных научных конференциях,</p>
        <a href="#" class="section-info__link">Подробнее</a>
      </div>

    </section>
    <section class="section section-advantage" v-animate="'animate__fadeIn'">
      <div class="section-advantage__col">
        <div class="section-advantage__item section-advantage__item-menu" @click.prevent="setActive('item1')"
          :class="{ active: isActive('item1') }" href="#item1">
          <div class="section-advantage__icon">
            <Icon name="advantage-1" />
          </div>
          <div class="section-advantage__name">Уголовно-правовая <br /> помощь
            <div class="section-advantage__menu">
              <div class="section-advantage__menu-name">консультирование по вопросам уголовного права</div>
              <div class="section-advantage__menu-name">ознакомление с материалами уголовного дела</div>
              <div class="section-advantage__menu-name">составление заявлений, жалоб, ходатайств и других документов
              </div>
              <div class="section-advantage__menu-name">защита интересов доверителя </div>
            </div>
          </div>
        </div>
        <div class="section-advantage__item section-advantage__item-menu" @click.prevent="setActive('item2')"
          :class="{ active: isActive('item2') }" href="#item2">
          <div class="section-advantage__icon">
            <Icon name="advantage-2" />
          </div>
          <div class="section-advantage__name">
            Трудовые споры, где адвокат проводит
            <div class="section-advantage__menu">
              <div class="section-advantage__menu-name">экспертизу трудовых договоров</div>
              <div class="section-advantage__menu-name">консультации по всем вопросам трудового права</div>
              <div class="section-advantage__menu-name">представление интересов работника на претензионном этапе урегулирования трудового спора</div>
              <div class="section-advantage__menu-name">обжалование незаконных действий работодателя</div>
              <div class="section-advantage__menu-name">обжалование незаконных действий работодателя</div>

              <div class="section-advantage__menu-name">помощь в составлении и подачи исков по трудовому спору,</div>
              <div class="section-advantage__menu-name">обжалование в кассационном и надзорном порядке решений судов по трудовым спорам.</div>

            </div>
          </div>
        </div>
        <div class="section-advantage__item section-advantage__item-menu" @click.prevent="setActive('item3')"
          :class="{ active: isActive('item3') }" href="#item3">
          <div class="section-advantage__icon">
            <Icon name="advantage-3" />
          </div>
          <div class="section-advantage__name">Защита прав потребителей
            <div class="section-advantage__menu">
              <div class="section-advantage__menu-name">защиту прав потребителей при купле-продаже техники, автомобилей, в том числе товаров ненадлежащего качества, а также недвижимости</div>
              <div class="section-advantage__menu-name">сотрудничество с экспертными учреждениями;</div>
              <div class="section-advantage__menu-name">защиту прав потребителей при получении туристических, медицинских, юридических, строительных, образовательных услуг</div>
              <div class="section-advantage__menu-name">урегулирование споров в досудебном порядке (составление и подача претензий);
              <div class="section-advantage__menu-name">составление и подача исков по защите прав потребителей в суд, представительство интересов клиента в суде, в том числе без его участия</div>
              <div class="section-advantage__menu-name">представление Ваших интересов и обращение в Прокуратуру РФ, Роспотребнадзор, Министерство образования и т.д. </div>

              </div>
            </div>
          </div>
        </div>
        <div class="section-advantage__item section-advantage__item-menu" @click.prevent="setActive('item4')"
          :class="{ active: isActive('item4') }" href="#item4">
          <div class="section-advantage__icon">
            <Icon name="advantage-4" />
          </div>
          <div class="section-advantage__name">Жилищные  <br /> споры
            <div class="section-advantage__menu">
              <div class="section-advantage__menu-name">юридическое консультирование</div>
              <div class="section-advantage__menu-name">представление интересов в судебных инстанциях по урегулированию жилищных споров</div>
              <div class="section-advantage__menu-name">помощь при вселении (выселении) после расторжения брака</div>
              <div class="section-advantage__menu-name">Вопросы недвижимости, консультация и сопровождение сделок</div>
              <div class="section-advantage__menu-name">выселение из помещений и общежитий служебного назначения</div>
              <div class="section-advantage__menu-name">подтверждение имущественных прав на жилое помещение</div>
              <div class="section-advantage__menu-name">подтверждение утраты права пользования жилой площадью</div>
              <div class="section-advantage__menu-name">помощь в предоставлении жилья в связи со сносом дома</div>

            </div>
          </div>
        </div>
        <div class="section-advantage__item section-advantage__item-menu" @click.prevent="setActive('item6')"
          :class="{ active: isActive('item6') }" href="#item6">
          <div class="section-advantage__icon">
            <Icon name="advantage-4" />
          </div>
          <div class="section-advantage__name">Услуги адвокатов, в сфере семейных правоотношений

            <div class="section-advantage__menu">
              <div class="section-advantage__menu-name">Ведение бракоразводного процесса под ключ;</div>
              <div class="section-advantage__menu-name">Раздел имущества супругов при разводе</div>
              <div class="section-advantage__menu-name">Определение места жительства ребенка</div>
              <div class="section-advantage__menu-name">Установление порядка общения с детьми</div>
              <div class="section-advantage__menu-name">Взыскание алиментов как в долевом соотношении, так и в твердой денежной сумме</div>
              <div class="section-advantage__menu-name">Ограничения в осуществлении родительских прав</div>
              <div class="section-advantage__menu-name">Лишение родительских прав</div>

            </div>
          </div>
        </div>
        <div class="section-advantage__item section-advantage__item-menu" @click.prevent="setActive('item5')"
          :class="{ active: isActive('item5') }" href="#item5">
          <div class="section-advantage__icon">
            <Icon name="advantage-5" />
          </div>
          <div class="section-advantage__name">Интеллектуальная собственность
            <div class="section-advantage__menu">
              <div class="section-advantage__menu-name">консультирование по вопросам правового положения объектов интеллектуальной собственности и особенностей их практического использования в хозяйственной деятельности предприятия</div>
              <div class="section-advantage__menu-name">анализ и составление лицензионных договоров, договор об уступке прав  на объекты интеллектуальной собственности, усиление позиции «слабой стороны» в договоре;</div>
              <div class="section-advantage__menu-name">правовое обеспечение сохранности коммерческой тайны (секрета производства (НОУ-ХАУ) организации</div>
              <div class="section-advantage__menu-name">представительство интересов в судах общей юрисдикции и арбитражных судах</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-advantage__col">
        <div class="section-advantage__text" :class="{ 'active show': isActive('item1') }" id="item1">
          <vue-custom-scrollbar class="section-advantage__scroll" ps-scroll-right :settings="settings">
            <p v-for="(item,idx) in 15" :key="'long-' + idx">
              <p>Если Вы столкнулись с тяжбой уголовного преследования и не
              знаете куда Вам обратиться и что делать! Очень важно участие адвоката на стадиях предварительного
              следствия, так как избрание меры пресечения-для судебной практики является ключевым аспектом при вынесении
              обвинительного приговора, связанного с лишением свободы. Поэтому, при задержании, предъявлении обвинения
              Вы всегда можете воспользоваться своим конституционным правом - Никто не обязан свидетельствовать против
              себя самого, своего супруга и близких родственников, круг которых определяется федеральным законом (ст.51
              Конституции РФ) и найти адвоката, который будет следить за законностью проведения следственных действий,
              защищая Ваши права и законные интересы, выстроит грамотную защиту и сформирует стратегию освобождения от
              уголовного преследования. Если же, так случилось, что Вы обращаетесь для защиты в уголовном процессе,
              необходимо найти специалиста, кто будет отстаивать Вас в суде, отбивая доводы следствия и позицию
              прокурора, представляя доказательства Вашей невиновности.
              </p>
              <p>
              Так же, хотим отдельно обратиться ко всем родителям, бабушкам и дедушкам… На сегодняшний день, поколение
              детей, увы, но очень жесткое! Отсутствуют духовные ценности, уважение к старшим, к семье, подростки могут
              позволять противоправные действия по отношению к друг другу и последствиями поступят-либо ломание
              социальной жизни ребенку, либо полная безнаказанность и потакание. За нашим поколением – будущее и являюсь
              защитником прав и интересов несовершеннолетних, поэтому открываю завесу закона и правопорядка. Сколько к
              нам обращаются отчаянных мам, которые не знают, как быть с собственным чадом, который дома замечательный,
              но, будучи в стенах учебного заведения откровенно зверствует, за советом и юридической помощью. Необходимо
              понимать каждому подростку, что уголовная ответственность наступает в полном объёме с 16-ти ЛЕТ, а по
              отдельным составам преступления с 14-ти ЛЕТ! Незнание закона – не освобождает от уголовной
              ответственности! Так же распространены случае- когда в школе на ребёнка откровенно давят и комплексуют,
              что, соответственно, разрушает его морально-нравственное состояние! Самое ужасное, когда это происходит со
              стороны педагогического состава. МЫ никогда не даем детей в обиду! Поэтому, если Вам нужна юридическая
              помощь: вашего ребенка унижают и оскорбляют в школе или, трудности подросткового возраста, ребенок
              откровенно не понимает и в силу максимализма, не хочет понимать свои поступки и осознавать свое поведение.
              Наша команда всегда к Вашим услугам. Нет ничего не решаемого! Адвокаты Шмелевы
              </p>
          </vue-custom-scrollbar>
        </div>
        <div class="section-advantage__text" :class="{ 'active show': isActive('item2') }" id="item2">
          <vue-custom-scrollbar class="section-advantage__scroll" ps-scroll-right :settings="settings">
            <p v-for="(item,idx) in 15" :key="'long-' + idx"> Консультирование по вопросам уголовного и
             Приобретая любую услугу, Вы имеете право на ее качество!  А, если Вам оказали некачественную услугу, в зависимости от последствий, Вы имеете право требовать возврата денежных средств за услугу, компенсацию морального вреда, если услугу Вам оказали и результатом ее стал урон Вашему здоровью-оплату лечения и реабилитационного периода. На этом не ограничиваются Ваши права… Для защиты своих прав необходимо подтвердить несколько фактов: 1) услугу делали Вам;.2) Вы оплатили услугу надлежащим образом (на руках обязательно подписанный договор и кассовый чек ( не видитесь на приходный ордер, его выдают недобросовестные компании для избежания налогов); 3) точные реквизиты организации и лица, кто оказал Вам услугу.  Адвокаты Шмелевы
            </p>
          </vue-custom-scrollbar>
        </div>
         <div class="section-advantage__text" :class="{ 'active show': isActive('item3') }" id="item3">
          <vue-custom-scrollbar class="section-advantage__scroll" ps-scroll-right :settings="settings">
            <p v-for="(item,idx) in 15" :key="'long-' + idx"> Консультирование по вопросам уголовного и
             Приобретая любую услугу, Вы имеете право на ее качество!  А, если Вам оказали некачественную услугу, в зависимости от последствий, Вы имеете право требовать возврата денежных средств за услугу, компенсацию морального вреда, если услугу Вам оказали и результатом ее стал урон Вашему здоровью-оплату лечения и реабилитационного периода. На этом не ограничиваются Ваши права… Для защиты своих прав необходимо подтвердить несколько фактов: 1) услугу делали Вам;.2) Вы оплатили услугу надлежащим образом (на руках обязательно подписанный договор и кассовый чек ( не видитесь на приходный ордер, его выдают недобросовестные компании для избежания налогов); 3) точные реквизиты организации и лица, кто оказал Вам услугу.  Адвокаты Шмелевы
            </p>
          </vue-custom-scrollbar>
        </div>
        <div class="section-advantage__text" :class="{ 'active show': isActive('item4') }" id="item4">
          <vue-custom-scrollbar class="section-advantage__scroll" ps-scroll-right :settings="settings">
            <p v-for="(item,idx) in 15" :key="'long-' + idx"> Консультирование по вопросам уголовного и
             К сожалению, все больше и больше интереса у мошенников вызывают любые взаимоотношения имущественного характера, направленные на захват, обман и максимальное извлечение прибыли путем реализации или использования в иных целях недвижимости. Поэтому, вышеуказанный спектр юридических услуг не является исчерпывающим. Каждая ситуация она не идентична остальным, и с развитием общества, преступности открываются новые горизонты. Адвокаты Шмелевы
             </p>
          </vue-custom-scrollbar>
        </div>
        <div class="section-advantage__text" :class="{ 'active show': isActive('item6') }" id="item6">
          <vue-custom-scrollbar class="section-advantage__scroll" ps-scroll-right :settings="settings">
            <p v-for="(item,idx) in 15" :key="'long-' + idx"> Консультирование по вопросам уголовного и
             
             Вопросы семьи, новоиспеченной семьи или ячейки общества, подлежащей распаду очень субъективны и сопряжены нервными потрясениями. Поэтому, на этапе становления/ распада важно грамотно организовать правовую документацию, сопровождения Вашего брака или развода. Очень много семей живут с откровенным незнанием своих прав, привилегий, свобод и ограничивают свои интересы, увы не только свои, но и детей. Наши юридические инструменты по разрешению Вашего любого вопроса в семейном праве отточены исключительно на Ваш интерес. Что Вы хотите от сложившейся ситуации? Но не знаете как решить? Необязательно доводить семью до развода, да, безусловно, имеются вопиющие ситуации, при которых сохранении семьи, просто не представляется возможным. Поэтому, будь то торжество у Вас, в таком случае мы, при Вашем желании создадим финансовую страховку Вашей семьи, путем урегулирования имущественных отношений и определение его судьбы в дальнейшим. Никто не знает, что будет завтра, поэтому, живем Здесь! Сегодня! Сейчас! Если, же у Вас горе! Мы разделим его и поможем Вам не думать о последствиях! Мы все сделаем сами: соберем весь материал, подадим адвокатские запросы в нужные нам структуры (для доказательственной базы), составим все правовые документы и будем представлять вас в судебных заседаниях! При этом, общение с оппонентом Вас может вообще не касаться! Для нас главное - ваше спокойствие и поддержание нашего имени, заработанного поколениями. Мы не держимся на «хайпе», покоряя информационно-социальные ресурсы, разбивая впоследствии ожидания доверителя. Мы, изначально люди! Поэтому, у нас лояльная финансовая политика по оплате наших услуг в семейном праве. У нас сформировалась своя династия правовых советников в юридических вопросах, мы- адвокаты!  Адвокаты Шмелевы

             </p>
          </vue-custom-scrollbar>
        </div>
        <div class="section-advantage__text" :class="{ 'active show': isActive('item5') }" id="item5">
          <vue-custom-scrollbar class="section-advantage__scroll" ps-scroll-right :settings="settings">
            <p v-for="(item,idx) in 15" :key="'long-' + idx"> Консультирование по вопросам уголовного и
             Дорогие доверители - деятели науки, искусства, творчества и наши прекрасные ученые! Институт интеллектуальной собственности является самым молодым витком в системе права. Очень важно правильно оформить и закрепить в соответствующих источниках ваше правовладение! На сегодняшний день, за нелегальное использование результатов интеллектуальной собственности предусмотрена ответственность: гражданская, административная, уголовная! Наша команда на протяжении многих лет профессионально занимается и сотрудничает со многими авторами, компаниями, добросовестно защищая и отстаивая интересы своего доверителя! Мы ценим, что с каждым годом все больше и больше «умов» доверяет их «создание» нам. Нет ничего не решаемого! Адвокаты Шмелевы
             </p>
          </vue-custom-scrollbar>
        </div>
      </div>
    </section>
    <section class="section section-news" v-animate="'animate__fadeIn'">
      <h2 class="section-news__name">Новости и статьи</h2>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="card">
          <a class="card__image" href="/detail">
            <img src="https://sledcom.ru/upload/site1/document_news/rvsO2t16TI-crop.jpeg" alt="">
          </a>
          <div class="card__content">
            <a class="card__name" href="/detail">НЕКОТОРЫЕ КРИМИНОЛОГИЧЕКИЕ АСПЕКТЫ ПРИЧИН
              СУЩЕСТВОВАНИЯ ОРГАНИЗОВАННОЙ ПРЕСТУПНОСТИ.</a>
            <div class="card__text">организованная преступность, коррупция,
              криминальный бизнес, национальная безопасность, уголовная политика,
              систематическое нарушение закона.</div>
            <div class="card__link">
              <div class="card__link-icon">
                >
              </div>
              <span>ЧИТАТЬ ПОДРОБНЕЕ</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="card">
          <a class="card__image" href="/detail-1">
            <img src="https://vseprorazvod.ru/wp-content/uploads/2017/06/brachnyj-dogovor-na-kvartiru-v-brake-1.jpg"
              alt="">
          </a>
          <div class="card__content">
            <a class="card__name" href="/detail-1">«Совет адвоката при заключении брачного договора».</a>
            <div class="card__text">На сегодняшний день, все больше и больше волнений и переживаний
              среди социума вызывает вопрос судьбы совместно нажитого имущества
              между супругами/бывшими супругами.</div>
            <div class="card__link">
              <div class="card__link-icon">
                >
              </div>
              <span>ЧИТАТЬ ПОДРОБНЕЕ</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="card">
          <a href="/detail-2" class="card__image">
            <img
              src="https://www.culture.ru/storage/images/fc4dd2cce03a6fcb34cade377fee4bda/aa1dec4be38ab2d2f0f828659574f4a1.jpg"
              alt="">
          </a>
          <div class="card__content">
            <a class="card__name" href="/detail-2">Коррупция как основа существования организованной преступности в
              Российской Федерации.</a>
            <div class="card__text">организованная преступность, коррупция, субъект
              коррупции, бизнес, индустрия, предпринимательство, систематическое
              нарушение закона</div>
            <div class="card__link">
              <div class="card__link-icon">
                >
              </div>
              <span>ЧИТАТЬ ПОДРОБНЕЕ</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="card">
          <a href="/detail-3" class="card__image">
            <img src="https://fb.ru/media/i/1/1/0/2/8/5/1/i/1102851.jpg" alt="">
          </a>
          <div class="card__content">
            <a class="card__name" href="/detail-3">«Организованная преступность: описание, объяснение,
              противодействие»</a>
            <div class="card__text">Высокий уровень организованной преступности, низкий уровень жизни
              населения, естественно, криминализация общественных отношений в
              совокупности создают внутренние и внешние угрозы национальной
              безопасности многим странам мира.</div>
            <div class="card__link">
              <div class="card__link-icon">
                >
              </div>
              <span>ЧИТАТЬ ПОДРОБНЕЕ</span>
            </div>
          </div>
        </swiper-slide>
        <div class="slider-navigation container" slot="button-prev">
          <div class="slider__prev" slot="button-prev"></div>
          <div class="slider__next" slot="button-next"></div>
        </div>

      </swiper>
    </section>
    <div class="footer__button-top" v-scroll-to="'#app'">
      <Icon name="Arrow" />

    </div>
  </div>
</template>

<script>
  import Icon from '@/components/Icon/Icon.vue'
  import Button from '@/components/Button.vue'
  import vueCustomScrollbar from 'vue-custom-scrollbar'

  export default {
    data() {
      return {
        activeItem: 'item1',
        settings: {
          maxScrollbarLength: 60,
          wheelSpeed: 20,
        },
        swiperOptions: {
          spaceBetween: 24,
          speed: 400,

          initialSlide: 2,
          watchOverflow: true,
          loop: true,
          loopFillGroupWithBlank: true,
          observer: true,
          observeParents: true,
          autoHeight: false,
          navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev'
          },
          breakpoints: {
            '0': {
              slidesPerView: 1,
              centeredSlides: false,
            },
            767: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            991: {
              slidesPerView: 'auto',
              centeredSlides: true,

            }
          }

        }
      }
    },
    components: {
      Button,
      Icon,
      vueCustomScrollbar
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods: {
      isActive(menuItem) {
        return this.activeItem === menuItem
      },
      setActive(menuItem) {
        this.activeItem = menuItem
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/config";
  @import "~assets/scss/mixins";

  .banner-main {
    height: calc(100vh - 72px);
    max-height: 828px;
    min-height: 700px;
    background-image: url('~assets/img/banner-main.png');
    background-size: cover;

    @include respond-to(sm) {
      background-position: 70% 50%;
    }


    &__wrap {
      max-width: 50%;

      @include respond-to(lg) {
        max-width: 70%;
      }

      @include respond-to(md) {
        max-width: 100%;
      }


    }

    &__button {
      margin-top: 50px;

      @include respond-to(sm) {
        margin-top: 0;
      }

    }

    &__content {
      display: flex;
      align-items: center;
      height: 100%;

      @include respond-to(sm) {
        align-items: flex-end;
        padding-bottom: 40px;
      }
    }

    &__name {
      margin: 0;
      text-align: left;
      font-size: 24px;
      line-height: 32px;
      font-weight: 500;
      color: #FFFFFF;
      text-transform: uppercase;
      margin-bottom: 37px;

      @include respond-to(sm) {
        font-size: 16px;
        line-height: normal;
      }

    }

    &__text {
      text-align: left;
      font-size: 14px;
      line-height: 26px;
      font-weight: 400;
      letter-spacing: 0.34px;
      color: #FFFFFF;

      @include respond-to(sm) {
        display: none;
      }

    }
  }

  .section-info {
    padding: 100px 0;
    background-image: url('~assets/img/Clumn.png');
    background-size: 35%;
    background-position: 100% 100%;
    background-repeat: no-repeat;

    @include respond-to(md) {
      background-image: none;
    }

    @include respond-to(sm) {
      padding: 50px 0;
    }


    &__name {
      text-align: left;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      color: #720C0C;
      text-transform: uppercase;
      margin-bottom: 50px;

      @include respond-to(sm) {
        margin-bottom: 20px;
      }

    }

    &__text {
      text-align: left;
      font-size: 14px;
      line-height: 26px;
      font-weight: 400;
      color: #262626;
      margin-bottom: 27px;
      max-width: 600px;
    }

    &__link {
      text-align: left;
      text-decoration: underline;
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      color: #720C0C;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .page {
    background: #fff;
    position: relative;
  }

  .section-advantage {
    display: flex;

    &__col {
      width: 50%;
      background: #262626;
      padding: 100px 0;

      @include respond-to(lg) {
        padding: 60px 0;
      }

      @include respond-to(sm) {
        width: auto;
      }



      &:last-child {
        background: #3E3E3E;
        padding: 0;


      }
    }

    &__icon {
      background: #720C0C 0% 0% no-repeat padding-box;
      border-radius: 15px;
      min-width: 48px;
      height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      @include respond-to(sm) {
        margin-left: 24px;
        margin-right: 24px;
      }

    }

    &__name {
      text-align: left;
      font-size: 18px;
      line-height: 21px;
      font-weight: 500;
      color: #FFFFFF;
      opacity: 0.5;
      margin-left: 24px;
      cursor: pointer;

      @include respond-to(sm) {
        display: block;
        margin: 0;
        font-size: 8px;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        margin: 10px 10px;
      }



    }

    &__item {
      display: flex;
      align-items: center;
      max-width: 360px;
      margin: auto;
      margin-bottom: 48px;

      @include respond-to(lg) {
        max-width: 100%;

      }

      @include respond-to(sm) {
        width: 98px;
        flex-wrap: wrap;
        margin-bottom: 18px;


      }


      &-menu {
        align-items: inherit;

        .section-advantage__menu {
          display: none;
        }

        &.active {
          .section-advantage__menu {
            display: block;

          }
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        .section-advantage__name {
          opacity: 1;
        }
      }
    }

    &__text {
      text-align: left;
      letter-spacing: 0px;
      color: #FFFFFF;
      text-align: left;
      font-size: 14px;
      font-weight: 40;
      line-height: 24px;
      display: none;

      &.show {
        display: block;
      }
    }

    &__menu {
      margin-top: 24px;

      @include respond-to(sm) {
        display: none;
      }

      &-name {
        text-align: left;
        font-size: 14px;
        line-height: 21px;
        font-weight: 400;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 0.5;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          opacity: 1;
        }
      }
    }

    &__scroll {
      max-height: 840px;
      padding: 60px;

      @include respond-to(lg) {
        padding: 60px 24px;
      }

      @include respond-to(sm) {
        max-height: 600px;
        padding-top: 0;
        padding-bottom: 0;
      }


    }
  }

  .section-news {
    padding: 70px 0;

    @include respond-to(lg) {
      padding: 60px 0;
    }

    @include respond-to(md) {
      .swiper-container {
        margin: 0 20px;
        padding: 0 4px;
      }
    }



    &__name {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      color: #262626;
      text-transform: uppercase;
      margin-bottom: 60px;

      @include respond-to(lg) {
        margin-bottom: 24px;
      }

    }
  }

  .card {
    max-width: 336px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 6px #00000029;
    border-radius: 0px 0px 6px 6px;
    margin-bottom: 10px;
    cursor: pointer;

    @include respond-to(lg) {
      max-width: 300px;
    }

    @include respond-to(md) {
      max-width: 100%;
    }

    &:hover {
      .card__link-icon {
        opacity: 1;
      }
    }

    &__image {
      height: 276px;
      opacity: 1;
      background: #ccc;
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
      display: block;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &__content {
      padding: 20px 30px;
    }

    &__name {
      text-align: left;
      font-size: 13px;
      font-weight: bold;
      line-height: 31px;
      letter-spacing: 1.3px;
      color: #262626;
      text-decoration: none;
      max-height: 100px;
      display: block;
      overflow: hidden;
      line-height: 24px;
    }

    &__text {
      text-align: left;
      font-size: 12px;
      line-height: 21px;
      font-weight: 400;
      color: #262626;
      opacity: 0.65;
      margin-bottom: 20px;
    }

    &__link {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        text-align: left;
        font-size: 11px;
        line-height: 31px;
        font-weight: bold;
        letter-spacing: 1.1px;
        color: #9F9F9F;
        margin-left: 20px;
      }

      &-icon {
        background: #720C0C 0% 0% no-repeat padding-box;
        opacity: 0.6;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        transition: all .2s;
      }
    }
  }

  .card.swiper-slide {
    opacity: 0.5;
  }

  .card.swiper-slide-prev {
    opacity: 1;
  }

  .card.swiper-slide-active {
    opacity: 1;
  }

  .card.swiper-slide-next {
    opacity: 1;
  }


  .animate {
    animation-duration: 1.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }


  @keyframes fadeIn {
    0% {
      opacity: 0
    }

    to {
      opacity: 1
    }
  }

  .animate__fadeIn.animate-active {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn
  }

  .slider-navigation {
    position: absolute;
    top: 50%;
    height: 0;
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }

  .slider__prev,
  .slider__next {
    width: 44px;
    height: 44px;
    transform: translateY(-50%);
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 1px 1px 6px #0000006C;
    border-radius: 50%;
    outline: none;
    z-index: 10;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all .2s;

    @include respond-to(md) {
      display: none;
    }


    &:hover {
      border: 1px solid #720C0C;
    }
  }

  .slider__prev {
    margin-left: -60px;
    right: auto;
  }

  .slider__next {
    margin-right: -60px;
    left: auto;
  }
</style>