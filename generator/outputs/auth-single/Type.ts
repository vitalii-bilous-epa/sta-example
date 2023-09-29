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

import { DairyPermissionDtoCollectionDto, LookupTypeDtoCollectionDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Type<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Type
   * @name TypesUserList
   * @summary Gets list of user types
   * @request GET:/api/types/user
   * @secure
   * @response `200` `LookupTypeDtoCollectionDto` List of user types
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  typesUserList = (params: RequestParams = {}) =>
    this.request<LookupTypeDtoCollectionDto, void>({
      path: `/api/types/user`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Type
   * @name TypesDairyPermissionsList
   * @summary Gets list of dairy permissions
   * @request GET:/api/types/dairyPermissions
   * @secure
   * @response `200` `DairyPermissionDtoCollectionDto` List of dairy permissions
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  typesDairyPermissionsList = (params: RequestParams = {}) =>
    this.request<DairyPermissionDtoCollectionDto, void>({
      path: `/api/types/dairyPermissions`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
