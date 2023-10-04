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

/*
 *
 * No description
 *false
 * @author automated
 * @genereated updateCompanyRole * @tags Company Role Management
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
/*
export const updateCompanyRole = () =>
    this.request<CompanyRoleCreateDto, void>({
        path: `/api/companies/${companyId}/roles/${companyRoleId}`,
        method: 'PUT',
        query: query,        body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    })
*/

interface InputUpdateCompanyRole extends CompanyRoleDto {
  /**
   * Company identifier
   * @format int64
   */
  companyId: number;
  /**
   * Company role identifier
   * @format int64
   */
  companyRoleId: number;
}

interface SearchParamsUpdateCompanyRole {
  /**
   * Test identifier
   * @format int64
   */
  test_one?: number;
}

type UpdateCompanyRoleInput = BaseInput & {};
type UpdateCompanyRoleOutput = BaseOutput<CompanyRoleCreateDto>;

/*
 *
 * No description
 *false
 * @author automated
 * @genereated updateCompanyRole * @tags Company Role Management
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
export const updateCompanyRole = (input: InputUpdateCompanyRole, searchParams: SearchParamsUpdateCompanyRole) => {
  const { companyId, companyRoleId, ...body } = input;

  return new AxiosRestClient<UpdateCompanyRoleInput, UpdateCompanyRoleOutput>({
    resourcePath: `/api/companies/${companyId}/roles/${companyRoleId}`,
  }).execute({
    method: "PUT",
    body,
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};