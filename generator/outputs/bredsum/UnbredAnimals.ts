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

import {
  GetUnbredCowsDairiesDairyIdUnbredCowsGetParams,
  GetUnbredHeifersDairiesDairyIdUnbredHeifersGetParams,
} from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description Returns a list of animals currently unbred beyond `threshold` number of days eligible.
 *
 * @author automated
 * @genereated getUnbredCowsDairiesDairyIdUnbredCowsGet * @tags unbred-animals
 * @name GetUnbredCowsDairiesDairyIdUnbredCowsGet
 * @summary List unbred cows currently exceeding VWP
 * @request GET:/dairies/{dairy_id}/unbred/cows
 * @response `200` `UnbredCowsResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getUnbredCowsDairiesDairyIdUnbredCowsGet = (
  { dairyId, ...query }: GetUnbredCowsDairiesDairyIdUnbredCowsGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, UnbredCowsResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/unbred/cows`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * @description Returns a list of animals currently unbred beyond `threshold` number of days eligible.
 *
 * @author automated
 * @genereated getUnbredHeifersDairiesDairyIdUnbredHeifersGet * @tags unbred-animals
 * @name GetUnbredHeifersDairiesDairyIdUnbredHeifersGet
 * @summary List unbred heifers currently exceeding VWP
 * @request GET:/dairies/{dairy_id}/unbred/heifers
 * @response `200` `UnbredHeifersResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getUnbredHeifersDairiesDairyIdUnbredHeifersGet = (
  { dairyId, ...query }: GetUnbredHeifersDairiesDairyIdUnbredHeifersGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, UnbredHeifersResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/unbred/heifers`
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
