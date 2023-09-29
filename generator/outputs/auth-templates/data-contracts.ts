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

/**
 * AgeGroup
 * An enumeration.
 */
export enum AgeGroup {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value14 = 14,
  Value50 = 50,
  Value80 = 80,
  Value2000 = 2000,
}

/** Benchmark */
export interface Benchmark {
  /** Incidence */
  incidence: EventIncidence[]
  /** Criteria */
  criteria: BenchmarkCriteria[]
}

/** BenchmarkCriteria */
export interface BenchmarkCriteria {
  /** Criterianame */
  criteriaName: string
  /** Criteriavalue */
  criteriaValue: string
}

/**
 * CalfCode
 * An enumeration.
 */
export enum CalfCode {
  M = 'M',
  F = 'F',
  T = 'T',
  U = 'U',
  A = 'A',
  O = 'O',
}

/** CalfEvent */
export interface CalfEvent {
  /** Dairycowid */
  dairyCowId: number
  /** Cownumber */
  cowNumber: number
  /** Cowname */
  cowName?: string
  /** Visibleid */
  visibleId?: string
  /** Controlnumber */
  controlNumber?: number
  /** Electronicid */
  electronicId?: string
  /** Isoid */
  isoId?: string
  /** Age */
  age: number
  /** Eventcounts */
  eventCounts: EventCount[]
  /** Estimatedcost */
  estimatedCost: number
  /** Healthindex */
  healthIndex: number
  /** Ismale */
  isMale: boolean
  /** Ageinmonth */
  ageInMonth: number
  /** Agemonthgroup */
  ageMonthGroup: string
}

/** CalfEvents */
export interface CalfEvents {
  /** Calfevents */
  calfEvents: CalfEvent[]
  /** Calfoutliers */
  calfOutliers: CalfOutlier[]
  /** Calfcount */
  calfCount: number
}

/** CalfOutlier */
export interface CalfOutlier {
  /** Dairycowid */
  dairyCowId: number
  /** Cownumber */
  cowNumber: number
  /** Cowname */
  cowName?: string
  /** Visibleid */
  visibleId?: string
  /** Controlnumber */
  controlNumber?: number
  /** Electronicid */
  electronicId?: string
  /** Isoid */
  isoId?: string
  /** Estimatedcost */
  estimatedCost: number
  /** Agemonthgroup */
  ageMonthGroup: string
  /** Jitteredageinmonth */
  jitteredAgeInMonth: number
}

/** CalvingMortality */
export interface CalvingMortality {
  /** An enumeration. */
  calfCode: CalfCode
  /** Period */
  period: string
  /** Value */
  value?: number
  /** Calfcount */
  calfCount?: number
  /** Count */
  count?: number
}

/** CalvingsMortality */
export interface CalvingsMortality {
  /** Mortality */
  mortality: CalvingMortality[]
}

/** CowEvent */
export interface CowEvent {
  /** Dairycowid */
  dairyCowId: number
  /** Cownumber */
  cowNumber: number
  /** Cowname */
  cowName?: string
  /** Visibleid */
  visibleId?: string
  /** Controlnumber */
  controlNumber?: number
  /** Electronicid */
  electronicId?: string
  /** Isoid */
  isoId?: string
  /** Age */
  age: number
  /** Eventcounts */
  eventCounts: EventCount[]
  /** Estimatedcost */
  estimatedCost: number
  /** Healthindex */
  healthIndex: number
  /** Currentlactation */
  currentLactation: number
}

/** CowEvents */
export interface CowEvents {
  /** Cowevents */
  cowEvents: CowEvent[]
  /** Cowoutliers */
  cowOutliers: CowOutlier[]
  /** Cowcount */
  cowCount: number
}

/** CowLactationEvent */
export interface CowLactationEvent {
  /** Lactation */
  lactation: number
  /** Totalmilk */
  totalMilk: number
  /** Eventcounts */
  eventCounts: EventCount[]
  /** Estimatedcost */
  estimatedCost: number
}

/** CowLactationEvents */
export interface CowLactationEvents {
  /** Cowlactationevents */
  cowLactationEvents: CowLactationEvent[]
}

/** CowOutlier */
export interface CowOutlier {
  /** Dairycowid */
  dairyCowId: number
  /** Cownumber */
  cowNumber: number
  /** Cowname */
  cowName?: string
  /** Visibleid */
  visibleId?: string
  /** Controlnumber */
  controlNumber?: number
  /** Electronicid */
  electronicId?: string
  /** Isoid */
  isoId?: string
  /** Estimatedcost */
  estimatedCost: number
  /** Currentlactation */
  currentLactation: number
  /** Jitteredlactation */
  jitteredLactation: number
}

/**
 * DimGroup
 * An enumeration.
 */
export enum DimGroup {
  Value0 = 0,
  Value40 = 40,
  Value60 = 60,
  Value150 = 150,
}

/** DisposalCode */
export interface DisposalCode {
  /** Disposalcode */
  disposalCode: number
  /** Description */
  description: string
  /** Period */
  period: string
  /** Percent */
  percent: number
  /** Count */
  count: number
}

/** EventAlert */
export interface EventAlert {
  /** Eventcode */
  eventCode: number
  /** Alertvalue */
  alertValue: number
}

/** EventCount */
export interface EventCount {
  /** Eventcode */
  eventCode: number
  /** Count */
  count: number
}

/** EventIncidence */
export interface EventIncidence {
  /** Eventcode */
  eventCode: number
  /** Period */
  period: string
  /** Value */
  value?: number
  /** Eventcount */
  eventCount?: number
  /** Count */
  count?: number
  /** Trend */
  trend?: number
}

/** EventsIncidence */
export interface EventsIncidence {
  /** Incidence */
  incidence: EventIncidence[]
  /** Alerts */
  alerts?: EventAlert[]
  /** Disposalcodes */
  disposalCodes?: DisposalCode[]
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[]
}

/** HealthAlertKpi */
export interface HealthAlertKpi {
  /** Kpidate */
  kpiDate: string
  /** Kpitype */
  kpiType: string
  /** Kpivalue */
  kpiValue?: number
}

/** HealthKpi */
export interface HealthKpi {
  /** Companyid */
  companyId: number
  /** Dairyid */
  dairyId: number
  /** Kpidate */
  kpiDate: string
  /** Reportdate */
  reportDate: string
  /** Kpitype */
  kpiType: string
  /** Kpivalue */
  kpiValue: number
}

/** HealthKpis */
export interface HealthKpis {
  /** Healthkpis */
  healthKpis: HealthKpi[] | HealthAlertKpi[]
}

/**
 * KpiWindow
 * An enumeration.
 */
export enum KpiWindow {
  Daily = 'Daily',
  Weekly = 'Weekly',
}

/**
 * LactationGroup
 * An enumeration.
 */
export enum LactationGroup {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

/** RawEventCounts */
export interface RawEventCounts {
  /** Eventcounts */
  eventCounts: EventCount[]
}

/**
 * SummaryFrequency
 * An enumeration.
 */
export enum SummaryFrequency {
  M = 'M',
  SM = 'SM',
  W = 'W',
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: string[]
  /** Message */
  msg: string
  /** Error Type */
  type: string
}

/**
 * WeekDay
 * An enumeration.
 */
export enum WeekDay {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export interface EventsIncidenceDairiesDairyIdCowsEventsIncidenceGetParams {
  /**
   * Codes
   * List of EventCodes
   * @default []
   */
  codes?: number[]
  /**
   * Start Date
   * UTC datetime
   * @format date-time
   * @default "2022-09-01T00:00:00"
   */
  start_date?: string
  /**
   * End Date
   * UTC datetime
   * @format date-time
   * @default "2023-09-27T09:09:04"
   */
  end_date?: string
  /** @default 0 */
  lactationGroup?: LactationGroup
  /** @default 60 */
  dimGroup?: DimGroup
  /**
   * By Calving Date
   * Default uses number of calvings in month for trend analysis;         pass falsy value to do the analysis by event date (by # cows at risk in each month)
   * @default true
   */
  by_calving_date?: boolean
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface EventsLifetimeDairiesDairyIdCowsEventsLifetimeGetParams {
  /**
   * Codes
   * List of EventCodes
   * @default []
   */
  codes?: number[]
  /**
   * Health Index Minimum
   * Health index bound to be used to limit the records
   * @min 0
   * @default 0
   */
  health_index_minimum?: number
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface EventsCowDairiesDairyIdCowsDairyCowIdEventsLifetimeGetParams {
  /**
   * Codes
   * List of EventCodes
   * @default []
   */
  codes?: number[]
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
  /**
   * Dairy Cow Id
   * @min 1
   */
  dairyCowId: number
}

export interface CalfEventsLifetimeDairiesDairyIdCalvesEventsLifetimeGetParams {
  /**
   * Codes
   * List of EventCodes
   * @default []
   */
  codes?: number[]
  /**
   * Health Index Minimum
   * Health index bound to be used to limit the records
   * @min 0
   * @default 0
   */
  health_index_minimum?: number
  /**
   * Age Group Interval
   * Interval for grouping calves by month of age
   * @min 0
   * @default 3
   */
  age_group_interval?: number
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface CalfEventsIncidenceDairiesDairyIdCalvesEventsIncidenceGetParams {
  /**
   * Codes
   * List of event codes
   * @default []
   */
  codes?: number[]
  /**
   * Start Date
   * UTC datetime
   * @format date-time
   * @default "2022-09-01T00:00:00"
   */
  start_date?: string
  /**
   * End Date
   * UTC datetime
   * @format date-time
   * @default "2023-09-27T09:09:04"
   */
  end_date?: string
  /**
   * Analysis frequency
   * @default "M"
   */
  summary_frequency?: SummaryFrequency
  /**
   * Predefined age options; 0 includes all the calf ages
   * @default 0
   */
  age_group?: AgeGroup
  /**
   * Age Range
   * List of two containing lower and upper values for age (if present age_group will be ignored)
   * @maxItems 2
   * @minItems 2
   * @default [0,0]
   */
  age_range?: number[]
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface CalfEventsIncidenceCalendarDairiesDairyIdCalvesEventsIncidenceCalendarGetParams {
  /**
   * Codes
   * list of event codes
   * @default []
   */
  codes?: number[]
  /**
   * Start Date
   * UTC datetime
   * @format date-time
   * @default "2022-09-01T00:00:00"
   */
  start_date?: string
  /**
   * End Date
   * UTC datetime
   * @format date-time
   * @default "2023-09-27T09:09:04"
   */
  end_date?: string
  /** @default "M" */
  summary_frequency?: SummaryFrequency
  /**
   * Predefined age options; 0 includes all the calf ages
   * @default 0
   */
  age_group?: AgeGroup
  /**
   * Age Range
   * List of two containing lower and upper values for age (if present age_group will be ignored)
   * @maxItems 2
   * @minItems 2
   * @default [0,0]
   */
  age_range?: number[]
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface CalvingMortalityDairiesDairyIdCowsCalvingMortalityGetParams {
  /**
   * Start Date
   * UTC datetime
   * @format date-time
   * @default "2022-09-01T00:00:00"
   */
  start_date?: string
  /**
   * End Date
   * UTC datetime
   * @format date-time
   * @default "2023-09-27T09:09:04"
   */
  end_date?: string
  /** @default "M" */
  summary_frequency?: SummaryFrequency
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface EventsBenchmarkDairiesDairyIdCowsEventsBenchmarkGetParams {
  /**
   * Codes
   * List of EventCodes
   * @default []
   */
  codes?: number[]
  /**
   * Start Date
   * UTC datetime
   * @format date-time
   * @default "2022-09-01T00:00:00"
   */
  start_date?: string
  /**
   * End Date
   * UTC datetime
   * @format date-time
   * @default "2023-09-27T09:09:04"
   */
  end_date?: string
  /** @default 0 */
  lactationGroup?: LactationGroup
  /** @default 60 */
  dimGroup?: DimGroup
  /**
   * Countries
   * List of two char country codes, default include all countries
   * @default []
   */
  countries?: string[]
  /**
   * States
   * List of two char states/provinces code, default includes all states
   * @default []
   */
  states?: string[]
  /**
   * Breed
   * Two char breed code
   * @maxLength 2
   */
  breed?: string
  /**
   * Herd Size Range
   * List of two containing lower and upper values (positional) for herd size, use 0         to ignore that value (e.x. herds >= 1000 would be [1000,0]
   * @maxItems 2
   * @minItems 2
   * @default [0,0]
   */
  herd_size_range?: number[]
  /**
   * By Calving Date
   * Default uses number of calvings in month for benchmarking;         pass falsy value to do the benchmarking by event date (by # cows at risk in each month)
   * @default true
   */
  by_calving_date?: boolean
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface CalfEventsBenchmarkDairiesDairyIdCalvesEventsBenchmarkGetParams {
  /**
   * Codes
   * List of EventCodes
   * @default []
   */
  codes?: number[]
  /**
   * Start Date
   * UTC datetime
   * @format date-time
   * @default "2022-09-01T00:00:00"
   */
  start_date?: string
  /**
   * End Date
   * UTC datetime
   * @format date-time
   * @default "2023-09-27T09:09:04"
   */
  end_date?: string
  /** @default 0 */
  ageGroup?: AgeGroup
  /**
   * Countries
   * List of two char country codes, default include all countries
   * @default []
   */
  countries?: string[]
  /**
   * States
   * List of two char states/provinces code, default includes all states
   * @default []
   */
  states?: string[]
  /**
   * Breed
   * Two char breed code
   * @maxLength 2
   */
  breed?: string
  /**
   * Herd Size Range
   * List of two containing lower and upper values (positional) for herd size, use 0         to ignore that value (e.x. herds >= 1000 would be [1000,0]
   * @maxItems 2
   * @minItems 2
   * @default [0,0]
   */
  herd_size_range?: number[]
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface EventCountsDairiesDairyIdEventsCountsGetParams {
  /**
   * Start Date
   * UTC datetime
   * @format date-time
   * @default "2022-09-01T00:00:00"
   */
  start_date?: string
  /**
   * End Date
   * UTC datetime
   * @format date-time
   * @default "2023-09-27T09:09:04"
   */
  end_date?: string
  /**
   * Is Cow
   * default return raw event counts for cows, pass falsy value for heifers
   * @default true
   */
  is_cow?: boolean
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface DailyHealthKpisDairiesDairyIdDailyHealthKpisGetParams {
  /**
   * Today Date
   * UTC datetime for the date the daily kpis is being run; goes to yesterday's date for kpi calculation
   * @format date-time
   * @default "2023-09-27T09:09:04.433519"
   */
  today_date?: string
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface HealthEventKpisDairiesDairyIdEventsHealthKpisGetParams {
  /**
   * Codes
   * List of EventCodes; empty list will return all the standard health events for the dairy
   * @default []
   */
  codes?: number[]
  /**
   * Option for Daily vs. Weekly KPI calculation
   * @default "Daily"
   */
  kpiWindow?: KpiWindow
  /**
   * Day of the week for the analysis (this day would be the scheduled day of the week);
   * @default "Monday"
   */
  weekday?: WeekDay
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}
