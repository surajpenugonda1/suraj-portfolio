import Card from './Card';

function Projects() {
    const cardsData = Array.from({ length: 6 }).map((_, index) => ({
        title: `Project ${index + 1}`,
        description: `This is a description for project ${index + 1}.`,
        imageUrl: `https://www.placehold.co/300x200?text=Project+${index + 1}`
    }));

    return (
        <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                />
            ))}
        </section>
    );
}

export default Projects;