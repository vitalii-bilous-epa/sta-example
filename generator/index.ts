import path from 'path'
import { generateApi } from 'swagger-typescript-api'
// healthval_p_q_b
generateApi({
  name: 'healthval.ts',
  // url: "https://staging.integration-vas.com/healthval/openapi.json",
  input: path.resolve(process.cwd(), './generator/inputs/test.json'),
  output: path.resolve(process.cwd(), './generator/outputs/test'),
  templates: path.resolve(process.cwd(), './generator/templates/modular-templates'),
  moduleNameFirstTag: true,
  defaultResponseAsSuccess: false,
  generateClient: true,
  generateRouteTypes: false,
  generateResponses: true,
  extractRequestParams: false,
  extractRequestBody: false,
  extractEnums: true,
  unwrapResponseData: true,
  singleHttpClient: false,
  cleanOutput: true,
  modular: true,
  hooks: {
    onInit: (configuration) => {
      // console.log('>>> onInit');
    },
    /* Parsing stage */
    // components.schemas parsing: component = schema body from swagger
    onCreateComponent: (component) => {
      // console.log('>>> onCreateComponent', component);
    },
    /* Repeating */
    // for every element of schema
    // type name: enum and objects will have name(CompanyAccessLevel exp.), primitives - no (null)
    // schema type: object, primitive, enum
    onPreParseSchema: (originalSchema, typeName, schemaType) => {
      // console.log('>>> onPreParseSchema', originalSchema, typeName, schemaType);
    },
    onFormatTypeName: (typeName, rawTypeName, schemaType) => {
      // console.log('>>> onFormatTypeName', rawTypeName, schemaType);
    },
    onParseSchema: (originalSchema, parsedSchema) => {
      // console.log('>>> onParseSchema', originalSchema, parsedSchema);
    },

    // Function name
    onFormatRouteName: (routeInfo, templateRouteName) => {
      // console.log('>>> onFormatRouteName');
    },
    onCreateRouteName: (routeNameInfo, rawRouteInfo) => {
      // console.log('>>> onCreateRouteName', routeNameInfo, rawRouteInfo)
    },
    // Already contain object for creating request function's content
    onCreateRoute: (routeData) => {
      // console.log('>>> onCreateRoute:routeData', routeData)
    },
    // Work only if router has in "query" param
    onCreateRequestParams: (rawType) => {
      // @ts-ignore      
      // console.log('>>> onCreateRequestParams', rawType)
    },
    onPrepareConfig: (currentConfiguration) => {
      // console.log('>>> onPrepareConfig');
    },
  },
}).catch((e) => console.error(e))
