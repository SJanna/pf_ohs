"use client";
import React, { useEffect, useState, useMemo } from "react";
import QuestionnaireResponsesColumns from "@/features/medical_record/QuestionnaireResponseColumns";
import { BundleEntry } from "@/types/Bundle";
import { QuestionnaireResponse } from "@/types/QuestionnaireResponse";
import { DataTable } from "@/components/DataTable/DataTable";
import Concept from "@/types/Concept";
import { questionnaireAnswersStatusObj } from "@/constants/questionnaireAnswersStatusCodeDisplay";
import { getResourceBundle } from "@/server/getResourceBundle";

function QuestionnaireResponsesTable({ encounterID}: { encounterID: string}) {
  
  const [entryData, setEntryData] = useState<BundleEntry<QuestionnaireResponse>[]>([]);

  const tableHeader = {
    title: "QuestionnaireResponses",
    description: "Manage your medical_record and view their details.",
  };

  const addButton = {
    href: `/medical_record/create/${encounterID}`,
    label: "Create QuestionnaireResponse",
  };

  const filters: {
    columnId: string;
    options: Concept[];
  }[] = [
    {
      columnId: "status",
      options: questionnaireAnswersStatusObj,
    },
  ];

  const columns = useMemo(
    () =>
      QuestionnaireResponsesColumns({
        data: entryData,
        setData: setEntryData,
        tableTitle: tableHeader.title,
      }),
    [entryData, tableHeader.title]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getResourceBundle({
          resourceType: "QuestionnaireResponse",
          query: `encounter=${encounterID}`
        });
        setEntryData(res.entry || []);
      } catch (error) {
        console.error("Error fetching medical_record:", error);
      }
    };
    fetchData();
  }, [ encounterID]);

  return (
    <DataTable
      columns={columns}
      data={entryData}
      tableHeader={tableHeader}
      addButton={addButton}
      filters={filters}
    />
  );
}

export default QuestionnaireResponsesTable;
