import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import type { FC } from "react";
import { useSearchParams } from "react-router";
interface CustomPaginationProps {
    totalPages: number;

}
export const CustomPagination: FC<CustomPaginationProps> = ({ totalPages }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const queryPage = searchParams.get('page') as string || '1';
    const page = isNaN(+queryPage) ? 1 : +queryPage;
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        searchParams.set('page', page.toString());
        setSearchParams(searchParams);

    }
    return (
        <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm" disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
                <ChevronLeft className="h-4 w-4" />
                Previous
            </Button>
            {
                // Generate page numbers => _ is unused variable because we only need the index
                Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                        onClick={() => handlePageChange(index + 1)}
                        key={index}
                        variant={
                            page === index + 1 ? "default" : "outline"
                        } size="sm">
                        {index + 1}
                    </Button>
                ))
            }
            <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}>
                Next
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
