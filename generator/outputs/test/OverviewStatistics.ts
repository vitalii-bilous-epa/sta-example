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

import { Count, FloatAverage, IntAverage, LactationGroup, Period } from "./data-contracts";

interface InputAbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet {
  /** Dairy Id */
  dairyId: number;
}

interface SearchParamsAbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period;
  /**
   * Lactation Group
   * 0 for heifers 4 for all cows or only lactation 1 2 3+.
   * @default 4
   */
  lactation_group?: LactationGroup;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number;
}

type AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGetInput = BaseInput & {};
type AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGetOutput = BaseOutput<FloatAverage>;

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 * * @author automated
 * @genereated abortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet * @tags overview-statistics
 * @name AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet
 * @summary Abortion Rate
 * @request GET:/dairies/{dairy_id}/overview-statistics/abortion-rate
 * @response `200` `FloatAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const abortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet = (
  input: InputAbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet,
  searchParams: SearchParamsAbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGetInput,
    AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/overview-statistics/abortion-rate`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputActualVwpDairiesDairyIdOverviewStatisticsActualVwpGet {
  /** Dairy Id */
  dairyId: number;
}

interface SearchParamsActualVwpDairiesDairyIdOverviewStatisticsActualVwpGet {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period;
  /**
   * Lactation Group
   * 0 for heifers 4 for all cows or only lactation 1 2 3+.
   * @default 4
   */
  lactation_group?: LactationGroup;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number;
}

type ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGetInput = BaseInput & {};
type ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGetOutput = BaseOutput<IntAverage>;

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 * * @author automated
 * @genereated actualVwpDairiesDairyIdOverviewStatisticsActualVwpGet * @tags overview-statistics
 * @name ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGet
 * @summary Actual Vwp
 * @request GET:/dairies/{dairy_id}/overview-statistics/actual-vwp
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const actualVwpDairiesDairyIdOverviewStatisticsActualVwpGet = (
  input: InputActualVwpDairiesDairyIdOverviewStatisticsActualVwpGet,
  searchParams: SearchParamsActualVwpDairiesDairyIdOverviewStatisticsActualVwpGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGetInput,
    ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/overview-statistics/actual-vwp`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet {
  /** Dairy Id */
  dairyId: number;
}

interface SearchParamsConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period;
  /**
   * Lactation Group
   * 0 for heifers 4 for all cows or only lactation 1 2 3+.
   * @default 4
   */
  lactation_group?: LactationGroup;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number;
}

type ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGetInput = BaseInput & {};
type ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGetOutput = BaseOutput<IntAverage>;

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 * * @author automated
 * @genereated conceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet * @tags overview-statistics
 * @name ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet
 * @summary Conception Rate
 * @request GET:/dairies/{dairy_id}/overview-statistics/conception-rate
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const conceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet = (
  input: InputConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet,
  searchParams: SearchParamsConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGetInput,
    ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/overview-statistics/conception-rate`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputFirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet {
  /** Dairy Id */
  dairyId: number;
}

interface SearchParamsFirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period;
  /**
   * Lactation Group
   * 0 for heifers 4 for all cows or only lactation 1 2 3+.
   * @default 4
   */
  lactation_group?: LactationGroup;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number;
}

type FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGetInput = BaseInput & {};
type FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGetOutput = BaseOutput<IntAverage>;

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 * * @author automated
 * @genereated firstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet * @tags overview-statistics
 * @name FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet
 * @summary First Breedings
 * @request GET:/dairies/{dairy_id}/overview-statistics/first-breedings
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const firstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet = (
  input: InputFirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet,
  searchParams: SearchParamsFirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGetInput,
    FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/overview-statistics/first-breedings`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputMissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet {
  /** Dairy Id */
  dairyId: number;
}

interface SearchParamsMissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet {
  /**
   * Lactation Group
   * 0 for heifers 4 for all cows or only lactation 1 2 3+.
   * @default 4
   */
  lactation_group?: LactationGroup;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number;
}

type MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGetInput = BaseInput & {};
type MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGetOutput = BaseOutput<Count>;

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 * * @author automated
 * @genereated missedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet * @tags overview-statistics
 * @name MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet
 * @summary Missed Breedings
 * @request GET:/dairies/{dairy_id}/overview-statistics/missed-breedings
 * @response `200` `Count` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const missedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet = (
  input: InputMissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet,
  searchParams: SearchParamsMissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGetInput,
    MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/overview-statistics/missed-breedings`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputPregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet {
  /** Dairy Id */
  dairyId: number;
}

interface SearchParamsPregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period;
  /**
   * Lactation Group
   * 0 for heifers 4 for all cows or only lactation 1 2 3+.
   * @default 4
   */
  lactation_group?: LactationGroup;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number;
}

type PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGetInput = BaseInput & {};
type PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGetOutput = BaseOutput<IntAverage>;

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 * * @author automated
 * @genereated pregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet * @tags overview-statistics
 * @name PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet
 * @summary Pregnancy Risk
 * @request GET:/dairies/{dairy_id}/overview-statistics/pregnancy-risk
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const pregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet = (
  input: InputPregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet,
  searchParams: SearchParamsPregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGetInput,
    PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/overview-statistics/pregnancy-risk`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputServiceRateDairiesDairyIdOverviewStatisticsServiceRateGet {
  /** Dairy Id */
  dairyId: number;
}

interface SearchParamsServiceRateDairiesDairyIdOverviewStatisticsServiceRateGet {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period;
  /**
   * Lactation Group
   * 0 for heifers 4 for all cows or only lactation 1 2 3+.
   * @default 4
   */
  lactation_group?: LactationGroup;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number;
}

type ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGetInput = BaseInput & {};
type ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGetOutput = BaseOutput<IntAverage>;

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 * * @author automated
 * @genereated serviceRateDairiesDairyIdOverviewStatisticsServiceRateGet * @tags overview-statistics
 * @name ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGet
 * @summary Service Rate
 * @request GET:/dairies/{dairy_id}/overview-statistics/service-rate
 * @response `200` `IntAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const serviceRateDairiesDairyIdOverviewStatisticsServiceRateGet = (
  input: InputServiceRateDairiesDairyIdOverviewStatisticsServiceRateGet,
  searchParams: SearchParamsServiceRateDairiesDairyIdOverviewStatisticsServiceRateGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGetInput,
    ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/overview-statistics/service-rate`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};

interface InputServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet {
  /** Dairy Id */
  dairyId: number;
}

interface SearchParamsServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period;
  /**
   * Lactation Group
   * 0 for heifers 4 for all cows or only lactation 1 2 3+.
   * @default 4
   */
  lactation_group?: LactationGroup;
  /**
   * Source Farm
   * Filter analysis to a specified source farm id if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number;
}

type ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGetInput = BaseInput & {};
type ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGetOutput = BaseOutput<FloatAverage>;

/*
 *
 * @description Overview statistics endpoint. `{<key>: null}` is returned when there is not enough data to compute.
 * * @author automated
 * @genereated servicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet * @tags overview-statistics
 * @name ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet
 * @summary Services Per Conception
 * @request GET:/dairies/{dairy_id}/overview-statistics/services-per-conception
 * @response `200` `FloatAverage` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
export const servicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet = (
  input: InputServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet,
  searchParams: SearchParamsServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGet,
) => {
  const { dairyId } = input;
  return new AxiosRestClient<
    ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGetInput,
    ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGetOutput
  >({
    resourcePath: `/dairies/${dairyId}/overview-statistics/services-per-conception`,
  }).execute({
    method: "GET",
    headers: new Headers({
      // TODO: add appropriate headers
    }),
    searchParams,
  });
};
