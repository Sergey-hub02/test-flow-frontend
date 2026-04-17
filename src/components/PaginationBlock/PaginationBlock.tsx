import { Pagination } from "react-bootstrap"

type PaginationBlockProps = {
    current: number,
    total: number,
    siblingCount: number,
    onPageChange: (page: number) => void,
}

const PaginationBlock = ({ current, total, siblingCount, onPageChange }: PaginationBlockProps) => {
    if (total <= 1) {
        return null
    }

    const getPageNumbers = () => {
        const totalPageNumbers = 2 * total + 5

        if (total <= totalPageNumbers) {
            return Array.from({ length: total }, (_, i) => i + 1)
        }

        const leftSiblingIndex = Math.max(current - siblingCount, 1)
        const rightSiblingIndex = Math.min(current + siblingCount, total)

        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < total - 1

        if (!showLeftDots && showRightDots) {
            const leftRange = Array.from({ length: 3 + siblingCount * 2 }, (_, i) => i + 1);
            return [...leftRange, '...', total];
        }

        if (showLeftDots && !showRightDots) {
            const rightRange = Array.from({ length: 3 + siblingCount * 2 }, (_, i) => total - i).reverse();
            return [1, '...', ...rightRange];
        }

        const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);

        return [1, '...', ...middleRange, '...', total];
    }

    const pages = getPageNumbers()

    return (
        <Pagination>
            <Pagination.Prev
                disabled={current === 1}
                onClick={() => onPageChange(current - 1)}
            />

            {pages.map((page, index) => (
                page === '...' ? (
                    <Pagination.Ellipsis key={index} disabled />
                ) : (
                    <Pagination.Item
                        key={index}
                        active={current === page}
                        onClick={() => onPageChange(page as number)}
                    >{page}</Pagination.Item>
                )
            ))}

            <Pagination.Next
                disabled={current === total}
                onClick={() => onPageChange(current + 1)}
            />
        </Pagination>
    )
}

export default PaginationBlock
