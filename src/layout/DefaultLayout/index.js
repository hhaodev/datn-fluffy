import Navbar from "../../component/Navbar";

function DefaultLayout({ children, currentUser }) {
  return (
    <div>
      <Navbar user={currentUser}></Navbar>
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
