import { ProductList } from "./sections/ProductList";
import { AdvertisingBoard } from "./sections/AdvertisingBoard";
import { PartnersSection } from "./sections/PartnersSection";
import { CatalogBarSection } from "./sections/CatalogBarSection";
import { PageWrapper } from "../../components/PageWrapper";
import HeaderSliderSection from "./sections/HeaderSliderSection";
// import { SeenProductList } from "./sections/SeenProductList";

const Main = () => {
  return (
    <PageWrapper>
      <HeaderSliderSection sx={{ outline: "1px solid green", mb: 4 }} />
      <CatalogBarSection
        sx={{ outline: "1px solid green", mb: { xs: 3, sm: 4, md: 9 } }}
      />
      <ProductList
        sx={{ outline: "1px solid green", mb: { xs: 3, sm: 4, md: 9 } }}
      />
      <AdvertisingBoard
        sx={{ outline: "1px solid green", mb: { xs: 3, sm: 4, md: 9 } }}
      />
      {/* <SeenProductList sx={{ outline: "1px solid green", mb: {xs:3, sm:4, md:9 } }} /> */}
      <PartnersSection
        sx={{ outline: "1px solid green", mb: { xs: 3, sm: 4, md: 9 } }}
      />
    </PageWrapper>
  );
};

export default Main;
