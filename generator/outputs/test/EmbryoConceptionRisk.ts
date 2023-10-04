/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ConceptionRiskResponse, EmbryoSummaryGroup } from "./data-contracts";

interface InputGetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet {
  /**
   * Start Date
   * Starting embryo transfer date for analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.220311"
   */
  start_date?: string | null;
  /**
   * End Date
   * Ending embryo transfer date for analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.220311"
   */
  end_date?: string | null;
  /**
   * Group By
   * The field used to group the embryo breedings for analysis.
   * @default "Grade"
   */
  group_by?: EmbryoSummaryGroup | null;
}

type GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGetInput = BaseInput & {};
type GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGetOutput = BaseOutput<ConceptionRiskResponse>;

/*
 *
 * @description If neither `start_date` nor `end_date` are provided, the default date range will be `today-400D` to `today-35D`. If just providing `end_date`, `start_date` is set to `today-400D`. If date range needs to be defined, both `start_date` and `end_date` must be set.
 * * @author automated
 * @genereated getEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet * @tags embryo-conception-risk
 * @name GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet
 * @summary Get a conception risk analysis for embryos by selected group and options
 * @request GET:/dairies/{dairy_id}/embryo-conception-risk
 * @response `200` `ConceptionRiskResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet = (
  input: InputGetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet,
  searchParams: SearchParamsGetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGetInput,
    GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/embryo-conception-risk`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
