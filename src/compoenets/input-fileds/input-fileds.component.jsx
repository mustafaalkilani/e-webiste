import {Group, FormInputLabel, Input} from './input-fileds.style';

const InputFileds = ({label, value, name, type, handelChange, len}) => {
    return (
        <Group>
            <Input required value={value} name={name} type={type} onChange={handelChange} minLength={len} />
            {
                label && (
                    <FormInputLabel shrink={value.length}>{label}</FormInputLabel>
                )
            }
        </Group>
    )
}

export default InputFileds;