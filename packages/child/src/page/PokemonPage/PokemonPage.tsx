import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import PokeballLoading from "../../components/PokeballLoading";
import pokemon from "../../assets/pokemon.png";
import pokeBackground from "../../assets/pokeBackground.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./styles.module.css";

type Props = {
  pokemonId: number;
};
const queryClient = new QueryClient();

const Pokemon: FC<Props> = ({ pokemonId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const { data: pokemon } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );

      return pokemon;
    },
    enabled: !!pokemonId,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 600,
        height: 337.5,
        backgroundImage: `url(${data ? pokemon : pokeBackground})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <h1 className={styles.title}>{data?.name || ""}</h1>

      <div
        style={{
          position: "absolute",
          left: data ? 60 : 120,
          top: data ? 40 : 90,
        }}
      >
        <PokeballLoading isLoading={isLoading} data={data}>
          <img
            src={data?.sprites?.front_default}
            alt={data?.name}
            width={200}
          />
        </PokeballLoading>
      </div>
    </div>
  );
};

const PokemonPage: FC<Props> = ({ pokemonId }) => (
  <QueryClientProvider client={queryClient}>
    <Pokemon pokemonId={pokemonId} />
  </QueryClientProvider>
);

export default PokemonPage;
