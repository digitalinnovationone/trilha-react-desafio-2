import { InputContainer } from "./styles";

const Input = ({value, onChange}) => {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder="user/repository"/>
    </InputContainer>
  )
}

export default Input;