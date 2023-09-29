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

import { GetCalculatedVwpDairiesDairyIdCalculatedVwpGetParams } from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * @description Calculated Voluntary Waiting Period (VWP) for the 14 month period ending on `end_date`. Cow values are returned as Days In Milk. Heifer values are returned as  Age in Days. Returned groups when `heifers=false`: - `0`: all cows (overall VWP) - `1-3`: 1st, 2nd, 3rd+ lactation group VWPs Returned groups when `heifers=true`: - `0`: all heifers (overall VWP)
 *
 * @author automated
 * @genereated getCalculatedVwpDairiesDairyIdCalculatedVwpGet * @tags calculated-vwp
 * @name GetCalculatedVwpDairiesDairyIdCalculatedVwpGet
 * @summary Calculate actual Voluntary Waiting Period (VWP)
 * @request GET:/dairies/{dairy_id}/calculated-vwp
 * @response `200` `CalculatedVWPResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */

export const getCalculatedVwpDairiesDairyIdCalculatedVwpGet = (
  { dairyId, ...query }: GetCalculatedVwpDairiesDairyIdCalculatedVwpGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, CalculatedVWPResponse>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/calculated-vwp`
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
