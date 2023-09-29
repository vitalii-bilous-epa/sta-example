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

import { AdminUserFeaturesUsersDetailParams, UserFeatureRolesUpdateDto } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class UserFeatureRole<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UserFeatureRole
   * @name AdminUserFeaturesAssignUpdate
   * @request PUT:/api/admin/userFeatures/{featureId}/assign
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  adminUserFeaturesAssignUpdate = (featureId: number, data: UserFeatureRolesUpdateDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/admin/userFeatures/${featureId}/assign`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags UserFeatureRole
   * @name AdminUserFeaturesUsersDetail
   * @request GET:/api/admin/userFeatures/{featureId}/users
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  adminUserFeaturesUsersDetail = (
    { featureId, ...query }: AdminUserFeaturesUsersDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/admin/userFeatures/${featureId}/users`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags UserFeatureRole
   * @name AdminUserFeaturesUsersDelete
   * @request DELETE:/api/admin/userFeatures/{featureId}/users/{userId}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  adminUserFeaturesUsersDelete = (featureId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/admin/userFeatures/${featureId}/users/${userId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
}
