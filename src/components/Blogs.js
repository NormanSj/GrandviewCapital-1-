const Blogs = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center gap-[30px] max-w-full text-left text-xl text-anchor-grey font-aeroport mq1500:flex-wrap">
      <div className="w-[600px] rounded-11xl bg-light-grey flex flex-col items-center justify-start p-[50px] box-border gap-[30px] min-w-[600px] max-w-full mq975:gap-[15px] mq975:py-8 mq975:px-[25px] mq975:box-border mq975:min-w-full mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq1500:flex-1">
        <b className="self-stretch relative leading-[34px] mq450:text-base mq450:leading-[27px]">
          March 2nd, 2024
        </b>
        <img
          className="self-stretch h-[262px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/image-13@2x.png"
        />
        <h1 className="m-0 self-stretch relative text-21xl leading-[60px] font-normal font-source-sans-pro mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
          Are your investments ready for tax season?
        </h1>
        <div className="self-stretch relative leading-[34px] font-open-sans mq450:text-base mq450:leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <button className="cursor-pointer py-[30px] pr-5 pl-[30px] bg-[transparent] w-[171px] rounded-31xl box-border overflow-hidden flex flex-col items-center justify-center whitespace-nowrap border-[1px] border-solid border-azure-blue hover:bg-cornflowerblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100">
          <b className="h-[27px] relative text-xl inline-block font-aeroport text-azure-blue text-left min-w-[111px]">
            Learn More
          </b>
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[30px] min-w-[671px] max-w-full text-21xl font-source-sans-pro mq975:min-w-full">
        <div className="self-stretch rounded-11xl bg-light-grey flex flex-col items-start justify-start pt-[50px] pb-[46.8px] pr-5 pl-[50px] box-border gap-[10px] max-w-full shrink-0 mq1500:pl-[25px] mq1500:box-border">
          <h1 className="m-0 w-[933px] relative text-inherit leading-[60px] font-normal font-inherit inline-block max-w-full mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
            5 Tips for getting the most returns on your RRSP.
          </h1>
          <b className="w-[933px] relative text-xl [text-decoration:underline] leading-[34px] inline-block font-aeroport max-w-full mq450:text-base mq450:leading-[27px]">
            Read More
          </b>
        </div>
        <div className="self-stretch rounded-11xl bg-light-grey flex flex-col items-start justify-start pt-[50px] pb-[46.8px] pr-5 pl-[50px] box-border gap-[10px] max-w-full shrink-0 mq1500:pl-[25px] mq1500:box-border">
          <h1 className="m-0 w-[933px] relative text-inherit leading-[60px] font-normal font-inherit inline-block max-w-full mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
            What is an accredited investor?
          </h1>
          <b className="w-[933px] relative text-xl [text-decoration:underline] leading-[34px] inline-block font-aeroport max-w-full mq450:text-base mq450:leading-[27px]">
            Read More
          </b>
        </div>
        <div className="self-stretch rounded-11xl bg-light-grey flex flex-col items-start justify-start pt-[50px] pb-[46.8px] pr-5 pl-[50px] box-border gap-[10px] max-w-full shrink-0 mq1500:pl-[25px] mq1500:box-border">
          <h1 className="m-0 w-[933px] relative text-inherit leading-[60px] font-normal font-inherit inline-block max-w-full mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
            Are your investments ready for tax season?
          </h1>
          <b className="w-[933px] relative text-xl [text-decoration:underline] leading-[34px] inline-block font-aeroport max-w-full mq450:text-base mq450:leading-[27px]">
            Read More
          </b>
        </div>
        <div className="self-stretch rounded-11xl bg-light-grey flex flex-col items-start justify-start pt-[50px] pb-[46.8px] pr-5 pl-[50px] box-border gap-[10px] max-w-full shrink-0 mq1500:pl-[25px] mq1500:box-border">
          <h1 className="m-0 w-[933px] relative text-inherit leading-[60px] font-normal font-inherit inline-block max-w-full mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
            Are your investments ready for tax season?
          </h1>
          <b className="w-[933px] relative text-xl [text-decoration:underline] leading-[34px] inline-block font-aeroport max-w-full mq450:text-base mq450:leading-[27px]">
            Read More
          </b>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
