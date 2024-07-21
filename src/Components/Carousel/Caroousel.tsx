import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://my-figurine.com/wp-content/uploads/2022/01/demon-slayer-nezuko-kamado-blood-demon-art-figuarts-zero.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://figurineanime.fr/wp-content/uploads/2023/02/Figurine-Demon-Slayer-Kimetsu-No-Yaiba-GK-Akaza-Kokushibo-Rengoku-Kyoujurou-figurine-d-action-en-PVC.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://tamashiinations.fr/11881-home_default/demon-slayer-figurine-tengen-uzui-figuarts-zero-bandai.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
