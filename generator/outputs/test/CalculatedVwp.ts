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

import { CalculatedVWPResponse } from "./data-contracts";

interface InputGetCalculatedVwpDairiesDairyIdCalculatedVwpGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetCalculatedVwpDairiesDairyIdCalculatedVwpGet {
  /**
   * End Date
   * End date of analysis (start automatically set to 14 months prior).
   * @default "2023-09-26T12:46:08.190080"
   */
  end_date?: string | null;
  /**
   * Heifers
   * Request heifers (lactation 0) instead of cows (lactations 1+). Default is `false`.
   * @default false
   */
  heifers?: boolean | null;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null;
}

type GetCalculatedVwpDairiesDairyIdCalculatedVwpGetInput = BaseInput & {};
type GetCalculatedVwpDairiesDairyIdCalculatedVwpGetOutput = BaseOutput<CalculatedVWPResponse>;

/*
 *
 * @description Calculated Voluntary Waiting Period (VWP) for the 14 month period ending on `end_date`. Cow values are returned as Days In Milk. Heifer values are returned as  Age in Days. Returned groups when `heifers=false`: - `0`: all cows (overall VWP) - `1-3`: 1st, 2nd, 3rd+ lactation group VWPs Returned groups when `heifers=true`: - `0`: all heifers (overall VWP)
 * * @author automated
 * @genereated getCalculatedVwpDairiesDairyIdCalculatedVwpGet * @tags calculated-vwp
 * @name GetCalculatedVwpDairiesDairyIdCalculatedVwpGet
 * @summary Calculate actual Voluntary Waiting Period (VWP)
 * @request GET:/dairies/{dairy_id}/calculated-vwp
 * @response `200` `CalculatedVWPResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getCalculatedVwpDairiesDairyIdCalculatedVwpGet = (
  input: InputGetCalculatedVwpDairiesDairyIdCalculatedVwpGet,
  searchParams: SearchParamsGetCalculatedVwpDairiesDairyIdCalculatedVwpGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetCalculatedVwpDairiesDairyIdCalculatedVwpGetInput,
    GetCalculatedVwpDairiesDairyIdCalculatedVwpGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/calculated-vwp`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
