function Footer() {
  return (
    <footer
      className="mt-8 border z-10 border-t-[#33353f] 
        border-l-transparent border-r-transparent text-white"
    >
      <div className="container md:p-12 p-4 justify-between flex flex-col md:flex-row items-center gap-4 md:gap-0 ">
        <div className="text-white text-2xl md:text-3xl font-black cursor-pointer">
          PPORTFOLIO<span className="text-primary">.</span>
        </div>

        <p className="text-slate-600 text-sm md:text-base">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
