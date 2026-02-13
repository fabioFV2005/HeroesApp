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
interface Breadcrumb {
    label: string;
    to: string;
}
interface BreadCrumbProps {
    url?: string;
    breadcrumbs?: Breadcrumb[];
}
export const CustomBreadcrumbs: FC<BreadCrumbProps> = ({ url, breadcrumbs = [] }) => {

    return (
        <Breadcrumb className='my-5'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbPage >

                        <Link

                            to="/">Home</Link>
                    </BreadcrumbPage>
                </BreadcrumbItem>
                {url && breadcrumbs.length === 0 && (
                    <BreadcrumbSeparator>
                        <DotIcon />
                    </BreadcrumbSeparator>
                )}
                {
                    breadcrumbs.map(crumb => (
                        <div className='flex items-center'>
                            <BreadcrumbSeparator>
                                <DotIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage >

                                    <Link
                                        to={crumb.to}>{crumb.label}</Link>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </div>

                    ))
                }

                {url && (
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <BreadcrumbLink className='text-black font-bold'>{url}</BreadcrumbLink>
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