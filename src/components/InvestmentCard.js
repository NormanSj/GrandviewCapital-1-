import { useMemo } from "react";

const InvestmentCard = ({
  growth,
  propBackgroundImage,
  propAlignSelf,
  propFlex,
  propWidth,
  propAlignSelf1,
  propWidth1,
  propHeight,
  propHeight1,
  propAlignSelf2,
  propWidth2,
}) => {
  const bgImgStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const ratingsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propWidth1]);

  const moderateStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const lowStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth2,
    };
  }, [propAlignSelf2, propWidth2]);

  return (
    <div className="w-[600px] rounded-11xl bg-light-grey shadow-[0px_0px_20px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border gap-[80px] [debug_commit:f6aba90] text-center text-xl text-light-grey font-aeroport mq975:pb-8 mq975:box-border mq450:pb-[21px] mq450:box-border">
      <div
        className="self-stretch flex flex-col items-start justify-start py-[123px] px-0 gap-[10px] bg-[url('/public/bgimg1@3x.png')] bg-cover bg-no-repeat bg-[top]"
        style={bgImgStyle}
      >
        <b className="self-stretch relative leading-[34px] mq450:text-base mq450:leading-[27px]">
          {growth}
        </b>
        <h1 className="m-0 self-stretch relative text-21xl leading-[60px] font-normal font-source-sans-pro mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
          Private Equity Product
        </h1>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full text-left text-anchor-grey font-open-sans"
        style={frameDivStyle}
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full"
          style={frameDiv1Style}
        >
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[10px]"
            style={ratingsStyle}
          >
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq975:flex-wrap">
              <b className="w-[150px] relative leading-[34px] inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
                Returns
              </b>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[117px]">
                <div className="self-stretch h-[26px] rounded-11xl bg-gainsboro-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.2px] pb-0 pr-[38px] pl-0 box-border">
                  <div className="h-[30px] flex-1 relative bg-limegreen" />
                </div>
              </div>
              <div
                className="w-[150px] relative leading-[34px] text-right inline-block shrink-0 mq450:text-base mq450:leading-[27px]"
                style={moderateStyle}
              >
                moderate
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq975:flex-wrap">
              <b className="w-[150px] relative leading-[34px] inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
                Risk
              </b>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[117px]">
                <div className="self-stretch h-[26px] rounded-11xl bg-gainsboro-100 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.2px] pb-0 pr-8 pl-0 box-border">
                  <div className="h-[30px] flex-1 relative bg-limegreen" />
                </div>
              </div>
              <div
                className="w-[150px] relative leading-[34px] text-right inline-block shrink-0 mq450:text-base mq450:leading-[27px]"
                style={lowStyle}
              >
                low
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq975:flex-wrap">
              <b className="w-[150px] relative leading-[34px] inline-block shrink-0 mq450:text-base mq450:leading-[27px]">
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
          <div
            className="self-stretch relative leading-[34px] mq450:text-base mq450:leading-[27px]"
            style={loremIpsumDolorStyle}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button className="cursor-pointer [border:none] p-[30px] bg-azure-blue rounded-31xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-cornflowerblue-100">
              <b className="h-[27px] relative text-xl inline-block font-aeroport text-light-grey text-left min-w-[111px]">
                Learn More
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
