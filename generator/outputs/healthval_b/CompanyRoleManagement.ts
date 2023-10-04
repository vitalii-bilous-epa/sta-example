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
 * @request PUT:/api/companies/roles/
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
        path: `/api/companies/roles/`,
        method: 'PUT',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    })
*/

type UpdateCompanyRoleInput = BaseInput & {};
type UpdateCompanyRoleOutput = BaseOutput<CompanyRoleCreateDto>;

/*
 *
 * No description
 * * @author automated
 * @genereated updateCompanyRole * @tags Company Role Management
 * @name UpdateCompanyRole
 * @summary Updates a company role
 * @request PUT:/api/companies/roles/
 * @secure
 * @response `200` `CompanyRoleCreateDto` Company role
 * @response `204` `void` Successful update
 * @response `400` `any` Bad request, invalid model
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Company role not found
 */
export const updateCompanyRole = (input: CompanyRoleDto) => {
  const { ...body } = input;
  return new AxiosRestClient<UpdateCompanyRoleInput, UpdateCompanyRoleOutput>({
    resourcePath: `/api/companies/roles/`,
  }).execute({
    method: "PUT",
    body,
    headers: new Headers({
      // TODO: add appropriate headers
    }),
  });
};
