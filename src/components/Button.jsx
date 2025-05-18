function Button({ type, onSort }) {
  let label = ""
  if (type === "alpha"){
    label = "Alfabetisk ordning";
  }
  if (type === "rating"){
    label = "Betygsordning";
  }

  return (
    <button className="btn btn-primary me-2" onClick={() => onSort(type)}>
      {label}
    </button>
  );
}

export default Button;