import logo from "../assets/ap-logo.png";

function Logo({ className }) {
  return (
    <>
      <img src={logo} alt="Logo" className={className} />
    </>
  );
}

export default Logo;
