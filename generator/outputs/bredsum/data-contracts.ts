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

/** AbortionAnalysis */
export interface AbortionAnalysis {
  /** Groupvalue */
  groupValue: string
  /** Groupidentifiers */
  groupIdentifiers: object | null
  fields: AbortionFields
}

/** AbortionCountByDCC */
export interface AbortionCountByDCC {
  /** Dayscarryingcalfrange */
  daysCarryingCalfRange: string
  /** Counts */
  counts: number
}

/** AbortionFields */
export interface AbortionFields {
  /** Abortioncount */
  abortionCount: number
  /** Pregnantcount */
  pregnantCount: number
  /** Abortionpercent */
  abortionPercent: number | null
  confidenceInterval: ConfidenceInterval
}

/** AbortionRiskResponse */
export interface AbortionRiskResponse {
  /** Abortionrisk */
  abortionRisk: AbortionAnalysis[]
  /** Groupname */
  groupName: string
  /** Abortioncountbydcc */
  abortionCountByDCC: AbortionCountByDCC[] | null
}

/** AbortionSummaryGroup */
export enum AbortionSummaryGroup {
  LactationGroup = 'LactationGroup',
  Sire = 'Sire',
  Month = 'Month',
  Technician = 'Technician',
  StudCode = 'StudCode',
}

/** CalculatedVWPResponse */
export interface CalculatedVWPResponse {
  /** Calculatedvoluntarywaitingperiod */
  calculatedVoluntaryWaitingPeriod: GroupedVWP[]
}

/** ConceptionAnalysis */
export interface ConceptionAnalysis {
  /** Groupvalue */
  groupValue: string
  /** Groupidentifiers */
  groupIdentifiers: object | null
  fields: ConceptionFields
}

/** ConceptionFields */
export interface ConceptionFields {
  /** Conceptionpercent */
  conceptionPercent: number | null
  /** Pregnantcount */
  pregnantCount: number
  /** Opencount */
  openCount: number
  /** Unknowncount */
  unknownCount: number
  /** Abortcount */
  abortCount: number
  /** Totalcount */
  totalCount: number
  /** Percenttotal */
  percentTotal: number
  /** Servicesperconception */
  servicesPerConception: number | null
  confidenceInterval: ConfidenceInterval
  /** Standarddeviation */
  standardDeviation: number
}

/** ConceptionRiskResponse */
export interface ConceptionRiskResponse {
  /** Conceptionrisk */
  conceptionRisk: ConceptionAnalysis[]
  /** Groupname */
  groupName: string
  /** Omitted Breeding Counts */
  omitted_breeding_counts: number | null
}

/** ConceptionSire */
export interface ConceptionSire {
  /** Dairysireid */
  dairySireId: number
  /** Sirename */
  sireName: string
  /** Siredefault */
  sireDefault: string
  /** Breed */
  breed: string
  /** Studcode */
  studCode: number
  /** Companyname */
  companyName: string
  /** Sementype */
  semenType: number
}

/** ConceptionSiresResponse */
export interface ConceptionSiresResponse {
  /** Sires */
  sires: ConceptionSire[]
}

/** ConceptionSummaryGroup */
export enum ConceptionSummaryGroup {
  LactationGroup = 'LactationGroup',
  Sire = 'Sire',
  BreedingCode = 'BreedingCode',
  Breed = 'Breed',
  Month = 'Month',
  WeekDay = 'WeekDay',
  BreedingCycle = 'BreedingCycle',
  HeatInterval = 'HeatInterval',
  Technician = 'Technician',
  StudCode = 'StudCode',
  TimesBred = 'TimesBred',
}

/** ConfidenceInterval */
export interface ConfidenceInterval {
  /** Lowerbound */
  lowerBound: number | null
  /** Upperbound */
  upperBound: number | null
}

/** Count */
export interface Count {
  /** Count */
  count: number | null
}

/** CowAverages */
export interface CowAverages {
  /** Overall */
  overall: number
  /** Lactation1 */
  lactation1: number | null
  /** Lactation2 */
  lactation2: number | null
  /** Lactation3 */
  lactation3: number | null
}

/** CowFirstBreeding */
export interface CowFirstBreeding {
  /** Dairycowid */
  dairyCowId: number
  /** Cownumber */
  cowNumber: number
  /** Lactationgroup */
  lactationGroup: number
  /** Breedingdate */
  breedingDate: string
  /** Breedingperiod */
  breedingPeriod: string
  /** Cowname */
  cowName: string | null
  /** Visibleid */
  visibleId: string | null
  /** Controlnumber */
  controlNumber: number | null
  /** Electronicid */
  electronicId: string | null
  /** Isoid */
  isoId: string | null
  /** Daysinmilkatfirstbreeding */
  daysInMilkAtFirstBreeding: number
  /** Freshperiod */
  freshPeriod: string
  /** Freshdate */
  freshDate: string
}

/** CowFirstBreedingResponse */
export interface CowFirstBreedingResponse {
  /** Timeatbreeding */
  timeAtBreeding: CowFirstBreeding[]
  summaryData: CowSummaryData | null
  /** Statedvwp */
  statedVWP: number | null
}

/** CowSummaryData */
export interface CowSummaryData {
  /** Trends */
  trends: CowTrend[]
  overallAverages: CowAverages | null
}

/** CowTrend */
export interface CowTrend {
  /** Period */
  period: string
  /** Groupedperiodname */
  groupedPeriodName: string
  overall: StatGroup
  lactation1: StatGroup | null
  lactation2: StatGroup | null
  lactation3: StatGroup | null
}

/** EligibilityQualifer */
export enum EligibilityQualifer {
  Aidat = 'aidat',
  Default = 'default',
  HerdConfiguration = 'herdConfiguration',
  Provided = 'provided',
}

/** EmbryoSummaryGroup */
export enum EmbryoSummaryGroup {
  Grade = 'Grade',
  Stage = 'Stage',
  BreedingCode = 'BreedingCode',
  Storage = 'Storage',
  FreezeMethod = 'FreezeMethod',
  RecoveryType = 'RecoveryType',
  Sire = 'Sire',
  Breed = 'Breed',
  EmbryoAge = 'EmbryoAge',
}

/** FloatAverage */
export interface FloatAverage {
  /** Average */
  average: number | null
}

/** GroupedVWP */
export interface GroupedVWP {
  /** Lactationgroup */
  lactationGroup: number
  /** Count */
  count: number | null
  /** Calculatedvwp */
  calculatedVwp: number | null
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[]
}

/** HeiferAverages */
export interface HeiferAverages {
  /** Overall */
  overall: number
}

/** HeiferFirstBreeding */
export interface HeiferFirstBreeding {
  /** Dairycowid */
  dairyCowId: number
  /** Cownumber */
  cowNumber: number
  /** Lactationgroup */
  lactationGroup: number
  /** Breedingdate */
  breedingDate: string
  /** Breedingperiod */
  breedingPeriod: string
  /** Cowname */
  cowName: string | null
  /** Visibleid */
  visibleId: string | null
  /** Controlnumber */
  controlNumber: number | null
  /** Electronicid */
  electronicId: string | null
  /** Isoid */
  isoId: string | null
  /** Ageindaysatfirstbreeding */
  ageInDaysAtFirstBreeding: number
  /** Ageinmonthsatfirstbreeding */
  ageInMonthsAtFirstBreeding: number
  /** Birthperiod */
  birthPeriod: string
  /** Birthdate */
  birthDate: string
}

/** HeiferFirstBreedingResponse */
export interface HeiferFirstBreedingResponse {
  /** Timeatbreeding */
  timeAtBreeding: HeiferFirstBreeding[]
  summaryData: HeiferSummaryData | null
  /** Statedvwp */
  statedVWP: number | null
}

/** HeiferSummaryData */
export interface HeiferSummaryData {
  /** Trends */
  trends: Trend[]
  overallAverages: HeiferAverages | null
}

/** IntAverage */
export interface IntAverage {
  /** Average */
  average: number | null
}

/** IntervalAnalysisResponse */
export interface IntervalAnalysisResponse {
  /** Intervalstatistics */
  intervalStatistics: IntervalStatistics[]
}

/** IntervalStatistics */
export interface IntervalStatistics {
  /** Fieldname */
  fieldName: string
  /** Average */
  average: number | null
  /** Count */
  count: number | null
  /** Min */
  min: number | null
  /** Max */
  max: number | null
  /** Standarddeviation */
  standardDeviation: number | null
}

/** LactationGroup */
export enum LactationGroup {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

/** Period */
export enum Period {
  Value90 = 90,
  Value180 = 180,
  Value365 = 365,
}

/** PregnancyAnalysis */
export interface PregnancyAnalysis {
  /** Groupvalue */
  groupValue: string
  fields: PregnancyAnalysisFields
}

/** PregnancyAnalysisFields */
export interface PregnancyAnalysisFields {
  /** Bredeligiblecount */
  bredEligibleCount: number
  /** Bredcount */
  bredCount: number
  /** Bredpercent */
  bredPercent: number | null
  /** Pregnanteligiblecount */
  pregnantEligibleCount: number
  /** Pregnantcount */
  pregnantCount: number
  /** Pregnantpercent */
  pregnantPercent: number | null
  /** Abortcount */
  abortCount: number
  confidenceInterval: ConfidenceInterval
}

/** PregnancyRiskResponse */
export interface PregnancyRiskResponse {
  /** Pregnancyrisk */
  pregnancyRisk: PregnancyAnalysis[]
  eligibilityQualifer: EligibilityQualifer
  /** Usedvoluntarywaitingperiod */
  usedVoluntaryWaitingPeriod: number | null
}

/** StatGroup */
export interface StatGroup {
  /** Min */
  min: number | null
  /** Mean */
  mean: number | null
  /** Max */
  max: number | null
  /** Actualvwp */
  actualVWP: number | null
  /** Totalbred */
  totalBred: number
}

/** Trend */
export interface Trend {
  /** Period */
  period: string
  /** Groupedperiodname */
  groupedPeriodName: string
  overall: StatGroup
}

/** UnbredCow */
export interface UnbredCow {
  /** Dairycowid */
  dairyCowId: number
  /** Cownumber */
  cowNumber: number
  /** Cowname */
  cowName: string | null
  /** Visibleid */
  visibleId: string | null
  /** Controlnumber */
  controlNumber: number | null
  /** Pennumber */
  penNumber: number
  /** Electronicid */
  electronicId: string | null
  /** Isoid */
  isoId: string | null
  /** Daysinmilk */
  daysInMilk: number
  /**
   * Freshdate
   * @format date-time
   */
  freshDate: string
  /** Lactation */
  lactation: number
}

/** UnbredCowsResponse */
export interface UnbredCowsResponse {
  /** Usedthreshold */
  usedThreshold: number
  /** Animals */
  animals: UnbredCow[]
}

/** UnbredHeifer */
export interface UnbredHeifer {
  /** Dairycowid */
  dairyCowId: number
  /** Cownumber */
  cowNumber: number
  /** Cowname */
  cowName: string | null
  /** Visibleid */
  visibleId: string | null
  /** Controlnumber */
  controlNumber: number | null
  /** Pennumber */
  penNumber: number
  /** Electronicid */
  electronicId: string | null
  /** Isoid */
  isoId: string | null
  /** Ageindays */
  ageInDays: number
}

/** UnbredHeifersResponse */
export interface UnbredHeifersResponse {
  /** Usedthreshold */
  usedThreshold: number
  /** Animals */
  animals: UnbredHeifer[]
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[]
  /** Message */
  msg: string
  /** Error Type */
  type: string
}

export interface GetAbortionRiskDairiesDairyIdAbortionAnalysisGetParams {
  /**
   * Lactation Group
   *
   * Select lactation group for analysis.
   *
   * - `0`: heifers
   * - `1`: 1st lactation
   * - `2`: 2nd lactation
   * - `3`: 3rd+ lactations
   * - `4`: (default) all cows
   * @default 4
   */
  lactation_group?: LactationGroup | null
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.829999"
   */
  start_date?: string | null
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.829999"
   */
  end_date?: string | null
  /**
   * Group By
   * The groupby field to be used for the abortion calculations.
   * @default "LactationGroup"
   */
  group_by?: AbortionSummaryGroup | null
  /**
   * Abort Range
   * List of lower and upper bounds to consider for Days carrying calf at abortion (inclusive).
   * @default [42,260]
   */
  abort_range?: any[] | null
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface GetCalculatedVwpDairiesDairyIdCalculatedVwpGetParams {
  /**
   * End Date
   * End date of analysis (start automatically set to 14 months prior).
   * @default "2023-09-26T12:05:03.842761"
   */
  end_date?: string | null
  /**
   * Heifers
   * Request heifers (lactation 0) instead of cows (lactations 1+). Default is `false`.
   * @default false
   */
  heifers?: boolean | null
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface GetConceptionRiskDairiesDairyIdConceptionRiskGetParams {
  /**
   * All Breedings
   *
   * Select analysis target breedings.
   *
   * - `False`: (default) includes just AI breedings
   * - `True`: includes both AI & Bull Breedings
   * @default false
   */
  all_breedings?: boolean | null
  /**
   * Lactation Group
   *
   * Optionally restrict lactation group(s) for analysis.
   *
   * - `0`: for youngstocks
   * - `1-3`: for 1st, 2nd, 3rd+ lactations
   * - `4`: (default) for all cows
   * @default 4
   */
  lactation_group?: LactationGroup | null
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.857027"
   */
  start_date?: string | null
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.857027"
   */
  end_date?: string | null
  /**
   * Group By
   *
   * The groupby field(s) to be used to group the breedings.
   * One or two fields may be selected for grouping.
   *
   * In the case two fields are selected, the returned `groupName` and
   * `groupValue`s will be joined with a `|` character in the order
   * they were provided as query parameters.
   * @default ["LactationGroup"]
   */
  group_by?: ConceptionSummaryGroup[] | null
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null
  /**
   * Sire Id
   * Perform analysis for a specified sire ID, if provided.
   */
  sire_id?: number | null
  /**
   * Stud Code
   * Filter analysis to a specified sire stud code, if provided.
   */
  stud_code?: number | null
  /**
   * Sire Breed
   *
   * Filter analysis to a specified sire breed, if provided.
   * - Beef breeds are in a hard-coded list, used as-is, takes precedent over other lookups
   *
   *   - beef, Ona, AA, AD, AE, AF, AK, AM, AN, AR, AU, AW, BA, BB, BD, BE, BF, BG, BI, BL, BM, BN, BO, BQ, BR, BU, BW, BX, CA, CB, CC, CG, CH, CM, CN, CR, DE, DL, DM, DR, DS, ER, FA, FC, FL, FR, GA, GE, GI, GR, GV, GY, GZ, HB, HC, HH, HP, HY, IB, IK, IS, KB, KY, LM, LO, LR, LU, MA, MB, MC, ME, MG, MH, MI, ML, MO, MR, MU, MZ, NE, NO, NP, NS, OP, PA, PI, PZ, RA, RB, RD, RN, RO, RP, RR, RS, SA, SB, SE, SG, SH, SI, SK, SM, SP, SS, ST, SW, SX, TA, TB, TI, TL, TN, WA, WB, WD, WF, WP, XB, XT, XX
   *
   * - Other breeds follow the standardized breed codes from [StandardCattleBreedCodes](https://github.com/vas-dev/Morpheus/blob/2958813f7133857d6581766440372f7ae61e304e/Vas.Dal/flyway/sql/migrations/R__Reporting_HerdInventoryBreedKpis_StoredProcedure.sql#L65) stored procedure.
   *
   * - Unknown breeds ('' or NULL) may be requested with sire_breed=UN.
   *
   * - There are a number of rarer breeds which appear in the DairySires table but are not covered by
   * any of these (examples: SR, PS, N, S, HT, ET, JT, W, DT, and about a dozen more that are
   * exceptionally rare). These may be added to the beef breeds list in the future to be included,
   * otherwise they will not be able to be used as a sire breed filter.
   */
  sire_breed?: string | null
  /**
   * Semen Type
   *
   * Filter analysis to a specified semen type, if provided.
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
   * Note: Semen types do not currently implement `3`, `4`, or `5` for any dairy in the database.
   * ___
   */
  semen_type?: number | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface GetConceptionSiresDairiesDairyIdConceptionRiskSiresGetParams {
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.857027"
   */
  start_date?: string | null
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.857027"
   */
  end_date?: string | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface GetEmbryoBreedingConceptionRiskDairiesDairyIdEmbryoConceptionRiskGetParams {
  /**
   * Start Date
   * Starting embryo transfer date for analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.871235"
   */
  start_date?: string | null
  /**
   * End Date
   * Ending embryo transfer date for analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.871235"
   */
  end_date?: string | null
  /**
   * Group By
   * The field used to group the embryo breedings for analysis.
   * @default "Grade"
   */
  group_by?: EmbryoSummaryGroup | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface GetBreedingDimDairiesDairyIdFirstBreedingDimGetParams {
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.902240"
   */
  start_date?: string | null
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.902240"
   */
  end_date?: string | null
  /**
   * Fetch Heifers
   *
   * Return data on heifers instead of cows.
   *
   * - `true`: return only heifers with age at first breeding instead of DIM
   * - `false`: return only cows with DIM at first breeding for current lactation
   * @default false
   */
  fetch_heifers?: boolean | null
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface GetIntervalSummaryDairiesDairyIdIntervalAnalysisGetParams {
  /**
   * Lactation Group
   *
   * Select lactation group for analysis.
   *
   * - `0`: youngstocks
   * - `1`: 1st lactation
   * - `2`: 2nd lactation
   * - `3`: 3rd+ lactations
   * - `4`: (default) all cows
   * @default 4
   */
  lactation_group?: LactationGroup | null
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.914621"
   */
  start_date?: string | null
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.914621"
   */
  end_date?: string | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface GetPregnancyRiskDairiesDairyIdPregnancyRiskGetParams {
  /**
   * All Breedings
   *
   * Select analysis target breedings.
   *
   * - `False`: (default) includes just AI breedings
   * - `True`: includes both AI & Bull Breedings
   * @default false
   */
  all_breedings?: boolean | null
  /**
   * Lactation Group
   *
   * Optionally restrict lactation group(s) for analysis.
   *
   * - `0`: for heifers
   * - `1-3`: for 1st, 2nd, 3rd+ lactations
   * - `4`: (default) for all cows
   * @default 4
   */
  lactation_group?: LactationGroup | null
  /**
   * Start Date
   * Start date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.927296"
   */
  start_date?: string | null
  /**
   * End Date
   * End date of analysis in UTC datetime `YYYY-MM-DDT00:00:00`
   * @default "2023-09-26T12:05:03.927296"
   */
  end_date?: string | null
  /**
   * Voluntary Waiting Period
   * Override voluntary waiting period for analysis
   */
  voluntary_waiting_period?: number | null
  /**
   * Breeding Cycle
   * Return pregnancy risk by breeding cycle (DIM) instead of by date (default)
   * @default false
   */
  breeding_cycle?: boolean | null
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface AbortionRateDairiesDairyIdOverviewStatisticsAbortionRateGetParams {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period
  /**
   * Lactation Group
   * 0 for heifers, 4 for all cows, or only lactation 1, 2, 3+.
   * @default 4
   */
  lactation_group?: LactationGroup
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number
  /** Dairy Id */
  dairyId: number
}

export interface ActualVwpDairiesDairyIdOverviewStatisticsActualVwpGetParams {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period
  /**
   * Lactation Group
   * 0 for heifers, 4 for all cows, or only lactation 1, 2, 3+.
   * @default 4
   */
  lactation_group?: LactationGroup
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number
  /** Dairy Id */
  dairyId: number
}

export interface ConceptionRateDairiesDairyIdOverviewStatisticsConceptionRateGetParams {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period
  /**
   * Lactation Group
   * 0 for heifers, 4 for all cows, or only lactation 1, 2, 3+.
   * @default 4
   */
  lactation_group?: LactationGroup
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number
  /** Dairy Id */
  dairyId: number
}

export interface FirstBreedingsDairiesDairyIdOverviewStatisticsFirstBreedingsGetParams {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period
  /**
   * Lactation Group
   * 0 for heifers, 4 for all cows, or only lactation 1, 2, 3+.
   * @default 4
   */
  lactation_group?: LactationGroup
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number
  /** Dairy Id */
  dairyId: number
}

export interface MissedBreedingsDairiesDairyIdOverviewStatisticsMissedBreedingsGetParams {
  /**
   * Lactation Group
   * 0 for heifers, 4 for all cows, or only lactation 1, 2, 3+.
   * @default 4
   */
  lactation_group?: LactationGroup
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number
  /** Dairy Id */
  dairyId: number
}

export interface PregnancyRiskDairiesDairyIdOverviewStatisticsPregnancyRiskGetParams {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period
  /**
   * Lactation Group
   * 0 for heifers, 4 for all cows, or only lactation 1, 2, 3+.
   * @default 4
   */
  lactation_group?: LactationGroup
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number
  /** Dairy Id */
  dairyId: number
}

export interface ServiceRateDairiesDairyIdOverviewStatisticsServiceRateGetParams {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period
  /**
   * Lactation Group
   * 0 for heifers, 4 for all cows, or only lactation 1, 2, 3+.
   * @default 4
   */
  lactation_group?: LactationGroup
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number
  /** Dairy Id */
  dairyId: number
}

export interface ServicesPerConceptionDairiesDairyIdOverviewStatisticsServicesPerConceptionGetParams {
  /**
   * Period
   * Analysis period in days. Ex: 90 returns statistics for past 90 days.
   * @default 90
   */
  period?: Period
  /**
   * Lactation Group
   * 0 for heifers, 4 for all cows, or only lactation 1, 2, 3+.
   * @default 4
   */
  lactation_group?: LactationGroup
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number
  /** Dairy Id */
  dairyId: number
}

export interface GetUnbredCowsDairiesDairyIdUnbredCowsGetParams {
  /**
   * Threshold
   * Minimum days of breeding eligibility to consider (defaults to config VWP).
   */
  threshold?: number | null
  /**
   * Exceeds
   * Return animals which exceed the threshold (true), or animals which do not exceed the threshold (false).
   * @default true
   */
  exceeds?: boolean | null
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}

export interface GetUnbredHeifersDairiesDairyIdUnbredHeifersGetParams {
  /**
   * Threshold
   * Minimum days of breeding eligibility to consider (defaults to config VWP).
   */
  threshold?: number | null
  /**
   * Exceeds
   * Return animals which exceed the threshold (true), or animals which do not exceed the threshold (false).
   * @default true
   */
  exceeds?: boolean | null
  /**
   * Source Farm
   * Filter analysis to a specified source farm id, if provided. Use `source_farm=0` to specify 'no source farm'.
   */
  source_farm?: number | null
  /**
   * Dairy Id
   * @min 1
   */
  dairyId: number
}
