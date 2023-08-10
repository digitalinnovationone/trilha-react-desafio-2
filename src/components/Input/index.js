import { InputContainer } from './styles';

function Input({ value, onChange, placeholder }) {
    return (
        <InputContainer
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;
