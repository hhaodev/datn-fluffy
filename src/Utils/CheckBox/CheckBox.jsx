import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./checkbox.css";
const CheckBoxComponent = (props) => {
  return (
    props.isActive && (
      <div
        className={`checkbox-component ${
          props.isChecked ? "checkbox-checked" : "checkbox-unchecked"
        }`}
      >
        <div className="checkbox-stick">
          {props.isChecked ? (
            <CheckOutlined className="check-icon" />
          ) : (
            <CloseOutlined className="check-icon" />
          )}
        </div>
        <p className="checkbox-p">{props.message}</p>
      </div>
    )
  );
};
export default CheckBoxComponent;
