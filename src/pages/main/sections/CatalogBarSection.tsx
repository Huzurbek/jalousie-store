import { Box, SxProps, Theme } from "@mui/material";

import { CatalogBarCard } from "../../../components/CatalogBarCard";
import { catalogBarList } from "../../../Constants";

interface IProps {
  sx?: SxProps<Theme>;
}
export const CatalogBarSection: React.FC<IProps> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: { xs: 2, sm: 4 },
          boxSizing: "border-box",
        }}
      >
        {catalogBarList.map((el) => (
          <CatalogBarCard
            key={el.id}
            image={el.image}
            text={el.text}
            label={el.label}
          />
        ))}
      </Box>
    </Box>
  );
};
