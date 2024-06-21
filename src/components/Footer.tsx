import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between font-bold">
        <img src="/Vector.svg" alt="" />
        <img className="w-[2px]" src="/Vector22.png" alt="" />
        <div className="grid">
          <a href="">ABOUT</a>
          <a href="">SERVICES</a>
          <a href="">TECHNOLOGIES</a>
          <a href="">HOW TO</a>
          <a href="">JOIN HYDRA</a>
        </div>
        <img className="w-[2px]" src="/Vector22.png" alt="" />
        <div className="grid">
          <a href="">F.A.Q</a>
          <a href="">SITEMAP</a>
          <a href="">CONDITIONS</a>
          <a href="">LICENSES</a>
        </div>
        <img className="w-[2px]" src="/Vector22.png" alt="" />
        <div className="">
          <h1>SOCIALIZE WITH HYDRA</h1>
          <div className="mt-9 flex space-x-6">
            <img src="/facebook.svg" alt="" />
            <img src="/twitter.svg" alt="" />
            <img src="/linkedin.svg" alt="" />
            <img src="/youtube.svg" alt="" />
            <img src="/instagram.svg" alt="" />
            <img src="/pinterest.svg" alt="" />
          </div>
          <Button variant="filled" className="mt-12">
            BUILD YOUR WORD
          </Button>
        </div>
      </div>
      <h1 className="mt-28 flex items-center justify-center text-[14px] font-bold">
        {(new Date().getFullYear())} © HYDRA LANDING PAGE - Design by ZINE. E. FALOUTI - Developed by Danisa Juarez - ALL RIGHTS RESERVED
      </h1>
    </>
  );
};

export default Footer;
