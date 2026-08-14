import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      {/* =========================
          PROFILE HERO
      ========================= */}

      <section className="profile-hero">

        <div className="profile-cover">
          <div className="cover-overlay"></div>

          <div className="profile-avatar">
            <span>ت</span>
          </div>
        </div>


        <div className="profile-info">

          <div className="profile-name">
            <h1>تينا</h1>
            <span className="verified">✦</span>
          </div>

          <p className="profile-email">
            teena@example.com
          </p>

          <p className="profile-bio">
            أؤمن أن لكل رائحة ذكرى، ولكل ذكرى عطر.
          </p>

          <button className="edit-profile">
            تعديل الملف
          </button>

        </div>

      </section>


      {/* =========================
          PROFILE CONTENT
      ========================= */}

      <main className="profile-content">

        {/* =========================
            STATS
        ========================= */}

        <section className="profile-stats">

          <div className="stat">
            <strong>12</strong>
            <span>عطر محفوظ</span>
          </div>

          <div className="stat">
            <strong>8</strong>
            <span>ذكرى</span>
          </div>

          <div className="stat">
            <strong>5</strong>
            <span>عطور مفضلة</span>
          </div>

        </section>


        {/* =========================
            FAVORITE SCENTS
        ========================= */}

        <section className="profile-section">

          <div className="section-title">

            <div>
              <span>MY COLLECTION</span>
              <h2>عطورك المفضلة</h2>
            </div>

            <button className="view-all">
              عرض الكل ←
            </button>

          </div>


          <div className="perfume-grid">

            <div className="perfume-card">
              <div className="perfume-image">
                <span>01</span>
              </div>

              <div className="perfume-info">
                <h3>عطر الورد</h3>
                <p>وردي · ناعم · دافئ</p>
              </div>

              <button className="heart active">
                ♥
              </button>
            </div>


            <div className="perfume-card">
              <div className="perfume-image perfume-image-two">
                <span>02</span>
              </div>

              <div className="perfume-info">
                <h3>مساء</h3>
                <p>خشبي · عميق · شرقي</p>
              </div>

              <button className="heart active">
                ♥
              </button>
            </div>


            <div className="perfume-card">
              <div className="perfume-image perfume-image-three">
                <span>03</span>
              </div>

              <div className="perfume-info">
                <h3>ذكرى</h3>
                <p>مسك · عنبر · فانيلا</p>
              </div>

              <button className="heart active">
                ♥
              </button>
            </div>

          </div>

        </section>


        {/* =========================
            SCENT PERSONALITY
        ========================= */}

        <section className="profile-section">

          <div className="section-title">

            <div>
              <span>YOUR SCENT</span>
              <h2>شخصيتك العطرية</h2>
            </div>

          </div>


          <div className="scent-personality">

            <div className="personality-main">

              <div className="personality-number">
                01
              </div>

              <div>
                <h3>الدفء والهدوء</h3>

                <p>
                  تميل ذائقتك إلى الروائح الدافئة
                  والناعمة التي تحمل إحساساً
                  بالراحة والحنين.
                </p>
              </div>

            </div>


            <div className="scent-bars">

              <div className="scent-row">
                <span>زهري</span>

                <div className="bar">
                  <i style={{ width: "82%" }}></i>
                </div>

                <strong>82%</strong>
              </div>


              <div className="scent-row">
                <span>خشبي</span>

                <div className="bar">
                  <i style={{ width: "65%" }}></i>
                </div>

                <strong>65%</strong>
              </div>


              <div className="scent-row">
                <span>شرقي</span>

                <div className="bar">
                  <i style={{ width: "58%" }}></i>
                </div>

                <strong>58%</strong>
              </div>


              <div className="scent-row">
                <span>حمضي</span>

                <div className="bar">
                  <i style={{ width: "32%" }}></i>
                </div>

                <strong>32%</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            MEMORIES
        ========================= */}

        <section className="profile-section memories-section">

          <div className="section-title">

            <div>
              <span>YOUR MEMORIES</span>
              <h2>ذكرياتك مع العطر</h2>
            </div>

            <button className="add-memory">
              + إضافة ذكرى
            </button>

          </div>


          <div className="memory-list">

            <article className="memory-card">

              <div className="memory-date">
                <strong>14</strong>
                <span>DEC</span>
              </div>

              <div className="memory-content">

                <span className="memory-perfume">
                  عطر الورد
                </span>

                <h3>
                  "ذكّرني ببيت جدتي."
                </h3>

                <p>
                  رائحة الورد كانت دائماً مرتبطة
                  عندي بالأيام الهادئة والزيارات
                  العائلية.
                </p>

              </div>

              <button className="memory-arrow">
                →
              </button>

            </article>


            <article className="memory-card">

              <div className="memory-date">
                <strong>08</strong>
                <span>AUG</span>
              </div>

              <div className="memory-content">

                <span className="memory-perfume">
                  مساء
                </span>

                <h3>
                  "رائحة أول يوم في الجامعة."
                </h3>

                <p>
                  رائحة هادئة لكنها بقيت في
                  ذاكرتي بشكل غريب.
                </p>

              </div>

              <button className="memory-arrow">
                →
              </button>

            </article>

          </div>

        </section>


        {/* =========================
            SETTINGS
        ========================= */}

        <section className="profile-section settings-section">

          <div className="section-title">

            <div>
              <span>ACCOUNT</span>
              <h2>إعدادات الحساب</h2>
            </div>

          </div>


          <div className="settings-list">

            <button className="setting-item">
              <div>
                <strong>المعلومات الشخصية</strong>
                <span>الاسم والبريد الإلكتروني</span>
              </div>

              <span>←</span>
            </button>


            <button className="setting-item">
              <div>
                <strong>الإشعارات</strong>
                <span>إدارة التنبيهات</span>
              </div>

              <span>←</span>
            </button>


            <button className="setting-item">
              <div>
                <strong>الخصوصية</strong>
                <span>إعدادات الحساب والخصوصية</span>
              </div>

              <span>←</span>
            </button>


            <button className="setting-item logout">
              <div>
                <strong>تسجيل الخروج</strong>
                <span>الخروج من حسابك</span>
              </div>

              <span>↗</span>
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;