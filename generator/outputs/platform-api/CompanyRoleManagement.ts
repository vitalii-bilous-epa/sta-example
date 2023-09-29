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
  CompaniesUsersDetailParams,
  CompaniesUsersUpdatePayload,
  CompanyRoleCreateDto,
  CompanyRoleDto,
  CompanyRoleDtoCollectionDto,
  GetCompanyRolesParams,
  UserProfileWithCompanyRolesDtoQueryResultDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class CompanyRoleManagement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Company Role Management
   * @name CompaniesRolesCreate
   * @summary Creates a company role
   * @request POST:/api/companies/{companyId}/roles
   * @secure
   * @response `201` `void` Successful creation
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` The referred to Company, Dairies or Zones were not found.
   */
  companiesRolesCreate = (companyId: number, data: CompanyRoleCreateDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/roles`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Role Management
   * @name GetCompanyRoles
   * @summary Gets company roles for a specific company
   * @request GET:/api/companies/{companyId}/roles
   * @secure
   * @response `200` `(CompanyRoleDto)[]` List of company roles for this company
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Company id was not found
   */
  getCompanyRoles = ({ companyId, ...query }: GetCompanyRolesParams, params: RequestParams = {}) =>
    this.request<CompanyRoleDto[], void>({
      path: `/api/companies/${companyId}/roles`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Role Management
   * @name GetCompanyRole
   * @summary Retrieves a company role
   * @request GET:/api/companies/{companyId}/roles/{companyRoleId}
   * @secure
   * @response `200` `CompanyRoleCreateDto` Company role
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Company role not found
   */
  getCompanyRole = (companyId: number, companyRoleId: number, params: RequestParams = {}) =>
    this.request<CompanyRoleCreateDto, void>({
      path: `/api/companies/${companyId}/roles/${companyRoleId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Role Management
   * @name UpdateCompanyRole
   * @summary Updates a company role
   * @request PUT:/api/companies/{companyId}/roles/{companyRoleId}
   * @secure
   * @response `204` `void` Successful update
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Company role not found
   */
  updateCompanyRole = (companyId: number, companyRoleId: number, data: CompanyRoleDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/roles/${companyRoleId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Role Management
   * @name DeleteCompanyRole
   * @summary Deletes a company role
   * @request DELETE:/api/companies/{companyId}/roles/{companyRoleId}
   * @secure
   * @response `204` `void` Successful delete
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Company role not found
   */
  deleteCompanyRole = (companyId: number, companyRoleId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/roles/${companyRoleId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Role Management
   * @name CompaniesUsersDetail
   * @summary List of the Users for a given company.
   * @request GET:/api/companies/{companyId}/users
   * @secure
   * @response `200` `UserProfileWithCompanyRolesDtoQueryResultDto` List of the Users.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  companiesUsersDetail = ({ companyId, ...query }: CompaniesUsersDetailParams, params: RequestParams = {}) =>
    this.request<UserProfileWithCompanyRolesDtoQueryResultDto, void>({
      path: `/api/companies/${companyId}/users`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Role Management
   * @name CompaniesUsersUpdate
   * @summary Updates user's roles for a given company
   * @request PUT:/api/companies/{companyId}/users/{userId}
   * @secure
   * @response `204` `void` User roles updated successfully
   * @response `400` `void` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Company, roles, or user not found
   */
  companiesUsersUpdate = (
    companyId: number,
    userId: number,
    data: CompaniesUsersUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/users/${userId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Role Management
   * @name RemoveUserFromCompanyAsync
   * @summary Removes a user from a company.
   * @request DELETE:/api/companies/{companyId}/users/{userId}
   * @secure
   * @response `204` `void` Successful delete.
   * @response `400` `void` Last manager in company.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found for given company.
   */
  removeUserFromCompanyAsync = (companyId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/companies/${companyId}/users/${userId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Company Role Management
   * @name UsersCompanyRolesDetail
   * @summary Get user's assigned company roles
   * @request GET:/api/users/{userId}/companyRoles
   * @secure
   * @response `200` `CompanyRoleDtoCollectionDto` List of user assigned roles
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   */
  usersCompanyRolesDetail = (userId: number, params: RequestParams = {}) =>
    this.request<CompanyRoleDtoCollectionDto, void>({
      path: `/api/users/${userId}/companyRoles`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
