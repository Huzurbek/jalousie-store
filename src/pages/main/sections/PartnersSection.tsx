import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import Title from "../../../components/Title";
import { PartnersCard } from "../../../components/PartnersCard";
import { partnersIcon } from "../../../dataList";

interface IProps {
  sx?: SxProps<Theme>;
}

export const PartnersSection: React.FC<IProps> = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <Title text="Нам доверяют" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(169px, 1fr))",
          gap: { xs: 2, sm: 4 },
          boxSizing: "border-box",
          mt: { xs: 1, sm: 3 },
          mb: { xs: 4, sm: 8 },
        }}
      >
        {partnersIcon.map((el) => (
          <PartnersCard key={el.id} image={el.image} />
        ))}
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "28px",
          mb: 2,
        }}
      >
        Мастерская по производству жалюзи и пошиву штор
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "20px",
          mb: 3,
        }}
      >
        Сити Жалюзи – это мастерская Татьяны Русановой. Мы помогаем украсить и
        защитить окна. Для этого делаем жалюзи, шьем шторы, подбираем карнизы,
        устанавливаем рольставни. Наш конек – одежда сцены. Умеем согласовать
        проект с руководителем. Чтобы не переделывать, предпочитаем делать под
        ключ: замерить, доставить и установить. К нам обращаются, когда нужна
        защита от солнца, света, жары, любопытных прохожих. Мы делаем так, чтобы
        люди не тратили нервы в салонах штор, не носились по магазинам с кусками
        обоев, не ошибались в замерах, не стояли в очередях и пробках, забирая
        заказ, не мучились с установкой.
      </Typography>
      <Button variant="text" color="success">
        Читать далее
      </Button>
    </Box>
  );
};
