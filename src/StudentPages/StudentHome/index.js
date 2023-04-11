import '../../StudentPages/StudentHome/studenthome.css';

function stdHome() {

  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
        <i className='bx bx-home' ></i>
          <span className="text">Home</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className='bx bx-home' ></i>
              <span className="text">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-book-open'></i>
              <span className="text">My Courses</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-calendar'></i>
              <span className="text">Schedule</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-credit-card' ></i>
              <span className="text">Payment</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn"><i className="bx bx-search" /></button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" />
          <a href="#" className="notification">
            <i className="bx bxs-bell" />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="img/people.png" />
          </a>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className="bx bx-chevron-right" /></li>
                <li>
                  <a className="active" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>

          
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>

  );
}

export default stdHome;