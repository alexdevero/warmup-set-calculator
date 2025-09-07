import { useState } from "react";

type WarmupSet = {
  weight: string;
  reps: string;
  percentage: number;
};

export const useWarmupSetCalculator = (
  workingSetWeight: string,
  isCompoundExercise: boolean
) => {
  const [warmupSets, setWarmupSets] = useState<WarmupSet[]>([]);

  const handleCalculation = () => {
    const workingSetWeightNumber = Number(workingSetWeight);

    if (isNaN(workingSetWeightNumber)) {
      return;
    }

    if (isCompoundExercise) {
      // Compound exercise:
      // * Set 1 → 40% of W × 8–10 reps
      // * Set 2 → 60% of W × 5–6 reps
      // * Set 3 → 75% of W × 3–4 reps
      // * (Optional) Set 4 → 90% of W × 1–2 reps (only for very heavy compounds in intensification/peak phases)
      setWarmupSets([
        {
          weight: "Empty bar",
          reps: "12",
          percentage: 0.0,
        },
        {
          weight: (workingSetWeightNumber * 0.4).toFixed(2),
          reps: "8-10",
          percentage: 0.4,
        },
        {
          weight: (workingSetWeightNumber * 0.6).toFixed(2),
          reps: "5-6",
          percentage: 0.6,
        },
        {
          weight: (workingSetWeightNumber * 0.75).toFixed(2),
          reps: "3-4",
          percentage: 0.75,
        },
        {
          weight: (workingSetWeightNumber * 0.9).toFixed(2),
          reps: "1-2",
          percentage: 0.9,
        },
      ]);
    } else {
      // Isolation exercise:
      // * Set 1 → 50% of W × 10–12 reps
      // * Set 2 → 70% of W × 6–8 reps
      setWarmupSets([
        {
          weight: (workingSetWeightNumber * 0.5).toFixed(2),
          reps: "10-12",
          percentage: 0.5,
        },
        {
          weight: (workingSetWeightNumber * 0.7).toFixed(2),
          reps: "6-8",
          percentage: 0.7,
        },
      ]);
    }
  };

  return { warmupSets, handleCalculation };
};
