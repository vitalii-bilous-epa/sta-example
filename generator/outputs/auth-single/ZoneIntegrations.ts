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

import { ErrorMessageDto, TokenDto } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class ZoneIntegrations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Zone Integrations
   * @name GenerateZoneIntegrationTokenFromFeatureAsync
   * @summary Gets a new authentication token for a zone integration
   * @request POST:/api/auth/features/{featureKey}/dairies/{dairyId}/zones/{zoneId}/integrations/{integrationId}/token/new
   * @secure
   * @response `200` `TokenDto` Generated authentication token
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy, zone or zone integration not found
   */
  generateZoneIntegrationTokenFromFeatureAsync = (
    featureKey: string,
    dairyId: number,
    zoneId: number,
    integrationId: number,
    params: RequestParams = {},
  ) =>
    this.request<TokenDto, void>({
      path: `/api/auth/features/${featureKey}/dairies/${dairyId}/zones/${zoneId}/integrations/${integrationId}/token/new`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Zone Integrations
   * @name GenerateZoneIntegrationTokenAsync
   * @summary Gets a new authentication token for a zone integration
   * @request POST:/api/auth/dairies/{dairyId}/zones/{zoneId}/integrations/{integrationId}/token/new
   * @secure
   * @response `200` `TokenDto` Generated authentication token
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Dairy, zone or zone integration not found
   */
  generateZoneIntegrationTokenAsync = (
    dairyId: number,
    zoneId: number,
    integrationId: number,
    params: RequestParams = {},
  ) =>
    this.request<TokenDto, void>({
      path: `/api/auth/dairies/${dairyId}/zones/${zoneId}/integrations/${integrationId}/token/new`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Zone Integrations
   * @name RefreshZoneIntegrationTokenAsync
   * @summary Refreshes an authentication token for a zone integration
   * @request POST:/api/integrations/auth/refresh
   * @response `200` `TokenDto` Generated authentication token
   * @response `400` `ErrorMessageDto` Bad Request
   * @response `404` `void` Dairy, zone or zone integration not found
   */
  refreshZoneIntegrationTokenAsync = (params: RequestParams = {}) =>
    this.request<TokenDto, ErrorMessageDto | void>({
      path: `/api/integrations/auth/refresh`,
      method: 'POST',
      format: 'json',
      ...params,
    })
}
