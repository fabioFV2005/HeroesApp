import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const HomePage = () => {
    const [activeTab, setActiveTab] = useState<"all" | "favorites" | "heroes" | "villains">("all");


    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Universo de superHeroes"
                    description="Descubre, explora y administra super heroes y villanos"
                />

                {/* Breadcrumbs */}

                <CustomBreadcrumbs
                />

                {/* Stats Dashboard */}

                <HeroStats />

                {/* Advanced Filters */}


                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            value="all"
                            onClick={() => setActiveTab("all")}
                        >
                            All Characters (16)</TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            onClick={() => setActiveTab('favorites')}
                        >
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger
                            value="heroes"
                            onClick={() => setActiveTab('heroes')}
                        >Heroes (12)</TabsTrigger>
                        <TabsTrigger
                            value="villains"
                            onClick={() => setActiveTab('villains')}
                        >Villains (2)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        {/* show all characters :D*/}
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* show favorite characters */}
                        <h1>Favoritos!!!</h1>
                        <HeroGrid />

                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* show hero characters */}
                        <h1>Heroes</h1>
                        <HeroGrid />

                    </TabsContent>
                    <TabsContent value="villains">
                        {/* show villain characters */}
                        <h1>Villains!!!</h1>
                        <HeroGrid />

                    </TabsContent>
                </Tabs>



                {/* Pagination */}
                <CustomPagination
                    totalPages={8}
                />

            </>
        </>
    )
}