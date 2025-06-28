'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema, ProjectFormData } from '../schema';
import useAutoSave from '../hooks/useAutoSave';
import Step1GeneralInfo from './steps/Step1GeneralInfo';
import Step2Timeline from './steps/Step2Timeline';
import Step3Resources from './steps/Step3Resources';
import Step4Requirements from './steps/Step4Requirements';
import Step5Review from './steps/Step5Review';
// 🔜 import Step2Timeline, Step3..., etc. later

const STEPS = ['General Info', 'Timeline', 'Resources', 'Requirements', 'Review'];

const INITIAL_DATA: ProjectFormData = {
  step: 0,
  generalInfo: { name: '', sponsor: '', type: 'Internal', description: '' },
  timeline: { startDate: '', endDate: '', phases: [] },
  resources: { teamSize: 0, departments: [], hasVendors: false },
  requirements: { integrations: [], complianceNeeds: false, conditionalFields: {} },
  approval: { reviewer: '', notes: '' },
};

export default function ProjectFormWizard() {
  const methods = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: INITIAL_DATA,
  });

  const step = methods.watch('step');
  const setStep = (n: number) => methods.setValue('step', n);
  const { status } = useAutoSave(methods.watch);

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const onSubmit = (data: ProjectFormData) => {
    // Call final API here
    console.log('Submitted!', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold">{STEPS[step]}</h2>
        <div className="text-right text-sm text-gray-500">{status === 'saving' ? 'Saving...' : 'Saved'}</div>

        {/* Step rendering */}
        {step === 0 && <Step1GeneralInfo />}
        {step === 1 && <Step2Timeline />}
        {step === 2 && <Step3Resources />}
        {step === 3 && <Step4Requirements />}
        {step === 4 && <Step5Review />}
        {/* 🔜 step === 1 && <Step2Timeline />, etc */}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
