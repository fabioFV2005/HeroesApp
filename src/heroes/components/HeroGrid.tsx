import type { FC } from "react"
import type { Hero } from "../types/Hero.interface"
import { HeroCard } from "./HeroCard"
interface HeroGridProps {
    heroes: Hero[]
}
export const HeroGrid: FC<HeroGridProps> = ({ heroes }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                    />
                )
                )
            }


        </div>
    )
}
