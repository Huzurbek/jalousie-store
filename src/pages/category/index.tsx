import { Box } from "@mui/material";
import { PageWrapper } from "../../components/PageWrapper";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCart";
import { productList } from "../../dataList";

const Category = () => {
  return (
    <PageWrapper>
      <Title text="Рулонные шторы 240 товаров" />
      <Box
        sx={{
          display: "flex",
          // flexDirection: { xs: "column", md: "row" },
          gap: 5,
          minHeight: 500,
          mt: 4,
        }}
      >
        <Box sx={{ flex: "1 1 14em", outline: "1px solid blue" }}>
          sidebar 1
        </Box>
        <Box sx={{ flex: "1 1 60em", outline: "1px solid blue" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(252px, 1fr))",
              columnGap: { xs: 2, sm: 15 },
              rowGap: { xs: 2, sm: 4 },
              boxSizing: "border-box",
            }}
          >
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryType={true}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Category;
