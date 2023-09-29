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

import { HttpClient, RequestParams } from './http-client'

export class UserDairyRole<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UserDairyRole
   * @name ForceRemoveUserFromDairy
   * @summary Forces the removal of a user from a dairy, without checking if it's the last manager of the dairy.
   * @request DELETE:/api/dairies/{dairyId}/users/{userId}/force
   * @secure
   * @response `204` `void` Successful delete
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found for given dairy
   */
  forceRemoveUserFromDairy = (dairyId: number, userId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/dairies/${dairyId}/users/${userId}/force`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
}
