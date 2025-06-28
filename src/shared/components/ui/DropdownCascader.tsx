'use client';

import { useEffect, useState } from 'react';

type CascadingData = {
  los: {
    name: string;
    sbu: {
      name: string;
      subSbu: {
        name: string;
        competency: string[];
      }[];
    }[];
  }[];
};

type Props = {
  data: CascadingData;
  value: { los?: string; sbu?: string; subSbu?: string; competency?: string };
  onChange: (val: Props['value']) => void;
};

export function DropdownCascader({ data, value, onChange }: Props) {
  const [sbus, setSbus] = useState<string[]>([]);
  const [subsbus, setSubsbus] = useState<string[]>([]);
  const [competencies, setCompetencies] = useState<string[]>([]);

  useEffect(() => {
    const losObj = data.los.find((l) => l.name === value.los);
    setSbus(losObj?.sbu.map((s) => s.name) ?? []);
    setSubsbus([]);
    setCompetencies([]);
    onChange({
      ...value,
      sbu: undefined,
      subSbu: undefined,
      competency: undefined,
    });
  }, [value.los]);

  useEffect(() => {
    const sbuObj = data.los
      .flatMap((l) => l.sbu)
      .find((s) => s.name === value.sbu);
    setSubsbus(sbuObj?.subSbu.map((s) => s.name) ?? []);
    setCompetencies([]);
    onChange({ ...value, subSbu: undefined, competency: undefined });
  }, [value.sbu]);

  useEffect(() => {
    const subSbuObj = data.los
      .flatMap((l) => l.sbu)
      .flatMap((s) => s.subSbu)
      .find((sub) => sub.name === value.subSbu);
    setCompetencies(subSbuObj?.competency ?? []);
  }, [value.subSbu]);

  const inputBase =
    'px-2 py-1 text-sm rounded border transition-colors duration-200 w-full';
  const darkAware =
    'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100';
  const invalid = (val?: string) =>
    val ? '' : 'border-red-500 bg-red-50 dark:bg-red-950';

  return (
    <div className="grid grid-cols-4 gap-2">
      <select
        className={`${inputBase} ${darkAware} ${invalid(value.los)}`}
        value={value.los ?? ''}
        onChange={(e) => onChange({ ...value, los: e.target.value })}
      >
        <option value="">LOS</option>
        {data.los.map((los) => (
          <option key={los.name} value={los.name}>
            {los.name}
          </option>
        ))}
      </select>
      <select
        className={`${inputBase} ${darkAware} ${invalid(value.sbu)}`}
        value={value.sbu ?? ''}
        onChange={(e) => onChange({ ...value, sbu: e.target.value })}
      >
        <option value="">SBU</option>
        {sbus.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <select
        className={`${inputBase} ${darkAware} ${invalid(value.subSbu)}`}
        value={value.subSbu ?? ''}
        onChange={(e) => onChange({ ...value, subSbu: e.target.value })}
      >
        <option value="">SubSBU</option>
        {subsbus.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <select
        className={`${inputBase} ${darkAware} ${invalid(value.competency)}`}
        value={value.competency ?? ''}
        onChange={(e) => onChange({ ...value, competency: e.target.value })}
      >
        <option value="">Competency</option>
        {competencies.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
