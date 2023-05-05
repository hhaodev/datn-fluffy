import '../Pagnigation/index.css'
import { Pagination } from 'antd';

function Pagnigation() {
    return ( 
        <div className='pagnigation_all'>
                <Pagination defaultCurrent={1} total={50} className='pagnigation'/>
        </div>
     );
}

export default Pagnigation;