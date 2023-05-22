import { z } from "zod";

export const schemaForm = z
  .object({
    form: z.object({
      zipCode: z.string().min(9, "Por favor, informe um CEP válido"),
      billValue:z.string().nonempty("Digite o valor da sua conta de luz"),
      structureTypes:z.string().nonempty("Selecione um tipo de estrutura")
    }),
  })
  .transform((fields) => ({
    form: {
      zipCode: fields.form.zipCode,
      billValue: fields.form.billValue,
      structureTypes: fields.form.structureTypes
    },
  }));