import { InputTag } from "./Input.style";

export default function ComponentInput({
  type,
  placeholder,
  value,
  onChange,
  style,
}) {
  return (
    <InputTag
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    ></InputTag>
  );
}
