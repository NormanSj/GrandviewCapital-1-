import Background1 from "../components/Background1";
import Background from "../components/Background";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import FrameComponent from "../components/FrameComponent";

const HomepageDesktop = () => {
  return (
    <div className="w-full relative bg-light-grey overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Background1 />
      <Background />
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-20 px-[32.5px] box-border gap-[30px] max-w-full text-left text-21xl text-anchor-grey font-source-sans-pro mq975:pt-[22px] mq975:pb-[22px] mq975:box-border mq450:pt-5 mq450:pb-5 mq450:box-border mq1500:pt-[34px] mq1500:pb-[34px] mq1500:box-border">
        <Testimonials />
        <div className="self-stretch h-14 overflow-hidden shrink-0" />
        <h1 className="m-0 w-[628px] relative text-41xl leading-[75px] font-normal font-inherit text-center inline-block max-w-full mq975:text-29xl mq975:leading-[60px] mq450:text-17xl mq450:leading-[45px]">
          Investor Resource Corner
        </h1>
        <Blogs />
        <h1 className="m-0 w-[698px] relative text-41xl leading-[75px] font-normal font-inherit text-center inline-block max-w-full mq975:text-29xl mq975:leading-[60px] mq450:text-17xl mq450:leading-[45px]">
          Frequently Asked Questions
        </h1>
        <div className="w-[1200px] h-[100px] rounded-11xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-5 pr-[131.8px] pl-[50px] gap-[50px] max-w-full border-[1px] border-solid border-ocean-blue">
          <img
            className="h-[33.2px] w-[35.2px] relative"
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
          <h1 className="m-0 h-[60px] w-[933px] relative text-inherit leading-[60px] font-normal font-inherit inline-block shrink-0 mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
            What is an EMD product?
          </h1>
        </div>
        <div className="w-[1200px] rounded-11xl box-border overflow-hidden flex flex-row flex-wrap items-center justify-start py-5 pr-[131px] pl-[49px] gap-[50px] max-w-full border-[1px] border-solid border-ocean-blue mq975:gap-[25px] mq975:pr-8 mq975:box-border mq1500:pl-6 mq1500:pr-[65px] mq1500:box-border">
          <img
            className="h-[33.2px] w-[35.2px] relative"
            alt=""
            src="/group-1.svg"
          />
          <h1 className="m-0 flex-1 relative text-inherit leading-[60px] font-normal font-inherit inline-block min-w-[410px] max-w-full mq975:text-13xl mq975:leading-[48px] mq975:min-w-full mq450:text-5xl mq450:leading-[36px]">
            What is an accredited investor?
          </h1>
        </div>
        <div className="w-[1200px] rounded-11xl box-border overflow-hidden flex flex-row flex-wrap items-center justify-start py-5 pr-[131px] pl-[49px] gap-[50px] max-w-full border-[1px] border-solid border-ocean-blue mq975:gap-[25px] mq975:pr-8 mq975:box-border mq1500:pl-6 mq1500:pr-[65px] mq1500:box-border">
          <img
            className="h-[33.2px] w-[35.2px] relative"
            alt=""
            src="/group-1.svg"
          />
          <h1 className="m-0 flex-1 relative text-inherit leading-[60px] font-normal font-inherit inline-block min-w-[198px] max-w-full mq975:text-13xl mq975:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
            What is a REIT?
          </h1>
        </div>
        <div className="w-[1200px] rounded-11xl box-border overflow-hidden flex flex-row flex-wrap items-center justify-start py-5 pr-[131px] pl-[49px] gap-[50px] max-w-full border-[1px] border-solid border-ocean-blue mq975:gap-[25px] mq975:pr-8 mq975:box-border mq1500:pl-6 mq1500:pr-[65px] mq1500:box-border">
          <img
            className="h-[33.2px] w-[35.2px] relative"
            alt=""
            src="/group-1.svg"
          />
          <h1 className="m-0 flex-1 relative text-inherit leading-[60px] font-normal font-inherit inline-block min-w-[414px] max-w-full mq975:text-13xl mq975:leading-[48px] mq975:min-w-full mq450:text-5xl mq450:leading-[36px]">
            How do I assess my risk profile?
          </h1>
        </div>
        <button className="cursor-pointer [border:none] py-[30px] pr-5 pl-[30px] bg-ocean-blue w-[181px] rounded-31xl overflow-hidden flex flex-col items-center justify-center box-border whitespace-nowrap hover:bg-darkblue">
          <b className="h-[27px] relative text-xl inline-block font-aeroport text-light-grey text-left min-w-[121px]">
            See All FAQs
          </b>
        </button>
        <div className="self-stretch h-14 overflow-hidden shrink-0" />
        <Contact />
        <div className="self-stretch h-14 overflow-hidden shrink-0" />
        <FrameComponent />
      </section>
    </div>
  );
};

export default HomepageDesktop;
