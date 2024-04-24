const Contact = () => {
  return (
    <div className="w-[1628px] rounded-31xl bg-ocean-blue overflow-hidden flex flex-row items-end justify-center pt-[15.2px] pb-0 pr-[116.1px] pl-20 box-border relative gap-[50px] min-h-[385px] max-w-full text-left text-41xl text-light-grey font-source-sans-pro mq975:gap-[25px] mq975:pr-[29px] mq975:box-border mq1500:flex-wrap mq1500:pl-10 mq1500:pr-[58px] mq1500:box-border">
      <img
        className="h-[370px] w-[383.8px] absolute !m-[0] top-[15.2px] left-[1128.1px] object-cover mix-blend-color-dodge"
        alt=""
        src="/mask-group-1@2x.png"
      />
      <div className="flex-1 flex flex-row items-center justify-start min-w-[406px] max-w-full mq975:min-w-full mq1500:flex-1">
        <h1 className="m-0 flex-1 relative text-inherit leading-[75px] font-normal font-inherit inline-block max-w-full mq975:text-29xl mq975:leading-[60px] mq450:text-17xl mq450:leading-[45px]">
          Get in touch to discover your unique path to financial success.
        </h1>
      </div>
      <div className="flex-[0.8013] flex flex-col items-end justify-start py-0 pr-0 pl-[124px] box-border gap-[30px] min-w-[406px] max-w-full z-[1] text-right text-xl font-open-sans mq975:gap-[15px] mq975:pl-[62px] mq975:box-border mq975:min-w-full mq450:pl-5 mq450:box-border mq1500:flex-1">
        <div className="self-stretch relative leading-[34px] mq450:text-base mq450:leading-[27px]">
          <p className="m-0">email@grandviewcapital.co</p>
          <p className="m-0">000.000.0000</p>
        </div>
        <button className="cursor-pointer [border:none] py-[30px] pr-5 pl-[30px] bg-light-grey w-[169px] rounded-31xl overflow-hidden flex flex-col items-center justify-center box-border whitespace-nowrap hover:bg-gainsboro-200">
          <b className="h-[27px] relative text-xl inline-block font-aeroport text-ocean-blue text-left min-w-[109px]">
            Contact Us
          </b>
        </button>
      </div>
    </div>
  );
};

export default Contact;
