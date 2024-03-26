import { regions } from "./constants/ranges";

type FieldMetadata = {
  id: string;
  label: string;
  type: "text" | "select" | "number";
  placeholder?: string;
  gridSize: number;
  options?: any;
  adornment?: string;
  min?: number;
  max?: number;
  step?: number;
  size?: string;
  disabled?: boolean;
  units?: string;
};

export const fieldMetadata: Record<string, FieldMetadata> = {
  company: {
    id: "company",
    label: "Предприятие",
    type: "text",
    placeholder: "",
    gridSize: 6,
  },
  region: {
    id: "region",
    label: "Регион",
    type: "select",
    options: regions,
    placeholder: "Не выбрано",
    gridSize: 6,
  },
  variety: {
    id: "variety",
    label: "Сорт",
    type: "text",
    placeholder: "",
    gridSize: 4,
  },
  field: {
    id: "field",
    label: "Поле №",
    type: "text",
    placeholder: "",
    gridSize: 4,
  },
  square: {
    id: "square",
    label: "Площадь, га",
    type: "number",
    placeholder: "",
    gridSize: 4,
    adornment: "га",
  },
  predecessor: {
    id: "predecessor",
    label: "Предшественник",
    type: "text",
    placeholder: "",
    gridSize: 12,
  },
  moisture: {
    id: "moisture",
    label: "Годовая влагообеспеченность предприятия",
    type: "number",
    placeholder: "",
    min: 0,
    max: 800,
    step: 10,
    gridSize: 6,
    adornment: "мм",
  },
  plannedYield: {
    id: "plannedYield",
    label: "Планируемая урожайность",
    type: "number",
    placeholder: "0",
    gridSize: 6,
    adornment: "ц/га",
  },
};
