export type FormData = {
  irradiancia: number;
  economia: number;
  potencial: string;
};

import axios from "axios";

export const fetchData = (cep: string, structureType: string, billValue: string) => {
  return axios<FormData>({
    method: "GET",
    url: `https://api2.77sol.com.br/busca-cep?estrutura=${structureType}&valor_conta=${billValue}&cep=${cep}`,
  });
};