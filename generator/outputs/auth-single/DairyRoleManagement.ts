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
  DairyPermissionDtoCollectionDto,
  DairyRoleCreateDto,
  DairyRoleDto,
  DairyRoleDtoCollectionDto,
  DairyRoleUpdateDto,
  GetDairyRolesParams,
  GetDairyUsersParams,
  UserProfileDtoQueryResultDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class DairyRoleManagement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Dairy Role Management
   * @name GetDairyRoles
   * @summary Retrieves dairy roles by a dairy id
   * @request GET:/api/dairies/{dairyId}/roles
   * @secure
   * @response `200` `(DairyRoleDto)[]` Retrieved dairy roles
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy was not found
   */
  getDairyRoles = ({ dairyId, ...query }: GetDairyRolesParams, params: RequestParams = {}) =>
    this.request<DairyRoleDto[], void>({
      path: `/api/dairies/${dairyId}/roles`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Role Management
   * @name CreateDairyRole
   * @summary Creates a dairy role for a specific dairy
   * @request POST:/api/dairies/{dairyId}/roles
   * @secure
   * @response `201` `DairyRoleDto` Created dairy role
   * @response `400` `void` Invalid model submitted
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy does not exist, or referenced zone does not exist
   */
  createDairyRole = (dairyId: number, data: DairyRoleCreateDto, params: RequestParams = {}) =>
    this.request<DairyRoleDto, void>({
      path: `/api/dairies/${dairyId}/roles`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Role Management
   * @name GetDairyPermissions
   * @summary Gets list of dairy permissions with the roles containing them
   * @request GET:/api/dairies/{dairyId}/permissions
   * @secure
   * @response `200` `DairyPermissionDtoCollectionDto` List of dairy permissions
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  getDairyPermissions = (dairyId: number, params: RequestParams = {}) =>
    this.request<DairyPermissionDtoCollectionDto, void>({
      path: `/api/dairies/${dairyId}/permissions`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Role Management
   * @name GetDairyRole
   * @summary Retrieves a dairy role by dairy and dairy role id
   * @request GET:/api/dairies/{dairyId}/roles/{dairyRoleId}
   * @secure
   * @response `200` `DairyRoleDto` Retrieved dairy role
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy or dairy role were not found
   */
  getDairyRole = (dairyId: number, dairyRoleId: number, params: RequestParams = {}) =>
    this.request<DairyRoleDto, void>({
      path: `/api/dairies/${dairyId}/roles/${dairyRoleId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Role Management
   * @name DeleteDairyRole
   * @summary Deletes a dairy role from a specific dairy
   * @request DELETE:/api/dairies/{dairyId}/roles/{dairyRoleId}
   * @secure
   * @response `204` `void` Dairy role was deleted
   * @response `400` `void` Dairy role is the last one with management permissions.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy or dairy role where not found
   */
  deleteDairyRole = (dairyId: number, dairyRoleId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/roles/${dairyRoleId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Role Management
   * @name UpdateDairyRole
   * @summary Updates a dairy role for a specific dairy.
   * @request PUT:/api/dairies/{dairyId}/roles/{dairyRoleId}
   * @secure
   * @response `200` `DairyRoleDto` Update successful
   * @response `400` `void` Submitted data was invalid
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy, dairy role or any referenced zone was not found
   */
  updateDairyRole = (dairyId: number, dairyRoleId: number, data: DairyRoleUpdateDto, params: RequestParams = {}) =>
    this.request<DairyRoleDto, void>({
      path: `/api/dairies/${dairyId}/roles/${dairyRoleId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Role Management
   * @name GetDairyUsers
   * @summary Retrieves all users associated to a particular dairy (through Dairy Roles)
   * @request GET:/api/dairies/{dairyId}/users
   * @secure
   * @response `200` `UserProfileDtoQueryResultDto` Retrieved users page
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy was not found
   */
  getDairyUsers = ({ dairyId, ...query }: GetDairyUsersParams, params: RequestParams = {}) =>
    this.request<UserProfileDtoQueryResultDto, void>({
      path: `/api/dairies/${dairyId}/users`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Role Management
   * @name UsersDairyRolesDetail
   * @summary Get user's assigned dairy roles
   * @request GET:/api/users/{userId}/dairyRoles
   * @secure
   * @response `200` `DairyRoleDtoCollectionDto` List of user assigned  dairy roles
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User was not found
   */
  usersDairyRolesDetail = (userId: number, params: RequestParams = {}) =>
    this.request<DairyRoleDtoCollectionDto, void>({
      path: `/api/users/${userId}/dairyRoles`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
