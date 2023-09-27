import { useState } from "react";
import { Input, InputBase, Combobox, useCombobox } from "@mantine/core";

interface Props {
  comboboxOptions: string[];
  placeHolder: string;
  setValue(value?: string): void;
}

function ComboboxComponent({ comboboxOptions, placeHolder, setValue }: Props) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setComboboxValue] = useState<string | null>(null);

  const options = comboboxOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        setComboboxValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>{placeHolder}</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default ComboboxComponent;
