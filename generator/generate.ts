import path from "path";
import { generateTemplates } from "swagger-typescript-api";

generateTemplates({
  cleanOutput: false,
  output: path.resolve(process.cwd(), "./src/api-client/generator/modular-templates-pristine"),
  httpClientType: "axios",
  modular: true,
  silent: false,
})