import { atom, map } from 'nanostores';
import { type Cover as CoverType } from "@/components/cover/cover.type";

export const allInclusive: CoverType[] = atom([
  {
    cover:
      "https://www.palaceresorts.com/bp_Beach_areas_01_gallerygrid_512px_q60_3906c1d663.jpg",
    title: "Beach Palace",
    subtitle: "México, Cancun",
  },
  {
    cover:
      "https://www.palaceresorts.com/Mod_Dest_carouselcenter_512px_q60_a4017cb454.jpg",
    title: "Cozumel Palace",
    subtitle: "México, Cozumel",
  },
  {
    cover:
      "https://www.palaceresorts.com/le_blanc_cancun_carouselcenter_512px_q60_f5722ea1c8.jpg",
    title: "Le Blanc, Spa Resorts",
    subtitle: "México, Cancun",
  },
  {
    cover:
      "https://www.palaceresorts.com/le_blanc_los_cabos_carouselcenter_512px_q60_3479961e4f.jpg",
    title: "Le Blanc, Spa Resorts",
    subtitle: "México, Los Cabos",
  },
  {
    cover:
      "https://www.palaceresorts.com/moon_palace_cancun_carouselcenter_512px_q60_72369aba36.jpg",
    title: "Moon Palace",
    subtitle: "México, Cancun",
  },
  {
    cover:
      "https://www.palaceresorts.com/mp_jamaica_carouselcenter_512px_q60_5be902af01.jpg",
    title: "Moon Palace",
    subtitle: "Jamaica",
  },
  {
    cover:
      "https://www.palaceresorts.com/the_grand_carouselcenter_512px_q60_d2199d5b02.jpg",
    title: "Moon Palace The Grand",
    subtitle: "México, Cancun",
  },
  {
    cover:
      "https://www.palaceresorts.com/playacar_carouselcenter_512px_q60_8027b6207d.jpg",
    title: "Playacar Palace",
    subtitle: "México, Playa del Carmen",
  },
  {
    cover:
      "https://www.palaceresorts.com/sun_palace_carouselcenter_512px_q60_f5c93eee31.jpg",
    title: "Sun Palace",
    subtitle: "México, Cancun",
  },
  {
    cover:
      "https://www.palaceresorts.com/Moon_Nizuc_Mail_Header_b10f87de4b_1_05986ae495.jpg",
    title: "Moon Palace",
    subtitle: "Nizuc",
  },
  {
    cover:
      "https://www.palaceresorts.com/baglioni_resort_maldives_aerial_7fbb41c679.jpg",
    title: "Baglioni Resorts Maldives",
    subtitle: "Maldives",
  },
]);

export const europeanPlan: CoverType[] = atom([
  {
    cover:
      "https://www.palaceresorts.com/beach_baglioni_resort_sardinia_1_c243437f5d.jpg",
    title: "Baglioni Resorts Sardinia",
    subtitle: "Sardinia",
  },
  {
    cover:
      "https://www.palaceresorts.com/masseria_muzza_baglioni_resort_dd2350bbe2.jpg",
    title: "Baglioni Masseria Muzza",
    subtitle: "Plugia",
  },
  {
    cover:
      "https://www.palaceresorts.com/baglioni_hotel_roma_penthouse_953d60be10.jpg",
    title: "Baglioni Hotel Regina",
    subtitle: "Rome",
  },
  {
    cover: "https://www.palaceresorts.com/casa_baglioni_lobby_2dfd4b6e14.jpg",
    title: "Casa Baglioni",
    subtitle: "Milan",
  },
  {
    cover:
      "https://www.palaceresorts.com/baglioni_hotel_london_lobby_e917fa9b54.jpg",
    title: "Baglioni Hotel",
    subtitle: "London",
  },
  {
    cover:
      "https://www.palaceresorts.com/baglioni_hotel_luna_san_giorgio_terrace_night_bf8354623b.jpg",
    title: "Baglioni Hotel Luna",
    subtitle: "Venice",
  },
  {
    cover:
      "https://www.palaceresorts.com/baglioni_hotel_firenze_sala_della_musica_d07ad2fa37.jpg",
    title: "Reals Santa Croce",
    subtitle: "Florence",
  },
]);