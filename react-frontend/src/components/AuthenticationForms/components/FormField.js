export default function FormField({
  label,
  name,
  type,
  value,
  onChange,
  additionalClass,
}) {
  return (
    <>
      <div className="form__field">
        <label className="form__label " name={name}>
          {label}
        </label>
        <input
          className={`form__input ${additionalClass}`}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete="off"
        ></input>
      </div>
    </>
  );
}
