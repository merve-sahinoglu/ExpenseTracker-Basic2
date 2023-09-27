import { TextInput } from "@mantine/core";

interface Props {
  _label?: string;
  _description?: string;
  _placeholder?: string;
  setValue(value?: string): void;
  _id: string;
}

const TextInputComponent = ({ _label, _placeholder, setValue, _id }: Props) => {
  return (
    <div>
      <TextInput
        id={_id}
        label={_label}
        placeholder={_placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default TextInputComponent;
