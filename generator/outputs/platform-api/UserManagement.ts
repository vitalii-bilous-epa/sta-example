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

import { UserProfileDtoQueryResultDto, UsersFindListParams } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class UserManagement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User Management
   * @name UsersFindList
   * @summary Find a Platform user based on criteria
   * @request GET:/api/users/find
   * @secure
   * @response `200` `UserProfileDtoQueryResultDto` List of users matching find criteria in its first name, last name or email
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  usersFindList = (query: UsersFindListParams, params: RequestParams = {}) =>
    this.request<UserProfileDtoQueryResultDto, void>({
      path: `/api/users/find`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
