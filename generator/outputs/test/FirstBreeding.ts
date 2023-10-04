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

import { CowFirstBreedingResponse, HeiferFirstBreedingResponse } from "./data-contracts";

interface InputGetBreedingDimDairiesDairyIdFirstBreedingDimGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetBreedingDimDairiesDairyIdFirstBreedingDimGet {
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.252772"
   */
  start_date?: string | null;
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.252772"
   */
  end_date?: string | null;
  /**
   * Fetch Heifers
   *
   * Return data on heifers instead of cows.
   *
   * - `true`: return only heifers with age at first breeding instead of DIM
   * - `false`: return only cows with DIM at first breeding for current lactation
   * @default false
   */
  fetch_heifers?: boolean | null;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null;
}

type GetBreedingDimDairiesDairyIdFirstBreedingDimGetInput = BaseInput & {};
type GetBreedingDimDairiesDairyIdFirstBreedingDimGetOutput = BaseOutput<
  CowFirstBreedingResponse | HeiferFirstBreedingResponse
>;

/*
 *
 * @description If neither `start_date` nor `end_date` are set, the default date range will be `today-365` to `today`. If `end_date` is provided but not `start_date`, the analysis goes back 365 days from `end_date`. --- ### `summaryData`: Cows vs Heifers If `fetch_heifers=true` then `overallAverages` and `trends` will contain a single key: `overall`. Note when herd uses AIDAT, returned `statedVWP` will be `null`. When `fetch_heifers=false` these will contain 4 keys: `overall`, `lactation1`, `lactation2`, and `lactation3`. If an individual lactation group has no data, the data for the respective key will be `null`.
 * * @author automated
 * @genereated getBreedingDimDairiesDairyIdFirstBreedingDimGet * @tags first-breeding
 * @name GetBreedingDimDairiesDairyIdFirstBreedingDimGet
 * @summary Days in milk at first breeding, grouped by lactation, for the provided analysis period
 * @request GET:/dairies/{dairy_id}/first-breeding-dim
 * @response `200` `(CowFirstBreedingResponse | HeiferFirstBreedingResponse)` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getBreedingDimDairiesDairyIdFirstBreedingDimGet = (
  input: InputGetBreedingDimDairiesDairyIdFirstBreedingDimGet,
  searchParams: SearchParamsGetBreedingDimDairiesDairyIdFirstBreedingDimGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetBreedingDimDairiesDairyIdFirstBreedingDimGetInput,
    GetBreedingDimDairiesDairyIdFirstBreedingDimGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/first-breeding-dim`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
