import { Link } from 'react-router'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DotIcon } from "lucide-react"
import type { FC } from 'react';
interface BreadCrumbProps {
    url?: string;
}
export const CustomBreadcrumbs: FC<BreadCrumbProps> = ({ url }) => {

    return (
        <Breadcrumb className='my-5'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbPage >

                        <Link

                            to="/">Home</Link>
                    </BreadcrumbPage>
                </BreadcrumbItem>
                {url && (
                    <BreadcrumbSeparator>
                        <DotIcon />
                    </BreadcrumbSeparator>
                )}
                {url && (
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <BreadcrumbLink className='text-black'>{url}</BreadcrumbLink>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                )}

            </BreadcrumbList>
        </Breadcrumb>
    )
}
//  <BreadcrumbSeparator>
//                     <DotIcon />
//                 </BreadcrumbSeparator>
//                 <BreadcrumbItem>
//                     <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
//                 </BreadcrumbItem>