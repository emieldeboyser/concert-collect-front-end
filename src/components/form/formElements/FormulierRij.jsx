import Inputveld from "./Inputveld";

const FormRow = ({ type, label, id, placeholder, changeInput }) => {
  return (
    <div className="flex items-center w-full gap-5">
      {label && <label className="w-1/3">{label}:</label>}
      {type === "text" && (
        <Inputveld placeholder={placeholder} onChange={changeInput} />
      )}
    </div>
  );
};

export default FormRow;
