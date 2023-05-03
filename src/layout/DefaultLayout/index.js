import Navbar from "../../component/NavbarHome";

function DefaultLayout({ children, currentUser }) {
  return (
    <div>
      <Navbar user={currentUser}></Navbar>
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
