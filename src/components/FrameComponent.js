const FrameComponent = () => {
  return (
    <footer className="overflow-hidden flex flex-row items-start justify-start py-2.5 pr-[119px] pl-[27px] box-border gap-[80px] max-w-full text-left text-xl text-anchor-grey font-aeroport mq975:gap-[40px] mq975:pr-[29px] mq975:box-border mq450:gap-[20px] mq1500:pr-[59px] mq1500:box-border mq1650:flex-wrap">
      <div className="h-[280px] w-[638px] flex flex-col items-start justify-center py-0 pr-[293px] pl-0 box-border gap-[10px] max-w-full text-slate-grey font-open-sans mq975:pr-[146px] mq975:box-border mq450:pr-5 mq450:box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/grandviewcap-logo-logo-b-2@2x.png"
        />
        <div className="relative leading-[34px] mq450:text-base mq450:leading-[27px]">
          <p className="m-0">email@grandviewcapital.co</p>
          <p className="m-0">000.000.0000</p>
          <p className="m-0">123 Street Address,</p>
          <p className="m-0">Vancouver, BC V6V6V6</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[10px]">
        <b className="relative leading-[34px] inline-block min-w-[91px] mq450:text-base mq450:leading-[27px]">
          Investing
        </b>
        <div className="relative leading-[50px] font-open-sans mq450:text-base mq450:leading-[40px]">
          <p className="m-0">Investment Philosophy</p>
          <p className="m-0">Why EMD?</p>
          <p className="m-0">Investment Options</p>
        </div>
      </div>
      <div className="w-[213px] flex flex-col items-start justify-center gap-[10px]">
        <b className="relative leading-[34px] inline-block min-w-[60px] mq450:text-base mq450:leading-[27px]">
          About
        </b>
        <div className="self-stretch relative leading-[50px] font-open-sans mq450:text-base mq450:leading-[40px]">
          <p className="m-0">About Us</p>
          <p className="m-0">Our Advisory Team</p>
          <p className="m-0">Accreditations</p>
          <p className="m-0">Contact Us</p>
        </div>
      </div>
      <div className="w-[213px] flex flex-col items-start justify-center gap-[10px]">
        <b className="relative leading-[34px] inline-block min-w-[53px] mq450:text-base mq450:leading-[27px]">
          Legal
        </b>
        <div className="self-stretch relative leading-[50px] font-open-sans mq450:text-base mq450:leading-[40px]">
          <p className="m-0">EMD Regulations</p>
          <p className="m-0">Legal Disclosures</p>
          <p className="m-0">Terms of Use</p>
          <p className="m-0">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
