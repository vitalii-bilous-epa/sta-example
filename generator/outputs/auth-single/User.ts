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
  AdminUserProfileDto,
  AdminUserProfileDtoQueryResultDto,
  AdminUsersListParams,
  DairyAccessLevel,
  DairyUsersDto,
  UserProfileUpdateDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User
   * @name GetDairyUsersForDairyAccessLevelAsync
   * @summary Get the dairy name and users assigned to it with their data for a given access level
   * @request GET:/api/dairies/{dairyId}/users/permissions/{dairyAccessLevel}
   * @secure
   * @response `200` `DairyUsersDto` Retrieved users list
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Users not found
   */
  getDairyUsersForDairyAccessLevelAsync = (
    dairyId: number,
    dairyAccessLevel: DairyAccessLevel,
    params: RequestParams = {},
  ) =>
    this.request<DairyUsersDto, void>({
      path: `/api/dairies/${dairyId}/users/permissions/${dairyAccessLevel}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name AdminUsersDetail
   * @summary Gets profile information for a specific user
   * @request GET:/api/admin/users/{userId}
   * @secure
   * @response `200` `AdminUserProfileDto` User's profile details
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found
   */
  adminUsersDetail = (userId: number, params: RequestParams = {}) =>
    this.request<AdminUserProfileDto, void>({
      path: `/api/admin/users/${userId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name AdminUsersDelete
   * @summary Deletes an existing user
   * @request DELETE:/api/admin/users/{userId}
   * @secure
   * @response `204` `void` Successful delete
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found
   */
  adminUsersDelete = (userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/admin/users/${userId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name AdminUsersList
   * @summary Gets user details for admins ordered by last name and first name, paginated, and matching the find criteria if provided
   * @request GET:/api/admin/users
   * @secure
   * @response `200` `AdminUserProfileDtoQueryResultDto` List of user details matching find criteria in its first name, last name or email
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  adminUsersList = (query: AdminUsersListParams, params: RequestParams = {}) =>
    this.request<AdminUserProfileDtoQueryResultDto, void>({
      path: `/api/admin/users`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name AdminUsersProfileUpdate
   * @summary Updates user's profile information
   * @request PUT:/api/admin/users/{userId}/profile
   * @secure
   * @response `204` `void` Successful update
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found
   */
  adminUsersProfileUpdate = (userId: number, data: UserProfileUpdateDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/admin/users/${userId}/profile`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags User
   * @name AdminUsersUndeleteCreate
   * @summary Undeletes an existing user
   * @request POST:/api/admin/users/{userId}/undelete
   * @secure
   * @response `204` `void` Successful undelete
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found
   */
  adminUsersUndeleteCreate = (userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/admin/users/${userId}/undelete`,
      method: 'POST',
      secure: true,
      ...params,
    })
}
