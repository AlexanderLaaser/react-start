interface TextProp {
  children: string;
}

const Alert = ({ children }: TextProp) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
