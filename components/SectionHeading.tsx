export default function SectionHeading({ text }: { text: string }) {
    return (
        <h2 className="text-center text-3xl font-medium capitalize mb-8">
            {text}
        </h2>
    );
}
