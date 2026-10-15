import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Emergency.css";

import Header from "./Header";

function Emergency() {

  const odors = [
    {
      name: 'رائحة "الفاكهة المتخمرة" أو "الأسيتون"',
      description:
        "قد ترتبط بمرض السكري. يشعر الجسم بحرق الدهون بدلاً من الغلوكوز، مما ينتج الكيتونات التي تخرج عن طريق التنفس برائحة تشبه التفاح المتخمر."
    },
    {
      name: 'رائحة "الخبز المحروق" أو الروائح الوهمية',
      description:
        "قد تشير لنوبات الصرع أو السكتة الدماغية. هي هلوسة شمية نتيجة اضطراب الإشارات الكهربائية في الفص الشمي."
    },
    {
      name: 'رائحة "السمك" أو "الأمونيا"',
      description:
        "قد ترتبط بمشاكل في الكلى. عندما تعجز الكلى عن تصفية اليوريا، يخرج النيتروجين عن طريق التنفس أو الجلد برائحة الأمونيا."
    },
    {
      name: 'رائحة "الخشب القديم" أو "التراب"',
      description:
        "قد ترتبط ببكتيريا معينة في حالات حمى التيفوئيد، تؤدي لتغير كيمياء العرق واللعاب وإنتاج رائحة مميزة."
    }
  ];

  const [ratings, setRatings] = useState({});

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const userKey = currentUser
    ? currentUser.email
    : "guest";


  /* ==========================================
     الرسالة حسب التقييم
  ========================================== */

  const getMessage = (value) => {

    if (value === 1 || value === 2) {
      return "ظهور عابر: قد يكون السبب بيئي أو إرهاق مؤقت.";
    }

    if (value === 3) {
      return "تنبيه الانتباه: راقب الأمر وقد يحتاج فحص منزلي.";
    }

    if (value === 4 || value === 5) {
      return "مخطوطة حرجة - نداء الأمان: استشارة الطبيب فوراً.";
    }

    return "";
  };


  /* ==========================================
     تحميل التقييمات
  ========================================== */

  useEffect(() => {

    const savedRatings =
      JSON.parse(localStorage.getItem("ratings")) || {};

    setRatings(savedRatings[userKey] || {});

  }, [userKey]);


  /* ==========================================
     اختيار التقييم
  ========================================== */

  const selectRating = (cardIndex, value) => {

    const savedRatings =
      JSON.parse(localStorage.getItem("ratings")) || {};

    if (!savedRatings[userKey]) {
      savedRatings[userKey] = {};
    }

    savedRatings[userKey][cardIndex] = value;

    localStorage.setItem(
      "ratings",
      JSON.stringify(savedRatings)
    );

    setRatings({
      ...savedRatings[userKey]
    });
  };


  return (

    <div className="emergency-page">

        <Header />

      {/* ==========================================
          CONTENT
      ========================================== */}

      <main className="emergency-content">


        {/* العنوان */}

        <div className="emergency-heading">

          <span className="emergency-number">
            02
          </span>

          <p className="emergency-kicker">
            YOUR SAFETY RADAR
          </p>

          <h1>
            ركن الطوارئ
          </h1>

          <span className="emergency-subtitle">
            رادار الأمان — راقب التغيرات المرتبطة بحاسة الشم
          </span>

        </div>



        {/* التنبيه */}

        <div className="emergency-intro">

          <div className="intro-line"></div>

          <div>

            <h2>
              لماذا ركن الطوارئ؟
            </h2>

            <p>
              لأن التغير في حاسة الشم قد يكون مؤشراً
              مبكراً يستحق الانتباه. اختر مستوى تكرار
              الرائحة التي لاحظتها لمساعدتك على متابعة
              التغيرات وتوثيقها.
            </p>

          </div>

        </div>



        {/* ==========================================
            CARDS
        ========================================== */}

        <div className="odor-list">

          {odors.map((odor, index) => {

            const selectedValue =
              ratings[index];

            return (

              <article
                className="odor-card"
                key={index}
              >

                <div className="odor-card-number">
                  0{index + 1}
                </div>


                <div className="odor-info">

                  <h2 className="odor-name">
                    {odor.name}
                  </h2>

                  <p className="odor-description">
                    {odor.description}
                  </p>

                </div>



                {/* التقييم */}

                <div className="rating-section">

                  <div className="rating-title">
                    مدى تكرار هذه الرائحة؟
                  </div>


                  <div className="rating">

                    {[1, 2, 3, 4, 5].map(
                      (value) => (

                        <button
                          key={value}
                          className={
                            selectedValue === value
                              ? "circle selected"
                              : "circle"
                          }
                          onClick={() =>
                            selectRating(
                              index,
                              value
                            )
                          }
                        >
                          {value}
                        </button>

                      )
                    )}

                  </div>


                  {selectedValue && (

                    <div className="result">

                      <strong>
                        التقييم: {selectedValue}
                      </strong>

                      <span>
                        {getMessage(selectedValue)}
                      </span>

                    </div>

                  )}

                </div>

              </article>

            );

          })}

        </div>



        {/* ملاحظة */}

        <div className="emergency-note">

          <span>
            ✦
          </span>

          <p>
            هذا القسم مخصص للتوعية والمتابعة فقط،
            ولا يُعد بديلاً عن التشخيص أو الاستشارة الطبية.
          </p>

        </div>

      </main>



      {/* ==========================================
          FOOTER
      ========================================== */}

      <footer className="site-footer">

        <div className="footer-inner">


          {/* اسم المشروع */}

          <div className="footer-brand">

            <h2>
              Shathak
            </h2>

            <p>
              حيث تصبح الرائحة ذاكرة
            </p>

          </div>



          {/* روابط الموقع */}

          <div className="footer-column">

            <h3>
              Explore
            </h3>

            <Link to="/">
              الرئيسية
            </Link>

            <Link to="/#next">
              عن شذاك
            </Link>

            <Link to="/library">
              المكتبة العطرية
            </Link>

            <Link to="/emergency">
              ركن الطوارئ
            </Link>

          </div>



          {/* التواصل */}

            <div className="footer-column">

            <h3>
              Contact
            </h3>

<a href="mailto:your@email.com">Email</a>
<a href="#">Instagram</a>
<a href="#">X</a>

          </div>



          {/* عن المشروع */}

          <div className="footer-column">

            <h3>
              About
            </h3>

            <Link to="/#next">
              Our Project
            </Link>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Create Account
            </Link>

          </div>

        </div>



        <div className="footer-line"></div>



        <div className="footer-bottom">

          <p>
            ©️ 2026 Shathak. All rights reserved.
          </p>

          <p>
            Made with care for memories.
          </p>

        </div>

      </footer>

    </div>

  );
}

export default Emergency;