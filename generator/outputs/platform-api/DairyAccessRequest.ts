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

import { DairyAccessRequestDtoQueryResultDto, GetDairyAccessRequestsForUserAsyncParams } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class DairyAccessRequest<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags DairyAccessRequest
   * @name GetDairyAccessRequestsForUserAsync
   * @summary List dairy access requests for a specific user.
   * @request GET:/api/users/{userId}/requests/dairies
   * @secure
   * @response `200` `DairyAccessRequestDtoQueryResultDto` List of found access requests and invites.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Results could not be returned.
   */
  getDairyAccessRequestsForUserAsync = (
    { userId, ...query }: GetDairyAccessRequestsForUserAsyncParams,
    params: RequestParams = {},
  ) =>
    this.request<DairyAccessRequestDtoQueryResultDto, void>({
      path: `/api/users/${userId}/requests/dairies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
