import {InputTag} from './Input.style';

export default function ComponentInput({type, placeholder, value, onChange}) {
  return (
    <InputTag type={type} placeholder={placeholder} value={value} onChange={onChange}></InputTag>
  );
}