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
  CalfEventsBenchmarkDairiesDairyIdCalvesEventsBenchmarkGetParams,
  CalfEventsIncidenceCalendarDairiesDairyIdCalvesEventsIncidenceCalendarGetParams,
  CalfEventsIncidenceDairiesDairyIdCalvesEventsIncidenceGetParams,
  CalfEventsLifetimeDairiesDairyIdCalvesEventsLifetimeGetParams,
  CalvingMortalityDairiesDairyIdCowsCalvingMortalityGetParams,
  DailyHealthKpisDairiesDairyIdDailyHealthKpisGetParams,
  EventCountsDairiesDairyIdEventsCountsGetParams,
  EventsBenchmarkDairiesDairyIdCowsEventsBenchmarkGetParams,
  EventsCowDairiesDairyIdCowsDairyCowIdEventsLifetimeGetParams,
  EventsIncidenceDairiesDairyIdCowsEventsIncidenceGetParams,
  EventsLifetimeDairiesDairyIdCowsEventsLifetimeGetParams,
  HealthEventKpisDairiesDairyIdEventsHealthKpisGetParams,
} from './data-contracts'
import { RequestParams } from './http-client'

/*
 *
 * No description
 *true
 * @author automated
 * @genereated eventsIncidenceDairiesDairyIdCowsEventsIncidenceGet * @tags Events
 * @name EventsIncidenceDairiesDairyIdCowsEventsIncidenceGet
 * @summary Incidence of requested events
 * @request GET:/dairies/{dairy_id}/cows/events/incidence
 * @response `200` `EventsIncidence` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
eventsIncidenceDairiesDairyIdCowsEventsIncidenceGet = ({ dairyId, ...query }: EventsIncidenceDairiesDairyIdCowsEventsIncidenceGetParams, params: RequestParams = {}) =>
    this.request<EventsIncidence, HTTPValidationError>({
        path: `/dairies/${dairyId}/cows/events/incidence`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const eventsIncidenceDairiesDairyIdCowsEventsIncidenceGet = (
  { dairyId, ...query }: EventsIncidenceDairiesDairyIdCowsEventsIncidenceGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, EventsIncidence>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/cows/events/incidence`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated eventsLifetimeDairiesDairyIdCowsEventsLifetimeGet * @tags Events
 * @name EventsLifetimeDairiesDairyIdCowsEventsLifetimeGet
 * @summary Current cows lifetime events evaluation
 * @request GET:/dairies/{dairy_id}/cows/events/lifetime
 * @response `200` `CowEvents` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
eventsLifetimeDairiesDairyIdCowsEventsLifetimeGet = ({ dairyId, ...query }: EventsLifetimeDairiesDairyIdCowsEventsLifetimeGetParams, params: RequestParams = {}) =>
    this.request<CowEvents, HTTPValidationError>({
        path: `/dairies/${dairyId}/cows/events/lifetime`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const eventsLifetimeDairiesDairyIdCowsEventsLifetimeGet = (
  { dairyId, ...query }: EventsLifetimeDairiesDairyIdCowsEventsLifetimeGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, CowEvents>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/cows/events/lifetime`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated eventsCowDairiesDairyIdCowsDairyCowIdEventsLifetimeGet * @tags Events
 * @name EventsCowDairiesDairyIdCowsDairyCowIdEventsLifetimeGet
 * @summary Given cow all events accross lactations
 * @request GET:/dairies/{dairy_id}/cows/{dairy_cow_id}/events/lifetime
 * @response `200` `CowLactationEvents` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
eventsCowDairiesDairyIdCowsDairyCowIdEventsLifetimeGet = ({ dairyId, dairyCowId, ...query }: EventsCowDairiesDairyIdCowsDairyCowIdEventsLifetimeGetParams, params: RequestParams = {}) =>
    this.request<CowLactationEvents, HTTPValidationError>({
        path: `/dairies/${dairyId}/cows/${dairyCowId}/events/lifetime`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const eventsCowDairiesDairyIdCowsDairyCowIdEventsLifetimeGet = (
  { dairyId, dairyCowId, ...query }: EventsCowDairiesDairyIdCowsDairyCowIdEventsLifetimeGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, CowLactationEvents>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/cows/${dairyCowId}/events/lifetime`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated calfEventsLifetimeDairiesDairyIdCalvesEventsLifetimeGet * @tags Events
 * @name CalfEventsLifetimeDairiesDairyIdCalvesEventsLifetimeGet
 * @summary Current calves lifetime events evaluation
 * @request GET:/dairies/{dairy_id}/calves/events/lifetime
 * @response `200` `CalfEvents` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
calfEventsLifetimeDairiesDairyIdCalvesEventsLifetimeGet = ({ dairyId, ...query }: CalfEventsLifetimeDairiesDairyIdCalvesEventsLifetimeGetParams, params: RequestParams = {}) =>
    this.request<CalfEvents, HTTPValidationError>({
        path: `/dairies/${dairyId}/calves/events/lifetime`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const calfEventsLifetimeDairiesDairyIdCalvesEventsLifetimeGet = (
  { dairyId, ...query }: CalfEventsLifetimeDairiesDairyIdCalvesEventsLifetimeGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, CalfEvents>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/calves/events/lifetime`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated calfEventsIncidenceDairiesDairyIdCalvesEventsIncidenceGet * @tags Events
 * @name CalfEventsIncidenceDairiesDairyIdCalvesEventsIncidenceGet
 * @summary Incidence of selected events for calves by number of calvings in selected period
 * @request GET:/dairies/{dairy_id}/calves/events/incidence
 * @response `200` `EventsIncidence` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
calfEventsIncidenceDairiesDairyIdCalvesEventsIncidenceGet = ({ dairyId, ...query }: CalfEventsIncidenceDairiesDairyIdCalvesEventsIncidenceGetParams, params: RequestParams = {}) =>
    this.request<EventsIncidence, HTTPValidationError>({
        path: `/dairies/${dairyId}/calves/events/incidence`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const calfEventsIncidenceDairiesDairyIdCalvesEventsIncidenceGet = (
  { dairyId, ...query }: CalfEventsIncidenceDairiesDairyIdCalvesEventsIncidenceGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, EventsIncidence>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/calves/events/incidence`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated calfEventsIncidenceCalendarDairiesDairyIdCalvesEventsIncidenceCalendarGet * @tags Events
 * @name CalfEventsIncidenceCalendarDairiesDairyIdCalvesEventsIncidenceCalendarGet
 * @summary Incidence of selected events for calves by number of calves at risk in selected period
 * @request GET:/dairies/{dairy_id}/calves/events/incidence/calendar
 * @response `200` `EventsIncidence` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
calfEventsIncidenceCalendarDairiesDairyIdCalvesEventsIncidenceCalendarGet = ({ dairyId, ...query }: CalfEventsIncidenceCalendarDairiesDairyIdCalvesEventsIncidenceCalendarGetParams, params: RequestParams = {}) =>
    this.request<EventsIncidence, HTTPValidationError>({
        path: `/dairies/${dairyId}/calves/events/incidence/calendar`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const calfEventsIncidenceCalendarDairiesDairyIdCalvesEventsIncidenceCalendarGet = (
  { dairyId, ...query }: CalfEventsIncidenceCalendarDairiesDairyIdCalvesEventsIncidenceCalendarGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, EventsIncidence>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/calves/events/incidence/calendar`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated calvingMortalityDairiesDairyIdCowsCalvingMortalityGet * @tags Events
 * @name CalvingMortalityDairiesDairyIdCowsCalvingMortalityGet
 * @summary Incidence of calving mortality trends in selected period
 * @request GET:/dairies/{dairy_id}/cows/calving-mortality
 * @response `200` `CalvingsMortality` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
calvingMortalityDairiesDairyIdCowsCalvingMortalityGet = ({ dairyId, ...query }: CalvingMortalityDairiesDairyIdCowsCalvingMortalityGetParams, params: RequestParams = {}) =>
    this.request<CalvingsMortality, HTTPValidationError>({
        path: `/dairies/${dairyId}/cows/calving-mortality`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const calvingMortalityDairiesDairyIdCowsCalvingMortalityGet = (
  { dairyId, ...query }: CalvingMortalityDairiesDairyIdCowsCalvingMortalityGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, CalvingsMortality>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/cows/calving-mortality`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated eventsBenchmarkDairiesDairyIdCowsEventsBenchmarkGet * @tags Events
 * @name EventsBenchmarkDairiesDairyIdCowsEventsBenchmarkGet
 * @summary Cows event benchmarking with option of doing for enterprise and calendar basis benchmarking
 * @request GET:/dairies/{dairy_id}/cows/events/benchmark
 * @response `200` `Benchmark` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
eventsBenchmarkDairiesDairyIdCowsEventsBenchmarkGet = ({ dairyId, ...query }: EventsBenchmarkDairiesDairyIdCowsEventsBenchmarkGetParams, params: RequestParams = {}) =>
    this.request<Benchmark, HTTPValidationError>({
        path: `/dairies/${dairyId}/cows/events/benchmark`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const eventsBenchmarkDairiesDairyIdCowsEventsBenchmarkGet = (
  { dairyId, ...query }: EventsBenchmarkDairiesDairyIdCowsEventsBenchmarkGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, Benchmark>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/cows/events/benchmark`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated calfEventsBenchmarkDairiesDairyIdCalvesEventsBenchmarkGet * @tags Events
 * @name CalfEventsBenchmarkDairiesDairyIdCalvesEventsBenchmarkGet
 * @summary Calves event benchmarking
 * @request GET:/dairies/{dairy_id}/calves/events/benchmark
 * @response `200` `Benchmark` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
calfEventsBenchmarkDairiesDairyIdCalvesEventsBenchmarkGet = ({ dairyId, ...query }: CalfEventsBenchmarkDairiesDairyIdCalvesEventsBenchmarkGetParams, params: RequestParams = {}) =>
    this.request<Benchmark, HTTPValidationError>({
        path: `/dairies/${dairyId}/calves/events/benchmark`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const calfEventsBenchmarkDairiesDairyIdCalvesEventsBenchmarkGet = (
  { dairyId, ...query }: CalfEventsBenchmarkDairiesDairyIdCalvesEventsBenchmarkGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, Benchmark>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/calves/events/benchmark`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated eventCountsDairiesDairyIdEventsCountsGet * @tags Events
 * @name EventCountsDairiesDairyIdEventsCountsGet
 * @summary Counts number of raw health events that has been entered in a dairy
 * @request GET:/dairies/{dairy_id}/events/counts
 * @response `200` `RawEventCounts` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
eventCountsDairiesDairyIdEventsCountsGet = ({ dairyId, ...query }: EventCountsDairiesDairyIdEventsCountsGetParams, params: RequestParams = {}) =>
    this.request<RawEventCounts, HTTPValidationError>({
        path: `/dairies/${dairyId}/events/counts`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const eventCountsDairiesDairyIdEventsCountsGet = (
  { dairyId, ...query }: EventCountsDairiesDairyIdEventsCountsGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, RawEventCounts>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/events/counts`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated dailyHealthKpisDairiesDairyIdDailyHealthKpisGet * @tags Events
 * @name DailyHealthKpisDairiesDairyIdDailyHealthKpisGet
 * @summary Creates a list of all the last calculated KPIs to be stored and published to KPIs SNS for reporting
 * @request GET:/dairies/{dairy_id}/daily-health-kpis
 * @response `200` `HealthKpis` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
dailyHealthKpisDairiesDairyIdDailyHealthKpisGet = ({ dairyId, ...query }: DailyHealthKpisDairiesDairyIdDailyHealthKpisGetParams, params: RequestParams = {}) =>
    this.request<HealthKpis, HTTPValidationError>({
        path: `/dairies/${dairyId}/daily-health-kpis`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const dailyHealthKpisDairiesDairyIdDailyHealthKpisGet = (
  { dairyId, ...query }: DailyHealthKpisDairiesDairyIdDailyHealthKpisGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, HealthKpis>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/daily-health-kpis`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
} /*
 *
 * No description
 *true
 * @author automated
 * @genereated healthEventKpisDairiesDairyIdEventsHealthKpisGet * @tags Events
 * @name HealthEventKpisDairiesDairyIdEventsHealthKpisGet
 * @summary Returns a list of changes in Health events occurrences and counts for the defined event codes for Health alerts
 * @request GET:/dairies/{dairy_id}/events/health-kpis
 * @response `200` `HealthKpis` Successful Response
 * @response `422` `HTTPValidationError` Validation Error
 */
/*
healthEventKpisDairiesDairyIdEventsHealthKpisGet = ({ dairyId, ...query }: HealthEventKpisDairiesDairyIdEventsHealthKpisGetParams, params: RequestParams = {}) =>
    this.request<HealthKpis, HTTPValidationError>({
        path: `/dairies/${dairyId}/events/health-kpis`,
        method: 'GET',
        query: query,                                format: "json",        ...params,
    })
*/

export const healthEventKpisDairiesDairyIdEventsHealthKpisGet = (
  { dairyId, ...query }: HealthEventKpisDairiesDairyIdEventsHealthKpisGetParams,
  params: RequestParams = {},
) => {
  /*
    return new AxiosRestClient<properInputType, HealthKpis>({
        baseUrl: DEFAULT_API_URL.toString(),
        resourcePath: `/dairies/${dairyId}/events/health-kpis`
    }).execute({
        method: 'GET',
        axiosInstance,
        headers: new Headers({
            authorization: `Bearer ${getItem(LOCAL_STORAGE_JWT)}`,
            }),
        timeout: 10000,
    });
    */
}
