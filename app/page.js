import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import StatsSection from "@/components/StatsSection";
import CompanyTicker from "@/components/CompanyTicker";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <StatsSection />
      <CompanyTicker />
    </>
  );
};

export default page;
