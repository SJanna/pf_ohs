import httpVerb from "@/features/questionnaire_creator/data/httpVerb.json";
import Concept from "@/types/Concept";

const httpVerbCodeDisplay: Concept[] = httpVerb.concept.map((item) => ({
  display: item.display,
  code: item.code,
}));

export default httpVerbCodeDisplay;
