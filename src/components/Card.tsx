interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

function Card({ title, description, imageUrl }: CardProps) {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">{title}</h3>
            <p className="mt-2">{description}</p>
            <div className="flex justify-center mt-4">
                <button className="bg-purple-600 text-white px-4 py-2 rounded mr-2">GitHub</button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded">Demo</button>
            </div>
        </div>
    );
}

export default Card; 