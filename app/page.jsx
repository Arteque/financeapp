import Link from "next/link";
import Image from "next/image";
import emma from "@/public/images/avatars/emma-richardson.jpg"
const Home = ()  => {
  return (
    <>
      <div className="container">
        <div className="page-title">
          <h2 className="text__lg">Overview</h2>
        </div>
        {/* Content Box Default */}
        <section className="section">
        <div className="content-box">
          <h3 className="content-box__title text__sm">Current Balance</h3>
          <div className="content-box__data text__lg text__bold">
            <p>
              $4,836.00
            </p>
          </div>
        </div>
        </section>
        {/* Content Box Default */}
        {/* Content Box dark */}
        <section className="section">
        <div className="content-box content-box--dark">
          <h3 className="content-box__title text__sm">Current Balance</h3>
          <div className="content-box__data">
            <p className="text__lg text__bold">
              $4,836.00
            </p>
          </div>
        </div>
        </section>
        {/* Content Box dark */}
        {/* Content Box dark */}
        <section className="section">
        <div className="content-box content-box--headfull">
          <div className="content-box__header">
              <h3 className="content-box__title text__md">Pots</h3>
              <Link href="#">
                <span className="text text__sm">
                  See Details
                </span>
                <span className="icon">
                  <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.765312 0.984686L4.51531 4.73469C4.55018 4.76951 4.57784 4.81087 4.59671 4.8564C4.61558 4.90192 4.62529 4.95072 4.62529 5C4.62529 5.04928 4.61558 5.09808 4.59671 5.1436C4.57784 5.18913 4.55018 5.23048 4.51531 5.26531L0.765313 9.01531C0.712867 9.06782 0.646022 9.10358 0.57324 9.11807C0.500458 9.13257 0.425012 9.12514 0.356454 9.09673C0.287895 9.06833 0.229307 9.02022 0.188105 8.95849C0.146903 8.89677 0.124942 8.82421 0.125 8.75L0.125 1.25C0.124941 1.17579 0.146903 1.10323 0.188105 1.04151C0.229306 0.979783 0.287895 0.931674 0.356453 0.903266C0.425012 0.874858 0.500458 0.867432 0.57324 0.881926C0.646022 0.89642 0.712867 0.932182 0.765312 0.984686Z" fill="#696868"/>
                  </svg>
                </span>
              </Link>
          </div>
          <div className="content-box content-box--2cols bg-light-200">
              <div className="col content-box__header">
              <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.4375 5.8875V3C22.4375 2.41984 22.207 1.86344 21.7968 1.4532C21.3866 1.04297 20.8302 0.8125 20.25 0.8125H7.75C7.16984 0.8125 6.61344 1.04297 6.2032 1.4532C5.79297 1.86344 5.5625 2.41984 5.5625 3V5.8875C4.16875 6.11196 2.90036 6.82505 1.98427 7.89915C1.06819 8.97326 0.564205 10.3383 0.5625 11.75V29.25C0.5625 30.8247 1.18806 32.3349 2.30155 33.4484C3.41505 34.5619 4.92528 35.1875 6.5 35.1875H21.5C23.0747 35.1875 24.5849 34.5619 25.6984 33.4484C26.8119 32.3349 27.4375 30.8247 27.4375 29.25V11.75C27.4358 10.3383 26.9318 8.97326 26.0157 7.89915C25.0996 6.82505 23.8312 6.11196 22.4375 5.8875ZM20.5625 3V5.8125H17.4375V2.6875H20.25C20.3329 2.6875 20.4124 2.72042 20.471 2.77903C20.5296 2.83763 20.5625 2.91712 20.5625 3ZM12.4375 5.8125V2.6875H15.5625V5.8125H12.4375ZM7.75 2.6875H10.5625V5.8125H7.4375V3C7.4375 2.91712 7.47042 2.83763 7.52903 2.77903C7.58763 2.72042 7.66712 2.6875 7.75 2.6875ZM25.5625 29.25C25.5625 29.7835 25.4574 30.3118 25.2533 30.8047C25.0491 31.2975 24.7499 31.7454 24.3726 32.1226C23.9954 32.4999 23.5475 32.7991 23.0547 33.0033C22.5618 33.2074 22.0335 33.3125 21.5 33.3125H6.5C5.96651 33.3125 5.43823 33.2074 4.94535 33.0033C4.45246 32.7991 4.00462 32.4999 3.62738 32.1226C3.25014 31.7454 2.9509 31.2975 2.74674 30.8047C2.54258 30.3118 2.4375 29.7835 2.4375 29.25V11.75C2.4375 10.6726 2.86551 9.63925 3.62738 8.87738C4.38925 8.11551 5.42256 7.6875 6.5 7.6875H21.5C22.5774 7.6875 23.6108 8.11551 24.3726 8.87738C25.1345 9.63925 25.5625 10.6726 25.5625 11.75V29.25ZM18.6875 23C18.6875 23.9117 18.3253 24.786 17.6807 25.4307C17.036 26.0753 16.1617 26.4375 15.25 26.4375H14.9375V28C14.9375 28.2486 14.8387 28.4871 14.6629 28.6629C14.4871 28.8387 14.2486 28.9375 14 28.9375C13.7514 28.9375 13.5129 28.8387 13.3371 28.6629C13.1613 28.4871 13.0625 28.2486 13.0625 28V26.4375H11.5C11.2514 26.4375 11.0129 26.3387 10.8371 26.1629C10.6613 25.9871 10.5625 25.7486 10.5625 25.5C10.5625 25.2514 10.6613 25.0129 10.8371 24.8371C11.0129 24.6613 11.2514 24.5625 11.5 24.5625H15.25C15.6644 24.5625 16.0618 24.3979 16.3549 24.1049C16.6479 23.8118 16.8125 23.4144 16.8125 23C16.8125 22.5856 16.6479 22.1882 16.3549 21.8951C16.0618 21.6021 15.6644 21.4375 15.25 21.4375H12.75C11.8383 21.4375 10.964 21.0753 10.3193 20.4307C9.67466 19.786 9.3125 18.9117 9.3125 18C9.3125 17.0883 9.67466 16.214 10.3193 15.5693C10.964 14.9247 11.8383 14.5625 12.75 14.5625H13.0625V13C13.0625 12.7514 13.1613 12.5129 13.3371 12.3371C13.5129 12.1613 13.7514 12.0625 14 12.0625C14.2486 12.0625 14.4871 12.1613 14.6629 12.3371C14.8387 12.5129 14.9375 12.7514 14.9375 13V14.5625H16.5C16.7486 14.5625 16.9871 14.6613 17.1629 14.8371C17.3387 15.0129 17.4375 15.2514 17.4375 15.5C17.4375 15.7486 17.3387 15.9871 17.1629 16.1629C16.9871 16.3387 16.7486 16.4375 16.5 16.4375H12.75C12.3356 16.4375 11.9382 16.6021 11.6451 16.8951C11.3521 17.1882 11.1875 17.5856 11.1875 18C11.1875 18.4144 11.3521 18.8118 11.6451 19.1049C11.9382 19.3979 12.3356 19.5625 12.75 19.5625H15.25C16.1617 19.5625 17.036 19.9247 17.6807 20.5693C18.3253 21.214 18.6875 22.0883 18.6875 23Z" fill="#277C78"/>
              </svg>
              </div>
              <div className="col">
                <h4 className="content-box__title text_sm text__nomral">
                  Total Saved
                </h4>
                <p className="content-box__data text__lg text__bold">
                  $850
                </p>
              </div>
            </div>
          <div className="content-box--grid">
            {/* Box with Line at the left side the classname text-... change the color of the line */}
              <div className="content-box content-box--line-left text-second-green">
                  <h5 className="text__sm  text-dark-200">Savings</h5>
                  <div className="content-box__data text-dark-100">
                    <p className="text__sm text__bold">
                      $159
                    </p>
                  </div>
              </div>
            {/* Box with Line at the left side the classname text-... change the color of the line */}
            {/* Box with Line at the left side the classname text-... change the color of the line */}
              <div className="content-box content-box--line-left text-second-cyan">
                  <h5 className="text__sm  text-dark-200">Gift</h5>
                  <div className="content-box__data text-dark-100">
                    <p className="text__sm text__bold">
                      $40
                    </p>
                  </div>
              </div>
            {/* Box with Line at the left side the classname text-... change the color of the line */}
            {/* Box with Line at the left side the classname text-... change the color of the line */}
              <div className="content-box content-box--line-left text-third-magenta">
                  <h5 className="text__sm  text-dark-200">Concert Ticket</h5>
                  <div className="content-box__data text-dark-100">
                    <p className="text__sm text__bold">
                      $110
                    </p>
                  </div>
              </div>
            {/* Box with Line at the left side the classname text-... change the color of the line */}
            {/* Box with Line at the left side the classname text-... change the color of the line */}
              <div className="content-box content-box--line-left text-second-yellow">
                  <h5 className="text__sm  text-dark-200">New Laptop</h5>
                  <div className="content-box__data text-dark-100">
                    <p className="text__sm text__bold">
                      $1000
                    </p>
                  </div>
              </div>
            {/* Box with Line at the left side the classname text-... change the color of the line */}
          </div>
        </div>
        </section>
        {/* Content Box dark */}
        
        <section className="section">
          <div className="content-box">
            <div className="content-box__header">
                <h3 className="content-box__title text__md">Transaction</h3>
                  <Link href="#">
                    <span className="text text__sm">
                      See Details
                    </span>
                    <span className="icon">
                      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.765312 0.984686L4.51531 4.73469C4.55018 4.76951 4.57784 4.81087 4.59671 4.8564C4.61558 4.90192 4.62529 4.95072 4.62529 5C4.62529 5.04928 4.61558 5.09808 4.59671 5.1436C4.57784 5.18913 4.55018 5.23048 4.51531 5.26531L0.765313 9.01531C0.712867 9.06782 0.646022 9.10358 0.57324 9.11807C0.500458 9.13257 0.425012 9.12514 0.356454 9.09673C0.287895 9.06833 0.229307 9.02022 0.188105 8.95849C0.146903 8.89677 0.124942 8.82421 0.125 8.75L0.125 1.25C0.124941 1.17579 0.146903 1.10323 0.188105 1.04151C0.229306 0.979783 0.287895 0.931674 0.356453 0.903266C0.425012 0.874858 0.500458 0.867432 0.57324 0.881926C0.646022 0.89642 0.712867 0.932182 0.765312 0.984686Z" fill="#696868"/>
                      </svg>
                    </span>
                  </Link>
            </div>
            <div className="content-box content-box__avatar content-box__limit">
              <Image src={emma} alt="Emma Richardson" width="32" style={{borderRadius:"50%"}}/>
              <h4 className="avatar__name">
                Emma Richardson
              </h4>
              <div className="data">
                  <p>
                    <span className="text-second-green text__bold">
                      +$75.50
                    </span> <br />
                    <small className="text__xs text_light_300">
                      19 Aug 2024
                    </small>
                  </p>
                  
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* container end */}
    </>
  );
}


export default Home