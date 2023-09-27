import ButtonComponent from "../Shared/ButtonComponent";
import ComboboxComponent from "../Shared/ComboboxComponent";
import NumberInputComponent from "../Shared/NumberInputComponent";
import TextInputComponent from "../Shared/TextInputComponent";
import { Stack, Fieldset } from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";

const groceries = [
  "🍎 Apples",
  "🍌 Bananas",
  "🥦 Broccoli",
  "🥕 Carrots",
  "🍫 Chocolate",
];

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Age field is required." }),
  category: z.string(),
});

interface Props {
  onSubmit: (Expense: FormData) => void;
}

type FormData = z.infer<typeof schema>;

const MyForm = ({ onSubmit }: Props) => {
  const form = useForm<FormData>({});

  return (
    <div>
      <Fieldset>
        <Stack>
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <TextInputComponent
              _label="Desctription"
              setValue={(value: string) =>
                form.setFieldValue("description", value)
              }
              _id="description"
            />
            <NumberInputComponent
              _label="Amaunt"
              setValue={(value: number) => form.setFieldValue("amount", value)}
              _id="amount"
            />
            <ComboboxComponent
              setValue={(value: string) =>
                form.setFieldValue("category", value)
              }
              comboboxOptions={groceries}
              placeHolder={"Category"}
            />
            <ButtonComponent
              _type="submit"
              name="Submit"
              onClick={function (): void {}}
            ></ButtonComponent>
          </form>
        </Stack>
      </Fieldset>
    </div>
  );
};

export default MyForm;
