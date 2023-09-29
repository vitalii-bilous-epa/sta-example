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

import { GetBreedingDimDairiesDairyIdFirstBreedingDimGetParams } from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description If neither `start_date` nor `end_date` are set, the default date range will be `today-365` to `today`. If `end_date` is provided but not `start_date`, the analysis goes back 365 days from `end_date`. --- ### `summaryData`: Cows vs Heifers If `fetch_heifers=true` then `overallAverages` and `trends` will contain a single key: `overall`. Note when herd uses AIDAT, returned `statedVWP` will be `null`. When `fetch_heifers=false` these will contain 4 keys: `overall`, `lactation1`, `lactation2`, and `lactation3`. If an individual lactation group has no data, the data for the respective key will be `null`.
 *
 * @author automated
 * @genereated getBreedingDimDairiesDairyIdFirstBreedingDimGet * @tags first-breeding
 * @name GetBreedingDimDairiesDairyIdFirstBreedingDimGet
 * @summary Days in milk at first breeding, grouped by lactation, for the provided analysis period
 * @request GET:/dairies/{dairy_id}/first-breeding-dim
 * @response `200` `(CowFirstBreedingResponse | HeiferFirstBreedingResponse)` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getBreedingDimDairiesDairyIdFirstBreedingDimGet = (
  { dairyId, ...query }: GetBreedingDimDairiesDairyIdFirstBreedingDimGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, (CowFirstBreedingResponse | HeiferFirstBreedingResponse)>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/first-breeding-dim`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
}
