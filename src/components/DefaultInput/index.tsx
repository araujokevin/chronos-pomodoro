type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor='meuInput'>Task</label>
      <input id='meuInput' type={type} />
    </>
  );
}
