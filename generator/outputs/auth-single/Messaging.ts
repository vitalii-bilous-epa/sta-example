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

export class Messaging<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Messaging
   * @name SystemBusCreate
   * @request POST:/api/system/bus
   * @response `200` `void` Success
   */
  systemBusCreate = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/system/bus`,
      method: 'POST',
      ...params,
    })
}
