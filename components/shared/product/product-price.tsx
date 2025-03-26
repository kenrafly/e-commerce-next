import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);
  //get the integer part
  const [integerPart, floatPart] = stringValue.split(".");
  return (
    <p className={cn("flex text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {integerPart}
      <span className="text-xs align-super">. {floatPart}</span>
    </p>
  );
};

export default ProductPrice;
