import { Typography, Box } from "@mui/material";

interface ITitle {
  text: string;
}
const Title: React.FC<ITitle> = ({ text }) => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "18px", sm: "24px", md: "36px" },
          lineHeight: { xs: "24px", sm: "36px", md: "48px" },
        }}
      >
        {text}
      </Typography>
      {/* <Divider sx={{ mb: 3, mt: 1 }} /> */}
    </Box>
  );
};
export default Title;
