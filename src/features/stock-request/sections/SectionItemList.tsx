'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import { InputField } from '@/shared/components/ui/InputField';
import { Button } from '@/shared/components/ui/Button';

export default function SectionItemList() {
  const { control, register, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">📦 Stock Items</h3>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end border border-gray-200 dark:border-gray-700 rounded p-4"
        >
          <InputField
            label="SKU"
            placeholder="e.g. AB-123"
            {...register(`items.${index}.sku`)}
            error={errors?.items?.[index]?.sku?.message}
          />
          <InputField
            type="number"
            label="Quantity"
            placeholder="e.g. 25"
            {...register(`items.${index}.quantity`, { valueAsNumber: true })}
            error={errors?.items?.[index]?.quantity?.message}
          />
          <InputField
            label="Description"
            placeholder="Optional"
            {...register(`items.${index}.description`)}
            error={errors?.items?.[index]?.description?.message}
          />
          <Button
            variant="danger"
            type="button"
            size="sm"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="primary"
        onClick={() => append({ sku: '', quantity: 1, description: '' })}
      >
        ➕ Add Item
      </Button>
    </section>
  );
}
