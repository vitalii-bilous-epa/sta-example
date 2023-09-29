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

import { FeatureDairyDtoQueryResultDto, FeaturesDairiesDetailParams } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Feature<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Feature
   * @name FeaturesDairiesDetail
   * @summary Gets a list of dairies for a given feature
   * @request GET:/api/features/{featureKey}/dairies
   * @secure
   * @response `200` `FeatureDairyDtoQueryResultDto` Retrieved dairies page
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Feature not found
   */
  featuresDairiesDetail = ({ featureKey, ...query }: FeaturesDairiesDetailParams, params: RequestParams = {}) =>
    this.request<FeatureDairyDtoQueryResultDto, void>({
      path: `/api/features/${featureKey}/dairies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
}
