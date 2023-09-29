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

/** @format int32 */
export enum AccessRequestSort {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

export interface AccessTokenResponseDto {
  access_token?: string | null
  token_type?: string | null
  /** @format int64 */
  expires_in?: number
}

export interface AddressDto {
  address1?: string | null
  address2?: string | null
  /** @minLength 1 */
  city: string
  /** @minLength 1 */
  stateProvince: string
  /** @minLength 1 */
  country: string
  countryCode?: string | null
  /** @minLength 1 */
  postalCode: string
  /** @format double */
  latitude?: number | null
  /** @format double */
  longitude?: number | null
  phoneNumber?: string | null
  /** @format email */
  email?: string | null
  url?: string | null
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
}

export interface AddressLiteCreateDto {
  address1?: string | null
  address2?: string | null
  city?: string | null
  stateProvince?: string | null
  /** @minLength 1 */
  country: string
  postalCode?: string | null
  /** @format double */
  latitude?: number | null
  /** @format double */
  longitude?: number | null
  /** @format email */
  email?: string | null
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
}

export interface AddressSummaryDto {
  city?: string | null
  stateProvince?: string | null
  country?: string | null
  countryCode?: string | null
}

export interface AdminLoginSessionDto {
  /** @format int64 */
  id?: number
  /** @format int64 */
  userId?: number
  clientAddress?: string | null
  /** @format int32 */
  tokenType?: number
  clientType?: ClientType
  clientVersion?: string | null
  /** @format int64 */
  impersonatedBy?: number | null
  /** @format date-time */
  tokenExpire?: string | null
  /** @format date-time */
  sessionCreateDateTime?: string
  /** @format date-time */
  logOutDateTime?: string | null
  user?: UserAccountDto
  impersonator?: UserAccountDto
}

export interface AdminLoginSessionDtoQueryResultDto {
  items?: AdminLoginSessionDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface AdminUserProfileDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
  dateFormat?: string | null
  timeFormat?: string | null
  units: MeasurementSystemType
  decimalFormat?: string | null
  aboutMe?: string | null
  isDiscoverable: boolean
  userType: UserType
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
  /** @format date-time */
  agreementAcceptedAt?: string | null
  hasMobileNumber?: boolean
  isDeleted?: boolean
  isEnabled?: boolean
  emailConfirmed?: boolean
  phoneNumber?: string | null
}

export interface AdminUserProfileDtoQueryResultDto {
  items?: AdminUserProfileDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface AgreementAcceptanceDto {
  endUserSubscriptionAccepted?: boolean
  privacyPolicyAccepted?: boolean
  termsAccepted?: boolean
  isAgreementAccepted?: boolean
}

/** @format int32 */
export enum BillingProductType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface ChangePasswordDto {
  /** @minLength 1 */
  currentPassword: string
  /** @minLength 1 */
  newPassword: string
}

export interface ClientCreationDto {
  name?: string | null
  permissions?: DeveloperApiPermission[] | null
  isClientCredentials?: boolean
  /** @format int64 */
  vendorIntegrationId: number
}

export interface ClientDto {
  clientId?: string | null
  clientSecret?: string | null
  displayName?: string | null
  /** @uniqueItems true */
  permissions?: string[] | null
  properties?: any
}

export interface ClientSecretDto {
  clientSecret?: string | null
}

/** @format int32 */
export enum ClientType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value9 = 9,
  Value10 = 10,
  Value11 = 11,
  Value12 = 12,
  Value13 = 13,
  Value14 = 14,
  Value15 = 15,
  Value16 = 16,
  Value17 = 17,
  Value18 = 18,
}

/** @format int64 */
export enum CompanyAccessLevel {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value256 = 256,
  Value512 = 512,
  Value831 = 831,
}

export interface CompanyAccessRequestDto {
  companyRoles?: CompanyRoleSummaryDto[] | null
  status?: RequestStatus
  user?: UserProfileWithAddressDto
  /** @format int64 */
  userId?: number
  /** @format int64 */
  companyId?: number
  /** @format date-time */
  emailSentAt?: string | null
  /** @format date-time */
  updatedAt?: string | null
}

export interface CompanyAccessRequestDtoQueryResultDto {
  items?: CompanyAccessRequestDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface CompanyInviteUpdateDto {
  /** @format int64 */
  userId: number
  companyRoleIds: number[]
}

export interface CompanyRoleCreateDto {
  companyAccessLevel?: CompanyAccessLevel
  /** @minLength 1 */
  name: string
  description?: string | null
}

export interface CompanyRoleDto {
  /** @format int64 */
  id: number
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
  companyAccessLevel?: CompanyAccessLevel
  /** @minLength 1 */
  name: string
  isEnabled?: boolean
  description?: string | null
}

export interface CompanyRoleDtoCollectionDto {
  items?: CompanyRoleDto[] | null
}

export interface CompanyRoleSummaryDto {
  /** @format int64 */
  id?: number
  name?: string | null
}

/** @format int64 */
export enum DairyAccessLevel {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value256 = 256,
  Value512 = 512,
  Value1024 = 1024,
  Value2048 = 2048,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value32768 = 32768,
  Value65536 = 65536,
  Value131072 = 131072,
  Value262144 = 262144,
  Value524288 = 524288,
  Value1048576 = 1048576,
  Value2097152 = 2097152,
  Value4194304 = 4194304,
  Value8388608 = 8388608,
  Value16777216 = 16777216,
  Value67108864 = 67108864,
  Value134217728 = 134217728,
  Value268435456 = 268435456,
  Value536870912 = 536870912,
  Value1073741824 = 1073741824,
  Value4294967296 = 4294967296,
  Value8589934592 = 8589934592,
  Value68719476736 = 68719476736,
  Value137438953472 = 137438953472,
  Value1099511627776 = 1099511627776,
  Value2199023255552 = 2199023255552,
  Value4398046511104 = 4398046511104,
  Value7917738655743 = 7917738655743,
}

export interface DairyAccessRequestCreateDto {
  dairyRoleIds: number[]
}

export interface DairyAccessRequestDto {
  dairyRoles?: DairyRoleSummaryDto[] | null
  status?: RequestStatus
  dairy?: DairyDto
  user?: UserProfileWithAddressDto
  /** @format date-time */
  updatedAt?: string | null
  /** @format date-time */
  emailSentAt?: string | null
}

export interface DairyAccessRequestDtoQueryResultDto {
  items?: DairyAccessRequestDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface DairyDto {
  /** @format int64 */
  id?: number
  /** @format date-time */
  createdAt?: string
  name?: string | null
  description?: string | null
  type?: DairyType
  /** @format int32 */
  voluntaryWaitPeriod?: number
  timeZone?: string | null
  /** @format int64 */
  companyId?: number
  imageUrl?: string | null
  supportVendorType?: SupportVendorType
  /** @format date-time */
  updatedAt?: string | null
  isDiscoverable?: boolean
  primaryHerdCodes?: string[] | null
  feedingStrategy?: DairyFeedingStrategy
  dairyProductType?: DairyProductType
  billingProductType?: BillingProductType
  /** @format int32 */
  expectedCowCount?: number | null
  address?: AddressDto
  isDeleted?: boolean
}

/** @format int32 */
export enum DairyFeedingStrategy {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface DairyInviteDto {
  /**
   * @format email
   * @minLength 1
   */
  userEmail: string
  dairyRoleIds: number[]
}

export interface DairyInviteUpdateDto {
  /** @format int64 */
  userId: number
  dairyRoleIds: number[]
}

/** @format int32 */
export enum DairyPermissionCategory {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export interface DairyPermissionDto {
  accessLevel?: DairyAccessLevel
  category?: DairyPermissionCategory
  name?: string | null
  description?: string | null
  roles?: DairyRoleSummaryDto[] | null
}

export interface DairyPermissionDtoCollectionDto {
  items?: DairyPermissionDto[] | null
}

/** @format int32 */
export enum DairyProductType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value1073741824 = 1073741824,
}

export interface DairyRoleCreateDto {
  dairyAccessLevel?: DairyAccessLevel
  /** @minLength 1 */
  name: string
  description?: string | null
  dairyRoleZones: DairyRoleZoneDto[]
}

export interface DairyRoleDto {
  /** @format int64 */
  id: number
  /** @format int64 */
  dairyId?: number
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
  dairyAccessLevel?: DairyAccessLevel
  /** @minLength 1 */
  name: string
  description?: string | null
  isEnabled?: boolean
  dairyRoleZones: DairyRoleZoneDto[]
  /** @format int32 */
  userCount?: number | null
}

export interface DairyRoleDtoCollectionDto {
  items?: DairyRoleDto[] | null
}

export interface DairyRoleSummaryDto {
  /** @format int64 */
  id?: number
  name?: string | null
}

export interface DairyRoleUpdateDto {
  dairyAccessLevel?: DairyAccessLevel
  /** @minLength 1 */
  name: string
  description?: string | null
  dairyRoleZones: DairyRoleZoneDto[]
  isEnabled?: boolean
}

export interface DairyRoleZoneDto {
  /** @format int64 */
  zoneId?: number
}

/** @format int32 */
export enum DairyType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

/** @format int32 */
export enum DairyUserSort {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface DairyUsersDto {
  /** @format int64 */
  dairyId?: number
  dairyName?: string | null
  users?: UserCommunicationDetailsDto[] | null
}

/** @format int32 */
export enum DeveloperApiPermission {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface EntityAuthParametersDto {
  /** @minLength 1 */
  authorizationCode: string
  /** @minLength 1 */
  instanceAlias: string
  instanceId?: string | null
  /** @format int64 */
  baseEntityId: number
  baseEntityType: EntityType
  /** @format int64 */
  dependantEntityId?: number
  dependantEntityType?: EntityType
  state?: string | null
}

/** @format int32 */
export enum EntityAuthResult {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface EntityAuthResultDto {
  authResult?: EntityAuthResult
}

/** @format int32 */
export enum EntityType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export interface ErrorMessageDto {
  /** @format int32 */
  errorCode?: number
  errorDescription?: string | null
}

export interface FeatureDairyDto {
  /** @format int64 */
  id?: number
  /** @format int64 */
  featureId?: number
  name?: string | null
  herdCodes?: string[] | null
  isReloading?: boolean
  productType?: DairyProductType
  isActive?: boolean
  /** @format date-time */
  activeSince?: string | null
  isAssigned?: boolean
  consultantNames?: string[] | null
  consultants?: UserFeatureEntityDto[] | null
}

export interface FeatureDairyDtoQueryResultDto {
  items?: FeatureDairyDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

/** @format int32 */
export enum FeatureDairySort {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export interface FeatureDto {
  /** @format int64 */
  id?: number
  name?: string | null
  key?: string | null
  outgoingIntegrationType?: OutgoingIntegrationType
}

export interface FeatureEmailStatusDto {
  canBeInvited?: boolean
  user?: MinimalUserIdentityDto
}

export interface FeatureInviteDto {
  /**
   * @format email
   * @minLength 1
   */
  userEmail: string
  /** @format int64 */
  managerId?: number | null
  featureRoleIds: number[]
}

export interface FeatureMinimalUserIdentityDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
  isActive?: boolean
  reportsTo?: MinimalUserIdentityDto
  roleIds?: number[] | null
  userFeatureEntities?: UserFeatureEntityDto[] | null
}

export interface FeatureMinimalUserIdentityDtoQueryResultDto {
  items?: FeatureMinimalUserIdentityDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface FeatureRoleDto {
  /** @format int64 */
  id?: number
  /** @format int64 */
  featureId?: number
  name?: string | null
  key?: string | null
  /** @format int64 */
  parentFeatureRoleId?: number | null
  mustHaveUsers?: boolean
}

/** @format int32 */
export enum FeatureUserSort {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface FinishSignUpDto {
  password?: string | null
  /** @minLength 1 */
  firstName: string
  /** @minLength 1 */
  lastName: string
  language?: string | null
  agreementAcceptance?: AgreementAcceptanceDto
  address?: AddressDto
}

export interface FinishSignUpLiteDto {
  /** @minLength 1 */
  password: string
  firstName?: string | null
  lastName?: string | null
  language?: string | null
  agreementAcceptance?: AgreementAcceptanceDto
  address?: AddressLiteCreateDto
}

export interface ForgotPasswordRequestDto {
  /**
   * @format email
   * @minLength 1
   */
  email: string
}

export interface GoogleSignUpDto {
  /** @minLength 1 */
  country: string
  language?: string | null
  agreementAcceptance: AgreementAcceptanceDto
  campaignCode?: string | null
}

export interface IntrospectionDto {
  /** @minLength 1 */
  token: string
}

export interface LoginCredentialsDto {
  /** @minLength 1 */
  username: string
  /** @minLength 1 */
  password: string
}

export interface LoginSessionDto {
  /** @format int64 */
  id?: number
  clientAddress?: string | null
  /** @format date-time */
  tokenExpire?: string | null
  /** @format date-time */
  sessionCreateDateTime?: string
  /** @format date-time */
  logOutDateTime?: string | null
}

export interface LoginSessionDtoQueryResultDto {
  items?: LoginSessionDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface LoginTokenDto {
  token?: string | null
  /** @format int32 */
  attempts?: number
  signInResults?: string | null
}

export interface LookupTypeDto {
  /** @format int64 */
  id?: number
  description?: string | null
}

export interface LookupTypeDtoCollectionDto {
  items?: LookupTypeDto[] | null
}

/** @format int32 */
export enum MeasurementSystemType {
  Value0 = 0,
  Value1 = 1,
}

export interface MessageDto {
  message?: string | null
}

export interface MinimalUserIdentityDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
}

export interface MinimalUserIdentityDtoQueryResultDto {
  items?: MinimalUserIdentityDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface MinimalZoneIntegrationDto {
  /** @format int64 */
  id?: number
  /** @format date-time */
  createdAt?: string
  /** @format int64 */
  zoneId?: number
  /** @format int64 */
  replacedBy?: number | null
  /** @format int64 */
  createdBy?: number | null
  integrationType?: ZoneIntegrationType
  dairyAccessLevel?: DairyAccessLevel
  /** @format int64 */
  dairyId?: number
  dairyName?: string | null
  zoneName?: string | null
  herdCode?: string | null
}

export interface NewPasswordDto {
  /** @minLength 1 */
  password: string
}

export interface OpenIddictResponse {
  /** @format int32 */
  count?: number
  accessToken?: string | null
  code?: string | null
  deviceCode?: string | null
  error?: string | null
  errorDescription?: string | null
  errorUri?: string | null
  /** @format int64 */
  expiresIn?: number | null
  idToken?: string | null
  iss?: string | null
  refreshToken?: string | null
  scope?: string | null
  state?: string | null
  tokenType?: string | null
  userCode?: string | null
  verificationUri?: string | null
  verificationUriComplete?: string | null
}

/** @format int32 */
export enum OutgoingIntegrationType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export interface RegisterUserDto {
  /**
   * @format email
   * @minLength 1
   */
  email: string
  language?: string | null
  campaignCode?: string | null
}

/** @format int32 */
export enum RequestStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value99 = 99,
  Value100 = 100,
}

/** @format int32 */
export enum SortingOrder {
  Value0 = 0,
  Value1 = 1,
}

/** @format int32 */
export enum SupportVendorType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

/** @format int64 */
export enum SystemAccessLevel {
  Value0 = 0,
  Value1 = 1,
  Value256 = 256,
  Value512 = 512,
  Value1024 = 1024,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value32768 = 32768,
  Value65536 = 65536,
  Value131072 = 131072,
  Value262144 = 262144,
  Value513793 = 513793,
}

export interface TokenDto {
  token?: string | null
}

export interface UploadDto {
  resourceUrl?: string | null
}

export interface UserAccountDto {
  username?: string | null
  email?: string | null
  phoneNumber?: string | null
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
}

export interface UserAccountUpdateDto {
  phoneNumber?: string | null
}

export interface UserCommunicationDetailsDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
  phoneNumber?: string | null
}

export interface UserCompanyRoleDto {
  /** @format int64 */
  userId?: number
  /** @format int64 */
  companyRoleId?: number
}

export interface UserCompanyRoleDtoCollectionDto {
  items?: UserCompanyRoleDto[] | null
}

export interface UserCompanyRoleSummaryDto {
  companyRole?: CompanyRoleSummaryDto
}

export interface UserCompanyRolesDto {
  /**
   * @format email
   * @minLength 1
   */
  userEmail: string
  companyRoleIds: number[]
}

export interface UserDairyRoleDto {
  /** @format int64 */
  userId?: number
  /** @format int64 */
  dairyRoleId?: number
  /** @format date-time */
  createdAt?: string
}

export interface UserDairyRoleDtoCollectionDto {
  items?: UserDairyRoleDto[] | null
}

export interface UserDairyRoleSummaryDto {
  dairyRole?: DairyRoleSummaryDto
}

export interface UserDairyRolesDto {
  /**
   * @format email
   * @minLength 1
   */
  userEmail: string
  dairyRoleIds: number[]
}

export interface UserFeatureEntityDto {
  /** @format int64 */
  userId?: number
  entityType?: EntityType
  /** @format int64 */
  entityId?: number
}

export interface UserFeatureRolesUpdateDto {
  /** @format int64 */
  userId: number
  /** @format int64 */
  managerId?: number | null
  featureRoleIds: number[]
}

export interface UserProfileDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
  dateFormat?: string | null
  timeFormat?: string | null
  units: MeasurementSystemType
  decimalFormat?: string | null
  aboutMe?: string | null
  isDiscoverable: boolean
  userType: UserType
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
  /** @format date-time */
  agreementAcceptedAt?: string | null
  hasMobileNumber?: boolean
}

export interface UserProfileDtoQueryResultDto {
  items?: UserProfileDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface UserProfileUpdateDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
  dateFormat?: string | null
  timeFormat?: string | null
  units: MeasurementSystemType
  decimalFormat?: string | null
  aboutMe?: string | null
  isDiscoverable: boolean
  userType: UserType
}

export interface UserProfileWithAddressDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
  dateFormat?: string | null
  timeFormat?: string | null
  units: MeasurementSystemType
  decimalFormat?: string | null
  aboutMe?: string | null
  isDiscoverable: boolean
  userType: UserType
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
  /** @format date-time */
  agreementAcceptedAt?: string | null
  hasMobileNumber?: boolean
  address?: AddressSummaryDto
}

export interface UserProfileWithCompanyRolesDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
  dateFormat?: string | null
  timeFormat?: string | null
  units: MeasurementSystemType
  decimalFormat?: string | null
  aboutMe?: string | null
  isDiscoverable: boolean
  userType: UserType
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
  /** @format date-time */
  agreementAcceptedAt?: string | null
  hasMobileNumber?: boolean
  address?: AddressSummaryDto
  userCompanyRoles?: UserCompanyRoleSummaryDto[] | null
}

export interface UserProfileWithCompanyRolesDtoQueryResultDto {
  items?: UserProfileWithCompanyRolesDto[] | null
  /** @format int32 */
  pageSize?: number
  /** @format int32 */
  currentPage?: number
  /** @format int32 */
  totalPages?: number
  /** @format int32 */
  totalItems?: number
}

export interface UserProfileWithDairyRolesDto {
  /** @format int64 */
  id?: number
  firstName?: string | null
  lastName?: string | null
  nickname?: string | null
  displayName?: string | null
  avatarUrl?: string | null
  email?: string | null
  language?: string | null
  campaignCode?: string | null
  dateFormat?: string | null
  timeFormat?: string | null
  units: MeasurementSystemType
  decimalFormat?: string | null
  aboutMe?: string | null
  isDiscoverable: boolean
  userType: UserType
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string | null
  /** @format date-time */
  agreementAcceptedAt?: string | null
  hasMobileNumber?: boolean
  userDairyRoles?: UserDairyRoleSummaryDto[] | null
}

/** @format int32 */
export enum UserType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value100 = 100,
  Value101 = 101,
  Value102 = 102,
  Value103 = 103,
  Value104 = 104,
}

export interface ZoneIntegrationAccessRequirementDto {
  zoneIntegrationType?: ZoneIntegrationType
  requireJobsEnabled?: boolean
  checkMinimumVersion?: boolean
}

/** @format int32 */
export enum ZoneIntegrationType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value5 = 5,
  Value100 = 100,
  Value110 = 110,
  Value120 = 120,
  Value130 = 130,
  Value140 = 140,
}

export type AuthLoginAdminCreatePayload = string

export type AuthDairyAccessLevelsCreatePayload = number[]

export interface AdminLoginSessionsListParams {
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
}

export type AdminUsersPasswordUpdatePayload = string

export interface MyAvatarCreatePayload {
  /** @format binary */
  Image: File
}

export interface CompaniesInvitesDetailParams {
  /** Email address of the user to potentially invite */
  email?: string
  /**
   * Company identifier for where the invitation will be
   * @format int64
   */
  companyId: number
}

export interface CompaniesRequestsDetailParams {
  StatusFilter?: RequestStatus[]
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  Field?: AccessRequestSort
  Order?: SortingOrder
  /**
   * Company identifier.
   * @format int64
   */
  companyId: number
}

export interface GetCompanyRolesParams {
  /**
   * Optional - Include or exclude roles that are not Enabled
   * @default true
   */
  includeDisabled?: boolean
  /**
   * Company identifier
   * @format int64
   */
  companyId: number
}

export interface CompaniesUsersDetailParams {
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  /**
   * Company identifier.
   * @format int64
   */
  companyId: number
}

export interface DairiesRequestsDetailParams {
  StatusFilter?: RequestStatus[]
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  Field?: AccessRequestSort
  Order?: SortingOrder
  /**
   * Dairy identifier.
   * @format int64
   */
  dairyId: number
}

export interface GetMyDairyAccessRequestsAsyncParams {
  StatusFilter?: RequestStatus[]
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
}

export interface GetDairyAccessRequestsForUserAsyncParams {
  StatusFilter?: RequestStatus[]
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  /**
   * User identifier
   * @format int64
   */
  userId: number
}

export interface UserSearchForInviteFlowAsyncParams {
  /** Email address of the user to potentially invite */
  email?: string
  /**
   * Dairy identifier for where the invitation will be
   * @format int64
   */
  dairyId: number
}

export interface GetDairyRolesParams {
  /**
   * Whether or not to include user count for each role
   * @default false
   */
  includeUserCount?: boolean
  /**
   * Dairy to retrieve roles from
   * @format int64
   */
  dairyId: number
}

export interface FeaturesDairiesDetailParams {
  IsAssigned?: boolean
  ConsultantName?: string
  ProductType?: DairyProductType
  IsReloading?: boolean
  SortField?: FeatureDairySort
  SortOrder?: SortingOrder
  IncludeInactive?: boolean
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  /** Feature identifier */
  featureKey: string
}

export type FeaturesDairiesDeletePayload = number[]

export type FeaturesUsersDairiesCreatePayload = number[]

export type FeaturesDairiesUsersCreatePayload = number[]

export interface FeaturesAssignDetailParams {
  /** Prospect user email */
  email?: string
  /** Feature identifier */
  featureKey: string
}

export interface AgreementsUserAgreementHtmlListParams {
  clientType?: ClientType
}

export interface AgreementsDraHtmlListParams {
  clientType?: ClientType
}

export interface AgreementsPrivacyPolicyHtmlListParams {
  clientType?: ClientType
}

export interface AgreementsTermsAndConditionsHtmlListParams {
  clientType?: ClientType
}

export interface AgreementsEulaHtmlListParams {
  clientType?: ClientType
}

export interface AdminUsersListParams {
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  /** Whether to include deleted users or not */
  includeDeleted?: boolean
}

export interface UsersFindListParams {
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
}

export interface MyLoginHistoryListParams {
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
}

export type CompaniesUsersUpdatePayload = number[]

export interface GetDairyUsersParams {
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  Field?: DairyUserSort
  Order?: SortingOrder
  /**
   * Exclude the current user from the results. Default: false.
   * @default false
   */
  excludeSelf?: boolean
  /**
   * Include user roles in the result. Default: false. Required dairy user management permissions.
   * @default false
   */
  includeRoles?: boolean
  /**
   * Include only this role in the result.
   * @format int64
   */
  dairyRoleIdFilter?: number
  /**
   * Dairy identification number
   * @format int64
   */
  dairyId: number
}

export type DairiesUsersCreatePayload = number[]

export interface MyFeaturesListParams {
  Type?: OutgoingIntegrationType
}

export interface FeaturesRolesUsersDetailParams {
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  /** Feature identifier */
  featureKey: string
  /**
   * Feature role identifier
   * @format int64
   */
  featureRoleId: number
}

export interface GetFeatureUsersAsyncParams {
  IncludeActive?: boolean
  IncludePending?: boolean
  RoleIds?: number[]
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  Field?: FeatureUserSort
  Order?: SortingOrder
  /** Feature identification number */
  featureKey: string
}

export interface AdminUserFeaturesUsersDetailParams {
  IncludeActive?: boolean
  IncludePending?: boolean
  RoleIds?: number[]
  Find?: string
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  Page?: number
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  PageSize?: number
  Field?: FeatureUserSort
  Order?: SortingOrder
  /** @format int64 */
  featureId: number
}
