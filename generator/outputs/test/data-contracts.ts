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
  groupValue: string;
  /** Groupidentifiers */
  groupIdentifiers: object | null;
  fields: AbortionFields;
}

/** AbortionCountByDCC */
export interface AbortionCountByDCC {
  /** Dayscarryingcalfrange */
  daysCarryingCalfRange: string;
  /** Counts */
  counts: number;
}

/** AbortionFields */
export interface AbortionFields {
  /** Abortioncount */
  abortionCount: number;
  /** Pregnantcount */
  pregnantCount: number;
  /** Abortionpercent */
  abortionPercent: number | null;
  confidenceInterval: ConfidenceInterval;
}

/** AbortionRiskResponse */
export interface AbortionRiskResponse {
  /** Abortionrisk */
  abortionRisk: AbortionAnalysis[];
  /** Groupname */
  groupName: string;
  /** Abortioncountbydcc */
  abortionCountByDCC: AbortionCountByDCC[] | null;
}

/** AbortionSummaryGroup */
export enum AbortionSummaryGroup {
  LactationGroup = "LactationGroup",
  Sire = "Sire",
  Month = "Month",
  Technician = "Technician",
  StudCode = "StudCode",
}

/** CalculatedVWPResponse */
export interface CalculatedVWPResponse {
  /** Calculatedvoluntarywaitingperiod */
  calculatedVoluntaryWaitingPeriod: GroupedVWP[];
}

/** ConceptionAnalysis */
export interface ConceptionAnalysis {
  /** Groupvalue */
  groupValue: string;
  /** Groupidentifiers */
  groupIdentifiers: object | null;
  fields: ConceptionFields;
}

/** ConceptionFields */
export interface ConceptionFields {
  /** Conceptionpercent */
  conceptionPercent: number | null;
  /** Pregnantcount */
  pregnantCount: number;
  /** Opencount */
  openCount: number;
  /** Unknowncount */
  unknownCount: number;
  /** Abortcount */
  abortCount: number;
  /** Totalcount */
  totalCount: number;
  /** Percenttotal */
  percentTotal: number;
  /** Servicesperconception */
  servicesPerConception: number | null;
  confidenceInterval: ConfidenceInterval;
  /** Standarddeviation */
  standardDeviation: number;
}

/** ConceptionRiskResponse */
export interface ConceptionRiskResponse {
  /** Conceptionrisk */
  conceptionRisk: ConceptionAnalysis[];
  /** Groupname */
  groupName: string;
  /** Omitted Breeding Counts */
  omitted_breeding_counts: number | null;
}

/** ConceptionSire */
export interface ConceptionSire {
  /** Dairysireid */
  dairySireId: number;
  /** Sirename */
  sireName: string;
  /** Siredefault */
  sireDefault: string;
  /** Breed */
  breed: string;
  /** Studcode */
  studCode: number;
  /** Companyname */
  companyName: string;
  /** Sementype */
  semenType: number;
}

/** ConceptionSiresResponse */
export interface ConceptionSiresResponse {
  /** Sires */
  sires: ConceptionSire[];
}

/** ConceptionSummaryGroup */
export enum ConceptionSummaryGroup {
  LactationGroup = "LactationGroup",
  Sire = "Sire",
  BreedingCode = "BreedingCode",
  Breed = "Breed",
  Month = "Month",
  WeekDay = "WeekDay",
  BreedingCycle = "BreedingCycle",
  HeatInterval = "HeatInterval",
  Technician = "Technician",
  StudCode = "StudCode",
  TimesBred = "TimesBred",
}

/** ConfidenceInterval */
export interface ConfidenceInterval {
  /** Lowerbound */
  lowerBound: number | null;
  /** Upperbound */
  upperBound: number | null;
}

/** Count */
export interface Count {
  /** Count */
  count: number | null;
}

/** CowAverages */
export interface CowAverages {
  /** Overall */
  overall: number;
  /** Lactation1 */
  lactation1: number | null;
  /** Lactation2 */
  lactation2: number | null;
  /** Lactation3 */
  lactation3: number | null;
}

/** CowFirstBreeding */
export interface CowFirstBreeding {
  /** Dairycowid */
  dairyCowId: number;
  /** Cownumber */
  cowNumber: number;
  /** Lactationgroup */
  lactationGroup: number;
  /** Breedingdate */
  breedingDate: string;
  /** Breedingperiod */
  breedingPeriod: string;
  /** Cowname */
  cowName: string | null;
  /** Visibleid */
  visibleId: string | null;
  /** Controlnumber */
  controlNumber: number | null;
  /** Electronicid */
  electronicId: string | null;
  /** Isoid */
  isoId: string | null;
  /** Daysinmilkatfirstbreeding */
  daysInMilkAtFirstBreeding: number;
  /** Freshperiod */
  freshPeriod: string;
  /** Freshdate */
  freshDate: string;
}

/** CowFirstBreedingResponse */
export interface CowFirstBreedingResponse {
  /** Timeatbreeding */
  timeAtBreeding: CowFirstBreeding[];
  summaryData: CowSummaryData | null;
  /** Statedvwp */
  statedVWP: number | null;
}

/** CowSummaryData */
export interface CowSummaryData {
  /** Trends */
  trends: CowTrend[];
  overallAverages: CowAverages | null;
}

/** CowTrend */
export interface CowTrend {
  /** Period */
  period: string;
  /** Groupedperiodname */
  groupedPeriodName: string;
  overall: StatGroup;
  lactation1: StatGroup | null;
  lactation2: StatGroup | null;
  lactation3: StatGroup | null;
}

/** EligibilityQualifer */
export enum EligibilityQualifer {
  Aidat = "aidat",
  Default = "default",
  HerdConfiguration = "herdConfiguration",
  Provided = "provided",
}

/** EmbryoSummaryGroup */
export enum EmbryoSummaryGroup {
  Grade = "Grade",
  Stage = "Stage",
  BreedingCode = "BreedingCode",
  Storage = "Storage",
  FreezeMethod = "FreezeMethod",
  RecoveryType = "RecoveryType",
  Sire = "Sire",
  Breed = "Breed",
  EmbryoAge = "EmbryoAge",
}

/** FloatAverage */
export interface FloatAverage {
  /** Average */
  average: number | null;
}

/** GroupedVWP */
export interface GroupedVWP {
  /** Lactationgroup */
  lactationGroup: number;
  /** Count */
  count: number | null;
  /** Calculatedvwp */
  calculatedVwp: number | null;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** HeiferAverages */
export interface HeiferAverages {
  /** Overall */
  overall: number;
}

/** HeiferFirstBreeding */
export interface HeiferFirstBreeding {
  /** Dairycowid */
  dairyCowId: number;
  /** Cownumber */
  cowNumber: number;
  /** Lactationgroup */
  lactationGroup: number;
  /** Breedingdate */
  breedingDate: string;
  /** Breedingperiod */
  breedingPeriod: string;
  /** Cowname */
  cowName: string | null;
  /** Visibleid */
  visibleId: string | null;
  /** Controlnumber */
  controlNumber: number | null;
  /** Electronicid */
  electronicId: string | null;
  /** Isoid */
  isoId: string | null;
  /** Ageindaysatfirstbreeding */
  ageInDaysAtFirstBreeding: number;
  /** Ageinmonthsatfirstbreeding */
  ageInMonthsAtFirstBreeding: number;
  /** Birthperiod */
  birthPeriod: string;
  /** Birthdate */
  birthDate: string;
}

/** HeiferFirstBreedingResponse */
export interface HeiferFirstBreedingResponse {
  /** Timeatbreeding */
  timeAtBreeding: HeiferFirstBreeding[];
  summaryData: HeiferSummaryData | null;
  /** Statedvwp */
  statedVWP: number | null;
}

/** HeiferSummaryData */
export interface HeiferSummaryData {
  /** Trends */
  trends: Trend[];
  overallAverages: HeiferAverages | null;
}

/** IntAverage */
export interface IntAverage {
  /** Average */
  average: number | null;
}

/** IntervalAnalysisResponse */
export interface IntervalAnalysisResponse {
  /** Intervalstatistics */
  intervalStatistics: IntervalStatistics[];
}

/** IntervalStatistics */
export interface IntervalStatistics {
  /** Fieldname */
  fieldName: string;
  /** Average */
  average: number | null;
  /** Count */
  count: number | null;
  /** Min */
  min: number | null;
  /** Max */
  max: number | null;
  /** Standarddeviation */
  standardDeviation: number | null;
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
  groupValue: string;
  fields: PregnancyAnalysisFields;
}

/** PregnancyAnalysisFields */
export interface PregnancyAnalysisFields {
  /** Bredeligiblecount */
  bredEligibleCount: number;
  /** Bredcount */
  bredCount: number;
  /** Bredpercent */
  bredPercent: number | null;
  /** Pregnanteligiblecount */
  pregnantEligibleCount: number;
  /** Pregnantcount */
  pregnantCount: number;
  /** Pregnantpercent */
  pregnantPercent: number | null;
  /** Abortcount */
  abortCount: number;
  confidenceInterval: ConfidenceInterval;
}

/** PregnancyRiskResponse */
export interface PregnancyRiskResponse {
  /** Pregnancyrisk */
  pregnancyRisk: PregnancyAnalysis[];
  eligibilityQualifer: EligibilityQualifer;
  /** Usedvoluntarywaitingperiod */
  usedVoluntaryWaitingPeriod: number | null;
}

/** StatGroup */
export interface StatGroup {
  /** Min */
  min: number | null;
  /** Mean */
  mean: number | null;
  /** Max */
  max: number | null;
  /** Actualvwp */
  actualVWP: number | null;
  /** Totalbred */
  totalBred: number;
}

/** Trend */
export interface Trend {
  /** Period */
  period: string;
  /** Groupedperiodname */
  groupedPeriodName: string;
  overall: StatGroup;
}

/** UnbredCow */
export interface UnbredCow {
  /** Dairycowid */
  dairyCowId: number;
  /** Cownumber */
  cowNumber: number;
  /** Cowname */
  cowName: string | null;
  /** Visibleid */
  visibleId: string | null;
  /** Controlnumber */
  controlNumber: number | null;
  /** Pennumber */
  penNumber: number;
  /** Electronicid */
  electronicId: string | null;
  /** Isoid */
  isoId: string | null;
  /** Daysinmilk */
  daysInMilk: number;
  /**
   * Freshdate
   * @format date-time
   */
  freshDate: string;
  /** Lactation */
  lactation: number;
}

/** UnbredCowsResponse */
export interface UnbredCowsResponse {
  /** Usedthreshold */
  usedThreshold: number;
  /** Animals */
  animals: UnbredCow[];
}

/** UnbredHeifer */
export interface UnbredHeifer {
  /** Dairycowid */
  dairyCowId: number;
  /** Cownumber */
  cowNumber: number;
  /** Cowname */
  cowName: string | null;
  /** Visibleid */
  visibleId: string | null;
  /** Controlnumber */
  controlNumber: number | null;
  /** Pennumber */
  penNumber: number;
  /** Electronicid */
  electronicId: string | null;
  /** Isoid */
  isoId: string | null;
  /** Ageindays */
  ageInDays: number;
}

/** UnbredHeifersResponse */
export interface UnbredHeifersResponse {
  /** Usedthreshold */
  usedThreshold: number;
  /** Animals */
  animals: UnbredHeifer[];
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}
