import { Box, List, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const titleStyle = {
  color: "#fff",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "24px",
  marginBottom: "8px",
};
const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  listStyle: "none",
  "&>a, &>li": {
    fontSize: "18px",
    fontWeight: "400",
    color: "#A3A3A3",
    marginBottom: "8px",
    "&:hover": {
      color: "green",
    },
  },
});

export const Footer = () => {
  return (
    <Box sx={{ background: "#2C2529" }}>
      <Box
        sx={{
          pt: "45px",
          pb: "70px",
          px: "32px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={titleStyle}>Покупателям</Typography>
          <StyledList>
            <Link to="/">Доставка</Link>
            <Link to="/">Способы оплаты</Link>
            <Link to="/">Возврат товара</Link>
            <Link to="/">Гарантии</Link>
            <Link to="/">Услуги</Link>
            <Link to="/">Вопросы и ответы</Link>
          </StyledList>
        </Box>
        <Box>
          <Typography sx={titleStyle}>Полезное</Typography>
          <StyledList>
            <Link to="/">Инструкции</Link>
            <Link to="/">Статьи оплаты</Link>
          </StyledList>
        </Box>

        <Box>
          <Typography sx={titleStyle}>Компания</Typography>
          <StyledList>
            <Link to="/">О нас</Link>
            <Link to="/">Контакты</Link>
            <Link to="/">Реквизиты</Link>
            <Link to="/">Документы</Link>
            <Link to="/">Вакансии</Link>
          </StyledList>
        </Box>

        <Box>
          <Typography sx={titleStyle}>Мы в соцсетях</Typography>
          <StyledList>
            <Link to="/">Вконтакте</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Одноклассники</Link>
            <Link to="/">Instagram</Link>
          </StyledList>
        </Box>

        <Box>
          <Typography sx={titleStyle}>+7 (495) 542-76-98</Typography>
          <StyledList>
            <li>info@city-jaluzi.ru</li>
            <li>109369, Москва</li>
            <li>Новочеркасский б-р,</li>
            <li>дом 41, корпус 3</li>
          </StyledList>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#262123",
          p: "28px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#A3A3A3",
          }}
        >
          2022 © Сити Жалюзи — производим жалюзи, собираем карнизы, шьем шторы.
          Все права защищены.
        </Typography>
      </Box>
    </Box>
  );
};
