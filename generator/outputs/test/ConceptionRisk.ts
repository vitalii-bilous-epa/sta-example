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
  ConceptionRiskResponse,
  ConceptionSiresResponse,
  ConceptionSummaryGroup,
  LactationGroup,
} from "./data-contracts";

interface InputGetConceptionRiskDairiesDairyIdConceptionRiskGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetConceptionRiskDairiesDairyIdConceptionRiskGet {
  /**
   * All Breedings
   *
   * Select analysis target breedings.
   *
   * - `False`: (default) includes just AI breedings
   * - `True`: includes both AI & Bull Breedings
   * @default false
   */
  all_breedings?: boolean | null;
  /**
   * Lactation Group
   *
   * Optionally restrict lactation group(s) for analysis.
   *
   * - `0`: for youngstocks
   * - `1-3`: for 1st 2nd 3rd+ lactations
   * - `4`: (default) for all cows
   * @default 4
   */
  lactation_group?: LactationGroup | null;
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.207127"
   */
  start_date?: string | null;
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.207127"
   */
  end_date?: string | null;
  /**
   * Group By
   *
   * The groupby field(s) to be used to group the breedings.
   * One or two fields may be selected for grouping.
   *
   * In the case two fields are selected the returned `groupName` and
   * `groupValue`s will be joined with a `|` character in the order
   * they were provided as query parameters.
   * @default ["LactationGroup"]
   */
  group_by?: ConceptionSummaryGroup[] | null;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null;
  /**
   * Sire Id
   * Perform analysis for a specified sire ID if provided.
   */
  sire_id?: number | null;
  /**
   * Stud Code
   * Filter analysis to a specified sire stud code if provided.
   */
  stud_code?: number | null;
  /**
   * Sire Breed
   *
   * Filter analysis to a specified sire breed if provided.
   * - Beef breeds are in a hard-coded list used as-is takes precedent over other lookups
   *
   *   - beef Ona AA AD AE AF AK AM AN AR AU AW BA BB BD BE BF BG BI BL BM BN BO BQ BR BU BW BX CA CB CC CG CH CM CN CR DE DL DM DR DS ER FA FC FL FR GA GE GI GR GV GY GZ HB HC HH HP HY IB IK IS KB KY LM LO LR LU MA MB MC ME MG MH MI ML MO MR MU MZ NE NO NP NS OP PA PI PZ RA RB RD RN RO RP RR RS SA SB SE SG SH SI SK SM SP SS ST SW SX TA TB TI TL TN WA WB WD WF WP XB XT XX
   *
   * - Other breeds follow the standardized breed codes from [StandardCattleBreedCodes](https://github.com/vas-dev/Morpheus/blob/2958813f7133857d6581766440372f7ae61e304e/Vas.Dal/flyway/sql/migrations/R__Reporting_HerdInventoryBreedKpis_StoredProcedure.sql#L65) stored procedure.
   *
   * - Unknown breeds ('' or NULL) may be requested with sire_breed=UN.
   *
   * - There are a number of rarer breeds which appear in the DairySires table but are not covered by
   * any of these (examples: SR PS N S HT ET JT W DT and about a dozen more that are
   * exceptionally rare). These may be added to the beef breeds list in the future to be included
   * otherwise they will not be able to be used as a sire breed filter.
   */
  sire_breed?: string | null;
  /**
   * Semen Type
   *
   * Filter analysis to a specified semen type if provided.
   * ___
   * Enum values:
   * ```
   * Unsexed = 0
   * SexedFemale = 1
   * SexedMale = 2
   * Beef = 3
   * BeefSexedFemale = 4
   * BeefSexedMale = 5
   * ```
   * Note: Semen types do not currently implement `3` `4` or `5` for any dairy in the database.
   * ___
   */
  semen_type?: number | null;
}

type GetConceptionRiskDairiesDairyIdConceptionRiskGetInput = BaseInput & {};
type GetConceptionRiskDairiesDairyIdConceptionRiskGetOutput = BaseOutput<ConceptionRiskResponse>;

/*
 *
 * @description If neither `start_date` nor `end_date` are provided, the default date range will be selected as `today-400D` to `today-35D`. If only `end_date` is provided, `start_date` is set to `today-400d`. In cases where the date range needs to be defined, both `start_date` and `end_date` need to be set.
 * * @author automated
 * @genereated getConceptionRiskDairiesDairyIdConceptionRiskGet * @tags conception-risk
 * @name GetConceptionRiskDairiesDairyIdConceptionRiskGet
 * @summary Conception risk analysis by selected group and options
 * @request GET:/dairies/{dairy_id}/conception-risk
 * @response `200` `ConceptionRiskResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getConceptionRiskDairiesDairyIdConceptionRiskGet = (
  input: InputGetConceptionRiskDairiesDairyIdConceptionRiskGet,
  searchParams: SearchParamsGetConceptionRiskDairiesDairyIdConceptionRiskGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetConceptionRiskDairiesDairyIdConceptionRiskGetInput,
    GetConceptionRiskDairiesDairyIdConceptionRiskGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/conception-risk`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputGetConceptionSiresDairiesDairyIdConceptionRiskSiresGet {
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number;
}

interface SearchParamsGetConceptionSiresDairiesDairyIdConceptionRiskSiresGet {
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.207127"
   */
  start_date?: string | null;
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:46:08.207127"
   */
  end_date?: string | null;
}

type GetConceptionSiresDairiesDairyIdConceptionRiskSiresGetInput = BaseInput & {};
type GetConceptionSiresDairiesDairyIdConceptionRiskSiresGetOutput = BaseOutput<ConceptionSiresResponse>;

/*
 *
 * @description Sires used for conception in the given date range.
 * * @author automated
 * @genereated getConceptionSiresDairiesDairyIdConceptionRiskSiresGet * @tags conception-risk
 * @name GetConceptionSiresDairiesDairyIdConceptionRiskSiresGet
 * @summary Conception sires
 * @request GET:/dairies/{dairy_id}/conception-risk/sires
 * @response `200` `ConceptionSiresResponse` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const getConceptionSiresDairiesDairyIdConceptionRiskSiresGet = (
  input: InputGetConceptionSiresDairiesDairyIdConceptionRiskSiresGet,
  searchParams: SearchParamsGetConceptionSiresDairiesDairyIdConceptionRiskSiresGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    GetConceptionSiresDairiesDairyIdConceptionRiskSiresGetInput,
    GetConceptionSiresDairiesDairyIdConceptionRiskSiresGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/conception-risk/sires`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
