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
  AgreementAcceptanceDto,
  AgreementsDraHtmlListParams,
  AgreementsEulaHtmlListParams,
  AgreementsPrivacyPolicyHtmlListParams,
  AgreementsTermsAndConditionsHtmlListParams,
  AgreementsUserAgreementHtmlListParams,
  LoginTokenDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class UserAgreement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags User Agreement
   * @name AuthAgreementsAcceptCreate
   * @summary Accepts the EUSA agreement, Privacy Policy and Terms of Service for the currently logged in user.
   * @request POST:/api/auth/agreements/accept
   * @response `200` `LoginTokenDto` Acceptance acknowledged.
   * @response `400` `any` Bad Request
   */
  authAgreementsAcceptCreate = (data: AgreementAcceptanceDto, params: RequestParams = {}) =>
    this.request<LoginTokenDto, any>({
      path: `/api/auth/agreements/accept`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags User Agreement
   * @name AgreementsUserAgreementHtmlList
   * @summary Returns the EUSA agreement for users to read.
   * @request GET:/api/agreements/userAgreement.html
   * @response `200` `string` EUSA Agreement
   */
  agreementsUserAgreementHtmlList = (query: AgreementsUserAgreementHtmlListParams, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/agreements/userAgreement.html`,
      method: 'GET',
      query: query,
      ...params,
    })
  /**
   * No description
   *
   * @tags User Agreement
   * @name AgreementsDraHtmlList
   * @summary Returns the DRA for users to read.
   * @request GET:/api/agreements/dra.html
   * @response `200` `string` Data Release Agreement
   */
  agreementsDraHtmlList = (query: AgreementsDraHtmlListParams, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/agreements/dra.html`,
      method: 'GET',
      query: query,
      ...params,
    })
  /**
   * No description
   *
   * @tags User Agreement
   * @name AgreementsPrivacyPolicyHtmlList
   * @summary Returns the Privacy Policy for users to read.
   * @request GET:/api/agreements/privacyPolicy.html
   * @response `200` `string` Privacy Policy Agreement.
   */
  agreementsPrivacyPolicyHtmlList = (query: AgreementsPrivacyPolicyHtmlListParams, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/agreements/privacyPolicy.html`,
      method: 'GET',
      query: query,
      ...params,
    })
  /**
   * No description
   *
   * @tags User Agreement
   * @name AgreementsTermsAndConditionsHtmlList
   * @summary Returns the Terms and Conditions for users to read.
   * @request GET:/api/agreements/termsAndConditions.html
   * @response `200` `string` Terms and Conditions Document.
   */
  agreementsTermsAndConditionsHtmlList = (
    query: AgreementsTermsAndConditionsHtmlListParams,
    params: RequestParams = {},
  ) =>
    this.request<string, any>({
      path: `/api/agreements/termsAndConditions.html`,
      method: 'GET',
      query: query,
      ...params,
    })
  /**
   * No description
   *
   * @tags User Agreement
   * @name AgreementsEulaHtmlList
   * @summary Returns the EULA for users to read.
   * @request GET:/api/agreements/eula.html
   * @response `200` `string` EULA Document.
   */
  agreementsEulaHtmlList = (query: AgreementsEulaHtmlListParams, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/agreements/eula.html`,
      method: 'GET',
      query: query,
      ...params,
    })
}
