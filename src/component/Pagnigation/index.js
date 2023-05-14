import "../Pagnigation/index.css";
import { Pagination } from "antd";

function Pagnigation({ meta, setParams }) {
  return (
    <div className="pagnigation_all">
      <Pagination
        className="pagnigation"
        pageSize={meta.itemsPerPage}
        current={meta.currentPage}
        total={meta.totalItems}
        onChange={(e) => {
          setParams((params) => ({ ...params, page: e }));
        }}
      />
    </div>
  );
}

export default Pagnigation;
