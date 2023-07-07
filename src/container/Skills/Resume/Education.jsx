import React, {useState} from "react";
import { Appwrap } from "./wrapper";
import "./Education.scss";

const Education = () => {
  const [toggle, settoggle] = useState(1);


  const toggleTab = (index) => {
    settoggle(index)
    console.log('fdfd')
  }

  return (
    <div>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className={toggle === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div className={toggle === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}  onClick={() =>  toggleTab(2)}>
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div  className={toggle === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}  onClick={() =>  toggleTab(1)}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">ffff</h3>
                  <span className="qualification__subtitle">vtu </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>2021 present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">art director</h3>
                  <span className="qualification__subtitle">soc unive1 </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>2021-2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">f</h3>
                  <span className="qualification__subtitle">vtu </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>2028-2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Ui/ux </h3>
                  <span className="qualification__subtitle">soc unive </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>2021-2018
                  </div>
                </div>
              </div>
            </div>

            <div className={toggle === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}  onClick={() =>  toggleTab(2)}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">product deign</h3>
                  <span className="qualification__subtitle">
                    micosioft indai
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>2021 present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Ux designer</h3>
                  <span className="qualification__subtitle">
                    apple soc unive{" "}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>2021-2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">web designer</h3>
                  <span className="qualification__subtitle">raect </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>2028-2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appwrap(Education, "Education");
