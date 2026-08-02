"use client";

import {
  ArrowRight,
  BarChart3,
  Bitcoin,
  BrainCircuit,
  Building2,
  CalendarCheck2,
  Check,
  ChevronDown,
  Clock3,
  Cloud,
  Factory,
  Headphones,
  HeartPulse,
  LineChart,
  Menu,
  Network,
  Play,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  UsersRound,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

const features = [
  {
    icon: BrainCircuit,
    title: "Точный прогноз нагрузки",
    text: "Учитывайте историю, сезонность, события и тренды, чтобы заранее знать потребность в людях.",
  },
  {
    icon: CalendarCheck2,
    title: "Оптимальные графики",
    text: "Собирайте расписания с учетом навыков, нормативов, доступности и пожеланий сотрудников.",
  },
  {
    icon: Clock3,
    title: "Учет рабочего времени",
    text: "Контролируйте присутствие и соблюдение графика в едином оперативном окне.",
  },
  {
    icon: Smartphone,
    title: "Мобильный кабинет",
    text: "Сотрудники видят смены, обмениваются ими и отправляют пожелания с любого устройства.",
  },
  {
    icon: BarChart3,
    title: "Аналитика в реальном времени",
    text: "Следите за планом и фактом, качеством сервиса и расходами на понятных дашбордах.",
  },
  {
    icon: Network,
    title: "Готовность к интеграциям",
    text: "Соединяйте WFM с ERP, HCM, BI, телефонией и другими системами компании.",
  },
];

const industries = [
  {
    id: "contact",
    icon: Headphones,
    label: "Контакт-центры",
    title: "Стабильный сервис в каждый интервал",
    text: "Прогнозируйте поток обращений, учитывайте навыки операторов и удерживайте целевой Service Level даже в часы пик.",
    points: ["Прогноз по каналам и очередям", "Multiskill-планирование", "Контроль соблюдения расписания"],
    stat: "до 95%",
    statLabel: "точность прогноза",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    label: "Ритейл",
    title: "Команда готова к покупательскому потоку",
    text: "Связывайте трафик, чеки и задачи в торговом зале, чтобы открывать нужное число касс и смен вовремя.",
    points: ["Анализ покупательского потока", "Планирование касс и зон", "Распределение задач по навыкам"],
    stat: "−12%",
    statLabel: "затрат на персонал",
  },
  {
    id: "production",
    icon: Factory,
    label: "Производство",
    title: "Ресурсы под каждый производственный план",
    text: "Планируйте бригады, смены и допуски с учетом норм выработки, квалификаций и требований безопасности.",
    points: ["Расчет потребности по операциям", "Учет квалификаций и допусков", "Интеграция с ERP"],
    stat: "+18%",
    statLabel: "эффективности смен",
  },
  {
    id: "medicine",
    icon: HeartPulse,
    label: "Медицина",
    title: "Графики с учетом норм и квалификаций",
    text: "Согласуйте загрузку клиник с доступностью специалистов и нормативами рабочего времени.",
    points: ["Планирование врачей и операторов", "Контроль нормативов", "Оперативные замены"],
    stat: "−30%",
    statLabel: "ручной работы",
  },
  {
    id: "horeca",
    icon: UtensilsCrossed,
    label: "HoReCa",
    title: "Гибкое планирование для переменного спроса",
    text: "Учитывайте бронирования, погоду и сезонность, быстро закрывайте короткие смены и замены.",
    points: ["Прогноз гостевого потока", "Короткие и гибкие смены", "Управление заменами"],
    stat: "+9%",
    statLabel: "качества сервиса",
  },
];

const faqs = [
  ["Сколько занимает запуск?", "Базовый контур можно запустить за несколько недель. Срок зависит от числа площадок, интеграций и выбранных модулей."],
  ["Можно начать с одной команды?", "Да. Пилотный запуск позволяет проверить качество прогноза и графиков на одной площадке, а затем масштабировать настройки."],
  ["Где размещается система?", "Доступны облачный вариант и развертывание в инфраструктуре компании. Архитектура подбирается под требования безопасности."],
  ["Как сотрудники работают с графиком?", "Через адаптивный web-кабинет: смотрят смены, задают предпочтения, подают заявки и обмениваются сменами."],
];

const pricingPlans = [
  {
    name: "Start",
    description: "Для небольших команд, которые переходят от таблиц к системному планированию.",
    price: "999",
    employees: "до 100 сотрудников",
    featured: false,
    features: ["Прогноз нагрузки", "Автоматические графики", "Личный кабинет сотрудника", "Базовая аналитика", "Поддержка по email"],
  },
  {
    name: "Business",
    description: "Для растущих контакт-центров, ритейла и распределённых сервисных команд.",
    price: "1499",
    employees: "до 500 сотрудников",
    featured: true,
    features: ["Все возможности Start", "Аналитика в реальном времени", "Интеграции с ERP, HCM и BI", "Управление навыками и очередями", "Приоритетная поддержка"],
  },
  {
    name: "Enterprise",
    description: "Для крупных компаний со сложной структурой, требованиями к SLA и безопасности.",
    price: "1999",
    employees: "без ограничений",
    featured: false,
    features: ["Все возможности Business", "On-premise или private cloud", "SSO и расширенные роли", "Персональные интеграции", "Выделенная команда и SLA"],
  },
] as const;

function Dashboard() {
  const bars = [46, 62, 54, 77, 71, 88, 64, 79, 68, 84, 73, 91, 76, 86];
  return (
    <div className="dashboard-wrap" aria-label="Интерфейс платформы WFM">
      <div className="dashboard-glow" />
      <div className="dashboard">
        <div className="dash-top">
          <div className="dash-logo"><span>W</span></div>
          <div className="dash-search">Поиск по системе</div>
          <div className="dash-user"><span>АН</span></div>
        </div>
        <div className="dash-body">
          <aside className="dash-side">
            {[0, 1, 2, 3, 4].map((item) => <span key={item} className={item === 1 ? "active" : ""} />)}
          </aside>
          <div className="dash-content">
            <div className="dash-heading">
              <div><small>Планирование</small><strong>Потребность в персонале</strong></div>
              <button>Август 2026 <ChevronDown size={11} /></button>
            </div>
            <div className="dash-metrics">
              <div><small>Точность прогноза</small><b>94,8%</b><em>+3,2%</em></div>
              <div><small>Сотрудников в смене</small><b>248</b><em>план</em></div>
              <div><small>Service level</small><b>87%</b><em>выше цели</em></div>
            </div>
            <div className="dash-chart">
              <div className="chart-caption"><b>Нагрузка и покрытие</b><span><i /> прогноз <i /> команда</span></div>
              <div className="bars">
                {bars.map((height, index) => (
                  <div key={index} className="bar-col">
                    <span style={{ height: `${height}%` }} />
                    <i style={{ height: `${Math.max(28, height - (index % 3) * 6)}%` }} />
                  </div>
                ))}
              </div>
              <div className="chart-axis"><span>08:00</span><span>11:00</span><span>14:00</span><span>17:00</span><span>20:00</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-card forecast-card"><span><Sparkles size={14} /></span><div><small>Прогноз обновлён</small><b>Покрытие 98%</b></div><Check size={15} /></div>
      <div className="floating-card shift-card"><div className="mini-avatar">ЕК</div><div><small>Новая смена</small><b>09:00 — 18:00</b></div></div>
    </div>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="WFM — на главную">
      <span className="logo-mark"><i /><i /><i /></span>
      <span className="logo-text">{siteConfig.brand.name}<small>{siteConfig.brand.descriptor}</small></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="top">
      <header className="site-header">
        <div className="container nav-inner">
          <Logo />
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Основная навигация">
            <a href="#features" onClick={() => setMenuOpen(false)}>Возможности</a>
            <a href="#industries" onClick={() => setMenuOpen(false)}>Для отраслей</a>
            <a href="#results" onClick={() => setMenuOpen(false)}>Эффекты</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Тарифы</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#demo" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>Получить демо</a>
          </nav>
          <a href="#demo" className="button button-small button-dark header-cta">Получить демо <ArrowRight size={15} /></a>
          <button className="menu-button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span><Sparkles size={13} /></span> ПЛАНИРОВАНИЕ НОВОГО ПОКОЛЕНИЯ</div>
            <h1>Точная нагрузка.<br /><em>Сильная команда.</em></h1>
            <p>Прогнозируйте потребность в персонале, собирайте оптимальные графики и управляйте эффективностью — в одной WFM-платформе.</p>
            <div className="hero-actions">
              <a href="#demo" className="button button-orange">Запросить демо <ArrowRight size={18} /></a>
              <a href="#features" className="text-button"><span><Play size={14} fill="currentColor" /></span> Смотреть возможности</a>
            </div>
            <div className="hero-note"><ShieldCheck size={17} /><span>Быстрый запуск</span><i /><Cloud size={17} /><span>Cloud или on-premise</span></div>
          </div>
          <Dashboard />
        </div>
      </section>

      <section className="proof-strip" aria-label="Ключевые показатели">
        <div className="container proof-grid">
          <div><strong>до 15%</strong><span>сокращение расходов на персонал</span></div>
          <div><strong>до 50%</strong><span>меньше ручного администрирования</span></div>
          <div><strong>95%</strong><span>точность прогноза нагрузки</span></div>
          <div><strong>24/7</strong><span>контроль и актуальная аналитика</span></div>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="container intro-grid">
          <div>
            <div className="section-kicker">ЕДИНАЯ ПЛАТФОРМА</div>
            <h2>Правильные люди<br />в правильное время</h2>
          </div>
          <div className="intro-copy">
            <p>WFM превращает исторические данные в точный прогноз, а прогноз — в рабочий график, который учитывает цели бизнеса и потребности команды.</p>
            <a href="#features">Как работает платформа <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="features section-pad" id="features">
        <div className="container">
          <div className="section-heading centered">
            <div className="section-kicker">ВОЗМОЖНОСТИ</div>
            <h2>От прогноза до результата</h2>
            <p>Все инструменты для управления нагрузкой и рабочим временем — в понятном web-интерфейсе.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article className="feature-card" key={title}>
                <div className="feature-number">0{index + 1}</div>
                <div className="feature-icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="feature-link">Подробнее <ArrowRight size={15} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cloud-section">
        <div className="container cloud-card">
          <div className="cloud-art" aria-hidden="true">
            <div className="orbit orbit-one"><span /></div>
            <div className="orbit orbit-two"><span /></div>
            <Cloud size={92} strokeWidth={1.15} />
          </div>
          <div className="cloud-copy">
            <div className="section-kicker light">WFM CLOUD</div>
            <h2>Запустите планирование без сложной инфраструктуры</h2>
            <p>Готовое облачное решение для быстрого старта: безопасный доступ, регулярные обновления и масштабирование по мере роста.</p>
            <div className="cloud-points"><span><Check /> Быстрый старт</span><span><Check /> Пилотный период</span><span><Check /> Поддержка команды</span></div>
            <a href="#demo" className="button button-white">Обсудить запуск <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="workflow section-pad">
        <div className="container">
          <div className="section-heading split-heading">
            <div><div className="section-kicker">КАК ЭТО РАБОТАЕТ</div><h2>Планирование без догадок</h2></div>
            <p>Платформа ведет от сырых данных до управленческого решения по прозрачному циклу.</p>
          </div>
          <div className="workflow-grid">
            {[
              ["01", "Соберите данные", "История обращений, продаж, операций и фактической занятости."],
              ["02", "Получите прогноз", "Алгоритмы рассчитают нагрузку и потребность по интервалам."],
              ["03", "Постройте график", "Система учтет навыки, нормы, отпуска и пожелания команды."],
              ["04", "Управляйте фактом", "Сравнивайте план с фактом и быстро реагируйте на изменения."],
            ].map(([n, title, text]) => (
              <article className="workflow-step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="schedule-board">
            <div className="schedule-head"><div><small>РАБОЧИЙ ГРАФИК</small><h3>Команда поддержки · Неделя 32</h3></div><div className="schedule-legend"><span><i className="work" /> Смена</span><span><i className="training" /> Обучение</span><span><i className="rest" /> Выходной</span></div></div>
            <div className="schedule-table">
              <div className="schedule-names">
                <b>Сотрудник</b>{["Анна К.", "Михаил С.", "Елена В.", "Денис Р."].map((name, i) => <span key={name}><i>{["АК", "МС", "ЕВ", "ДР"][i]}</i>{name}</span>)}
              </div>
              <div className="schedule-days">
                {["ПН 03", "ВТ 04", "СР 05", "ЧТ 06", "ПТ 07"].map((day) => <b key={day}>{day}</b>)}
                {["9–18", "9–18", "10–19", "обучение", "9–18", "12–21", "12–21", "выходной", "12–21", "12–21", "8–17", "8–17", "8–17", "9–18", "выходной", "выходной", "10–19", "10–19", "10–19", "10–19"].map((cell, i) => <span key={i} className={cell === "обучение" ? "training" : cell === "выходной" ? "rest" : "work"}>{cell}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industries section-pad" id="industries">
        <div className="container">
          <div className="section-heading centered light-heading">
            <div className="section-kicker light">ОТРАСЛЕВЫЕ СЦЕНАРИИ</div>
            <h2>Работает там, где важны люди и время</h2>
          </div>
          <div className="industry-tabs" role="tablist" aria-label="Выберите отрасль">
            {industries.map(({ id, icon: Icon, label }) => (
              <button key={id} role="tab" aria-selected={activeIndustry.id === id} className={activeIndustry.id === id ? "active" : ""} onClick={() => setActiveIndustry(industries.find((item) => item.id === id)!)}><Icon size={19} />{label}</button>
            ))}
          </div>
          <div className="industry-panel" role="tabpanel">
            <div className="industry-copy">
              <span className="industry-icon"><activeIndustry.icon size={30} /></span>
              <h3>{activeIndustry.title}</h3>
              <p>{activeIndustry.text}</p>
              <ul>{activeIndustry.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul>
              <a href="#demo" className="button button-orange">Узнать больше <ArrowRight size={17} /></a>
            </div>
            <div className="industry-visual">
              <div className="industry-stat"><small>ТИПОВОЙ ЭФФЕКТ</small><strong>{activeIndustry.stat}</strong><span>{activeIndustry.statLabel}</span></div>
              <LineChart size={150} strokeWidth={0.8} />
              <div className="pulse-line"><span /><span /><span /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="photo-tour">
        <div className="container photo-tour-inner">
          <div className="section-kicker light">ТУР ПО ПРОДУКТУ</div>
          <h2>Увидьте весь цикл<br />планирования в действии</h2>
          <p>От загрузки данных и прогноза до публикации расписания и оперативного контроля.</p>
          <a href="#demo" className="button button-orange">Запросить показ <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="results section-pad" id="results">
        <div className="container results-grid">
          <div className="results-copy">
            <div className="section-kicker">ИЗМЕРИМЫЙ ЭФФЕКТ</div>
            <h2>Результат виден в цифрах</h2>
            <p>Встроенная аналитика показывает, как качество планирования влияет на расходы, сервис и загрузку команды.</p>
            <div className="quote-card"><div className="quote-image" role="img" aria-label="Сотрудники службы поддержки" /><div className="quote-content"><Quote size={24} /><blockquote>«Расписание, которое раньше занимало несколько часов, теперь готово за минуты. Команда сразу видит изменения, а руководитель — актуальную картину по нагрузке».</blockquote><span>Типовой сценарий службы поддержки</span></div></div>
          </div>
          <div className="result-cards">
            <div className="result-card orange"><Zap /><strong>8–15%</strong><span>экономия фонда оплаты труда</span></div>
            <div className="result-card"><Clock3 /><strong>−50%</strong><span>времени на администрирование</span></div>
            <div className="result-card"><UsersRound /><strong>+10%</strong><span>удовлетворенности команды</span></div>
            <div className="result-card dark"><BarChart3 /><strong>+7%</strong><span>к качеству сервиса</span></div>
          </div>
        </div>
      </section>

      <section className="integration-section">
        <div className="container integration-inner">
          <div><div className="section-kicker">ИНТЕГРАЦИИ</div><h2>Встраивается в ваш ИТ-ландшафт</h2><p>Открытый API и готовность к обмену данными с ключевыми корпоративными системами.</p></div>
          <div className="integration-cloud">
            {["ERP", "HCM", "BI", "CRM", "POS", "API"].map((item, i) => <span style={{ "--i": i } as React.CSSProperties} key={item}>{item}</span>)}
            <div className="integration-core"><Building2 size={24} /><b>WFM</b></div>
          </div>
        </div>
      </section>

      <section className="pricing section-pad" id="pricing">
        <div className="container">
          <div className="section-heading centered">
            <div className="section-kicker">ТАРИФЫ</div>
            <h2>Выберите масштаб решения</h2>
            <p>Начните с подходящего тарифа и расширяйте платформу вместе с ростом команды.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article className={plan.featured ? "pricing-card featured" : "pricing-card"} key={plan.name}>
                {plan.featured && <div className="popular-badge">ПОПУЛЯРНЫЙ</div>}
                <div className="pricing-top">
                  <div className="pricing-name"><span>{plan.name.slice(0, 1)}</span><h3>{plan.name}</h3></div>
                  <p>{plan.description}</p>
                </div>
                <div className="pricing-price"><sup>$</sup><strong>{plan.price}</strong><span>/ месяц</span></div>
                <div className="pricing-employees"><UsersRound size={16} />{plan.employees}</div>
                <ul>
                  {plan.features.map((feature) => <li key={feature}><span><Check size={13} /></span>{feature}</li>)}
                </ul>
                <a className={plan.featured ? "button button-orange pricing-button" : "button pricing-button"} href="#demo">Получить КП <ArrowRight size={17} /></a>
                <div className="payment-row">
                  <small>СПОСОБЫ ОПЛАТЫ</small>
                  <div className="payment-methods" aria-label="Криптовалюта, Visa и MasterCard">
                    <span className="payment-crypto" title="Криптовалюта"><Bitcoin size={18} /></span>
                    <span className="payment-visa" title="Visa">VISA</span>
                    <span className="payment-mastercard" title="MasterCard"><i /><i /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="pricing-note">Цены указаны без учёта индивидуальных интеграций. Итоговое предложение зависит от конфигурации и числа пользователей.</p>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="container faq-grid">
          <div className="faq-title"><div className="section-kicker">ОТВЕЧАЕМ НА ВОПРОСЫ</div><h2>Всё, что важно до старта</h2><p>Не нашли нужный ответ? Оставьте заявку — обсудим ваш сценарий.</p><a href="#demo">Задать вопрос <ArrowRight size={16} /></a></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article className={openFaq === index ? "faq-item open" : "faq-item"} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown /></button>
                <div className="faq-answer"><p>{answer}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div className="container demo-card">
          <div className="demo-copy"><div className="section-kicker light">ПЕРСОНАЛЬНАЯ ДЕМОНСТРАЦИЯ</div><h2>Посмотрите, как WFM решит ваши задачи</h2><p>Покажем продукт на сценариях вашей отрасли и рассчитаем потенциальный эффект.</p><div className="demo-benefits"><span><Check /> 30 минут с экспертом</span><span><Check /> Без обязательств</span><span><Check /> План пилотного запуска</span></div></div>
          {sent ? (
            <div className="success-card"><span><Check size={34} /></span><h3>Заявка принята</h3><p>Спасибо! Это демонстрационная форма интерфейса. Подключите её к вашей CRM или почтовому сервису перед запуском.</p><button className="button button-white" onClick={() => setSent(false)}>Отправить ещё</button></div>
          ) : (
            <form className="demo-form" onSubmit={submitDemo}>
              <label><span>Ваше имя</span><input name="name" placeholder="Имя" required /></label>
              <label><span>Рабочая почта</span><input name="email" type="email" placeholder="name@company.ru" required /></label>
              <label><span>Телефон</span><input name="phone" type="tel" placeholder="+7 900 000-00-00" required /></label>
              <label><span>Компания</span><input name="company" placeholder="Название компании" required /></label>
              <button className="button button-orange" type="submit">Запросить демонстрацию <ArrowRight size={17} /></button>
              <small>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <div className="footer-brand"><Logo /><p>Интеллектуальное управление рабочей нагрузкой и расписаниями.</p></div>
          <div><b>Продукт</b><a href="#features">Возможности</a><a href="#industries">Для отраслей</a><a href="#results">Эффекты</a></div>
          <div><b>Ресурсы</b><a href="#faq">FAQ</a><a href="#demo">Демонстрация</a><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
          <div className="footer-cta"><b>Готовы начать?</b><p>Обсудим ваш сценарий планирования.</p><a className="button button-orange" href="#demo">Связаться с нами <ArrowRight size={16} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brand.name}. Все права защищены.</span><div><a href="#">Политика конфиденциальности</a><a href="#">Документы</a></div></div>
      </footer>
    </main>
  );
}
