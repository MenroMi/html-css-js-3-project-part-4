interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  classNameBox: string;
  classNameTitle: string;
  children: React.ReactNode;
}

const Header = ({classNameBox, classNameTitle, children}: IHeaderProps) => {
  return (
    <header className={classNameBox}>
      <h1 className={classNameTitle}>Our Pricing</h1>
      {children}
    </header>
  );
};

export default Header;
