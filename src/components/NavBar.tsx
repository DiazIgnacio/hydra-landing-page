import Button from "./Button";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-3">
        <img src="/Vector.svg" />
        <img src="/Frame.svg" alt="" />
      </div>
      <div className="flex items-center justify-center space-x-10 text-[12px] font-bold">
        <a href="">ABOUT</a>
        <a href="">SERVICES</a>
        <a href=""> TECHNOLOGIES</a>
        <a href="">HOW TO </a>
      </div>
      <div className="mt-7 space-x-4">
        <Button variant="outlined">CONTACT US</Button>
        <Button variant="filled">JOIN HYDRA</Button>
      </div>
    </div>
  );
};

export default NavBar;
