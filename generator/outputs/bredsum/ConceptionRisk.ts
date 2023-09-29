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
  GetConceptionRiskDairiesDairyIdConceptionRiskGetParams,
  GetConceptionSiresDairiesDairyIdConceptionRiskSiresGetParams,
} from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description If neither `start_date` nor `end_date` are provided, the default date range will be selected as `today-400D` to `today-35D`. If only `end_date` is provided, `start_date` is set to `today-400d`. In cases where the date range needs to be defined, both `start_date` and `end_date` need to be set.
 *
 * @author automated
 * @genereated getConceptionRiskDairiesDairyIdConceptionRiskGet * @tags conception-risk
 * @name GetConceptionRiskDairiesDairyIdConceptionRiskGet
 * @summary Conception risk analysis by selected group and options
 * @request GET:/dairies/{dairy_id}/conception-risk
 * @response `200` `ConceptionRiskResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getConceptionRiskDairiesDairyIdConceptionRiskGet = (
  { dairyId, ...query }: GetConceptionRiskDairiesDairyIdConceptionRiskGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, ConceptionRiskResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/conception-risk`
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
 * @description Sires used for conception in the given date range.
 *
 * @author automated
 * @genereated getConceptionSiresDairiesDairyIdConceptionRiskSiresGet * @tags conception-risk
 * @name GetConceptionSiresDairiesDairyIdConceptionRiskSiresGet
 * @summary Conception sires
 * @request GET:/dairies/{dairy_id}/conception-risk/sires
 * @response `200` `ConceptionSiresResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getConceptionSiresDairiesDairyIdConceptionRiskSiresGet = (
  { dairyId, ...query }: GetConceptionSiresDairiesDairyIdConceptionRiskSiresGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, ConceptionSiresResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/conception-risk/sires`
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
