import { Box, SxProps, Theme } from "@mui/material";
import { productList } from "../../../dataList";
import ProductCard from "../../../components/ProductCart";
import Title from "../../../components/Title";

interface IProps {
  sx?: SxProps<Theme>;
}
export const SeenProductList: React.FC<IProps> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Title text="Вы смотрели" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(169px, 1fr))",
          gap: { xs: 2, sm: 4 },
          boxSizing: "border-box",
          mt: { xs: 1, sm: 3 },
        }}
      >
        {productList.map((product, index) => {
          if (index < 6) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </Box>
    </Box>
  );
};
