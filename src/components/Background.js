import InvestmentCard from "./InvestmentCard";

const Background = () => {
  return (
    <section className="self-stretch bg-azure-blue overflow-hidden flex flex-col items-end justify-start py-20 pr-[50px] pl-[42px] box-border gap-[10px] max-w-full text-center text-11xl text-light-grey font-aeroport mq975:py-[22px] mq975:pr-[25px] mq975:pl-[21px] mq975:box-border mq1500:pt-[34px] mq1500:pb-[34px] mq1500:box-border">
      <div className="self-stretch rounded-31xl bg-light-grey flex flex-col items-start justify-start py-[50px] px-0 box-border gap-[10px] max-w-full text-azure-blue mq975:pt-8 mq975:pb-8 mq975:box-border mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
        <h3 className="m-0 self-stretch relative text-inherit leading-[75px] font-bold font-inherit mq975:text-5xl mq975:leading-[60px] mq450:text-lg mq450:leading-[45px]">{`Grandview Portfolio VS S&P 500`}</h3>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[66px] box-border max-w-full mq1500:pl-[33px] mq1500:pr-[33px] mq1500:box-border">
          <img
            className="h-[583px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-multiply"
            loading="lazy"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
      </div>
      <h3 className="m-0 self-stretch relative text-inherit leading-[75px] font-bold font-inherit mq975:text-5xl mq975:leading-[60px] mq450:text-lg mq450:leading-[45px]">
        Featured Investment Opportunities
      </h3>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-xl">
        <div className="flex flex-row items-start justify-center gap-[23px] max-w-full mq1650:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[207.2px] px-0 pb-0">
            <img
              className="w-[34px] h-[34px] relative object-contain"
              loading="lazy"
              alt=""
              src="/polygon-1.svg"
            />
          </div>
          <div className="w-[1530px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 px-[465px] box-border gap-[30px] max-w-full mq975:gap-[15px] mq975:pl-[116px] mq975:pr-[116px] mq975:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1500:pl-[232px] mq1500:pr-[232px] mq1500:box-border">
            <div className="ml-[-630px] w-[600px] rounded-11xl bg-light-grey shadow-[0px_0px_20px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 px-0 pb-[50px] box-border gap-[80px] [debug_commit:f6aba90] mq975:pb-8 mq975:box-border mq450:pb-[21px] mq450:box-border">
              <div className="self-stretch flex flex-col items-start justify-start py-[123px] px-0 gap-[10px] bg-[url('/public/bgimg@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <b className="self-stretch relative leading-[34px] mq450:text-base mq450:leading-[27px]">
                  Income
                </b>
                <h1 className="m-0 self-stretch relative text-21xl leading-[60px] font-normal font-source-sans-pro mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
                  REIT
                </h1>
              </div>
              <div className="flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full text-left text-anchor-grey font-open-sans">
                <div className="w-[484px] flex flex-col items-start justify-start py-0 pr-0 pl-[148.5px] box-border gap-[30px] max-w-full">
                  <div className="ml-[-164.5px] w-[500px] flex flex-col items-start justify-start gap-[10px] max-w-[149%] shrink-0">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq975:flex-wrap">
                      <b className="h-[34px] w-[150px] relative leading-[34px] inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
                        Returns
                      </b>
                      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[117px]">
                        <div className="self-stretch h-[26px] rounded-11xl bg-gainsboro-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.2px] pb-0 pr-[38px] pl-0 box-border">
                          <div className="h-[30px] flex-1 relative bg-limegreen" />
                        </div>
                      </div>
                      <div className="w-[150px] relative leading-[34px] text-right inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
                        moderate
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq975:flex-wrap">
                      <b className="h-[34px] w-[150px] relative leading-[34px] inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
                        Risk
                      </b>
                      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[117px]">
                        <div className="self-stretch h-[26px] rounded-11xl bg-gainsboro-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.2px] pb-0 pr-8 pl-0 box-border">
                          <div className="h-[30px] flex-1 relative bg-limegreen" />
                        </div>
                      </div>
                      <div className="w-[150px] relative leading-[34px] text-right inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
                        low
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq975:flex-wrap">
                      <b className="h-[34px] w-[150px] relative leading-[34px] inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
                        Timeframe
                      </b>
                      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[117px]">
                        <div className="self-stretch h-[26px] rounded-11xl bg-gainsboro-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.2px] px-0 pb-0 box-border">
                          <div className="h-[30px] w-[99px] relative bg-limegreen" />
                        </div>
                      </div>
                      <div className="w-[150px] relative leading-[34px] text-right inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
                        medium-long
                      </div>
                    </div>
                  </div>
                  <div className="ml-[-164.5px] w-[500px] relative leading-[34px] inline-block max-w-[149%] shrink-0 mq450:text-base mq450:leading-[27px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <button className="cursor-pointer [border:none] p-[30px] bg-azure-blue rounded-31xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-cornflowerblue-100">
                    <b className="h-[27px] relative text-xl inline-block font-aeroport text-light-grey text-left min-w-[111px]">
                      Learn More
                    </b>
                  </button>
                </div>
              </div>
            </div>
            <InvestmentCard growth="Growth" />
            <InvestmentCard
              growth="Defensive"
              propBackgroundImage="url('/bgimg2@3x.png')"
              propAlignSelf="unset"
              propFlex="unset"
              propWidth="484px"
              propAlignSelf1="unset"
              propWidth1="500px"
              propHeight="34px"
              propHeight1="34px"
              propAlignSelf2="unset"
              propWidth2="500px"
            />
          </div>
        </div>
        <img
          className="h-[34px] w-[34px] absolute !m-[0] top-[207.2px] right-[-8px] object-contain"
          loading="lazy"
          alt=""
          src="/polygon-2.svg"
        />
      </div>
    </section>
  );
};

export default Background;
