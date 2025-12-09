type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>Task</label>
      <input type={type} id={id} />
    </>
  );
}
