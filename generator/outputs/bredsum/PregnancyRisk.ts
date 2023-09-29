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

import { GetPregnancyRiskDairiesDairyIdPregnancyRiskGetParams } from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description If neither `start_date` nor `end_date` are provided, the default date range will be 18 21-day periods ending `today`. If `end_date` is provided but not `start_date`, the analysis goes back 18 21-day periods from `end_date`. --- ## Eligibility Qualification Providing a non-null `voluntary_waiting_period` query parameter will override for all cases. If no override is provided, the default behavior is to use values from herd settings. Heifers (`lactation_group=0`) will attempt to use AIDAT when available, returning `null` for `usedVoluntaryWaitingPeriod`. In case of invalid/missing herd settings, fallback values of `365` days of age for heifers or `50` days in milk for cows are used as a last resort. The response field `eligibilityQualifer` provides which method was used, `aidat`, `provided`, `herdConfiguration`, or `fallback`.
 *
 * @author automated
 * @genereated getPregnancyRiskDairiesDairyIdPregnancyRiskGet * @tags pregnancy-risk
 * @name GetPregnancyRiskDairiesDairyIdPregnancyRiskGet
 * @summary Pregnancy risk analysis by selected group and options
 * @request GET:/dairies/{dairy_id}/pregnancy-risk
 * @response `200` `PregnancyRiskResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getPregnancyRiskDairiesDairyIdPregnancyRiskGet = (
  { dairyId, ...query }: GetPregnancyRiskDairiesDairyIdPregnancyRiskGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, PregnancyRiskResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/pregnancy-risk`
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
