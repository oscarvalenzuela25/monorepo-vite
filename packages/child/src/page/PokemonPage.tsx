import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import PokeballLoading from "../components/PokeballLoading";
import pokeBackground from "../assets/pokeBackground.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  pokemonId: number;
};
const queryClient = new QueryClient();

const Pokemon: FC<Props> = ({ pokemonId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: async () => {
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
      }}
    >
      <h1
        style={{
          marginBottom: 40,
        }}
      >
        {isLoading ? "Loading..." : data?.name || ""}
      </h1>

      <PokeballLoading isLoading={isLoading}>
        <img
          src={data?.sprites?.front_default || pokeBackground}
          alt={data?.name || "pokeBackground"}
          width={data ? 200 : 600}
        />
      </PokeballLoading>
    </div>
  );
};

const PokemonPage: FC<Props> = ({ pokemonId }) => (
  <QueryClientProvider client={queryClient}>
    <Pokemon pokemonId={pokemonId} />
  </QueryClientProvider>
);

export default PokemonPage;
