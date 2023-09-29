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
  CompaniesInvitesDetailParams,
  CompaniesRequestsDetailParams,
  CompanyAccessRequestDtoQueryResultDto,
  CompanyInviteUpdateDto,
  UserCompanyRolesDto,
  UserProfileDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class CompanyInvites<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Company Invites
   * @name InviteUserToCompanyAsync
   * @summary Invites user to a given company with provided roles.
   * @request POST:/api/companies/{companyId}/invites
   * @secure
   * @response `204` `void` User invited successfully
   * @response `400` `void` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Company or user not found
   */
  inviteUserToCompanyAsync = (companyId: number, data: UserCompanyRolesDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/invites`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Invites
   * @name CompaniesInvitesDetail
   * @summary Search for a user before extending company invitation
   * @request GET:/api/companies/{companyId}/invites
   * @secure
   * @response `200` `UserProfileDto` User's data
   * @response `400` `UserProfileDto` User is in the company or was invited
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User does not exists or is not discoverable
   */
  companiesInvitesDetail = ({ companyId, ...query }: CompaniesInvitesDetailParams, params: RequestParams = {}) =>
    this.request<UserProfileDto, UserProfileDto | void>({
      path: `/api/companies/${companyId}/invites`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Invites
   * @name EditCompanyInvite
   * @summary Edits a company invite for a user, with specific roles
   * @request PUT:/api/companies/{companyId}/invites
   * @secure
   * @response `204` `void` Invitation updated
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or company not found
   */
  editCompanyInvite = (companyId: number, data: CompanyInviteUpdateDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/invites`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Invites
   * @name InviteUserToCompany
   * @summary Invites a user to a company with specific roles
   * @request POST:/api/companies/{companyId}/invite
   * @secure
   * @response `204` `void` Invitation sent
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or company not found
   */
  inviteUserToCompany = (companyId: number, data: UserCompanyRolesDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/invite`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Invites
   * @name CompaniesRequestsDetail
   * @summary Access requests and invitations for a specific company.
   * @request GET:/api/companies/{companyId}/requests
   * @secure
   * @response `200` `CompanyAccessRequestDtoQueryResultDto` Page of access requests and invites for the company.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Results could not be returned.
   */
  companiesRequestsDetail = ({ companyId, ...query }: CompaniesRequestsDetailParams, params: RequestParams = {}) =>
    this.request<CompanyAccessRequestDtoQueryResultDto, void>({
      path: `/api/companies/${companyId}/requests`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Invites
   * @name CancelInviteToCompany
   * @summary Cancel an invite to a company
   * @request POST:/api/companies/{companyId}/invites/{userId}/cancel
   * @secure
   * @response `204` `void` Invite successfully cancelled
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Invite not found
   */
  cancelInviteToCompany = (companyId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/invites/${userId}/cancel`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Invites
   * @name ResendCompanyInviteToUser
   * @summary Resend a company invite to a user
   * @request POST:/api/companies/{companyId}/invites/{userId}/resend
   * @secure
   * @response `204` `void` Invitation resent
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User, company or invite not found
   */
  resendCompanyInviteToUser = (companyId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/invites/${userId}/resend`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Invites
   * @name ResendInviteToUserAsync
   * @summary Resend an invite to a user
   * @request POST:/api/features/{featureKey}/users/{userId}/resend
   * @secure
   * @response `204` `void` Invitation resent
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User or invite not found
   */
  resendInviteToUserAsync = (featureKey: string, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/features/${featureKey}/users/${userId}/resend`,
      method: 'POST',
      secure: true,
      ...params,
    })
}
