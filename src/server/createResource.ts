import RejectionToast from "@/components/RejectionToast";
import { toast } from "@/components/ui/use-toast";
import { Resource } from "@/types/Resource";
import { parseURL } from "@/utils/parseURL";
import { ZodSchema } from "zod";

export interface createResourceProps<T extends Resource> {
  data: T;
  schema: ZodSchema<T>;
  access_token: string | undefined;
}

export async function createResource<T extends Resource>({
  data,
  schema,
  access_token,
}: createResourceProps<T>) {
  // Validar datos con Zod
  const validationResult = schema.safeParse(data);
  if (!validationResult.success) {
    console.error("Validation error:", validationResult.error.errors);
    throw new Error("Validation error");
  }

  try {
    const res = await fetch(parseURL(`${data.resourceType}`), {
      method: "POST",
      headers: {
        "Content-Type": "application/fhir+json;charset=utf-8",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    console.log(response);

    if (!res.ok) {
      throw new Error(response);
    }

    toast({
      title: `${data.resourceType} created`,
      description: `The ${data.resourceType?.toLowerCase()} has been created`,
      variant: "default",
    });
  } catch (error) {
    console.error(error);
    toast({
      title: `Ups! ${data.resourceType} not created`,
      description: `Failed to create ${data.resourceType?.toLowerCase()}`,
      variant: "destructive",
    });
    throw new Error("Fetch error");
  }
}