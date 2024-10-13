
const Home = ()  => {
  return (
    <>
      <div className="container">
        <div className="page-title">
          <h2 className="text__lg">Overview</h2>
        </div>
        {/* Content Box Default */}
        <div className="content-box">
          <h3 className="content-box__title text__sm">Current Balance</h3>
          <div className="content-box__data text__lg text__bold">
            <p>
              $4,836.00
            </p>
          </div>
        </div>
        {/* Content Box Default */}
        {/* Content Box dark */}
        <div className="content-box bg-dark-100 text-light-400">
          <h3 className="content-box__title text__sm">Current Balance</h3>
          <div className="content-box__data text__lg text__bold">
            <p>
              $4,836.00
            </p>
          </div>
        </div>
        {/* Content Box dark */}
      </div>
    </>
  );
}


export default Home