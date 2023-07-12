import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
const containerStyle = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  px: { xs: 2, md: 5 },
  py: { xs: 2, md: 5 },
  borderRadius: "16px",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
};
const titleStyle = {
  fontSize: "32px",
  fontWeight: "500",
  maxWidth: 280,
  lineHeight: "38px",
  marginBottom: "24px",
};
const textStyle = {
  fontSize: "16px",
  fontWeight: "400",
  maxWidth: "70%",
  lineHeight: "22px",
  marginBottom: { xs: 9, md: 5 },
};
interface IProps {
  sx?: SxProps<Theme>;
}
export const AdvertisingBoard: React.FC<IProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "28px",
        ...sx,
      }}
    >
      <Box
        sx={{
          flex: "1 1 20em",
          backgroundImage: 'url("assets/newsBoard1.png")',
          ...containerStyle,
        }}
      >
        <Typography variant="body1" sx={{ ...titleStyle }}>
          Бесплатный замер и доставка
        </Typography>
        <Typography variant="body1" sx={{ ...textStyle }}>
          Приедем на замер и доставим ваш заказ в надежной упаковке по Москве и
          области
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "start",
          }}
        >
          <Button variant="contained" color="success" size="large">
            Заказать замер
          </Button>
          <Button
            variant="outlined"
            color="success"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            Подробнее
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: "1 1 20em",
          backgroundImage: 'url("assets/newsBoard2.png")',
          ...containerStyle,
        }}
      >
        <Typography variant="body1" sx={{ ...titleStyle, maxWidth: 400 }}>
          Как произвести замер и установку самому
        </Typography>
        <Typography variant="body1" sx={{ ...textStyle }}>
          Посмотрите подробные инструкции по замеру или установке жалюзи и штор
        </Typography>
        <Button
          variant="outlined"
          sx={{ color: "black", border: "2px solid black" }}
        >
          Инструкции по замеру и установке
        </Button>
      </Box>
    </Box>
  );
};
