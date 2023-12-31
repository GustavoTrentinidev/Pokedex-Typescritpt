export interface PageResponse {
    count: number,
    next: string,
    previous: string,
    results: Array<{name: string, url: string}>
}
