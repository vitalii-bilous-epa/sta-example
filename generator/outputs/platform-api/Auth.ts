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
  AdminLoginSessionDtoQueryResultDto,
  AdminLoginSessionsListParams,
  AdminUsersPasswordUpdatePayload,
  AuthDairyAccessLevelsCreatePayload,
  AuthLoginAdminCreatePayload,
  CompanyAccessLevel,
  DairyAccessLevel,
  EntityAuthParametersDto,
  EntityAuthResultDto,
  ErrorMessageDto,
  FinishSignUpDto,
  FinishSignUpLiteDto,
  ForgotPasswordRequestDto,
  GoogleSignUpDto,
  IntrospectionDto,
  LoginCredentialsDto,
  LoginTokenDto,
  MessageDto,
  MinimalZoneIntegrationDto,
  NewPasswordDto,
  RegisterUserDto,
  SystemAccessLevel,
  ZoneIntegrationAccessRequirementDto,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Login a user and obtain a session token.
   *
   * @tags Auth
   * @name AuthLoginCreate
   * @summary Login a user
   * @request POST:/api/auth/login
   * @response `200` `LoginTokenDto` Authentication successful
   * @response `400` `any` Bad request, invalid model
   * @response `401` `LoginTokenDto` Invalid credentials
   */
  authLoginCreate = (data: LoginCredentialsDto, params: RequestParams = {}) =>
    this.request<LoginTokenDto, LoginTokenDto>({
      path: `/api/auth/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description Login a user and obtain a session token.
   *
   * @tags Auth
   * @name AuthLoginGoogleCreate
   * @summary Login a user using a Google Token as credentials
   * @request POST:/api/auth/login-google
   * @secure
   * @response `200` `LoginTokenDto` Authentication successful
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authLoginGoogleCreate = (params: RequestParams = {}) =>
    this.request<LoginTokenDto, void>({
      path: `/api/auth/login-google`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
 * No description
 *
 * @tags Auth
 * @name AuthLoginAdminCreate
 * @summary Validates the token coming from the admin app, ensures a user exists within morpheus
(with appropriate claims), and logs in with the corresponding morpheus user.
 * @request POST:/api/auth/loginAdmin
 * @response `200` `LoginTokenDto` Successful login
 * @response `400` `void` Bad request, invalid model
 * @response `401` `void` Login failed, not authorized
 */
  authLoginAdminCreate = (data: AuthLoginAdminCreatePayload, params: RequestParams = {}) =>
    this.request<LoginTokenDto, void>({
      path: `/api/auth/loginAdmin`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthLogoutCreate
   * @summary Logout user
   * @request POST:/api/auth/logout
   * @secure
   * @response `200` `MessageDto` Logout successful
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authLogoutCreate = (params: RequestParams = {}) =>
    this.request<MessageDto, void>({
      path: `/api/auth/logout`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description This will send a password reset email for the user to change their password.
   *
   * @tags Auth
   * @name AuthPasswordForgotCreate
   * @summary Starts the password recovery process or registration continuation when unfinished.
   * @request POST:/api/auth/password/forgot
   * @response `200` `MessageDto` A password reset or complete registration email has been sent.
   * @response `400` `ErrorMessageDto` Bad request, invalid model
   */
  authPasswordForgotCreate = (data: ForgotPasswordRequestDto, params: RequestParams = {}) =>
    this.request<MessageDto, ErrorMessageDto>({
      path: `/api/auth/password/forgot`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthPasswordVerifyDetail
   * @summary Verify that a password reset token is still valid
   * @request GET:/api/auth/password/verify/{token}
   * @response `200` `MessageDto` The password reset token is valid.
   * @response `400` `ErrorMessageDto` Bad request, invalid model
   */
  authPasswordVerifyDetail = (token: string, params: RequestParams = {}) =>
    this.request<MessageDto, ErrorMessageDto>({
      path: `/api/auth/password/verify/${token}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthSignupVerifyDetail
   * @summary Verify that a password reset token is still valid
   * @request GET:/api/auth/signup/verify/{token}
   * @response `200` `MessageDto` The password reset token is valid.
   * @response `400` `ErrorMessageDto` Bad request, invalid model
   */
  authSignupVerifyDetail = (token: string, params: RequestParams = {}) =>
    this.request<MessageDto, ErrorMessageDto>({
      path: `/api/auth/signup/verify/${token}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * @description Resets (changes) the password for the user linked to the reset token.
   *
   * @tags Auth
   * @name AuthPasswordResetCreate
   * @summary Resets the user's password
   * @request POST:/api/auth/password/reset/{token}
   * @response `200` `LoginTokenDto` The password was successfully changed.
   * @response `400` `ErrorMessageDto` Bad request, invalid model
   * @response `401` `LoginTokenDto` Unauthorized
   */
  authPasswordResetCreate = (token: string, data: NewPasswordDto, params: RequestParams = {}) =>
    this.request<LoginTokenDto, ErrorMessageDto | LoginTokenDto>({
      path: `/api/auth/password/reset/${token}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description This endpoint will generate and return a new session token from an active session token.
   *
   * @tags Auth
   * @name AuthRefreshCreate
   * @summary Extend an active user session
   * @request POST:/api/auth/refresh
   * @secure
   * @response `200` `LoginTokenDto` A new session token
   * @response `400` `ErrorMessageDto` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authRefreshCreate = (params: RequestParams = {}) =>
    this.request<LoginTokenDto, ErrorMessageDto | void>({
      path: `/api/auth/refresh`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description This will send a welcome email for the new user to complete the registration process.
   *
   * @tags Auth
   * @name AuthSignupCreate
   * @summary Start the new user registration process
   * @request POST:/api/auth/signup
   * @response `200` `MessageDto` A registration welcome email has been sent.
   * @response `400` `ErrorMessageDto` Bad Request
   */
  authSignupCreate = (data: RegisterUserDto, params: RequestParams = {}) =>
    this.request<MessageDto, ErrorMessageDto>({
      path: `/api/auth/signup`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthSignupGoogleCreate
   * @summary Registers a new user using the provided Google Credentials and starts a new session.
   * @request POST:/api/auth/signup-google
   * @secure
   * @response `200` `MessageDto` Authentication successful
   * @response `400` `ErrorMessageDto` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authSignupGoogleCreate = (data: GoogleSignUpDto, params: RequestParams = {}) =>
    this.request<MessageDto, ErrorMessageDto | void>({
      path: `/api/auth/signup-google`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description This will send a welcome email for the new user to complete the registration process.
   *
   * @tags Auth
   * @name AuthSignupFinishCreate
   * @summary Confirm the new user registration email
   * @request POST:/api/auth/signup/finish/{token}
   * @response `200` `LoginTokenDto` Information accepted
   * @response `400` `ErrorMessageDto` Bad Request
   * @response `401` `LoginTokenDto` Unauthorized
   */
  authSignupFinishCreate = (token: string, data: FinishSignUpDto, params: RequestParams = {}) =>
    this.request<LoginTokenDto, ErrorMessageDto | LoginTokenDto>({
      path: `/api/auth/signup/finish/${token}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * @description This will send a welcome email for the new user to complete the registration process. Depending on the ClientType, will send a VAS or DC-Lite email
   *
   * @tags Auth
   * @name AuthSignupFinishLiteCreate
   * @summary Confirm the new user registration email
   * @request POST:/api/auth/signup/finish/lite/{token}
   * @response `200` `LoginTokenDto` Information accepted
   * @response `400` `ErrorMessageDto` Bad Request
   * @response `401` `LoginTokenDto` Unauthorized
   */
  authSignupFinishLiteCreate = (token: string, data: FinishSignUpLiteDto, params: RequestParams = {}) =>
    this.request<LoginTokenDto, ErrorMessageDto | LoginTokenDto>({
      path: `/api/auth/signup/finish/lite/${token}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthDairiesCreate
   * @summary Checks whether an actor has the required DairyAccessLevel.
   * @request POST:/api/auth/dairies/{dairyId}/{dairyAccessLevel}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authDairiesCreate = (dairyId: number, dairyAccessLevel: DairyAccessLevel, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/auth/dairies/${dairyId}/${dairyAccessLevel}`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthHerdsCreate
   * @summary Checks whether an actor has the required DairyAccessLevel.
   * @request POST:/api/auth/herds/{herdcode}/{dairyAccessLevel}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authHerdsCreate = (herdcode: string, dairyAccessLevel: DairyAccessLevel, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/auth/herds/${herdcode}/${dairyAccessLevel}`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthDairyAccessLevelsCreate
   * @summary Checks whether an actor has the required DairyAccessLevel for all the dairies.
   * @request POST:/api/auth/dairyAccessLevels/{dairyAccessLevel}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authDairyAccessLevelsCreate = (
    dairyAccessLevel: DairyAccessLevel,
    data: AuthDairyAccessLevelsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/api/auth/dairyAccessLevels/${dairyAccessLevel}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthCompaniesCreate
   * @summary Checks whether an actor has the required DairyAccessLevel.
   * @request POST:/api/auth/companies/{companyId}/{companyAccessLevel}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authCompaniesCreate = (companyId: number, companyAccessLevel: CompanyAccessLevel, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/auth/companies/${companyId}/${companyAccessLevel}`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthZonesIntegrationsDairyAccessLevelsCreate
   * @summary Checks whether a zone integration has the required DairyAccessLevel
   * @request POST:/api/auth/zones/integrations/dairyAccessLevels/{dairyAccessLevel}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authZonesIntegrationsDairyAccessLevelsCreate = (dairyAccessLevel: DairyAccessLevel, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/auth/zones/integrations/dairyAccessLevels/${dairyAccessLevel}`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthZonesIntegrationsAccessCreate
   * @summary Checks whether a zone integration has access.
   * @request POST:/api/auth/zones/integrations/access
   * @secure
   * @response `200` `MinimalZoneIntegrationDto` Zone integration access successfully verified.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Zone integration not found.
   */
  authZonesIntegrationsAccessCreate = (data: ZoneIntegrationAccessRequirementDto, params: RequestParams = {}) =>
    this.request<MinimalZoneIntegrationDto, void>({
      path: `/api/auth/zones/integrations/access`,
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
   * @tags Auth
   * @name AuthSystemCreate
   * @summary Checks whether an actor has the required SystemAccessLevel
   * @request POST:/api/auth/system/{systemAccessLevel}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authSystemCreate = (systemAccessLevel: SystemAccessLevel, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/auth/system/${systemAccessLevel}`,
      method: 'POST',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthFeaturesDairiesDetail
   * @summary Checks whether an actor has the required access to a Dairy through a Feature Role
   * @request GET:/api/auth/features/{featureKey}/{featureRole}/dairies/{dairyId}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authFeaturesDairiesDetail = (featureKey: string, featureRole: string, dairyId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/auth/features/${featureKey}/${featureRole}/dairies/${dairyId}`,
      method: 'GET',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthFeaturesRolesDetail
   * @summary Checks whether an actor has the required Feature Role
   * @request GET:/api/auth/features/{featureKey}/roles/{featureRole}
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authFeaturesRolesDetail = (featureKey: string, featureRole: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/auth/features/${featureKey}/roles/${featureRole}`,
      method: 'GET',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthFeaturesDairiesDetail2
   * @summary Checks whether an actor has the required access to a Dairy through a Feature
   * @request GET:/api/auth/features/{featureKey}/dairies/{dairyId}
   * @originalName authFeaturesDairiesDetail
   * @duplicate
   * @secure
   * @response `200` `void` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authFeaturesDairiesDetail2 = (featureKey: string, dairyId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/auth/features/${featureKey}/dairies/${dairyId}`,
      method: 'GET',
      secure: true,
      ...params,
    })
  /**
 * No description
 *
 * @tags Auth
 * @name AuthTokenIntrospectCreate
 * @summary Checks the provided token and returns the meta information surrounding the token,
including whether this token is currently active.
 * @request POST:/api/auth/token/introspect
 * @secure
 * @response `200` `Record<string,any>` Success
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 */
  authTokenIntrospectCreate = (data: IntrospectionDto, params: RequestParams = {}) =>
    this.request<Record<string, any>, void>({
      path: `/api/auth/token/introspect`,
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
   * @tags Auth
   * @name AuthUserinfoList
   * @summary Gets details about the logged-in user
   * @request GET:/api/auth/userinfo
   * @secure
   * @response `200` `Record<string,string>` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authUserinfoList = (params: RequestParams = {}) =>
    this.request<Record<string, string>, void>({
      path: `/api/auth/userinfo`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthUserinfoCreate
   * @summary Gets details about the logged-in user
   * @request POST:/api/auth/userinfo
   * @secure
   * @response `200` `Record<string,string>` Success
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authUserinfoCreate = (params: RequestParams = {}) =>
    this.request<Record<string, string>, void>({
      path: `/api/auth/userinfo`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AdminLoginSessionsList
   * @summary Gets login sessions
   * @request GET:/api/admin/loginSessions
   * @secure
   * @response `200` `AdminLoginSessionDtoQueryResultDto` Login sessions.
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  adminLoginSessionsList = (query: AdminLoginSessionsListParams, params: RequestParams = {}) =>
    this.request<AdminLoginSessionDtoQueryResultDto, void>({
      path: `/api/admin/loginSessions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AdminUsersPasswordUpdate
   * @summary Set User's password and activates account in case it isn't.
   * @request PUT:/api/admin/users/{userId}/password
   * @secure
   * @response `204` `void` Password updated
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `any` User could not be found
   */
  adminUsersPasswordUpdate = (userId: number, data: AdminUsersPasswordUpdatePayload, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/admin/users/${userId}/password`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AdminAuthImpersonateCreate
   * @summary Creates an impersonation login token for the target user.
   * @request POST:/api/admin/auth/impersonate/{userId}
   * @secure
   * @response `200` `LoginTokenDto` Successful impersonation
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `void` User not found
   */
  adminAuthImpersonateCreate = (userId: number, params: RequestParams = {}) =>
    this.request<LoginTokenDto, void>({
      path: `/api/admin/auth/impersonate/${userId}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthAuthorizationGrantAccessTokenCreate
   * @summary Authenticate a Platform entity using OAuth handshake
   * @request POST:/api/auth/authorizationGrant/accessToken
   * @secure
   * @response `200` `EntityAuthResultDto` Authentication processed
   * @response `400` `void` Bad request, invalid model
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   */
  authAuthorizationGrantAccessTokenCreate = (data: EntityAuthParametersDto, params: RequestParams = {}) =>
    this.request<EntityAuthResultDto, void>({
      path: `/api/auth/authorizationGrant/accessToken`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
