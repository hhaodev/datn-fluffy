import ChangePass from '../../component/ChangePass';
import '../ChangeStudent/changepass.css'

function ChangeStudent() {
    return ( 
        <>
          <section id="content">
            <main className='change_main'>
            <div className="course__left">
              <h1>Change Pass</h1>
            </div>
              
            <div className="view__allform">
              <div className='change_form'>
                 <ChangePass/>
              </div>
              </div>
            </main>
          </section>
        </>
     );
}

export default ChangeStudent;