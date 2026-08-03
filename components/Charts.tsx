"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";



type ChartData = {
  name: string;
  value: number;
};



const COLORS = [
  "#38bdf8",
  "#0ea5e9",
  "#7dd3fc",
  "#bae6fd",
];



export default function Charts({

  data,

}: {

  data: ChartData[];

}) {



return (


<div
className="
space-y-8
"
>



{/* Area Chart */}


<div

className="
h-[320px]
w-full
rounded-3xl
bg-sky-50/40
dark:bg-zinc-800/40
p-4
"

>


<h3
className="
mb-4
font-semibold
text-gray-700
dark:text-gray-200
"
>
Growth Overview
</h3>


<ResponsiveContainer
width="100%"
height="90%"
>


<AreaChart
data={data}
>


<defs>

<linearGradient
id="iceGradient"
x1="0"
y1="0"
x2="0"
y2="1"
>

<stop
offset="0%"
stopColor="#38bdf8"
stopOpacity={0.5}
/>

<stop
offset="100%"
stopColor="#38bdf8"
stopOpacity={0.05}
/>

</linearGradient>

</defs>



<CartesianGrid
strokeDasharray="3 3"
opacity={0.2}
/>



<XAxis
dataKey="name"
/>


<YAxis
allowDecimals={false}
/>



<Tooltip

contentStyle={{

borderRadius:"16px",

border:"1px solid #bae6fd",

background:"rgba(255,255,255,0.9)"

}}

/>



<Area

type="monotone"

dataKey="value"

stroke="#0ea5e9"

fill="url(#iceGradient)"

strokeWidth={3}

animationDuration={900}

/>



</AreaChart>


</ResponsiveContainer>



</div>



{/* Bottom charts */}



<div

className="
grid
grid-cols-1
lg:grid-cols-2
gap-8
"

>

{/* Bar Chart */}


<div

className="
h-[320px]
rounded-3xl
bg-sky-50/40
dark:bg-zinc-800/40
p-4
"

>


<h3

className="
mb-4
font-semibold
text-gray-700
dark:text-gray-200
"

>

Categories

</h3>




<ResponsiveContainer
width="100%"
height="90%"
>


<BarChart
data={data}
>


<CartesianGrid
strokeDasharray="3 3"
opacity={0.2}
/>


<XAxis
dataKey="name"
/>


<YAxis
allowDecimals={false}
/>



<Tooltip

contentStyle={{

borderRadius:"16px",

border:"1px solid #bae6fd"

}}

/>



<Bar

dataKey="value"

fill="#38bdf8"

radius={[
10,
10,
0,
0
]}

animationDuration={900}

/>



</BarChart>


</ResponsiveContainer>



</div>

{/* Pie Chart */}



<div

className="
h-[320px]
rounded-3xl
bg-sky-50/40
dark:bg-zinc-800/40
p-4
"

>


<h3

className="
mb-4
font-semibold
text-gray-700
dark:text-gray-200
"

>

Distribution

</h3>





<ResponsiveContainer
width="100%"
height="90%"
>


<PieChart>


<Pie

data={data}

dataKey="value"

nameKey="name"

cx="50%"

cy="50%"

outerRadius={100}

innerRadius={55}

paddingAngle={5}

animationDuration={900}

>


{

data.map((_,index)=>(


<Cell

key={index}

fill={COLORS[index % COLORS.length]}

/>


))

}



</Pie>


<Tooltip

contentStyle={{

borderRadius:"16px",

border:"1px solid #bae6fd"

}}

/>



<Legend />



</PieChart>


</ResponsiveContainer>

</div>

</div>




</div>


);


}