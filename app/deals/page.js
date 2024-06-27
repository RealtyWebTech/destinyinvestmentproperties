import BrandSlider from "@/components/BrandSlider";
import Deals from "@/components/Deals";
import PageBanner from "@/components/PageBanner";
import Work from "@/components/Work";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Active Deals"} />
      <Deals />
      {/* <BrandSlider /> */}
    </ThrownLayout>
  );
};
export default page;
