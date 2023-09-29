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
  DairiesRequestsDetailParams,
  DairiesUsersCreatePayload,
  DairyAccessRequestCreateDto,
  DairyAccessRequestDto,
  DairyAccessRequestDtoQueryResultDto,
  DairyInviteDto,
  DairyInviteUpdateDto,
  UserDairyRoleDtoCollectionDto,
  UserDairyRolesDto,
  UserProfileWithDairyRolesDto,
  UserSearchForInviteFlowAsyncParams,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class DairyInvitesAccessRequests<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name RequestAccessToDairy
   * @summary Requests access to a dairy
   * @request POST:/api/dairies/{dairyId}/request
   * @secure
   * @response `204` `void` Request sent
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or dairy not found
   */
  requestAccessToDairy = (dairyId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/request`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name ApproveAccessRequestToDairy
   * @summary Approve a request to join a dairy with specific roles
   * @request POST:/api/dairies/{dairyId}/request/{userId}/approve
   * @secure
   * @response `200` `UserDairyRoleDtoCollectionDto` Access request successfully approved
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or dairy not found
   */
  approveAccessRequestToDairy = (
    dairyId: number,
    userId: number,
    data: DairyAccessRequestCreateDto,
    params: RequestParams = {},
  ) =>
    this.request<UserDairyRoleDtoCollectionDto, void>({
      path: `/api/dairies/${dairyId}/request/${userId}/approve`,
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
   * @tags Dairy Invites & Access Requests
   * @name DeclineAccessRequestToDairy
   * @summary Decline an access request to a dairy
   * @request POST:/api/dairies/{dairyId}/request/{userId}/decline
   * @secure
   * @response `204` `void` Access request successfully declined
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Access request not found
   */
  declineAccessRequestToDairy = (dairyId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/request/${userId}/decline`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name DairiesRequestsDetail
   * @summary List dairy access requests for a specific dairy.
   * @request GET:/api/dairies/{dairyId}/requests
   * @secure
   * @response `200` `DairyAccessRequestDtoQueryResultDto` List of found access requests and invites.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Results could not be returned.
   */
  dairiesRequestsDetail = ({ dairyId, ...query }: DairiesRequestsDetailParams, params: RequestParams = {}) =>
    this.request<DairyAccessRequestDtoQueryResultDto, void>({
      path: `/api/dairies/${dairyId}/requests`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name InviteUserToDairy
   * @summary Invites a user to a dairy with specific roles
   * @request POST:/api/dairies/{dairyId}/invite
   * @secure
   * @response `201` `DairyAccessRequestDto` Created
   * @response `204` `void` Invitation sent
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or dairy not found
   */
  inviteUserToDairy = (dairyId: number, data: DairyInviteDto, params: RequestParams = {}) =>
    this.request<DairyAccessRequestDto, void>({
      path: `/api/dairies/${dairyId}/invite`,
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
   * @tags Dairy Invites & Access Requests
   * @name InviteUserToDairyAsync
   * @summary Invites user to a given dairy with provided roles.
   * @request POST:/api/dairies/{dairyId}/invites
   * @secure
   * @response `204` `void` User invited successfully
   * @response `400` `void` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy or user not found
   */
  inviteUserToDairyAsync = (dairyId: number, data: UserDairyRolesDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/invites`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name UserSearchForInviteFlowAsync
   * @summary Search for a user before extending dairy invitation
   * @request GET:/api/dairies/{dairyId}/invites
   * @secure
   * @response `200` `UserProfileWithDairyRolesDto` User's data
   * @response `400` `UserProfileWithDairyRolesDto` User is in the dairy or was invited
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User does not exists or is not discoverable
   */
  userSearchForInviteFlowAsync = (
    { dairyId, ...query }: UserSearchForInviteFlowAsyncParams,
    params: RequestParams = {},
  ) =>
    this.request<UserProfileWithDairyRolesDto, UserProfileWithDairyRolesDto | void>({
      path: `/api/dairies/${dairyId}/invites`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name EditDairyInvite
   * @summary Edits a dairy invite for a user, with specific roles
   * @request POST:/api/dairies/{dairyId}/invite/edit
   * @secure
   * @response `204` `void` Invitation updated
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or dairy not found
   */
  editDairyInvite = (dairyId: number, data: DairyInviteUpdateDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/invite/edit`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name ResendDairyInviteToUser
   * @summary Resend a dairy invite to a user
   * @request POST:/api/dairies/{dairyId}/invite/{userId}/resend
   * @secure
   * @response `204` `void` Invitation resent
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User, dairy or invite not found
   */
  resendDairyInviteToUser = (dairyId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/invite/${userId}/resend`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name CancelInviteToDairy
   * @summary Cancel an invite to a dairy
   * @request POST:/api/dairies/{dairyId}/invite/{userId}/cancel
   * @secure
   * @response `204` `void` Invite successfully cancelled
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Invite not found
   */
  cancelInviteToDairy = (dairyId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/invite/${userId}/cancel`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name RemoveUserFromDairy
   * @summary Removes a user from a dairy
   * @request DELETE:/api/dairies/{dairyId}/users/{userId}
   * @secure
   * @response `204` `void` Successful delete
   * @response `400` `void` Bad Request, Last Manager in Dairy
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found for given dairy
   */
  removeUserFromDairy = (dairyId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/users/${userId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Dairy Invites & Access Requests
   * @name DairiesUsersCreate
   * @summary Update the dairy roles assigned to a user.
   * @request POST:/api/dairies/{dairyId}/users/{userId}
   * @secure
   * @response `204` `void` Update successful
   * @response `400` `void` No dairy role IDs provided or Is Last Manager in Dairy
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy, user, and/or at least one dairy role not found
   */
  dairiesUsersCreate = (dairyId: number, userId: number, data: DairiesUsersCreatePayload, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/users/${userId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
}
