import { useFormContext } from 'react-hook-form';
import { ZodSchema, ZodType, ZodTypeDef, z } from 'zod';

type WarningRule<T> = (data: T) => string[];

export function useZodValidation<T = any>(
  schema: ZodSchema<T>,
  extractWarnings?: WarningRule<T>
) {
  const { getValues } = useFormContext();

  const data = getValues();
  const validationResult = schema.safeParse(data);

  const warnings = extractWarnings ? extractWarnings(data) : [];

  return {
    data,
    validationResult,
    warnings,
  };
}
