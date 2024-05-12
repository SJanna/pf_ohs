"use client";
import React, { useEffect, useState, useMemo } from "react";
import { getQuestionnaires } from "@/features/questionnaire_creator/server/getQuestionnaires";
import QuestionnairesColumns from "@/features/questionnaire_creator/components/QuestionnairesColumns";
import {
  Bundle,
  BundleEntry,
} from "@/features/questionnaire_creator/types/Bundle";
import QuestionnaireTableView from "@/features/questionnaire_creator/components/QuestionnairesTableView";
import { Questionnaire } from "@/features/questionnaire_creator/types/Questionnaire";
import {
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

function QuestionnairesTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [data, setData] = useState<Bundle>();
  const [entryData, setEntryData] = useState<BundleEntry<Questionnaire>[]>([]);

  const columns = useMemo(
    () => QuestionnairesColumns({ data: entryData, setData: setEntryData }),
    [entryData]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getQuestionnaires();
        setData(res);
        setEntryData(res.entry || []);
      } catch (error) {
        console.error("Error fetching questionnaires:", error);
      }
    };
    fetchData();
  }, []);

  const table = useReactTable({
    data: entryData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div>
      {data?.total && <p>Total: {data.total}</p>}
      <QuestionnaireTableView columns={columns} table={table} />
    </div>
  );
}

export default QuestionnairesTable;