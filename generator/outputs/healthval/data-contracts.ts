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

export interface CompanyRoleCreateDto {
  companyAccessLevel?: CompanyAccessLevel
  /** @minLength 1 */
  name: string
  description?: string | null
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
