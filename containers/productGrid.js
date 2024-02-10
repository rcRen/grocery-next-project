import Card from "../components/card";

const ProductGrid = ({ data }) => {

    return (
        <div className={`grid grid-cols-1 gap-y-6 justify-items-center md:grid-cols-2 lg:grid-cols-4`}>
            {data?.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>

    )
}
export default ProductGrid;