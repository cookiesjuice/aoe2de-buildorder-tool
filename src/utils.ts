export function checkEqual(a: number, b: number): boolean {
    if(a === b) return true;
    const eps = 1e-12;
    return Math.abs(a - b) < Math.max(Math.abs(a), Math.abs(b)) * eps;
}

export function nop(): void {
    return;
}