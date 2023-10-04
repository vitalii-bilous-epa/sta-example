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

import { UnbredCowsResponse, UnbredHeifersResponse } from "./data-contracts";

interface InputGetUnbredCowsDairiesDairyIdUnbredCowsGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetUnbredCowsDairiesDairyIdUnbredCowsGet {
  /**
   * Threshold
   * Minimum days of breeding eligibility to consider (defaults to config VWP).
   */
  threshold?: number | null;
  /**
   * Exceeds
   * Return animals which exceed the threshold (true) or animals which do not exceed the threshold (false).
   * @default true
   */
  exceeds?: boolean | null;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null;
}

type GetUnbredCowsDairiesDairyIdUnbredCowsGetInput = BaseInput & {};
type GetUnbredCowsDairiesDairyIdUnbredCowsGetOutput = BaseOutput<UnbredCowsResponse>;

/*
 *
 * @description Returns a list of animals currently unbred beyond `threshold` number of days eligible.
 * * @author automated
 * @genereated getUnbredCowsDairiesDairyIdUnbredCowsGet * @tags unbred-animals
 * @name GetUnbredCowsDairiesDairyIdUnbredCowsGet
 * @summary List unbred cows currently exceeding VWP
 * @request GET:/dairies/{dairy_id}/unbred/cows
 * @response `200` `UnbredCowsResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getUnbredCowsDairiesDairyIdUnbredCowsGet = (
  input: InputGetUnbredCowsDairiesDairyIdUnbredCowsGet,
  searchParams: SearchParamsGetUnbredCowsDairiesDairyIdUnbredCowsGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetUnbredCowsDairiesDairyIdUnbredCowsGetInput,
    GetUnbredCowsDairiesDairyIdUnbredCowsGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/unbred/cows`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputGetUnbredHeifersDairiesDairyIdUnbredHeifersGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetUnbredHeifersDairiesDairyIdUnbredHeifersGet {
  /**
   * Threshold
   * Minimum days of breeding eligibility to consider (defaults to config VWP).
   */
  threshold?: number | null;
  /**
   * Exceeds
   * Return animals which exceed the threshold (true) or animals which do not exceed the threshold (false).
   * @default true
   */
  exceeds?: boolean | null;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null;
}

type GetUnbredHeifersDairiesDairyIdUnbredHeifersGetInput = BaseInput & {};
type GetUnbredHeifersDairiesDairyIdUnbredHeifersGetOutput = BaseOutput<UnbredHeifersResponse>;

/*
 *
 * @description Returns a list of animals currently unbred beyond `threshold` number of days eligible.
 * * @author automated
 * @genereated getUnbredHeifersDairiesDairyIdUnbredHeifersGet * @tags unbred-animals
 * @name GetUnbredHeifersDairiesDairyIdUnbredHeifersGet
 * @summary List unbred heifers currently exceeding VWP
 * @request GET:/dairies/{dairy_id}/unbred/heifers
 * @response `200` `UnbredHeifersResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getUnbredHeifersDairiesDairyIdUnbredHeifersGet = (
  input: InputGetUnbredHeifersDairiesDairyIdUnbredHeifersGet,
  searchParams: SearchParamsGetUnbredHeifersDairiesDairyIdUnbredHeifersGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetUnbredHeifersDairiesDairyIdUnbredHeifersGetInput,
    GetUnbredHeifersDairiesDairyIdUnbredHeifersGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/unbred/heifers`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
