import { FC, PropsWithChildren } from "react";
import "./styles.css";

type Props = PropsWithChildren & {
  isLoading: boolean;
  data: unknown;
};

const PokeballLoading: FC<Props> = ({ isLoading, children, data }) => {
  if (!isLoading && !data) {
    return null;
  }

  if (!isLoading) {
    return <>{children}</>;
  }

  return <div className="ball"></div>;
};

export default PokeballLoading;
