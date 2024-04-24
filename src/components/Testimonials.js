const Testimonials = () => {
  return (
    <div className="w-[1628px] rounded-31xl bg-anchor-grey overflow-hidden flex flex-row items-center justify-center gap-[25px] max-w-full text-left text-17xl text-light-grey font-source-sans-pro mq1500:flex-wrap">
      <img
        className="h-[600px] w-[622px] overflow-hidden shrink-0 object-cover mix-blend-hard-light max-w-full mq1500:flex-1"
        loading="lazy"
        alt=""
        src="/statitem@2x.png"
      />
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-5 pr-5 pl-[34px] box-border relative gap-[10px] min-w-[638px] max-w-full mq975:min-w-full">
        <div className="flex flex-row items-center justify-center pt-0 px-0 pb-5 gap-[10px]">
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/star-1.svg"
          />
        </div>
        <h2 className="m-0 w-[499px] relative text-inherit font-normal font-inherit inline-block max-w-full mq975:text-10xl mq450:text-3xl">
          “Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. ”
        </h2>
        <div className="h-[33px] relative text-5xl inline-block font-open-sans mq450:text-lgi">
          <span>{`> `}</span>
          <i>client name</i>
        </div>
        <img
          className="w-[34px] h-[34px] absolute !m-[0] top-[223px] left-[34px] object-contain"
          alt=""
          src="/polygon-1-1.svg"
        />
        <img
          className="w-[34px] h-[34px] absolute !m-[0] top-[223px] left-[914px] object-contain"
          alt=""
          src="/polygon-2-1.svg"
        />
      </div>
    </div>
  );
};

export default Testimonials;
