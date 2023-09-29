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

import { GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGetParams } from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description If neither `start_date` nor `end_date` are provided, the default date range will be `today-400D` to `today-35D`. If just providing `end_date`, `start_date` is set to `today-400D`. If date range needs to be defined, both `start_date` and `end_date` must be set.
 *
 * @author automated
 * @genereated getEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet * @tags embryo-conception-risk
 * @name GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet
 * @summary Get a conception risk analysis for embryos by selected group and options
 * @request GET:/dairies/{dairy_id}/embryo-conception-risk
 * @response `200` `ConceptionRiskResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGet = (
  { dairyId, ...query }: GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, ConceptionRiskResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/embryo-conception-risk`
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
