import { cn } from "@/lib/utils";
import React from 'react';
import { Link } from 'react-router-dom';

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    link?: string;
    bgImage?: string;
}

interface BentoGridProps {
    items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {items.map((item, index) => {
                const isTwoCol = item.colSpan === 2;
                
                const cardContent = (
                    <>
                        {/* Background grid pattern */}
                        <div
                            className={`absolute inset-0 ${
                                item.hasPersistentHover
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-500 z-10 pointer-events-none`}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:16px_16px]" />
                        </div>

                        {/* Optional background image */}
                        {item.bgImage && (
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={item.bgImage}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
                            </div>
                        )}

                        <div className="relative flex flex-col justify-between h-full space-y-4 z-20 min-h-[220px]">
                            <div className="flex items-center justify-between">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-accent group-hover:text-black transition-all duration-500 text-accent">
                                    {item.icon}
                                </div>
                                {item.status && (
                                    <span
                                        className={cn(
                                            "text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md",
                                            "bg-white/5 border border-white/10 text-accent/80",
                                            "transition-colors duration-300 group-hover:bg-accent group-hover:text-black group-hover:border-accent"
                                        )}
                                    >
                                        {item.status}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-2 flex-grow flex flex-col justify-end">
                                <h3 className="font-serif font-bold text-xl md:text-2xl text-white group-hover:text-accent transition-colors tracking-tight">
                                    {item.title}
                                    {item.meta && (
                                        <span className="ml-2 font-sans font-normal text-xs text-white/40 tracking-wider not-italic uppercase">
                                            ({item.meta})
                                        </span>
                                    )}
                                </h3>
                                <p className="text-sm text-secondary leading-relaxed font-light line-clamp-2 md:line-clamp-3">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex items-center flex-wrap gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-secondary">
                                    {item.tags?.slice(0, 3).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-white/50 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1">
                                    {item.cta || "Кейс →"}
                                </span>
                            </div>
                        </div>

                        {/* Border gradient effect */}
                        <div
                            className={`absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-white/10 to-transparent ${
                                item.hasPersistentHover
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-500`}
                        />
                    </>
                );

                const baseClasses = cn(
                    "group relative p-6 rounded-2xl overflow-hidden transition-all duration-500 block text-left",
                    "border border-white/10 bg-surface/40 backdrop-blur-sm",
                    "hover:border-white/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.5)]",
                    "hover:-translate-y-1 will-change-transform",
                    isTwoCol ? "md:col-span-2" : "col-span-1",
                    item.hasPersistentHover && "border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.3)] -translate-y-1"
                );

                if (item.link) {
                    return (
                        <Link key={index} to={item.link} className={baseClasses}>
                            {cardContent}
                        </Link>
                    );
                }

                return (
                    <div key={index} className={baseClasses}>
                        {cardContent}
                    </div>
                );
            })}
        </div>
    );
}
