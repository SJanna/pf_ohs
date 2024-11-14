"use client";
import React, { useState, useEffect } from "react";
import { getResourceBundle } from "@/server/getResourceBundle";
import { BundleEntry } from "@/types/Bundle";
import { Questionnaire } from "@/types/Questionnaire";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuestionnaireResponseForm from "../questionnaires/components/QuestionnaireResponseForm";

const QuestionnaireSelector = ({ encounterID }: { encounterID: string }) => {
  
  const [questionnaires, setQuestionnaires] = useState<
    BundleEntry<Questionnaire>[]
  >([]);
  const [selectedQuestionnaire, setSelectedQuestionnaire] =
    useState<Questionnaire | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResourceBundle({
          resourceType: "Questionnaire",
        });
        setQuestionnaires(data.entry ?? []);
      } catch (error) {
        console.error("Error fetching questionnaires:", error);
      }
    };
    fetchData();
  }, []);

  const encounter = {
    reference: `Encounter/${encounterID}`,
  };

  return (
    <div>
      <Select
        onValueChange={(value) => setSelectedQuestionnaire(JSON.parse(value))}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Questionnaire" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {questionnaires.map((questionnaire) => (
              <SelectItem
                key={questionnaire.resource?.id}
                value={JSON.stringify(questionnaire.resource)}
              >
                {questionnaire.resource?.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedQuestionnaire && (
        <QuestionnaireResponseForm
          questionnaire={selectedQuestionnaire}
          encounter={encounter}
        />
      )}
    </div>
  );
};

export default QuestionnaireSelector;
