import { FormProps } from "../../services/schemaTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaForm } from "./schema";
import { fetchData } from "../../services/request";
import { useCallback, useEffect } from "react";
import formatedCep from "../../utils/formatCep";

export const useForms = () => {
  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      form: {
        zipCode: "",
        billValue: "",
        structureTypes: "",
      },
    },
  });

  const zipCode = watch("form.zipCode");

  const handleFetchData = useCallback(
    async (zipCode: string, billValue: string, structureTypes: string) => {
      try {
        const valor_conta = billValue;
        const estrutura = structureTypes;
        await fetchData(zipCode, estrutura, valor_conta);
      } catch {
        // DO Nothing
      }
    },
    []
  );

  const handleFormSubmit = (data: FormProps) => {
    const { zipCode, billValue, structureTypes } = data.form;
    handleFetchData(zipCode, billValue, structureTypes);
  };

  useEffect(() => {
    setValue("form.zipCode", formatedCep(zipCode));
    if (zipCode.length !== 9) return;
  }, [setValue, zipCode]);

  return {
    errors,
    register,
    handleFormSubmit,
    handleSubmit,
  };
};
