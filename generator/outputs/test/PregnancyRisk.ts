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

import { LactationGroup, PregnancyRiskResponse } from "./data-contracts";

interface InputGetPregnancyRiskDairiesDairyIdPregnancyRiskGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetPregnancyRiskDairiesDairyIdPregnancyRiskGet {
  /**
   * All Breedings
   *
   * Select analysis target breedings.
   *
   * - `False`: (default) includes just AI breedings
   * - `True`: includes both AI & Bull Breedings
   * @default false
   */
  all_breedings?: boolean | null;
  /**
   * Lactation Group
   *
   * Optionally restrict lactation group(s) for analysis.
   *
   * - `0`: for heifers
   * - `1-3`: for 1st 2nd 3rd+ lactations
   * - `4`: (default) for all cows
   * @default 4
   */
  lactation_group?: LactationGroup | null;
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.274127"
   */
  start_date?: string | null;
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.274127"
   */
  end_date?: string | null;
  /**
   * Voluntary Waiting Period
   * Override voluntary waiting period for analysis
   */
  voluntary_waiting_period?: number | null;
  /**
   * Breeding Cycle
   * Return pregnancy risk by breeding cycle (DIM) instead of by date (default)
   * @default false
   */
  breeding_cycle?: boolean | null;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null;
}

type GetPregnancyRiskDairiesDairyIdPregnancyRiskGetInput = BaseInput & {};
type GetPregnancyRiskDairiesDairyIdPregnancyRiskGetOutput = BaseOutput<PregnancyRiskResponse>;

/*
 *
 * @description If neither `start_date` nor `end_date` are provided, the default date range will be 18 21-day periods ending `today`. If `end_date` is provided but not `start_date`, the analysis goes back 18 21-day periods from `end_date`. --- ## Eligibility Qualification Providing a non-null `voluntary_waiting_period` query parameter will override for all cases. If no override is provided, the default behavior is to use values from herd settings. Heifers (`lactation_group=0`) will attempt to use AIDAT when available, returning `null` for `usedVoluntaryWaitingPeriod`. In case of invalid/missing herd settings, fallback values of `365` days of age for heifers or `50` days in milk for cows are used as a last resort. The response field `eligibilityQualifer` provides which method was used, `aidat`, `provided`, `herdConfiguration`, or `fallback`.
 * * @author automated
 * @genereated getPregnancyRiskDairiesDairyIdPregnancyRiskGet * @tags pregnancy-risk
 * @name GetPregnancyRiskDairiesDairyIdPregnancyRiskGet
 * @summary Pregnancy risk analysis by selected group and options
 * @request GET:/dairies/{dairy_id}/pregnancy-risk
 * @response `200` `PregnancyRiskResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getPregnancyRiskDairiesDairyIdPregnancyRiskGet = (
  input: InputGetPregnancyRiskDairiesDairyIdPregnancyRiskGet,
  searchParams: SearchParamsGetPregnancyRiskDairiesDairyIdPregnancyRiskGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetPregnancyRiskDairiesDairyIdPregnancyRiskGetInput,
    GetPregnancyRiskDairiesDairyIdPregnancyRiskGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/pregnancy-risk`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
