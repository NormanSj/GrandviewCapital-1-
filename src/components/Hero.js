const Hero = () => {
  return (
    <div className="self-stretch rounded-31xl bg-white shadow-[0px_0px_20px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-between relative max-w-full gap-[20px] text-left text-xl text-anchor-grey font-source-sans-pro mq1650:flex-wrap">
      <div className="w-[723px] flex flex-col items-start justify-start py-5 pr-0 pl-20 box-border gap-[30px] min-w-[723px] max-w-full mq975:gap-[15px] mq975:pl-10 mq975:box-border mq975:min-w-full mq1650:flex-1">
        <h1 className="m-0 self-stretch relative text-41xl leading-[75px] font-normal font-inherit mq975:text-29xl mq975:leading-[60px] mq450:text-17xl mq450:leading-[45px]">
          A new world of financial opportunities, with expert support
        </h1>
        <div className="self-stretch relative leading-[34px] font-open-sans mq450:text-base mq450:leading-[27px]">
          Our long-term advisory approach ensures investment strategies align
          with your personal goals and risk profile, empowering you to navigate
          the private equity landscape with confidence.
        </div>
        <div className="w-[487px] flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full text-azure-blue font-aeroport">
          <button className="cursor-pointer [border:none] py-[30px] pr-5 pl-[30px] bg-azure-blue w-[171px] rounded-31xl overflow-hidden shrink-0 flex flex-col items-center justify-center box-border whitespace-nowrap hover:bg-cornflowerblue-100">
            <b className="h-[27px] relative text-xl inline-block font-aeroport text-light-grey text-left min-w-[111px]">
              Learn More
            </b>
          </button>
          <div className="flex-1 rounded-31xl box-border overflow-hidden flex flex-col items-center justify-center py-[30px] pr-5 pl-[30px] min-w-[186px] whitespace-nowrap border-[1px] border-solid border-azure-blue">
            <b className="relative">What is Private Equity?</b>
          </div>
        </div>
      </div>
      <img
        className="w-[826px] relative rounded-tl-none rounded-tr-31xl rounded-b-none max-h-full object-cover max-w-full mq1650:flex-1"
        loading="lazy"
        alt=""
        src="/jasonhoganyyfwukzv5fmunsplash-1@2x.png"
      />
      <img
        className="h-[919.4px] w-[953.8px] absolute !m-[0] top-[0px] left-[550px] object-cover mix-blend-darken z-[1]"
        alt=""
        src="/mask-group@2x.png"
      />
    </div>
  );
};

export default Hero;
