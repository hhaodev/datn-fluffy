import Navbar from "../../component/Navbar"

function DefaultLayout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    );
}

export default DefaultLayout;
