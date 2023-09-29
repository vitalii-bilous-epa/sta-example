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
  ChangePasswordDto,
  DairyAccessRequestDtoQueryResultDto,
  FeatureDto,
  GetMyDairyAccessRequestsAsyncParams,
  LoginSessionDtoQueryResultDto,
  MyAvatarCreatePayload,
  MyFeaturesListParams,
  MyLoginHistoryListParams,
  UploadDto,
  UserAccountDto,
  UserAccountUpdateDto,
  UserCompanyRoleDtoCollectionDto,
  UserDairyRoleDtoCollectionDto,
  UserProfileUpdateDto,
  UserProfileWithAddressDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class My<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags My
   * @name MyPasswordCreate
   * @summary Changes current user's password
   * @request POST:/api/my/password
   * @secure
   * @response `204` `void` Successful update
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  myPasswordCreate = (data: ChangePasswordDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/my/password`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name MyAvatarCreate
   * @summary Updates the current user's profile avatar
   * @request POST:/api/my/avatar
   * @secure
   * @response `200` `UploadDto` Successfully updated avatar
   * @response `400` `void` Bad request, invalid file
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  myAvatarCreate = (data: MyAvatarCreatePayload, params: RequestParams = {}) =>
    this.request<UploadDto, void>({
      path: `/api/my/avatar`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name AcceptInviteToCompany
   * @summary Accept the invitation to join a company with specific roles.
   * @request POST:/api/my/invites/companies/{companyId}/accept
   * @secure
   * @response `200` `UserCompanyRoleDtoCollectionDto` Invitation successfully accepted.
   * @response `400` `any` Bad request, invalid model.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Invitation not found.
   */
  acceptInviteToCompany = (companyId: number, params: RequestParams = {}) =>
    this.request<UserCompanyRoleDtoCollectionDto, void>({
      path: `/api/my/invites/companies/${companyId}/accept`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name DeclineInviteToCompany
   * @summary Decline the invitation to join a company.
   * @request POST:/api/my/invites/companies/{companyId}/decline
   * @secure
   * @response `204` `void` Invitation successfully declined.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Invitation not found.
   */
  declineInviteToCompany = (companyId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/my/invites/companies/${companyId}/decline`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name CancelAccessRequestToDairy
   * @summary Cancel an access request to a dairy
   * @request POST:/api/my/requests/dairies/{dairyId}/cancel
   * @secure
   * @response `204` `void` Access request successfully cancelled
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Access request not found
   */
  cancelAccessRequestToDairy = (dairyId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/my/requests/dairies/${dairyId}/cancel`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name GetMyDairyAccessRequestsAsync
   * @summary List user's dairy access requests.
   * @request GET:/api/my/requests/dairies
   * @secure
   * @response `200` `DairyAccessRequestDtoQueryResultDto` List of found access requests and invites.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Results could not be returned.
   */
  getMyDairyAccessRequestsAsync = (query: GetMyDairyAccessRequestsAsyncParams, params: RequestParams = {}) =>
    this.request<DairyAccessRequestDtoQueryResultDto, void>({
      path: `/api/my/requests/dairies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name AcceptInviteToDairy
   * @summary Accept the invitation to join a dairy with specific roles
   * @request POST:/api/my/invites/dairies/{dairyId}/accept
   * @secure
   * @response `200` `UserDairyRoleDtoCollectionDto` Invitation successfully accepted
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or dairy not found
   */
  acceptInviteToDairy = (dairyId: number, params: RequestParams = {}) =>
    this.request<UserDairyRoleDtoCollectionDto, void>({
      path: `/api/my/invites/dairies/${dairyId}/accept`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name DeclineInviteToDairy
   * @summary Decline the invitation to join a dairy
   * @request POST:/api/my/invites/dairies/{dairyId}/decline
   * @secure
   * @response `204` `void` Invitation successfully declined
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Invitation not found
   */
  declineInviteToDairy = (dairyId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/my/invites/dairies/${dairyId}/decline`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name MyProfileList
   * @summary Gets current user's profile information
   * @request GET:/api/my/profile
   * @secure
   * @response `200` `UserProfileWithAddressDto` User's profile details
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found
   */
  myProfileList = (params: RequestParams = {}) =>
    this.request<UserProfileWithAddressDto, void>({
      path: `/api/my/profile`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name MyProfileUpdate
   * @summary Updates the current user's profile information
   * @request PUT:/api/my/profile
   * @secure
   * @response `204` `void` Successfully updated profile
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  myProfileUpdate = (data: UserProfileUpdateDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/my/profile`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name GetMyAccount
   * @summary Gets the current logged in user account information
   * @request GET:/api/my/account
   * @secure
   * @response `200` `UserAccountDto` User account information
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Current user information was not found
   */
  getMyAccount = (params: RequestParams = {}) =>
    this.request<UserAccountDto, void>({
      path: `/api/my/account`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name UpdateMyAccount
   * @summary Updates the current logged in user account information
   * @request PUT:/api/my/account
   * @secure
   * @response `204` `void` User account information updated
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found
   */
  updateMyAccount = (data: UserAccountUpdateDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/my/account`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name MyLoginHistoryList
   * @summary Get user's login history
   * @request GET:/api/my/loginHistory
   * @secure
   * @response `200` `LoginSessionDtoQueryResultDto` List of user login sessions
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  myLoginHistoryList = (query: MyLoginHistoryListParams, params: RequestParams = {}) =>
    this.request<LoginSessionDtoQueryResultDto, void>({
      path: `/api/my/loginHistory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name RemoveMyCompanyAccessAsync
   * @summary Removes the current user from a company.
   * @request DELETE:/api/my/companies/{companyId}
   * @secure
   * @response `204` `void` Successful delete.
   * @response `400` `void` Bad Request, Last Manager in Company.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found for given company.
   */
  removeMyCompanyAccessAsync = (companyId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/my/companies/${companyId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name RemoveMyDairyAccessAsync
   * @summary Removes the current user from a dairy
   * @request DELETE:/api/my/dairies/{dairyId}
   * @secure
   * @response `204` `void` Successful delete
   * @response `400` `void` Bad Request, Last Manager in Dairy
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found for given dairy
   */
  removeMyDairyAccessAsync = (dairyId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/my/dairies/${dairyId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags My
   * @name MyFeaturesList
   * @summary Gets the list of features for a specific user
   * @request GET:/api/my/features
   * @secure
   * @response `200` `(FeatureDto)[]` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  myFeaturesList = (query: MyFeaturesListParams, params: RequestParams = {}) =>
    this.request<FeatureDto[], void>({
      path: `/api/my/features`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
