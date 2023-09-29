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
  AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGetParams,
  ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGetParams,
  ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGetParams,
  FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGetParams,
  MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGetParams,
  PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGetParams,
  ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGetParams,
  ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGetParams,
} from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 *
 * @author automated
 * @genereated abortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet * @tags overview-statistics
 * @name AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet
 * @summary Abortion Rate
 * @request GET:/dairies/{dairy_id}/overview-statistics/abortion-rate
 * @response `200` `FloatAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const abortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet = (
  { dairyId, ...query }: AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, FloatAverage>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/overview-statistics/abortion-rate`
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
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 *
 * @author automated
 * @genereated actualVwpDairiesDairyIdOverviewStatisticsActualVwpGet * @tags overview-statistics
 * @name ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGet
 * @summary Actual Vwp
 * @request GET:/dairies/{dairy_id}/overview-statistics/actual-vwp
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const actualVwpDairiesDairyIdOverviewStatisticsActualVwpGet = (
  { dairyId, ...query }: ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, IntAverage>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/overview-statistics/actual-vwp`
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
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 *
 * @author automated
 * @genereated conceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet * @tags overview-statistics
 * @name ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet
 * @summary Conception Rate
 * @request GET:/dairies/{dairy_id}/overview-statistics/conception-rate
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const conceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet = (
  { dairyId, ...query }: ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, IntAverage>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/overview-statistics/conception-rate`
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
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 *
 * @author automated
 * @genereated firstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet * @tags overview-statistics
 * @name FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet
 * @summary First Breedings
 * @request GET:/dairies/{dairy_id}/overview-statistics/first-breedings
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const firstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet = (
  { dairyId, ...query }: FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, IntAverage>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/overview-statistics/first-breedings`
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
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 *
 * @author automated
 * @genereated missedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet * @tags overview-statistics
 * @name MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet
 * @summary Missed Breedings
 * @request GET:/dairies/{dairy_id}/overview-statistics/missed-breedings
 * @response `200` `Count` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const missedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet = (
  { dairyId, ...query }: MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, Count>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/overview-statistics/missed-breedings`
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
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 *
 * @author automated
 * @genereated pregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet * @tags overview-statistics
 * @name PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet
 * @summary Pregnancy Risk
 * @request GET:/dairies/{dairy_id}/overview-statistics/pregnancy-risk
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const pregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet = (
  { dairyId, ...query }: PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, IntAverage>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/overview-statistics/pregnancy-risk`
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
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 *
 * @author automated
 * @genereated serviceRateDairiesDairyIdOverviewStatisticsServiceRateGet * @tags overview-statistics
 * @name ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGet
 * @summary Service Rate
 * @request GET:/dairies/{dairy_id}/overview-statistics/service-rate
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const serviceRateDairiesDairyIdOverviewStatisticsServiceRateGet = (
  { dairyId, ...query }: ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, IntAverage>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/overview-statistics/service-rate`
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
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 *
 * @author automated
 * @genereated servicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet * @tags overview-statistics
 * @name ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet
 * @summary Services Per Conception
 * @request GET:/dairies/{dairy_id}/overview-statistics/services-per-conception
 * @response `200` `FloatAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const servicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet = (
  { dairyId, ...query }: ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, FloatAverage>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/overview-statistics/services-per-conception`
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
