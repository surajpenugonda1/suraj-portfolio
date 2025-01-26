function About() {
    return (
        <>
            {/* First Section with Two Columns */}
            <section className="flex justify-between">
                <div className="flex-1 p-4">
                    <h2 className="text-lg font-bold">Column 1</h2>
                    <p>Content for the first column.</p>
                </div>
                <div className="flex-1 p-4">
                    <h2 className="text-lg font-bold">Column 2</h2>
                    <p>Content for the second column.</p>
                </div>
            </section>

            {/* Second Section with 14 Images */}
            <section className="flex flex-wrap gap-2 mt-5">
                {Array.from({ length: 14 }).map((_, index) => (
                    <img
                        key={index}
                        src={`https://www.placehold.co/150?text=Image+${index + 1}`}
                        alt={`Image ${index + 1}`}
                        className="w-24 h-24 border border-black"
                    />
                ))}
            </section>

            {/* Third Section with Headings and Images */}
            <section className="mt-5">
                <h2 className="text-lg font-bold mb-4">Third Section</h2>
                <p className="mb-4">This section contains headings and some images.</p>
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <img
                            key={index}
                            src={`https://www.placehold.co/150?text=Image+${index + 15}`}
                            alt={`Image ${index + 15}`}
                            className="w-24 h-24 border border-black"
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default About