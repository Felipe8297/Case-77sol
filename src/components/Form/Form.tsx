import {
  Tittle,
  ConteinerCep,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledSpan,
  StyledSelect,
  StyledButton,
} from "./styles";
import { useForms } from "./useForm";

export default function FormStep() {
  const structureType = [
    { id: 1, label: "fibrocimento-madeira" },
    { id: 2, label: "fibrocimento-metalico" },
    { id: 3, label: "ceramico" },
    { id: 4, label: "metalico" },
    { id: 5, label: "laje" },
    { id: 6, label: "solo" },
  ];
  const { errors, handleSubmit, handleFormSubmit, register } = useForms();

  return (
    <ConteinerCep>
      <StyledDiv>
        <Tittle>Simulador Solar</Tittle>
        <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
          <StyledInput
            type="text"
            placeholder="CEP"
            {...register("form.zipCode")}
            maxLength={9}
          />
          {errors.form?.zipCode && (
            <StyledSpan>{errors.form?.zipCode.message}</StyledSpan>
          )}
          <StyledSelect {...register("form.structureTypes")} defaultValue="">
            <option value="" disabled className="placeholder-option">
              Tipo de estrutura de telhado
            </option>
            {structureType.map((item) => (
              <option key={item.id} value={item.label}>
                {item.label}
              </option>
            ))}
          </StyledSelect>
          <StyledInput
            type="text"
            placeholder="Valor da conta"
            {...register("form.billValue")}
            maxLength={9}
          />
          {errors.form?.billValue && (
            <StyledSpan>{errors.form?.billValue.message}</StyledSpan>
          )}

          <StyledButton type="submit">Enviar</StyledButton>
        </StyledForm>
      </StyledDiv>
    </ConteinerCep>
  );
}
