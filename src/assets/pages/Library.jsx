import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Library.css";
import Header from "./Header";

function Library() {
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userKey = currentUser ? currentUser.email : "guest";

  const feelings = [
    {
      name: "سعادة",
      color: "#f7e4b2",
    },
    {
      name: "الحنين",
      color: "#e8c7ff",
    },
    {
      name: "الشغف والحماس",
      color: "#ffc48a",
    },
    {
      name: "الطمأنينة",
      color: "#a9dcff",
    },
    {
      name: "الحزن والفقد",
      color: "#b7c4d6",
    },
    {
      name: "الأمان والامتنان",
      color: "#a6b07a",
    },
  ];

  // =========================
  // تحميل البطاقات
  // =========================

  useEffect(() => {
    const savedCards =
      JSON.parse(localStorage.getItem("cards")) || {};

    setCards(savedCards[userKey] || []);
  }, [userKey]);


  // =========================
  // إضافة بطاقة
  // =========================

  const addCard = (color) => {

    if (!title.trim()) {
      return;
    }

    const newCard = {
      id: Date.now(),
      title,
      desc,
      date,
      color,
    };

    const updatedCards = [
      ...cards,
      newCard,
    ];

    setCards(updatedCards);

    const allCards =
      JSON.parse(localStorage.getItem("cards")) || {};

    allCards[userKey] = updatedCards;

    localStorage.setItem(
      "cards",
      JSON.stringify(allCards)
    );

    // تنظيف الحقول
    setTitle("");
    setDesc("");
    setDate("");

    // إغلاق النافذة
    setShowModal(false);
  };


  // =========================
  // حذف بطاقة
  // =========================

  const deleteCard = (id) => {

    const updatedCards =
      cards.filter(
        (card) => card.id !== id
      );

    setCards(updatedCards);

    const allCards =
      JSON.parse(localStorage.getItem("cards")) || {};

    allCards[userKey] = updatedCards;

    localStorage.setItem(
      "cards",
      JSON.stringify(allCards)
    );
  };


  return (

    <div className="library-page">

      <Header />



      {/* =====================================================
          LIBRARY CONTENT
      ===================================================== */}

      <main className="library-content">


        {/* =========================
            عنوان المكتبة
        ========================= */}

        <div className="library-heading">

          <span className="library-number">
            01
          </span>

          <p>
            YOUR PERSONAL SCENT ARCHIVE
          </p>

          <h1>
            مكتبتي العطرية
          </h1>

          <span>
            احتفظ بالروائح التي تحمل جزءاً من ذاكرتك
          </span>

        </div>



        {/* =====================================================
            الأرفف
        ===================================================== */}

        <div className="library-container">


          <div className="shelf">


            {/* =========================
                العطور المحفوظة
            ========================= */}

            {cards.map((card) => (

              <div
                className="perfume"
                key={card.id}
              >

                <div className="cap"></div>

                <div className="neck"></div>


                <div
                  className="perfume-body"
                  style={{
                    backgroundColor: card.color,
                  }}
                >

                  <button
                    className="delete"
                    onClick={() =>
                      deleteCard(card.id)
                    }
                  >
                    ×
                  </button>


                  <div className="perfume-title">
                    {card.title}
                  </div>


                  {card.desc && (

                    <div className="perfume-desc">
                      {card.desc}
                    </div>

                  )}


                  {card.date && (

                    <div className="perfume-date">
                      {card.date}
                    </div>

                  )}

                </div>

              </div>

            ))}



            {/* =========================
                زر إضافة عطر
            ========================= */}

            <div
              className="perfume add-perfume"
              onClick={() =>
                setShowModal(true)
              }
            >

              <div className="cap"></div>

              <div className="neck"></div>

              <div className="perfume-body">
                +
              </div>

            </div>


          </div>

        </div>

      </main>



      {/* =====================================================
          MODAL
      ===================================================== */}

      {showModal && (

        <div
          className="library-modal"
          onClick={() =>
            setShowModal(false)
          }
        >

          <div
            className="library-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >


            {/* إغلاق */}

            <button
              className="close-modal"
              onClick={() =>
                setShowModal(false)
              }
            >
              ×
            </button>


            <h2>
              أضف ذكرى جديدة
            </h2>


            <p>
              وثّق الرائحة واربطها بذكرياتك.
            </p>



            {/* اسم الرائحة */}

            <input
              type="text"
              placeholder="اسم الرائحة"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />



            {/* الوصف */}

            <input
              type="text"
              placeholder="وصف الرائحة"
              value={desc}
              onChange={(e) =>
                setDesc(e.target.value)
              }
            />



            {/* التاريخ */}

            <input
              type="text"
              placeholder="التاريخ (اختياري)"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />



            <h3>
              اختر الشعور
            </h3>



            {/* المشاعر */}

            <div className="feelings">

              {feelings.map((feeling) => (

                <button
                  key={feeling.name}
                  style={{
                    backgroundColor:
                      feeling.color,
                  }}
                  onClick={() =>
                    addCard(feeling.color)
                  }
                >

                  {feeling.name}

                </button>

              ))}

            </div>


          </div>

        </div>

      )}



      {/* =====================================================
          FOOTER
      ===================================================== */}

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

            <Link to="/#emergency">
              ركن الطوارئ
            </Link>

          </div>



          {/* التواصل */}

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



        {/* الخط */}

        <div className="footer-line"></div>



        {/* الحقوق */}

        <div className="footer-bottom">

          <p>
            © 2026 Shathak. All rights reserved.
          </p>

          <p>
            Made with care for memories.
          </p>

        </div>


      </footer>


    </div>

  );
}

export default Library;