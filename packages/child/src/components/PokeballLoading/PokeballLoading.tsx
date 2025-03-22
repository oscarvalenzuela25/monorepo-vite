import { FC, PropsWithChildren } from "react";
import "./styles.css";

type Props = PropsWithChildren & {
  isLoading: boolean;
};

const PokeballLoading: FC<Props> = ({ isLoading, children }) => {
  if (!isLoading) {
    return <>{children}</>;
  }
  return <div className="ball"></div>;
};

export default PokeballLoading;
