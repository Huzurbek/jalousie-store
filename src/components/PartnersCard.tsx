import { Box } from "@mui/material";

interface IProps {
  image: string;
}
export const PartnersCard: React.FC<IProps> = ({ image }) => {
  return (
    <Box
      sx={{
        background: "#F3F3F1",
        borderRadius: "16px",
        backgroundImage: `url(assets/partners/${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        px: 1,
        py: "66px",
      }}
    />
  );
};
