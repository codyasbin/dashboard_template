"use client";


import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  SpringProvider,
  Spring,
  SpringElement,
} from "@/components/animate-ui/primitives/animate/spring";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { HexagonBackground } from '@/components/animate-ui/components/backgrounds/hexagon';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",  
  },
};

export default function PageOne() {
  return (
    <>
    <div>
  <HexagonBackground className="absolute  inset-0 flex items-center justify-center rounded-xl" />
    </div>
      <SpringProvider>
        <Spring />
        <SpringElement>
          <Card>
            <CardHeader className="items-center pb-4">
              <CardTitle>Radar Chart</CardTitle>
              <CardDescription>
                Showing total visitors for the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                {/* <SpringElement> */}
                <RadarChart data={chartData}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid />
                  <Radar
                    dataKey="desktop"
                    fill="var(--chart-1)"
                    fillOpacity={0.6}
                  />
                </RadarChart>
                {/* </SpringElement> */}
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 leading-none font-medium">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground flex items-center gap-2 leading-none">
                January - June 2024
              </div>
            </CardFooter>
          </Card>
        </SpringElement>
      </SpringProvider>
      <SpringProvider>
        <Spring />
        <SpringElement>
          <p className="text-center w-full text-shadow-amber-700 inset-shadow-emerald-300 border-0 bg-red-500    text-3xl font-bold">
            Sanjeet
          </p>
        </SpringElement>
      </SpringProvider>
      
      <section className="mt-5">
        <Alert className="bg-red-700">
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            This is a radar chart example using Recharts library integrated with
            custom UI components.
          </AlertDescription>
        </Alert>
      </section>
    </>
  );
}
