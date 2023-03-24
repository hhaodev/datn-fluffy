import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


function DefaultLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
