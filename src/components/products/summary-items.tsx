type SummaryItemProps = {
  label: string;
  value: string;
  isTotal?: boolean; // Ajout d'une prop pour gérer l'affichage du total
};

export const SummaryItem = ({
  label,
  value,
  isTotal = false,
}: SummaryItemProps) => {
  return (
    <div
      className={`flex justify-between ${
        isTotal
          ? "items-center text-sm font-semibold"
          : "text-dark-gray text-sm font-medium mb-1"
      }`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};
