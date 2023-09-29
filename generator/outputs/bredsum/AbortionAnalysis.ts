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

import { GetAbortionRiskDairiesDairyIdAbortionAnalysisGetParams } from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description If neither `start_date` nor `end_date` are provided, the default date range is `today-400D` to `today-35D`. If only `end_date` is provided, `start_date` is automatically set to `today-400D`. If date range needs to be defined, both `start_date` and `end_date` must be set.
 *
 * @author automated
 * @genereated getAbortionRiskDairiesDairyIdAbortionAnalysisGet * @tags abortion-analysis
 * @name GetAbortionRiskDairiesDairyIdAbortionAnalysisGet
 * @summary Abortion rate analysis by selected group and options
 * @request GET:/dairies/{dairy_id}/abortion-analysis
 * @response `200` `AbortionRiskResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getAbortionRiskDairiesDairyIdAbortionAnalysisGet = (
  { dairyId, ...query }: GetAbortionRiskDairiesDairyIdAbortionAnalysisGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, AbortionRiskResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/abortion-analysis`
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
