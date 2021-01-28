import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useUsuarioYoQuery } from "../generated/graphql";

export const useIsAuth = () => {
  const { data, loading } = useUsuarioYoQuery();
  const router = useHistory();
  useEffect(() => {
    console.log(data?.usuarioYo);
    if (!loading && !data?.usuarioYo) {
      router.push("/ingresar");
    }
  }, [data, loading, router]);
};
