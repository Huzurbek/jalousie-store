import { Box, Typography } from "@mui/material";
import Label from "./Label";
interface IProps {
  image: string;
  text?: string;
  label?: string;
}
export const CatalogBarCard: React.FC<IProps> = ({ image, text, label }) => {
  return (
    <Box
      sx={{
        background: "#F3F3F1",
        borderRadius: "16px",
        backgroundImage: `url("${image}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: 195,
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        p: "16px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: 86,
          height: 86,
          borderRadius: "100%",
          background: "#F9DD70",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        НОВИНКА
      </Box>
      {text && (
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "24px",
            color: "#fff",
            // maxWidth: 160,
            ml: "16px",
          }}
        >
          {text}
        </Typography>
      )}
      {label && (
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
            textTransform: "uppercase",
          }}
        >
          {label}
        </Label>
      )}
    </Box>
  );
};
