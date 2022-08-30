import { defineStore } from "pinia";
import type { ICard } from "../interfaces/ICard";

export const cardsStore = defineStore("list", {
  state: () => {
    return {
      cards: [
        {
          title: "Sempre Contigo",
          description:
            "Porque a tua evolução é importante para nós, acompanhamos-te desde o primeiro dia, para facilitar o teu processo de integração e adaptação. O nosso objetivo é assegurar que as tuas expectativas são cumpridas ao longo de todo o teu percurso na X.",
          icon: "https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/icons/1.png",
          background: "yellow",
        },
        {
          title: "Progressão de Carreira",
          description:
            "Tu decides até onde queres chegar. A X põe à tua disposição promoções técnicas verticais e horizontais, um processo de evolução até à gestão de projetos e gestão de equipas, e também te dá oportunidades de mobilidade internacional.",
          icon: "https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/icons/2.png",
          background: "turquose",
        },
        {
          title: "Trabalho em Equipe",
          description:
            "Em conjunto com uma sólida formação técnica em diferentes categorias, é o que define os nossos consultores. Juntos, convertemo-nos num verdadeiro motor para alcançar o êxito.",
          icon: "https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/icons/3.png",
          background: "purple",
        },
        {
          title: "Desenvolve teu próprio Negócio",
          description:
            "Em conjunto com uma sólida formação técnica em diferentes categorias, é o que define os nossos consultores. Juntos, convertemo-nos num verdadeiro motor para alcançar o êxito.",
          icon: "https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/icons/4.png",
          background: "purple",
        },
        {
          title: "Nossos Clientes",
          description:
            "Os nossos clientes são empresas de prestígio, nos quais terás a oportunidade de colaborar em projetos de grande valor tecnológico, que te farão crescer diariamente.",
          icon: "https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/icons/5.png",
          background: "yellow",
        },
        {
          title: "Imigre com a YellowIpe",
          description:
            "Os nossos clientes são empresas de prestígio, nos quais terás a oportunidade de colaborar em projetos de grande valor tecnológico, que te farão crescer diariamente.",
          icon: "https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/icons/6.png",
          background: "turquose",
        },
      ] as ICard[],
    };
  },
});
