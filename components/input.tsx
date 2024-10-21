interface IInputProps {
  label: string;
  type?: string;
  id: string;
}

export const Input = ({ label, type = "text", id }: IInputProps) => {
  return (
    <div className="flex justify-between w-full gap-4">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        className="bg-transparent border-white border rounded"
      />
    </div>
  );
};
