"use client";
import React from "react";
import { Form } from "@/components/ui/form";
import QuestionnaireFormField from "@/features/questionnaire_creator/components/QuestionnaireFormField";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { questionnaireSchema, Questionnaire } from "@/types/Questionnaire";
import PreviewQuestionnaireForm from "./PreviewQuestionnaireForm";

const QuestionnaireForm = () => {
  const form = useForm<Questionnaire>({
    resolver: zodResolver(questionnaireSchema),
    defaultValues: {
      resourceType: "Questionnaire",
      title: "",
      url: "",
      status: "draft",
      subjectType: "",
      date: new Date(),
      item: [],
    },
  });

  const onSubmit = (data: Questionnaire) => {
    console.log("Datos del formulario", data);
  };

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* <QuestionnaireFormField /> */}
          <PreviewQuestionnaireForm />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
  );
};

export default QuestionnaireForm;
