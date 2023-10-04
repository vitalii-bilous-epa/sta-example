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

import { AbortionRiskResponse, AbortionSummaryGroup, LactationGroup } from "./data-contracts";

interface InputGetAbortionRiskDairiesDairyIdAbortionAnalysisGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetAbortionRiskDairiesDairyIdAbortionAnalysisGet {
  /**
   * Lactation Group
   *
   * Select lactation group for analysis.
   *
   * - `0`: heifers
   * - `1`: 1st lactation
   * - `2`: 2nd lactation
   * - `3`: 3rd+ lactations
   * - `4`: (default) all cows
   * @default 4
   */
  lactation_group?: LactationGroup | null;
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.178662"
   */
  start_date?: string | null;
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.178662"
   */
  end_date?: string | null;
  /**
   * Group By
   * The groupby field to be used for the abortion calculations.
   * @default "LactationGroup"
   */
  group_by?: AbortionSummaryGroup | null;
  /**
   * Abort Range
   * List of lower and upper bounds to consider for Days carrying calf at abortion (inclusive).
   * @default [42260]
   */
  abort_range?: any[] | null;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null;
}

type GetAbortionRiskDairiesDairyIdAbortionAnalysisGetInput = BaseInput & {};
type GetAbortionRiskDairiesDairyIdAbortionAnalysisGetOutput = BaseOutput<AbortionRiskResponse>;

/*
 *
 * @description If neither `start_date` nor `end_date` are provided, the default date range is `today-400D` to `today-35D`. If only `end_date` is provided, `start_date` is automatically set to `today-400D`. If date range needs to be defined, both `start_date` and `end_date` must be set.
 * * @author automated
 * @genereated getAbortionRiskDairiesDairyIdAbortionAnalysisGet * @tags abortion-analysis
 * @name GetAbortionRiskDairiesDairyIdAbortionAnalysisGet
 * @summary Abortion rate analysis by selected group and options
 * @request GET:/dairies/{dairy_id}/abortion-analysis
 * @response `200` `AbortionRiskResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getAbortionRiskDairiesDairyIdAbortionAnalysisGet = (
  input: InputGetAbortionRiskDairiesDairyIdAbortionAnalysisGet,
  searchParams: SearchParamsGetAbortionRiskDairiesDairyIdAbortionAnalysisGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetAbortionRiskDairiesDairyIdAbortionAnalysisGetInput,
    GetAbortionRiskDairiesDairyIdAbortionAnalysisGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/abortion-analysis`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
