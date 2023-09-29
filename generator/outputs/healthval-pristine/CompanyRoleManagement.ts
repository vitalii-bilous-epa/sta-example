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

import { CompanyRoleCreateDto, CompanyRoleDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CompanyRoleManagement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Company Role Management
   * @name UpdateCompanyRole
   * @summary Updates a company role
   * @request PUT:/api/companies/{companyId}/roles/{companyRoleId}
   * @secure
   * @response `200` `CompanyRoleCreateDto` Company role
   * @response `204` `void` Successful update
   * @response `400` `any` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Company role not found
   */
  updateCompanyRole = (
    companyId: number,
    companyRoleId: number,
    data: CompanyRoleDto,
    query?: {
      /**
       * Test identifier
       * @format int64
       */
      test_one?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CompanyRoleCreateDto, void>({
      path: `/api/companies/${companyId}/roles/${companyRoleId}`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
