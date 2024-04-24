import Header from "./Header";
import Hero from "./Hero";
import Intro from "./Intro";

const Background1 = () => {
  return (
    <section className="self-stretch [background:linear-gradient(180deg,_#f5f5f5,_#fff)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-0 px-[50px] pb-[75.2px] box-border max-w-full text-left text-xl text-anchor-grey font-source-sans-pro mq975:pl-[25px] mq975:pr-[25px] mq975:pb-[21px] mq975:box-border mq1500:pb-8 mq1500:box-border">
      <Header />
      <Hero />
      <Intro />
      <div className="self-stretch rounded-31xl bg-lime-green overflow-hidden flex flex-row flex-wrap items-start justify-center py-[50px] px-20 box-border gap-[24.5px] max-w-full text-81xl text-ocean-blue mq1500:pl-10 mq1500:pr-10 mq1500:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border min-w-[296px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-5 gap-[10px]">
            <h1 className="m-0 relative text-inherit font-normal font-inherit mq975:text-31xl mq450:text-11xl">
              x %
            </h1>
            <div className="flex flex-row items-start justify-start py-0 pr-8 pl-[32.5px] text-5xl font-open-sans">
              <div className="relative inline-block min-w-[83px] mq450:text-lgi">
                returns
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border min-w-[296px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 px-5 gap-[10px]">
            <div className="flex flex-row items-start justify-start py-0 pr-[54px] pl-[54.5px]">
              <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[115px] mq975:text-31xl mq450:text-11xl">
                $ x
              </h1>
            </div>
            <div className="relative text-5xl font-open-sans mq450:text-lgi">
              under management
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border min-w-[296px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[37.9px] px-5 pb-0 gap-[24.5px]">
            <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-[13.5px]">
              <h1 className="m-0 h-[73.6px] relative text-inherit font-normal font-inherit inline-block min-w-[45px] mq975:text-31xl mq450:text-11xl">
                x
              </h1>
            </div>
            <div className="relative text-5xl font-open-sans inline-block min-w-[72px] mq450:text-lgi">
              clients
            </div>
          </div>
        </div>
        <div className="h-[248px] w-px relative box-border border-r-[1px] border-solid border-ocean-blue mq1500:w-full mq1500:h-px" />
        <div className="h-[248px] w-px relative box-border border-r-[1px] border-solid border-ocean-blue mq1500:w-full mq1500:h-px" />
      </div>
    </section>
  );
};

export default Background1;
