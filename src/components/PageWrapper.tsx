import { Box } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export const PageWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#2C2529",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <Box
        sx={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
