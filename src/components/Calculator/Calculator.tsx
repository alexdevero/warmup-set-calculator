"use client";

import { useWarmupSetCalculator } from "@/hooks/useWarmupSetCalculator";
import { type FC, useState } from "react";

export const Calculator: FC = () => {
  const [workingSetWeight, setWorkingSetWeight] = useState("");
  const [isCompoundExercise, setIsCompoundExercise] = useState(false);

  const { warmupSets, handleCalculation } = useWarmupSetCalculator(
    workingSetWeight,
    isCompoundExercise
  );

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="weight">Working set weight:</label>
          <div className="flex">
            <input
              id="weight"
              name="weight"
              type="number"
              className="border-l border-y border-gray-300 rounded-bl-md rounded-tl-md p-2 text-sm h-full"
              step={0.05}
              min={0}
              value={workingSetWeight}
              onChange={(e) => setWorkingSetWeight(e.target.value)}
            />
            <div className="text-sm border border-gray-300 border-l-gray-500 rounded-br-md rounded-tr-md flex items-center px-2 cursor-default select-none">
              kg
            </div>
          </div>
        </div>

        <label htmlFor="isCompound" className="flex items-center gap-2">
          <input
            id="isCompound"
            name="isCompound"
            type="checkbox"
            checked={isCompoundExercise}
            onChange={(e) => setIsCompoundExercise(e.target.checked)}
          />
          Is compound exercise
        </label>

        <button
          className="rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 cursor-pointer transition-colors disabled:opacity-50 disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:cursor-not-allowed text-sm font-bold"
          disabled={workingSetWeight === ""}
          onClick={handleCalculation}
        >
          Calculate
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Warmup sets</h2>

        {warmupSets.length === 0 && <p>No warmup sets calculated</p>}

        <div className="flex flex-col gap-2">
          {warmupSets.map((set, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 text-sm">
              <p>
                Set {index + 1} (at {set.percentage * 100}%)
              </p>
              <p>
                Weight: {set.weight} {set.weight === "Empty bar" ? "" : "kg"}
              </p>
              <p>Reps: {set.reps}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
