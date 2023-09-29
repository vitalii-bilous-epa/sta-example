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
  AccessTokenResponseDto,
  ClientCreationDto,
  ClientDto,
  ClientSecretDto,
  OpenIddictResponse,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class OpenId<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags OpenId
 * @name TokenCreate
 * @summary Client Credentials Grant (Machine to Machine - M2M)
Requires: header 'Content-Type: application/x-www-form-urlencoded'
Requires: grant_type=client_credentials in url, along with client_id=X, client_secret=Y
https://www.rfc-editor.org/rfc/rfc6749#page-40
https://documentation.openiddict.com/guides/choosing-the-right-flow.html#client-credentials-grant-recommended-for-machine-to-machine-communication
 * @request POST:/connect/token
 * @response `200` `AccessTokenResponseDto` Generated Access Token
 * @response `400` `OpenIddictResponse` Unsupported Grant Type
 */
  tokenCreate = (params: RequestParams = {}) =>
    this.request<AccessTokenResponseDto, OpenIddictResponse>({
      path: `/connect/token`,
      method: 'POST',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags OpenId
   * @name ClientsCreate
   * @summary Creates a new OpenIdDict Client
   * @request POST:/api/clients
   * @secure
   * @response `201` `ClientDto` Created Application
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  clientsCreate = (data: ClientCreationDto, params: RequestParams = {}) =>
    this.request<ClientDto, void>({
      path: `/api/clients`,
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
   * @tags OpenId
   * @name ClientsSecretsRegenerateCreate
   * @summary Updates the Secret for an OpenIdDict Application
   * @request POST:/api/clients/{clientId}/secrets/regenerate
   * @secure
   * @response `200` `ClientSecretDto` Newly Created Secret
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  clientsSecretsRegenerateCreate = (clientId: string, params: RequestParams = {}) =>
    this.request<ClientSecretDto, void>({
      path: `/api/clients/${clientId}/secrets/regenerate`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags OpenId
   * @name ClientsUpdate
   * @summary Updates an OpenIdDict Application
   * @request PUT:/api/clients/{clientId}
   * @secure
   * @response `200` `ClientSecretDto` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  clientsUpdate = (clientId: string, data: ClientCreationDto, params: RequestParams = {}) =>
    this.request<ClientSecretDto, void>({
      path: `/api/clients/${clientId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
