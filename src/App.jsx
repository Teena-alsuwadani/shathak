import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Library from "./assets/pages/Library";
import Emergency from "./assets/pages/Emergency";
import Menu from "./assets/pages/Menu";
import Profile from "./assets/pages/profile";

function App() {

  const goDown = () => {
    document.getElementById("next")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Routes>

      {/* ================= الصفحة الرئيسية ================= */}
      <Route
        path="/"
        element={
          <main>

            {/* =====================================================
                السكشن الأول
            ===================================================== */}

            <section className="hero-section">

              <div className="hero-frame">

                <img
                  src="/bg.jpg"
                  alt="Shathak"
                  className="hero-image"
                />

                <div className="hero-overlay"></div>

                {/* ================= الهيدر ================= */}

                <header className="main-header">

                  <a href="/profile" className="brand">

                    <div className="logo">
                      <div className="head"></div>
                      <div className="body"></div>
                    </div>

                    <span className="brand-name">
                      شذاك
                    </span>

                  </a>


                  <nav className="main-nav">

                    <a href="#next">
                      عن شذاك
                    </a>

                    <a href="/library">
                      المكتبة العطرية
                    </a>
                    

                    <a href="/Emergency">
                      ركن الطوارئ
                    </a>

                  </nav>


                  {/* تسجيل الدخول */}
                  <a
                    href="/login"
                    className="login-link"
                  >
                    تسجيل دخول
                  </a>

                </header>


                {/* ================= العنوان ================= */}

                <div className="hero-title">

                  <span className="hero-title-small">
                    THE
                  </span>

                  <h1>
                    Shathak
                  </h1>

                  <span className="hero-title-line">
                    FROM SCENT TO MEMORY
                  </span>

                </div>


                {/* ================= زر النزول ================= */}

                <button
                  className="scroll-down"
                  onClick={goDown}
                  aria-label="الانتقال للسكشن التالي"
                >

                  <p className="scroll-button-text">

                    <span style={{ "--index": 0 }}> </span>
                    <span style={{ "--index": 1 }}>E</span>
                    <span style={{ "--index": 2 }}>X</span>
                    <span style={{ "--index": 3 }}>P</span>
                    <span style={{ "--index": 4 }}>L</span>
                    <span style={{ "--index": 5 }}>O</span>
                    <span style={{ "--index": 6 }}>R</span>
                    <span style={{ "--index": 7 }}>E</span>
                    <span style={{ "--index": 8 }}> </span>
                    <span style={{ "--index": 9 }}>S</span>
                    <span style={{ "--index": 10 }}>H</span>
                    <span style={{ "--index": 11 }}>A</span>
                    <span style={{ "--index": 12 }}>T</span>
                    <span style={{ "--index": 13 }}>H</span>
                    <span style={{ "--index": 14 }}>A</span>
                    <span style={{ "--index": 15 }}>K</span>

                  </p>


                  <div className="scroll-button-circle">

                    <svg
                      viewBox="0 0 24 24"
                      className="scroll-button-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >

                      <path
                        d="M12 4V19M6 13L12 19L18 13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                    </svg>


                    <svg
                      viewBox="0 0 24 24"
                      className="scroll-button-icon scroll-button-icon-copy"
                      xmlns="http://www.w3.org/2000/svg"
                    >

                      <path
                        d="M12 4V19M6 13L12 19L18 13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                    </svg>

                  </div>

                </button>

              </div>

            </section>


            {/* =====================================================
                السكشن الثاني
            ===================================================== */}

            <section
              className="second-section"
              id="next"
            >

              <div className="container">

                {/* ================= المقدمة ================= */}

                <section className="intro-section">

                  <div className="section-heading">

                    <span className="section-number">
                      01
                    </span>

                    <div>

                      <p className="section-kicker">
                        اكتشف الفكرة
                      </p>

                      <h1>
                        لماذا شذاك؟
                      </h1>

                    </div>

                  </div>


                  <div className="intro-content">

                    <div className="vertical-line"></div>

                    <pre>
تُعد حاسة الشم "الحاسه المنسية"

رغم كونها الأقوى اتصالاً بالجهاز الحوفي
<b>(Limbic System)</b>

في الدماغ، وهو المسؤول المباشر
عن العواطف والذاكرة
طويلة الأمد.

لقد طورنا هذا الموقع
ليقيننا العلمي بأن الرائحة
هي أقصر طريق لاستعادة الذكريات المحجوبة،

وأن التغير في كفاءتها هو
"المؤشر الحيوي"
الأسبق للكشف عن التدهور العصبي
مثل (الزهايمر) والأمراض الأيضية مثل (السكري)

قبل ظهور الأعراض السريرية بسنوات.

هدفنا هو تحويل (الشم) من مجرد إدراك حسي
إلى سجل طبي وجداني يحمي ماضيك
ويؤمن مستقبلك.
                    </pre>

                  </div>

                </section>


                {/* ================= معرض الصور ================= */}

                <section className="gallery">

                  <div className="gallery-card">

                    <img
                      src="https://i.pinimg.com/736x/02/1c/c0/021cc04c1a2fe77292f62d7147c7a9e6.jpg"
                      alt="صورة ثانية"
                    />

                  </div>


                  <div className="gallery-card">

                    <img
                      src="https://i.pinimg.com/736x/e3/bd/20/e3bd202dad16ceff4366474fa1f90aee.jpg"
                      alt="صورة ثالثة"
                    />

                  </div>

                </section>


                {/* ================= القصة ================= */}

                <section
                  className="story"
                  id="story"
                >

                  <div className="chapter">

                    <div className="chapter-header">

                      <span>
                        01
                      </span>

                      <h3>
                        القسم الاول : المكتبة العطرية
                      </h3>

                    </div>


                    <pre>
لماذا "المكتبة العطرية"؟

في عالم العطور، يسعى الشغوفون لجمع
أندر القنينات وأثمن الأريج في "مكتبات عطرية" خاصة،
تقديراً لقيمتها وتفردها؛

ونحن نؤمن أن ذكرياتك العطرية
هي المخطوطات الأندر والأكثر قيمة.

هدف القسم:

"توثيق هوية روحك"
عبر أرشفة الروائح المرتبطة بتفاصيل حياتك،
وربطها بمشاعركِ؛

ليكون هذا القسم مرجعاً وأرشيفاً دائماً
يمكنك العودة إليه عند الحاجة لاستعادة تفاصيل ذكرياتك
المفقودة وإبقائها حية لا تُنسى.

<b>كيف تبدأ رحلة التدوين؟</b>

(خطوات الاستخدام)

لجعل مكتبتك العطرية تنبض بالحياة،
اتبع الخطوات البسيطة التالية:

1. اقتناص اللحظة:
عند شعورك برائحة مميزة
(عطر، مكان، ذكرى عابرة)،
افتح قسم "المكتبة العطرية".

2. تسمية الرائحة:
امنح الرائحة اسماً يعبر عنها.

مثلاً:
"رائحة مطر الطفولة"
أو
"قهوة الصباح الأول"

3. ربطها باللون:
اختر لون الشعور الذي تحس به
تجاه هذه الرائحة.

4. تدوين القصة:
اكتب تفاصيل الموقف أو الشخص أو المكان
المرتبط بهذه الرائحة لتوثيقها.

5. الأرشفة الدائمة:
بمجرد الحفظ ستنتقل الرائحة إلى أرشيفك الخاص
حيث يمكنك العودة إليها
في أي وقت لاستعادة تلك اللحظة
بكامل تفاصيلها الحسية.
                    </pre>

                  </div>


                  <div
                    className="chapter"
                    id="emergency"
                  >

                    <div className="chapter-header">

                      <span>
                        02
                      </span>

                      <h3>
                        القسم الثاني: ركن الطوارئ: رادار الأمان
                      </h3>

                    </div>


                    <pre>
لماذا سمي بهذا الاسم؟

لأن التغير في حاسة الشم
هو "نداء استغاثة" مبكر من الجسد؛

فهو الركن المخصص لليقظة الصحية والتدخل
الاستباقي قبل تفاقم الأعراض.

هدف القسم:

رصد المؤشرات الحيوية المرتبطة بالروائح
(الخطرة أو الوهمية) وتحليل تكرارها،

لتقديم توجيه وقائي يساعدك في معرفة
الوقت المناسب لاستشارة المختص.

كيف تستخدم ركن الطوارئ؟
(خطوات سريعة)

1. الاختيار:
حدد نوع الرائحة الغريبة التي شعرت بها
(مثل: أسيتون، حريق وهمي،
أو فقدان تمييز الروائح).

2. القياس (5-1):
اختر عدد المرات التي تكرر فيها هذا الشعور
لتقييم مستوى الخطورة.

3. التحليل:
اقرأ التنبيه الفوري الذي يظهر لك
بناءً على تكرار الرائحة ودلالتها العلمية.

4. التوجيه:
اتبع النصيحة الوقائية المقترحة
(مراقبة، فحص منزلي، أو زيارة طبيب).

5. التقرير:
احتفظ بسجل هذه التنبيهات
لمشاركتها مع المختص عند الحاجة
لسرعة التشخيص.
                    </pre>

                  </div>

                </section>


                {/* ================= عن المشروع ================= */}

                <section className="about">

                  <div className="about-label">

                    <span>
                      03
                    </span>

                    <p>
                      عن المشروع
                    </p>

                  </div>


                  <p>
                    ختاماً: عن مشروعنا

                    هذا العمل هو ثمرة جهد شغوفه لطالبات الصف الثالث الثانوي
                    (مسار الصحة والحياة).

                    انطلقنا من فكرة أن "الذاكرة هي أغلى ما ملك"،
                    وأن حاسة الشم هي الحارس الوفي لهذه الذاكرة.

                    مشروع "شذى الذاكرة" وتطبيقه "شذاك"
                    ليس مجرد متطلب تخرج، بل هو رسالة علمية وإنسانية
                    نسعى من خلالها لتوظيف التقنية في خدمة الصحة النفسية
                    والوقاية المبكرة،

                    لنضمن أن يبقى شذى ذكرياتكم حياً.. للأبد.
                  </p>

                </section>


                {/* ================= زر البداية ================= */}

                <div className="start-wrapper">

                  <a href="/Menu">

                    <button className="start-button">
                      start
                      <span>→</span>
                    </button>

                  </a>

                </div>

              </div>

            </section>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <footer className="site-footer">

              <div className="footer-inner">

                <div className="footer-brand">

                  <h2>
                    Shathak
                  </h2>

                  <p>
                    حيث تصبح الرائحة ذاكرة
                  </p>

                </div>


                <div className="footer-column">

                  <h3>
                    Explore
                  </h3>

                  <a href="#next">
                    عن شذاك
                  </a>

                  <a href="#story">
                    المكتبة العطرية
                  </a>

                  <a href="#emergency">
                    ركن الطوارئ
                  </a>

                </div>


                <div className="footer-column">

                  <h3>
                    Contact
                  </h3>

                  <a href="mailto:your@email.com">
                    Email
                  </a>

                  <a href="#">
                    Instagram
                  </a>

                  <a href="#">
                    X
                  </a>

                </div>


                <div className="footer-column">

                  <h3>
                    About
                  </h3>

                  <a href="#next">
                    Our Project
                  </a>

                  <a href="/profile.html">
                    Profile
                  </a>

                  <a href="/login">
                    Login
                  </a>

                </div>

              </div>


              <div className="footer-line"></div>


              <div className="footer-bottom">

                <p>
                  © 2026 Shathak. All rights reserved.
                </p>

                <p>
                  Made with care for memories.
                </p>

              </div>

            </footer>

          </main>
        }
      />


      {/* ================= تسجيل الدخول ================= */}

      <Route
        path="/login"
        element={<Login />}
      />


      {/* ================= إنشاء حساب ================= */}

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ================= مكتبة لبعطور  ================= */}


      <Route path="/library" element={<Library />} />


      {/* ================= ركن الطوارئ  ================= */}


      <Route path="/emergency" element={<Emergency />}/>

       {/* ================= المنيو  ================= */}


      <Route path="/Menu" element={<Menu />}/>

      {/* ================= الصفحة الشخصية  ================= */}


      <Route path="/profile" element={<Profile />}/>
      
    </Routes>

  );
}

export default App;