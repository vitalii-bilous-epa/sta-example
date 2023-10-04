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

import { IntervalAnalysisResponse, LactationGroup } from "./data-contracts";

interface InputGetIntervalSummaryDairiesDairyIdIntervalAnalysisGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetIntervalSummaryDairiesDairyIdIntervalAnalysisGet {
  /**
   * Lactation Group
   *
   * Select lactation group for analysis.
   *
   * - `0`: youngstocks
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
   * @default "2023-09-26T12:46:08.262773"
   */
  start_date?: string | null;
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.262773"
   */
  end_date?: string | null;
}

type GetIntervalSummaryDairiesDairyIdIntervalAnalysisGetInput = BaseInput & {};
type GetIntervalSummaryDairiesDairyIdIntervalAnalysisGetOutput = BaseOutput<IntervalAnalysisResponse>;

/*
 *
 * @description Currently returned: - Calving Interval - Days to Conception - Days to First Bred - Days to First Heat If neither `start_date` nor `end_date` are set, the default date range will be `today-400D` to `today-35D`. If just providing `end_date`, `start_date` is set to `today-400D`. If date range needs to be defined, both `start_date` and `end_date` must be set.
 * * @author automated
 * @genereated getIntervalSummaryDairiesDairyIdIntervalAnalysisGet * @tags inverval-analysis
 * @name GetIntervalSummaryDairiesDairyIdIntervalAnalysisGet
 * @summary Get interval summary statistics for selected lactation group and options
 * @request GET:/dairies/{dairy_id}/interval-analysis
 * @response `200` `IntervalAnalysisResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getIntervalSummaryDairiesDairyIdIntervalAnalysisGet = (
  input: InputGetIntervalSummaryDairiesDairyIdIntervalAnalysisGet,
  searchParams: SearchParamsGetIntervalSummaryDairiesDairyIdIntervalAnalysisGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetIntervalSummaryDairiesDairyIdIntervalAnalysisGetInput,
    GetIntervalSummaryDairiesDairyIdIntervalAnalysisGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/interval-analysis`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
