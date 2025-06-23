import Dump from "../../assets/static/catalogIcons/dump.svg";
import Crane from "../../assets/static/catalogIcons/crane.svg";
import Loader from "../../assets/static/catalogIcons/loader.svg";
import Exavator from "../../assets/static/catalogIcons/excavator.svg";
import KAMAZ65115 from "../../assets/static/catalogPhotos/kamaz65115.png";
import KAMAZ43118 from "../../assets/static/catalogPhotos/kamaz43118.png";
import ZoomLion from "../../assets/static/catalogPhotos/zoomlion.png";
import Cukurova from "../../assets/static/catalogPhotos/cukurova.png";
import JCB from "../../assets/static/catalogPhotos/jcb5x.png";
import KAMAZ6522 from "../../assets/static/catalogPhotos/kamaz6522.png";
import SANY from "../../assets/static/catalogPhotos/sany.png";
import LGCE from "../../assets/static/catalogPhotos/lgce.png";
const CatalogList = [
  {
    id: 1,
    title: "автокран",
    image: Crane,
    technic: [
      {
        id: 1,
        title: "Камаз 65115 КС-55713-1К-3",
        image: KAMAZ65115,
        parameters: [
          {
            id: 1,
            title: "Масса крана в транспортном положении, т",
            value: "21,7",
          },
          {
            id: 2,
            title: "Колесная формула",
            value: "6х4",
          },
          {
            id: 3,
            title: "Грузоподъемность, т",
            value: "25",
          },
          {
            id: 4,
            title: "Грузоподъемность на макс вылете, т",
            value: "6",
          },
          {
            id: 5,
            title: "Габаритные размеры, ДхШхВ, мм",
            value: "11800х2500х3830",
          },
          {
            id: 6,
            title: "Количество секций",
            value: "3",
          },
          {
            id: 7,
            title: "Длина стрелы, м",
            value: "28",
          },
        ],
      },
      {
        id: 2,
        title: "Камаз 43118 КЛИНЦЫ КС-55713-5К-4В",
        image: KAMAZ43118,
        parameters: [
          {
            id: 1,
            title: "Масса крана в транспортном положении, т",
            value: "22,5",
          },
          {
            id: 2,
            title: "Колесная формула",
            value: "6х6",
          },
          {
            id: 3,
            title: "Грузоподъемность, т",
            value: "25",
          },
          {
            id: 4,
            title: "Грузоподъемность на макс вылете, т",
            value: "6",
          },
          {
            id: 5,
            title: "Габаритные размеры, ДхШхВ, мм",
            value: "11960х2500х3960",
          },
          {
            id: 6,
            title: "Количество секций",
            value: "4",
          },
          {
            id: 7,
            title: "Длина стрелы, м",
            value: "31",
          },
        ],
      },
      {
        id: 3,
        title: "ZOOMLION ZTC300V",
        image: ZoomLion,
        parameters: [
          {
            id: 1,
            title: "Масса крана в транспортном положении, т",
            value: "32,5",
          },
          {
            id: 2,
            title: "Колесная формула",
            value: "6х4",
          },
          {
            id: 3,
            title: "Грузоподъемность, т",
            value: "30",
          },
          {
            id: 4,
            title: "Грузоподъемность на макс вылете, т",
            value: "7",
          },
          {
            id: 5,
            title: "Габаритные размеры, ДхШхВ, мм",
            value: "13150х2500х3450",
          },
          {
            id: 6,
            title: "Количество секций",
            value: "5",
          },
          {
            id: 7,
            title: "Длина стрелы, м",
            value: "42",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "экскаватор-гусеничный",
    image: Exavator,
    technic: [
      {
        id: 1,
        title: "SANY SY215C",
        image: SANY,
        parameters: [
          {
            id: 1,
            title: "Эксплуатационная масса, кг",
            value: "21900",
          },
          {
            id: 2,
            title: "Объём ковша, м3",
            value: "1,2",
          },
          {
            id: 3,
            title: "Максимальная высота копания, мм",
            value: "9600",
          },
          {
            id: 4,
            title: "Максимальная высота выгрузки, мм",
            value: "6730",
          },
          {
            id: 5,
            title: "Максимальная глубина копания, мм",
            value: "6600",
          },
          {
            id: 6,
            title: "Максимальное расстояние копания, мм",
            value: "10280",
          },
        ],
      },
      {
        id: 2,
        title: "LGCE E6522F",
        image: LGCE,
        parameters: [
          {
            id: 1,
            title: "Эксплуатационная масса, кг",
            value: "25500",
          },
          {
            id: 2,
            title: "Объём ковша, м3",
            value: "1,5",
          },
          {
            id: 3,
            title: "Максимальная высота копания, мм",
            value: "9690",
          },
          {
            id: 4,
            title: "Максимальная высота выгрузки, мм",
            value: "6800",
          },
          {
            id: 5,
            title: "Максимальная глубина копания, мм",
            value: "6980",
          },
          {
            id: 6,
            title: "Максимальное расстояние копания, мм",
            value: "10260",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "экскаватор-погрузчик",
    image: Loader,
    technic: [
      {
        id: 1,
        title: "CUKUROVA 885",
        image: Cukurova,
        parameters: [
          {
            id: 1,
            title: "Эксплуатационная масса, кг",
            value: "8611",
          },
          {
            id: 2,
            title: "Объём погрузочного ковша, м3",
            value: "1,1",
          },
          {
            id: 3,
            title: "Объём экскаваторного ковша, м3",
            value: "0,2",
          },
          {
            id: 4,
            title: "Ширина ковша, мм",
            value: "2280",
          },
          {
            id: 5,
            title: "Максимальная высота сброса, мм",
            value: "2950",
          },
          {
            id: 6,
            title: "Максимальная масса погрузки, кг",
            value: "3440",
          },
          {
            id: 7,
            title: "Ширина эксаваторного ковша, мм",
            value: "600",
          },
          {
            id: 8,
            title: "Максимальная глубина копания, мм",
            value: "6000",
          },
          {
            id: 9,
            title: "Максимальная высота погрузки, мм",
            value: "5030",
          },
        ],
      },
      {
        id: 2,
        title: "JCB 5CX 15H2WA",
        image: JCB,
        parameters: [
          {
            id: 1,
            title: "Эксплуатационная масса, кг",
            value: "9810",
          },
          {
            id: 2,
            title: "Объём погрузочного ковша, м3",
            value: "1,3",
          },
          {
            id: 3,
            title: "Объём экскаваторного ковша, м3",
            value: "0,38",
          },
          {
            id: 4,
            title: "Ширина ковша, мм",
            value: "2330",
          },
          {
            id: 5,
            title: "Максимальная высота сброса, мм",
            value: "2690",
          },
          {
            id: 6,
            title: "Максимальная масса погрузки, кг",
            value: "4378",
          },
          {
            id: 7,
            title: "Ширина эксаваторного ковша, мм",
            value: "600",
          },
          {
            id: 8,
            title: "Максимальная глубина копания, мм",
            value: "6510",
          },
          {
            id: 9,
            title: "Максимальная высота погрузки, мм",
            value: "3180",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "самосвал",
    image: Dump,
    technic: [
      {
        id: 1,
        title: "Камаз 6522-43",
        image: KAMAZ6522,
        parameters: [
          {
            id: 1,
            title: "Колесная формула",
            value: "6х6",
          },
          {
            id: 2,
            title: "Грузоподъемность, т",
            value: "19",
          },
          {
            id: 3,
            title: "Габаритные размеры, ДхШхВ, мм",
            value: "11500х2550х3280",
          },
          {
            id: 4,
            title: "Объем платформы м3",
            value: "12",
          },
          {
            id: 5,
            title: "Снаряженная масса, кг",
            value: "10275",
          },
          {
            id: 6,
            title: "Максимально допустимая масса, кг",
            value: "33100",
          },
        ],
      },
    ],
  },
];
export default CatalogList;
