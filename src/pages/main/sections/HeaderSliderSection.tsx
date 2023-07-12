import { Box, SxProps, Theme } from "@mui/material";
import GliderComponent from "react-glider";
import "glider-js/glider.min.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SliderCard from "../../../components/SliderCard";
import { ReactNode } from "react";

function ContainerElement({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
interface IProps {
  sx?: SxProps<Theme>;
}
const HeaderSliderSection: React.FC<IProps> = ({ sx }) => {
  const sliderList = [
    {
      id: "42342",
      title: "Качественные материалы",
      description:
        "Сотрудничаем только с признанными лидерами рынка в сфере создания тканей и комплектующих. Качество продукции контролируется на всех этапах производства.",
    },
    {
      id: "2",
      title: "Качественные материалы",
      description:
        "Сотрудничаем только с признанными лидерами рынка в сфере создания тканей и комплектующих. Качество продукции контролируется на всех этапах производства.",
    },
    {
      id: "23",
      title: "Качественные материалы",
      description:
        "Сотрудничаем только с признанными лидерами рынка в сфере создания тканей и комплектующих. Качество продукции контролируется на всех этапах производства.",
    },
  ];
  return (
    <Box sx={sx}>
      <GliderComponent
        containerElement={ContainerElement}
        draggable
        duration={0.25}
        hasDots
        scrollToSlide={3}
        slidesToShow={1}
        scrollLock
        hasArrows
        iconLeft={
          <ArrowBackIosNewOutlinedIcon
            color="primary"
            fontSize="large"
            sx={{ ml: 40, mt: 10 }}
          />
        }
        iconRight={
          <ArrowForwardIosOutlinedIcon
            color="primary"
            fontSize="large"
            sx={{ mr: 40, mt: 10 }}
          />
        }
      >
        {sliderList.map((el) => (
          <SliderCard
            key={el.id}
            title={el.title}
            description={el.description}
          />
        ))}
      </GliderComponent>
    </Box>
  );
};

export default HeaderSliderSection;
