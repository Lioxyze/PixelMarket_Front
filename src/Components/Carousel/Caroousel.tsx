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
        src="https://media.discordapp.net/attachments/1213050633322496040/1265192868587507804/3.jpg?ex=66a09e2e&is=669f4cae&hm=1d62f641a86b5f5f8eff738f040fad2c6d926eea2e542c00d814203b051d478d&=&format=webp&width=473&height=473"
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
