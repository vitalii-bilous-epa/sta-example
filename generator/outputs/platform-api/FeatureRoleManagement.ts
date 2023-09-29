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
  ErrorMessageDto,
  FeatureEmailStatusDto,
  FeatureInviteDto,
  FeatureMinimalUserIdentityDtoQueryResultDto,
  FeatureRoleDto,
  FeaturesAssignDetailParams,
  FeaturesDairiesDeletePayload,
  FeaturesDairiesUsersCreatePayload,
  FeaturesRolesUsersDetailParams,
  FeaturesUsersDairiesCreatePayload,
  GetFeatureUsersAsyncParams,
  MinimalUserIdentityDtoQueryResultDto,
  UserFeatureRolesUpdateDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class FeatureRoleManagement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name FeaturesDairiesDelete
   * @summary Removes several dairies from a feature
   * @request DELETE:/api/features/{featureKey}/dairies
   * @secure
   * @response `204` `void` Successful removal.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Feature doesn't exist.
   */
  featuresDairiesDelete = (featureKey: string, data: FeaturesDairiesDeletePayload, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/features/${featureKey}/dairies`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name FeaturesUsersDairiesCreate
   * @summary Assigns a user to several dairies
   * @request POST:/api/features/{featureKey}/users/{userId}/dairies
   * @secure
   * @response `204` `void` Successful assignment.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or feature doesn't exist.
   */
  featuresUsersDairiesCreate = (
    featureKey: string,
    userId: number,
    data: FeaturesUsersDairiesCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/features/${featureKey}/users/${userId}/dairies`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name FeaturesDairiesUsersCreate
   * @summary Assigns several users to a dairy
   * @request POST:/api/features/{featureKey}/dairies/{dairyId}/users
   * @secure
   * @response `204` `void` Successful assignment.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` A user or feature doesn't exist.
   */
  featuresDairiesUsersCreate = (
    featureKey: string,
    dairyId: number,
    data: FeaturesDairiesUsersCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/features/${featureKey}/dairies/${dairyId}/users`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name FeaturesAssignCreate
   * @summary Assigns user to a given feature.
   * @request POST:/api/features/{featureKey}/assign
   * @secure
   * @response `204` `void` User invited successfully
   * @response `400` `ErrorMessageDto` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Feature or user not found
   */
  featuresAssignCreate = (featureKey: string, data: FeatureInviteDto, params: RequestParams = {}) =>
    this.request<void, ErrorMessageDto | void>({
      path: `/api/features/${featureKey}/assign`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name FeaturesAssignDetail
   * @summary Gets the platform and feature status of a prospect user based on their email
   * @request GET:/api/features/{featureKey}/assign
   * @secure
   * @response `200` `FeatureEmailStatusDto` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  featuresAssignDetail = ({ featureKey, ...query }: FeaturesAssignDetailParams, params: RequestParams = {}) =>
    this.request<FeatureEmailStatusDto, void>({
      path: `/api/features/${featureKey}/assign`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name FeaturesAssignUpdate
   * @summary Update user's roles for a feature.
   * @request PUT:/api/features/{featureKey}/assign
   * @secure
   * @response `204` `void` User feature roles updated successfully
   * @response `400` `ErrorMessageDto` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Feature or user not found
   */
  featuresAssignUpdate = (featureKey: string, data: UserFeatureRolesUpdateDto, params: RequestParams = {}) =>
    this.request<void, ErrorMessageDto | void>({
      path: `/api/features/${featureKey}/assign`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name FeaturesRolesDetail
   * @summary Gets the list of roles of a specific feature
   * @request GET:/api/features/{featureKey}/roles
   * @secure
   * @response `200` `(FeatureRoleDto)[]` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  featuresRolesDetail = (featureKey: string, params: RequestParams = {}) =>
    this.request<FeatureRoleDto[], void>({
      path: `/api/features/${featureKey}/roles`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name FeaturesRolesUsersDetail
   * @summary Gets the list of users of a specific feature role
   * @request GET:/api/features/{featureKey}/roles/{featureRoleId}/users
   * @secure
   * @response `200` `MinimalUserIdentityDtoQueryResultDto` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  featuresRolesUsersDetail = (
    { featureKey, featureRoleId, ...query }: FeaturesRolesUsersDetailParams,
    params: RequestParams = {},
  ) =>
    this.request<MinimalUserIdentityDtoQueryResultDto, void>({
      path: `/api/features/${featureKey}/roles/${featureRoleId}/users`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name GetFeatureUsersAsync
   * @summary Retrieves all users associated to a particular feature (through Feature Roles)
   * @request GET:/api/features/{featureKey}/users
   * @secure
   * @response `200` `FeatureMinimalUserIdentityDtoQueryResultDto` Retrieved users page
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Feature was not found
   */
  getFeatureUsersAsync = ({ featureKey, ...query }: GetFeatureUsersAsyncParams, params: RequestParams = {}) =>
    this.request<FeatureMinimalUserIdentityDtoQueryResultDto, void>({
      path: `/api/features/${featureKey}/users`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Feature Role Management
   * @name RemoveUserFromFeatureAsync
   * @summary Removes a user from a feature.
   * @request DELETE:/api/features/{featureKey}/users/{userId}
   * @secure
   * @response `204` `void` Successful delete.
   * @response `400` `void` Last user in feature role.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found for given feature.
   */
  removeUserFromFeatureAsync = (featureKey: string, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/features/${featureKey}/users/${userId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
}
