import { schemaForm } from "../components/Form/schema";
import { z } from "zod";

export type FormProps = z.infer<typeof schemaForm>;
