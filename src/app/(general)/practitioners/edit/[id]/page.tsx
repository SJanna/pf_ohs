"use client";
import PractitionerForm from "@/features/practitioners/components/PractitionerForm";
import { practitionerSchema } from "@/types/Practitioner";
import { getResource } from "@/server/getResource";
import { useState, useEffect } from "react";
import { Practitioner } from "@/types/Practitioner";

export default function PractitionersIdPage({
    params,
  }: {
    params: { id: string };
  }) {
    const [practitioner, setPractitioner] = useState<Practitioner | null>(null);
    const [error, setError] = useState<Error>();
  
    useEffect(() => {
      try {
        getResource({
          id: params.id,
          resourceType: "Practitioner",
          schema: practitionerSchema,
        })
        .then((data) => {
          setPractitioner(data);
        })
        .catch((error) => {
          setError(error);
        });
    } catch (error) {
        setError(error as Error);
    }
    }, [params.id]);
  
    if (error) {
      return (
        <h1 className="text-4xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Error fetching practitioner.
        </h1>
      );
    }
  
    if (!practitioner) {
      return <div>Practitioner not found.</div>;
    }
  
    return <PractitionerForm data={practitioner} id={params.id} />;
}
