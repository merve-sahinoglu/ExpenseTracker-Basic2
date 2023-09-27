import { Button } from "@mantine/core";

interface Props {
  onClick(): void;
  _type?: "button" | "submit" | "reset" | undefined;

  name?: string;
}

const ButtonComponent = ({ onClick, _type, name }: Props) => {
  return (
    <div>
      <Button
        type={_type}
        variant="gradient"
        gradient={{ from: "violet", to: "red", deg: 90 }}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  );
};

export default ButtonComponent;
