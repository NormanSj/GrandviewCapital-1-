const Header = () => {
  return (
    <header className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-between py-[30px] px-0 box-border min-h-[199px] max-w-full gap-[20px] text-left text-sm text-slate-grey font-aeroport mq1650:flex-wrap">
      <img
        className="h-[108.8px] w-[300px] relative object-cover"
        loading="lazy"
        alt=""
        src="/grandviewcap-logo-logo-b-1@2x.png"
      />
      <div className="overflow-hidden flex flex-col items-end justify-start gap-[20px] max-w-full">
        <div className="overflow-hidden flex flex-col items-end justify-center py-0 px-[15px] mq1500:hidden">
          <div className="relative inline-block min-w-[92px] shrink-0 mq975:hidden">
            <span className="[text-decoration:underline]">English</span> | 中文
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[30px] text-xl text-black mq450:hidden">
          <div className="overflow-hidden flex flex-col items-center justify-center py-5 px-2.5">
            <div className="relative whitespace-nowrap">
              Investing with Grandview
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-center justify-center py-5 px-2.5">
            <div className="relative whitespace-nowrap">Investment Options</div>
          </div>
          <div className="overflow-hidden flex flex-col items-center justify-center py-5 px-2.5">
            <div className="h-[27px] relative inline-block min-w-[99px]">
              Resources
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-center justify-center py-5 px-[9px]">
            <div className="h-[27px] relative inline-block min-w-[58px]">
              About
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-center justify-center py-5 px-2.5">
            <div className="h-[27px] relative inline-block min-w-[76px]">
              Contact
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-5 bg-azure-blue rounded-31xl overflow-hidden flex flex-col items-center justify-center whitespace-nowrap hover:bg-cornflowerblue-100">
            <b className="relative text-xl inline-block font-aeroport text-light-grey text-left min-w-[117px]">
              Client Login
            </b>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
