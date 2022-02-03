import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}><span>Bizworx</span> Console</h1>
      <p className={headerStyles.description}>Build apps faster, make smarter business decisions, and connect people anywhere.</p>
    </div>
  );
};

export default Header;


{/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */}