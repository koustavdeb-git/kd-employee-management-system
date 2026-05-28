import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';

function DepartmentChart({ data }) {

  const colors = [
    "#68C4E8",
    "#A0DFF2",
    "#76E3B9",
    "#A9EB98",
    "#7DFF8E",
    "#26FFD4",
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Employees by Department
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Department-wise employee distribution
          </p>
        </div>
      </div>

      <div className="h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 10,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              horizontal={true}
              vertical={false}
            />

            <XAxis
              type="number"
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="department"
              width={140}
              tick={{
                fill: "#334155",
                fontSize: 13,
                fontWeight: 500,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ fill: "rgba(148, 163, 184, 0.1)" }}
              contentStyle={{
                borderRadius: "14px",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            />

            <Bar
              dataKey="employees"
              radius={[0, 12, 12, 0]}
              barSize={28}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DepartmentChart;