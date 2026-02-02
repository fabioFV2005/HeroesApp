import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { FC, PropsWithChildren } from "react"
interface Props extends PropsWithChildren {
    title: string;
    icon: React.ReactNode;
}
export const HeroStatCard: FC<Props> = ({ title, icon, children }) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}
