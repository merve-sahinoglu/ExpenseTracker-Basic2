import { NumberInput } from "@mantine/core";

interface Props {
  _label?: string;
  _description?: string;
  _placeholder?: string;
  setValue(value?: number): void;
  _id: string;
}

const NumberInputComponent = ({
  _label,
  _description,
  _placeholder,
  setValue,
  _id,
}: Props) => {
  return (
    <div>
      <NumberInput
        label={_label}
        description={_description}
        placeholder={_placeholder}
        id={_id}
        onChange={(event) =>
          typeof event !== "string"
            ? setValue(event)
            : setValue(parseFloat(event))
        }
      />
    </div>
  );
};

export default NumberInputComponent;
