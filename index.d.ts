export function build(args: {data?: string, debug?: string, help?: string, ignore?: string, output?: string, query?: string}, callback?: (error: Error, res: string) => void): void
export function check(args: {format?: string, help?: string, ignore?: string, 'max-errors': string, query?: string}, callback?: (error: Error, res: string) => void): void
export function deps(args: {data?: string, format?: string, help?: string, ignore?: string, query?: string}, callback?: (error: Error, res: string) => void): void
export function evalQuery(args: {coverage?: string, data?: string, explain?: string, fail?: string, format?: string, help?: string, ignore?: string, import?: string, input?: string, metrics?: string, package?: string, partial?: string, 'pretty-limit'?: string, profile?: string, 'profile-limit'?: string, 'profile-sort'?: string, stdin?: string, 'stdin-input'?: string, unknown?: string, query?: string}, callback?: (error: Error, res: string) => void): void
export function evalQueryBoolean(args: {coverage?: string, data?: string, explain?: string, fail?: string, format?: string, help?: string, ignore?: string, import?: string, input?: string, metrics?: string, package?: string, partial?: string, 'pretty-limit'?: string, profile?: string, 'profile-limit'?: string, 'profile-sort'?: string, stdin?: string, 'stdin-input'?: string, unknown?: string, query?: string}, callback?: (error: Error, res: string) => void): void
export function fmt(args: {diff?: string, help?: string, list?: string, write?: string, query?: string}, callback?: (error: Error, res: string) => void): void
export function help(callback?: (error: Error, res: string) => void): void
export function parse(args: {format?: string, help?: string, query?: string}, callback?: (error: Error, res: string) => void): void
export function testRego(args: {coverage?: string, format?: string, help?: string, ignore?: string, 'max-errors'?: string, 'show-failure'?: string, threshold?: string, timeout?: string, verbose?: string, query?: string}, callback?: (error: Error, res: string) => void): void
export function version(callback?: (error: Error, res: string) => void): void
