import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Button, SxProps, Theme } from "@mui/material";
import { productList } from "../../../dataList";
import ProductCard from "../../../components/ProductCart";
import Title from "../../../components/Title";

interface IProps {
  sx?: SxProps<Theme>;
}
export const ProductList: React.FC<IProps> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Title text="Возможно, вам понравится" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(169px, 1fr))",
          gap: { xs: 2, sm: 4 },
          boxSizing: "border-box",
          mt: { xs: 1, sm: 3 },
        }}
      >
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
        <Button
          variant="outlined"
          color="success"
          endIcon={<ArrowDownwardIcon />}
          sx={{ borderRadius: "40px", fontSize: "16px", fontWeight: "700" }}
          size="large"
        >
          Показать еще
        </Button>
      </Box>
    </Box>
  );
};
