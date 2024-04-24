const Intro = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-center pt-[70px] px-[155.5px] pb-0 box-border gap-[30px] max-w-full text-left text-xl text-anchor-grey font-open-sans mq975:gap-[15px] mq975:pl-[38px] mq975:pt-[45px] mq975:pr-[38px] mq975:box-border mq1500:pl-[77px] mq1500:pr-[77px] mq1500:box-border">
      <img
        className="h-[644px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-multiply min-w-[419px] mq975:min-w-full"
        loading="lazy"
        alt=""
        src="/dmitryganinkufyafyikjkcutout-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[418px] max-w-full mq975:min-w-full">
        <h1 className="m-0 self-stretch relative text-41xl leading-[75px] font-normal font-source-sans-pro mq975:text-29xl mq975:leading-[60px] mq450:text-17xl mq450:leading-[45px]">
          Take a Grander View
        </h1>
        <div className="self-stretch relative leading-[34px] font-extrabold mq450:text-base mq450:leading-[27px]">
          The Grandview Advantage to A More Diverse Portfolio
        </div>
        <div className="self-stretch relative leading-[34px] mq450:text-base mq450:leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <button className="cursor-pointer [border:none] py-[30px] pr-5 pl-[30px] bg-azure-blue w-[171px] rounded-31xl overflow-hidden flex flex-col items-center justify-center box-border whitespace-nowrap hover:bg-cornflowerblue-100">
          <b className="h-[27px] relative text-xl inline-block font-aeroport text-light-grey text-left min-w-[111px]">
            Learn More
          </b>
        </button>
      </div>
    </div>
  );
};

export default Intro;
