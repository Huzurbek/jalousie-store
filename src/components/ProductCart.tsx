import { Box, Button, Typography } from "@mui/material";
import { TProduct } from "../types/product";
import Label from "./Label";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

interface IProductCard {
  product: TProduct;
  categoryType?: boolean;
}
const ProductCard: React.FC<IProductCard> = ({
  product,
  categoryType = false,
}) => {
  const { name, price } = product;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: 303,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Label
        color="success"
        sx={{
          width: "fit-content",
          px: "8px",
          background: "#fff",
          color: "#38BE76",
          borderRadius: "24px",
          fontSize: "14px",
          fontWeight: 700,
          position: "absolute",
          top: categoryType ? 290 : 180,
          left: 10,
        }}
      >
        -37%
      </Label>

      <img
        src={`./assets/products/product1.jpg`}
        alt={"жалюзи"}
        style={{
          width: "100%",
          height: categoryType ? 336 : 225,
          borderRadius: "10px",
        }}
        loading="lazy"
      />

      <Box
        sx={{
          p: 1,
          pt: 0,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "18px", fontWeight: "700", mt: "12px", mb: "8px" }}
        >
          {price}
          <span
            style={{
              fontSize: "14px",
              textDecorationLine: "line-through",
              color: "#A3A3A3",
              marginLeft: "12px",
            }}
          >
            18000 ₽
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "14px", flex: 1, fontWeight: 400, color: "#A3A3A3" }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            my: 1,
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          {[1, 2, 3, 4, 5].map((el) => {
            if (el <= 3) {
              return (
                <StarIcon
                  key={el}
                  sx={{
                    fontSize: "20px",
                    color: "#FFA800",
                  }}
                />
              );
            } else {
              return (
                <StarBorderIcon
                  key={el}
                  sx={{
                    fontSize: "20px",
                    color: "#FFA800",
                  }}
                />
              );
            }
          })}
          <Typography
            sx={{
              color: "#6E6E6E",
              ml: 1.25,
            }}
          >
            8
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flex: 1,
          }}
        >
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => console.log("going to cart")}
          >
            В корзину
          </Button>
          <FavoriteBorderIcon color="success" sx={{ fontSize: "30px" }} />
        </Box>
      </Box>
    </Box>
  );
};
export default ProductCard;
