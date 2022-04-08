import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BACKEND_URL = 'http://localhost:3000/'

export interface SerializedError {
    error?: string,
}

interface ExampleObject {
    id: string,
    name: string,
}

// Define a service using a base URL and expected endpoints
export const exampleApi = createApi({
    reducerPath: 'exampleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACKEND_URL}/api/example`,
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        getExampleByID: builder.query<ExampleObject, string>({
            query: (example_id) => `/${example_id}`,
        }),
    }),
})

// Plural
export const examplesApi = createApi({
    reducerPath: 'examplesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACKEND_URL}/api/examples`,
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        getExamples: builder.query<ExampleObject[], void>({
            query: () => `/`,
        }),
    }),
})

export const useGetExampleByIDQuery = exampleApi.endpoints.getExampleByID.useQuery
export const useGetExamplesQuery = examplesApi.endpoints.getExamples.useQuery