import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [activeTab, setActiveTab] = useState<"all" | "favorites" | "heroes" | "villains">("all");
    const activeTab = searchParams.get('tab') as string;
    const { data: heroesResponse, isLoading } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(),
        staleTime: 1000 * 60 * 5
    })


    if (isLoading) {
        return <div className="flex items-center justify-center">Loading...</div>
    }
    // console.log(heroesResponse)
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
                    url="SuperHeroes"
                />

                {/* Stats Dashboard */}

                <HeroStats />

                {/* Advanced Filters */}


                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            value="all"
                            onClick={() => setSearchParams({ tab: 'all' })}

                        >
                            All Characters (16)</TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            onClick={() => setSearchParams({ tab: 'favorites' })}
                        >
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger
                            value="heroes"
                            onClick={() => setSearchParams({ tab: 'heroes' })}
                        // onClick={() => setActiveTab('heroes')}
                        >Heroes (12)</TabsTrigger>
                        <TabsTrigger
                            value="villains"
                            onClick={() => setSearchParams({ tab: 'villains' })}
                        >Villains (2)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        {/* show all characters :D*/}
                        <HeroGrid
                            heroes={heroesResponse?.heroes ?? []}
                        />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* show favorite characters */}
                        <h1>Favoritos!!!</h1>
                        <HeroGrid
                            heroes={[]}
                        />

                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* show hero characters */}
                        <h1>Heroes</h1>
                        <HeroGrid
                            heroes={[]}

                        />

                    </TabsContent>
                    <TabsContent value="villains">
                        {/* show villain characters */}
                        <h1>Villains!!!</h1>
                        <HeroGrid
                            heroes={[]}
                        />

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