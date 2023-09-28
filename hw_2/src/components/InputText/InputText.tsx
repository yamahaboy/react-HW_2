interface IProps {
  type: string;
  placeholder?: string;
  value?: string;
}

export const InputText = ({ type, placeholder, value }: IProps) => {
  return (
    <div>
      <p>{type}</p>
      <input className="input-text" placeholder={placeholder} value={value} />
    </div>
  );
};
