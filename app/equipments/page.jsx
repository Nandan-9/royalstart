import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Equipments | Royal Star Crusher LLC",
  description: "View all equipment owned and operated by Royal Star Crusher LLC.",
};

const equipments = [
  { name: "Caterpillar Excavator 350", count: "1 Nos", status: "Working" },
  { name: "Caterpillar Excavator 345", count: "1 Nos", status: "Working" },
  { name: "Caterpillar Wheel Loader 988B", count: "1 Nos", status: "Working" },
  { name: "Komasthu Wheel Loader WA470", count: "1 Nos", status: "Working" },
  { name: "Komasthu Bull Dozer A.3 355", count: "1 Nos", status: "Working" },
  { name: "Komasthu Dumber HD325", count: "3 Nos", status: "Working" },
  { name: "Man Truck 12 T", count: "1 Nos", status: "Working" },
  { name: "Mercedes Benz Water Tanker", count: "1 Nos", status: "Working" },
  { name: "Dump Truck Komastu", count: "2 Nos", status: "Working" },
  { name: "Bob CAT 130", count: "1 Nos", status: "Working" },
  { name: "Water Tanker 5000 Gallon Mercedes Benz", count: "1 Nos", status: "Working" },
  { name: "Wheel Loader CAT 988", count: "1 Nos", status: "Working" },
  { name: "MAN Truck", count: "1 Nos", status: "Working" },
  { name: "Sand Washing Plant 200 TPH", count: "1 Nos", status: "Working" },
  { name: "JAW Crusher 400 TPH", count: "1 Nos", status: "Working" },
  { name: "300 HP Cone Crusher Cedrapids", count: "2 Nos", status: "Working" },
  { name: "Screen 5x15 3 Deck Cedrapids", count: "2 Nos", status: "Working" },
  { name: "Screen 5x15 3 Deck", count: "2 Nos", status: "Working" },
  { name: "150 HP Cone Crusher", count: "1 Nos", status: "Working" },
  { name: "Conveys Telsmith", count: "30 Nos", status: "Working" },
  { name: "BS9100 Metso VSI 600 HP", count: "1 Nos", status: "Working" },
  { name: "300 HO ABB VFD", count: "5 Nos", status: "Working" },
  { name: "40 HP ABB VFD", count: "2 Nos", status: "Working" },
  { name: "30 HP ABB VFD", count: "1 Nos", status: "Working" },
  { name: "10 HP ABB VFD", count: "4 Nos", status: "Working" },
  { name: "400 A Welding Machine", count: "1 Nos", status: "Working" },
  { name: "10 HP Air Compressor", count: "1 Nos", status: "Working" },
  { name: "500 KVA X4 DG Syncronising Panel", count: "1 Nos", status: "Working" },
  { name: "1500 KVA Generator", count: "1 Nos", status: "Under Maintenance" },
  { name: "Wheel Loader Komastu", count: "2 Nos", status: "Working" },
  { name: "Dump Truck Komastu", count: "3 Nos", status: "Working" },
  { name: "Dumper HD325", count: "1 Nos", status: "To be added" },
];

const statusColor = (status) => {
  if (status === "Working") return "text-green-600";
  if (status === "Under Maintenance") return "text-yellow-600";
  return "text-gray-500";
};

export default function EquipmentPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb="Equipments"
        title="Our Equipments"
      />

      <section className="py-16">
        <div className="auto-container">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="text-left px-4 py-3 font-semibold">#</th>
                  <th className="text-left px-4 py-3 font-semibold">Equipment Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Number of Equipment</th>
                  <th className="text-left px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {equipments.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-gray-500">{index + 1}</td>
                    <td className="px-4 py-3 text-gray-800">{item.name}</td>
                    <td className="px-4 py-3 text-gray-700">{item.count}</td>
                    <td className={`px-4 py-3 font-medium ${statusColor(item.status)}`}>
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
