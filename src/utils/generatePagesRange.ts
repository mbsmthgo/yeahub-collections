export const DOTS = '...'
export type PageItem = number | typeof DOTS

const range = (start: number, end: number): number[] => {
    return Array.from({length: end - start + 1}, (_, i) => start + i)
}

export const generatePagesRange = (totalPages: number, currentPage: number, siblingCount = 1): PageItem[] => {
    if (totalPages <= 7) {
        return range(1, totalPages)
    }
    const leftSibling = Math.max(currentPage - siblingCount, 1)
    const rightSibling = Math.min(currentPage + siblingCount, totalPages)
    const leftDots = leftSibling > 3
    const rightDots = rightSibling < totalPages - 2
    if (!leftDots && rightDots) {
        return [...range(1, 5), DOTS, totalPages]
    }
    if (leftDots && !rightDots) {
        return [1, DOTS, ...range(totalPages - 4, totalPages)]
    }
    if (leftDots && rightDots) {
        return [1, DOTS, ...range(leftSibling, rightSibling), DOTS, totalPages]
    }
    return []
}