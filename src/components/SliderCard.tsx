import { Box, Typography } from "@mui/material";

interface IProps {
  title: string;
  description: string;
}
const SliderCard: React.FC<IProps> = ({ title, description }) => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "460px",
          width: "100%",
          backgroundImage: `url(/assets/slider1.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: "50px 20px 20px 140px",
            maxWidth: 450,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: "44px",
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SliderCard;
