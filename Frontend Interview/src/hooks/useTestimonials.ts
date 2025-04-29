import { useState, useEffect } from "react";

interface Testimonial {
    id: number;
    name: string;
    body: string;
}

const useTestimonials = (count: number) => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((data: any[]) => {
                const shuffled = [...data].sort(() => 0.5 - Math.random());
                const simplifiedTestimonials = shuffled.slice(0, count).map(item => ({
                    id: item.id,
                    name: item.name,
                    body: item.body
                }));
                setTestimonials(simplifiedTestimonials);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching testimonials:", error);
                setLoading(false);
            });
    }, []);

    return { testimonials, loading };
};

export default useTestimonials;