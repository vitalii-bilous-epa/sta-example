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

import { FeatureInviteDto } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class FeatureInvitation<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags FeatureInvitation
   * @name AdminUserFeaturesAssignCreate
   * @request POST:/api/admin/userFeatures/{featureId}/assign
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  adminUserFeaturesAssignCreate = (featureId: number, data: FeatureInviteDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/admin/userFeatures/${featureId}/assign`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags FeatureInvitation
   * @name AdminUserFeaturesUsersResendCreate
   * @request POST:/api/admin/userFeatures/{featureId}/users/{userId}/resend
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  adminUserFeaturesUsersResendCreate = (featureId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/admin/userFeatures/${featureId}/users/${userId}/resend`,
      method: 'POST',
      secure: true,
      ...params,
    })
}
