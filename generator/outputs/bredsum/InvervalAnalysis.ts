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

import { GetIntervalSummaryDairiesDairyIdIntervalAnalysisGetParams } from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description Currently returned: - Calving Interval - Days to Conception - Days to First Bred - Days to First Heat If neither `start_date` nor `end_date` are set, the default date range will be `today-400D` to `today-35D`. If just providing `end_date`, `start_date` is set to `today-400D`. If date range needs to be defined, both `start_date` and `end_date` must be set.
 *
 * @author automated
 * @genereated getIntervalSummaryDairiesDairyIdIntervalAnalysisGet * @tags inverval-analysis
 * @name GetIntervalSummaryDairiesDairyIdIntervalAnalysisGet
 * @summary Get interval summary statistics for selected lactation group and options
 * @request GET:/dairies/{dairy_id}/interval-analysis
 * @response `200` `IntervalAnalysisResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getIntervalSummaryDairiesDairyIdIntervalAnalysisGet = (
  { dairyId, ...query }: GetIntervalSummaryDairiesDairyIdIntervalAnalysisGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, IntervalAnalysisResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/interval-analysis`
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
